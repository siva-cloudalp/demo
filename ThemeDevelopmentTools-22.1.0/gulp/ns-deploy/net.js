/* jshint node: true */
/* jshint esversion: 8 */

const request = require('ns-request');
const { log, color, colorText } = require('ns-logs');
const through = require('through2');
const Progress = require('ns-progress-bar');
const path = require('path');
const fs = require('fs');
const url = require('url');
const args = require('ns-args').argv();
const Uploader = require('ns-uploader');
const inquirer = require('inquirer');
const { OAuth1 } = require('oauth1');
const package_manager = require('../package-manager');

if (args.proxy) {
    request.defaults({ proxy: args.proxy });
}
const oauth1 = new OAuth1({ molecule: args.m, vm: args.vm, key: args.key, secret: args.secret, account: args.account });
async function getAuthorizationHeader(requestConfig, authID) {
    const autHeader = await oauth1.restAuthorize(authID, requestConfig);
    return autHeader;
}

const net_module = {
    getConfigurationForDomain: async function(deploy, cb) {
        const requestUrl = url.format({
            protocol: 'https',
            hostname: deploy.info.hostname,
            pathname: '/app/site/hosting/restlet.nl',
            query: {
                script: deploy.info.script,
                deploy: deploy.info.deploy,
                t: Date.now(),
                get: 'domain-configuration',
                website: deploy.info.website,
                domain: deploy.info.domain,
                folderId: deploy.info.target_folder
            }
        });

        const headerAuthorization = await getAuthorizationHeader(
            { method: 'GET', url: requestUrl },
            deploy.info.authID
        );

        request
            .get(requestUrl, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: headerAuthorization,
                    'User-Agent': deploy.info.user_agent
                },
                rejectUnauthorized: false
            })
            .then(responseStr => {
                try {
                    const response = JSON.parse(responseStr);

                    if (response.error) {
                        if (typeof response.error !== 'object') {
                            response.error = JSON.parse(response.error);
                        }
                        console.log(
                            'Error',
                            response.error.code,
                            response.error.message ? response.error.message : response.error.details
                        );
                        cb(new Error(response.error.message));
                    } else if (!response.domainUnmanagedFolder) {
                        deploy.domainUnmanagedFolderConfigDontExists = true; // so then we know we need to save the folder in the config
                        inquirer
                            .prompt([
                                {
                                    type: 'input',
                                    name: 'domainUnmanagedFolder',
                                    message:
                                        'Please, give a name to the folder to deploy your files',
                                    default: `${deploy.info.domain}`.replace(/\./g, '_'),
                                    validate: function(input) {
                                        if (`${input}`.match(/^[\w\d_]+$/i)) {
                                            return true;
                                        }
                                        return 'Invalid folder name - can only contain ';
                                    }
                                }
                            ])
                            .then(function(answers) {
                                deploy.info.domainUnmanagedFolder = answers.domainUnmanagedFolder;
                                cb(null, deploy);
                            });

                        // TODO: save deploy.info.domainUnmanagedFolder in back in config record
                    } else {
                        deploy.info.domainUnmanagedFolder = response.domainUnmanagedFolder;
                        cb(null, deploy);
                    }
                } catch (e) {
                    cb(
                        new Error(
                            `Error parsing response:\n${responseStr} - ${JSON.stringify(e)} - ${
                                e.stack
                            }`
                        )
                    );
                }
            })
            .catch(err => {
                err.message = `Error in GET ${requestUrl}: ${err.message}`;
                cb(err);
            });
    },

    writeConfig: async function(deploy, cb) {
        if (!deploy.domainUnmanagedFolderConfigDontExists) {
            cb(null, deploy);
        } else {
            const requestUrl = url.format({
                protocol: 'https',
                hostname: deploy.info.hostname,
                pathname: '/app/site/hosting/restlet.nl',
                query: {
                    script: deploy.info.script,
                    deploy: deploy.info.deploy,
                    t: Date.now()
                }
            });

            const headerAuthorization = await getAuthorizationHeader(
                { method: 'PUT', url: requestUrl },
                deploy.info.authID
            );

            request
                .put(requestUrl, {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: headerAuthorization,
                        'User-Agent': deploy.info.user_agent
                    },
                    rejectUnauthorized: false,
                    body: JSON.stringify({
                        saveConfiguration: true,
                        unmanagedResourcesFolderName: deploy.info.domainUnmanagedFolder,
                        website: deploy.info.website,
                        domain: deploy.info.domain,
                        folderId: deploy.info.target_folder
                    })
                })
                .then(responseStr => {
                    try {
                        const response = JSON.parse(responseStr) || {};

                        if (response.error) {
                            console.log('Error', response.error.code, response.error.message);
                            cb(new Error(response.error.message));
                        } else {
                            cb(null, deploy);
                        }
                    } catch (e) {
                        const errorMsg = `Error parsing response:\n${responseStr} - ${JSON.stringify(
                            e
                        )} - ${e.stack}`;
                        cb(new Error(errorMsg));
                    }
                })
                .catch(err => {
                    err.message = `Error in GET ${requestUrl}: ${err.message}`;
                    cb(err);
                });
        }
    },

    getWebsitesAndDomains: async function(deploy, cb) {
        const requestUrl = url.format({
            protocol: 'https',
            hostname: deploy.info.hostname,
            pathname: '/app/site/hosting/restlet.nl',
            query: {
                script: deploy.info.script,
                deploy: deploy.info.deploy,
                t: Date.now(),
                get: 'list-websites'
            }
        });

        const headerAuthorization = await getAuthorizationHeader(
            { method: 'GET', url: requestUrl },
            deploy.info.authID
        );

        request.get(
            requestUrl,
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: headerAuthorization,
                    'User-Agent': deploy.info.user_agent
                },
                rejectUnauthorized: false
            }
                .then(responseStr => {
                    try {
                        const response = JSON.parse(responseStr);

                        if (response.error) {
                            console.log('Error', response.error.code, response.error.message);
                            cb(new Error(response.error.message));
                        } else {
                            deploy.websitesAndDomains = response;
                            cb(null, deploy);
                        }
                    } catch (e) {
                        cb(new Error(`Error parsing response:\n${responseStr}`));
                    }
                })
                .catch(err => {
                    err.message = `Error in GET ${requestUrl}: ${err.message}`;
                    cb(err);
                })
        );
    },

    rollback: async function(deploy, cb) {
        if (!deploy.rollback_revision) {
            cb(new Error('No backup selected'));
        } else {
            const requestUrl = url.format({
                protocol: 'https',
                hostname: deploy.info.hostname,
                pathname: '/app/site/hosting/restlet.nl',
                query: {
                    script: deploy.info.script,
                    deploy: deploy.info.deploy,
                    t: Date.now()
                }
            });

            const headerAuthorization = await getAuthorizationHeader(
                { method: 'PUT', url: requestUrl },
                deploy.info.authID
            );
            request
                .put(requestUrl, {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: headerAuthorization,
                        'User-Agent': deploy.info.user_agent
                    },
                    rejectUnauthorized: false,
                    body: JSON.stringify({ rollback_to: deploy.rollback_revision.file_id })
                })
                .then(() => {
                    cb(null, deploy);
                })
                .catch(err => {
                    cb(err);
                });
        }
    },

    getVersions: async function(deploy, cb) {
        if (deploy.revisions) {
            cb(null, deploy);
        } else {
            const requestUrl = url.format({
                protocol: 'https',
                hostname: deploy.info.hostname,
                pathname: '/app/site/hosting/restlet.nl',
                query: {
                    script: deploy.info.script,
                    deploy: deploy.info.deploy,
                    t: Date.now(),
                    get: 'revisions',
                    target_folder: deploy.info.target_folder
                }
            });

            const headerAuthorization = await getAuthorizationHeader(
                { method: 'GET', url: requestUrl },
                deploy.info.authID
            );

            request
                .get(requestUrl, {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: headerAuthorization,
                        'User-Agent': deploy.info.user_agent
                    },
                    rejectUnauthorized: false
                })
                .then(responseStr => {
                    const response = JSON.parse(responseStr);
                    if (response.error) {
                        cb(new Error(response.error.message));
                    } else {
                        deploy.revisions = response;
                        cb(null, deploy);
                    }
                })
                .catch(err => {
                    err.message = `Error in GET ${requestUrl}: ${err.message}`;
                    cb(err);
                });
        }
    },

    authorize: function(deploy, cb) {
        oauth1.issueToken(deploy.info.authID).then(({ account }) => {
            deploy.info.account = account;
            if (args.vm) {
                deploy.info.hostname = args.vm.replace(/https?:\/\//, '');
            } else {
                const molecule = args.m ? `${args.m}.` : '';
                deploy.info.hostname = `${account}.restlets.api.${molecule}netsuite.com`;
            }

            log(
                `Using token ${colorText(color.MAGENTA, deploy.info.authID)} - Account ${colorText(
                    color.MAGENTA,
                    account
                )}, run with --to to change it`
            );
            cb(null, deploy);
        });
    },

    targetFolder: async function(deploy, cb) {
        if (deploy.target_folders) {
            cb(null, deploy);
        } else {
            const requestUrl = url.format({
                protocol: 'https',
                hostname: deploy.info.hostname,
                pathname: '/app/site/hosting/restlet.nl',
                query: {
                    script: deploy.info.script,
                    deploy: deploy.info.deploy,
                    t: Date.now(),
                    get: 'target-folders'
                }
            });

            const authHeaders = await getAuthorizationHeader(
                { method: 'GET', url: requestUrl },
                deploy.info.authID
            );
            request
                .get(requestUrl, {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: authHeaders,
                        'User-Agent': deploy.info.user_agent
                    },
                    rejectUnauthorized: false
                })
                .then(responseStr => {
                    const invalid_scriptlet_id_msg = `Please make sure the selected account/molecule have the "${
                        deploy.options.distroName
                    }" bundle installed.`;
                    try {
                        const response = JSON.parse(responseStr);

                        if (response.error) {
                            if (response.error.code === 'SSS_INVALID_SCRIPTLET_ID') {
                                console.log(
                                    `Error: Deployment scriptlet not found, aborting. \n${invalid_scriptlet_id_msg}`
                                );
                                process.exit(1);
                            } else {
                                console.log('Error', response.error.code, response.error.message);
                                if (response.error.code === 'USER_ERROR') {
                                    console.log(
                                        'Please check you are pointing to the right molecule/datacenter using the -m argument.'
                                    );
                                }
                                cb(new Error(response.error.message));
                            }
                        } else {
                            deploy.target_folders = response;
                            cb(null, deploy);
                        }
                    } catch (e) {
                        cb(
                            new Error(
                                `Error parsing response:\n${responseStr}\n\n${invalid_scriptlet_id_msg}`
                            )
                        );
                    }
                })
                .catch(err => {
                    err.message = `Error in GET ${requestUrl}: ${err.message}`;
                    cb(err);
                });
        }
    },

    // @method ensureTargetFolder for sclite we only upload the contents of the
    // /tmp folder into the target site folder (info.target_folder). we need to:
    // 1) see if it exists
    // 2) if not, create it.
    // 3) assign info.target_folder to the target folder id.
    ensureTargetFolder: function(deploy, cb) {
        const { folderName, parentId } = deploy.info.target_folder;
        const uploader = net_module.getUploader(deploy);

        // we get or create the 'folderName' folder
        uploader
            .getFolderNamed(parentId, folderName)
            .then(async function(folder) {
                if (!folder) {
                    return uploader.mkdir(parentId, folderName);
                }
                return folder.$;
            })
            // we get or create the site/something folder
            .then(function(folderRef) {
                deploy.info.target_folder = folderRef.internalId;
                cb(null, deploy);
            })
            .catch(cb);
    },

    uploadBackup: function(deploy, cb) {
        net_module.uploader
            .mkdir(deploy.info.target_folder, 'backup')
            .then(function(recordRef) {
                const sourceFolderPath = path.join(
                    package_manager.distro.folders.deploy,
                    '_Sources'
                );
                if (!fs.existsSync(sourceFolderPath)) {
                    cb(null, deploy);
                    return;
                }

                net_module.uploader
                    .main({
                        targetFolderId: recordRef.internalId,
                        sourceFolderPath: sourceFolderPath
                    })
                    .then(function() {
                        cb(null, deploy);
                    })
                    .catch(function(err) {
                        console.log(err, err.stack);
                        cb(err);
                    });
            })
            .catch(function(err) {
                console.log(err, err.stack);
                cb(err);
            });
    },

    getUploader: function(deploy) {
        if (!net_module.uploader) {
            const credentials = {
                account: deploy.info.account,
                authID: deploy.info.authID,
                user_agent: deploy.info.user_agent || undefined,
                molecule: args.m || undefined,
                nsVersion: args.nsVersion || undefined,
                applicationId: args.applicationId || undefined,
                vm: args.vm || undefined,
                key: args.key,
                secret: args.secret
            };
            const uploader = new Uploader(credentials);
            net_module.uploader = uploader;
        }
        return net_module.uploader;
    },

    getManifest: function(deploy, cb) {
        const manifestName = '__ns-uploader-manifest__.json';

        const requestUrl = url.format({
            protocol: 'https',
            hostname: deploy.info.hostname,
            pathname: '/app/site/hosting/restlet.nl',
            query: {
                script: deploy.info.script,
                deploy: deploy.info.deploy,
                fileName: manifestName,
                targetFolder: deploy.info.target_folder,
                t: Date.now(),
                get: 'getFile'
            }
        });

        getAuthorizationHeader({ method: 'GET', url: requestUrl }, deploy.info.authID).then(
            function(authHeader) {
                request
                    .get(requestUrl, {
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: authHeader,
                            'User-Agent': deploy.info.user_agent
                        },
                        rejectUnauthorized: false
                    })
                    .then(responseStr => {
                        try {
                            deploy.uploadManifest = {
                                name: manifestName,
                                data: JSON.parse(responseStr)
                            };
                            cb(null, deploy);
                        } catch (e) {
                            cb(
                                new Error(
                                    `Error parsing response:\n${responseStr}\n\n` +
                                        `Please make sure that:\n` +
                                        `- You uploaded all files in RestLet folder to a location in your account.\n` +
                                        `- You have a restlet script pointing to sca_deployer.js with id customscript_sca_deployer and deployment with id customdeploy_sca_deployer\n` +
                                        `- You have set the get, post, put, delete methods to _get, _post, _put, _delete respectively in the script.\n` +
                                        `- You have added the Deployment.js and FileCabinet.js scripts to the script libraries.`
                                )
                            );
                        }
                    })
                    .catch(err => cb(new Error(`Response error: ${err}`), deploy));
            }
        );
    },

    postFiles: function(deploy, cb) {
        const t0 = new Date().getTime();
        const payload_path = path.join(process.gulp_init_cwd, 'payload.json');
        const { options } = deploy;

        fs.stat(payload_path, async function(err, stat) {
            if (err) {
                return cb(err);
            }

            const bar = new Progress(
                `Uploading Chunk ${options.chunksNumber}/${options.chunksTotal} [:bar] :percent`,
                {
                    complete: '=',
                    incomplete: ' ',
                    width: 50,
                    total: stat.size
                }
            );

            const requestUrl = url.format({
                protocol: 'https',
                hostname: deploy.info.hostname,
                pathname: '/app/site/hosting/restlet.nl',
                query: {
                    script: deploy.info.script,
                    deploy: deploy.info.deploy
                }
            });
            const authHeader = await getAuthorizationHeader(
                { method: 'POST', url: requestUrl },
                deploy.info.authID
            );

            const body = [];
            fs.createReadStream(payload_path)
                .pipe(
                    through(function(buff, type, cb2) {
                        bar.tick(buff.length);
                        this.push(buff);
                        return cb2();
                    })
                )
                .on('data', function(data) {
                    body.push(data);
                })
                .on('end', function() {
                    request
                        .post(requestUrl, {
                            body: Buffer.concat(body),
                            headers: {
                                'Content-Type': 'application/json',
                                Authorization: authHeader
                            },
                            rejectUnauthorized: false
                        })
                        .then(responseStr => {
                            try {
                                if (typeof process.stdout.clearLine === 'function') {
                                    process.stdout.clearLine();
                                }

                                if (typeof process.stdout.cursorTo === 'function') {
                                    process.stdout.cursorTo(0);
                                }

                                const result = JSON.parse(responseStr);
                                let took = `${(new Date().getTime() - t0) / 1000 / 60}`;

                                took = `${took.substring(0, Math.min(4, took.length))} minutes`;

                                deploy.result = result;
                                cb(null, deploy);
                            } catch (e) {
                                cb(
                                    new Error(
                                        `Error parsing response:\n${responseStr}\n\n` +
                                            `Please make sure that:\n` +
                                            `- You uploaded all files in RestLet folder to a location in your account.\n` +
                                            `- You have a restlet script pointing to sca_deployer.js with id customscript_sca_deployer and deployment with id customdeploy_sca_deployer\n` +
                                            `- You have set the get, post, put, delete methods to _get, _post, _put, _delete respectively in the script.\n` +
                                            `- You have added the Deployment.js and FileCabinet.js scripts to the script libraries.`
                                    )
                                );
                            }
                        })
                        .catch(err => cb(new Error(`Response error: ${err}`), deploy));
                });
        });
    }
};

module.exports = net_module;
