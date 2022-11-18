/* jshint node: true */
'use strict';

var request = require('request')
,	through = require('through2')
,	Progress = require('progress')
,	path = require('path')
,	Spinner = require('cli-spinner').Spinner
,	fs = require('fs')
,	url = require('url')
,	args = require('yargs').argv
,	package_manager = require('../package-manager')
,	Uploader = require('ns-uploader')
,	inquirer = require('inquirer')
,	log = require('ns-logs')
,	c = require('ansi-colors')
,   OAuth1 = require('oauth1').OAuth1;

if (args.proxy)
{
	request = request.defaults({'proxy': args.proxy});
}

const oauth1 = new OAuth1({ molecule: args.m, vm: args.vm, key: args.key, secret: args.secret });
async function getAuthorizationHeader(requestConfig, authID) {
    const autHeader = await oauth1.restAuthorize(authID, requestConfig);
    return autHeader;
}


var net_module = {

	getConfigurationForDomain: async function(deploy, cb)
	{
		var requestUrl = url.format({
			protocol: 'https'
		,	hostname: deploy.info.hostname
		,	pathname: '/app/site/hosting/restlet.nl'
		,	query: {
				script: deploy.info.script
			,	deploy: deploy.info.deploy
			,	t: Date.now()
			,	get: 'domain-configuration'
			,	website: deploy.info.website
			,	domain: deploy.info.domain
			,	folderId: deploy.info.target_folder
			}
		});

        const headerAuthorization = await getAuthorizationHeader({ method: 'GET', url: requestUrl }, deploy.info.authID);

		request.get(
			requestUrl
		,	{
				headers: {
					'Content-Type': 'application/json'
				,	'Authorization': headerAuthorization
				,   'User-Agent': deploy.info.user_agent
				}
			,	rejectUnauthorized: false
			}
		,	function(err, request, response_body)
			{
				if (err)
				{
					err.message = 'Error in GET ' + requestUrl + ': ' + err.message;
					cb(err);
				}

				else
				{
					try
					{
						var response = JSON.parse(response_body);

						if (response.error)
						{
							if(typeof response.error != "object")
							{
								response.error = JSON.parse(response.error);
							}
							console.log('Error', response.error.code, response.error.message ? response.error.message : response.error.details);
							cb(new Error(response.error.message));
						}
						else
						{
							if(!response.domainUnmanagedFolder)
							{
								deploy.domainUnmanagedFolderConfigDontExists = true; //so then we know we need to save the folder in the config
								inquirer.prompt([
									{
										type: 'input'
									,	name: 'domainUnmanagedFolder'
									,	message: 'Please, give a name to the folder to deploy your files'
									,	default: (deploy.info.domain+'').replace(/\./g, '_')
									,	validate: function(input)
										{
											if((input+'').match(/^[\w\d_]+$/i))
											{
												return true;
											}
											else
											{
												return 'Invalid folder name - can only contain ';
											}
										}
									}
								])
								.then(function(answers)
								{
									deploy.info.domainUnmanagedFolder = answers.domainUnmanagedFolder;
									cb(null, deploy);
								})

								//TODO: save deploy.info.domainUnmanagedFolder in back in config record
							}
							else
							{
								deploy.info.domainUnmanagedFolder = response.domainUnmanagedFolder;
								cb(null, deploy);
							}
						}
					}
					catch (e)
					{
						cb(new Error('Error parsing response:\n' + response_body + ' - ' + JSON.stringify(e) + ' - ' + e.stack));
					}
				}
			}
		);
	}


,	writeConfig: async function(deploy, cb)
	{
		if (!deploy.domainUnmanagedFolderConfigDontExists)
		{
			cb(null, deploy);
		}
		else
		{
			var requestUrl = url.format({
			protocol: 'https'
		,	hostname: deploy.info.hostname
		,	pathname: '/app/site/hosting/restlet.nl'
		,	query: {
				script: deploy.info.script
			,	deploy: deploy.info.deploy
			,	t: Date.now()
			}
		});

        const headerAuthorization = await getAuthorizationHeader({ method: 'GET', url: requestUrl }, deploy.info.authID);

		request.put(
			requestUrl
		,	{
				headers: {
					'Content-Type': 'application/json'
				,	'Authorization': headerAuthorization
				,   'User-Agent': deploy.info.user_agent
				}
			,	rejectUnauthorized: false
			,	body: JSON.stringify({
					saveConfiguration: true
				,	unmanagedResourcesFolderName: deploy.info.domainUnmanagedFolder
				,	website: deploy.info.website
				,	domain: deploy.info.domain
				,	folderId: deploy.info.target_folder
				})
			}
		,	function(err, request, response_body)
			{
				if (err)
				{
					err.message = 'Error in GET ' + requestUrl + ': ' + err.message;
					cb(err);
				}
				else
				{
					try
					{
						var response = JSON.parse(response_body) || {};

						if (response.error)
						{
							console.log('Error', response.error.code, response.error.message);
							cb(new Error(response.error.message));
						}
						else
						{
							cb(null, deploy);
						}
					}
					catch (e)
					{
						var errorMsg = 'Error parsing response:\n' + response_body + ' - ' + JSON.stringify(e) + ' - ' + e.stack;
						cb(new Error(errorMsg));
					}
				}
			}
		);
		}
	}

,	getWebsitesAndDomains: async function (deploy, cb)
	{
		var requestUrl = url.format({
			protocol: 'https'
		,	hostname: deploy.info.hostname
		,	pathname: '/app/site/hosting/restlet.nl'
		,	query: {
				script: deploy.info.script
			,	deploy: deploy.info.deploy
			,	t: Date.now()
			,	get: 'list-websites'
			}
		});

        const headerAuthorization = await getAuthorizationHeader({ method: 'GET', url: requestUrl }, deploy.info.authID);

		request.get(
			requestUrl
		,	{
				headers: {
					'Content-Type': 'application/json'
				,	'Authorization': headerAuthorization
				,   'User-Agent': deploy.info.user_agent
				}
			,	rejectUnauthorized: false
			}
		,	function(err, request, response_body)
			{
				if (err)
				{
					err.message = 'Error in GET ' + requestUrl + ': ' + err.message;
					cb(err);
				}

				else
				{
					try
					{
						var response = JSON.parse(response_body);

						if (response.error)
						{
							console.log('Error', response.error.code, response.error.message);
							cb(new Error(response.error.message));
						}
						else
						{
							deploy.websitesAndDomains = response;
							cb(null, deploy);
						}
					}
					catch (e)
					{
						cb(new Error('Error parsing response:\n' + response_body));
					}
				}
			}
		);
	}

,	rollback: async function(deploy, cb)
	{
		if (!deploy.rollback_revision)
		{
			cb(new Error('No backup selected'));
		}
		else
		{
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

            const headerAuthorization = await getAuthorizationHeader({ method: 'PUT', url: requestUrl }, deploy.info.authID);
			
			request.put(
				requestUrl
			,	{
					headers: {
						'Content-Type': 'application/json'
					,	'Authorization': headerAuthorization
					,   'User-Agent': deploy.info.user_agent
					}
				,	rejectUnauthorized: false
				,	body: JSON.stringify({ rollback_to: deploy.rollback_revision.file_id })
				}
			,	function()
				{
					cb(null, deploy);
				}
			);
		}
	}

,	getVersions: async function (deploy, cb)
	{
		if (deploy.revisions)
		{
			cb(null, deploy);
		}
		else
		{
			var requestUrl = url.format({
					protocol: 'https'
				,	hostname: deploy.info.hostname
				,	pathname: '/app/site/hosting/restlet.nl'
				,	query: {
						script: deploy.info.script
					,	deploy: deploy.info.deploy
					,	t: Date.now()
					,	get: 'revisions'
					,	target_folder: deploy.info.target_folder
					}
				});

			const headerAuthorization = await getAuthorizationHeader({ method: 'PUT', url: requestUrl }, deploy.info.authID);

			request.get(
				requestUrl
			,	{
					headers: {
						'Content-Type': 'application/json'
					,	'Authorization': headerAuthorization
					,   'User-Agent': deploy.info.user_agent
					}
				,	rejectUnauthorized: false
				}
			,	function(err, request, response_body)
				{
					if (err)
					{
						err.message = 'Error in GET ' + requestUrl + ': ' + err.message;
						cb(err);
					}
					else
					{
						var response = JSON.parse(response_body);
						if (response.error)
						{
							cb(new Error(response.error.message));
						}
						else
						{
							deploy.revisions = response;
							cb(null, deploy);
						}
					}
				}
			);
		}
	}

,   authorize: function(deploy, cb) {
        oauth1
            .issueToken(deploy.info.authID)
            .then(({ account }) => {
                deploy.info.account = account;
                if (args.vm) {
                    deploy.info.hostname = args.vm.replace(/https?:\/\//, '');
                } else {
                    const molecule = args.m ? `${args.m}.` : '';
                    deploy.info.hostname = `${account}.restlets.api.${molecule}netsuite.com`;
                }

                log(
                    `Using token ${c.magenta(deploy.info.authID)} - Account ${c.magenta(
                        account
                    )}, run with --to to change it`
                );
                cb(null, deploy);
            });
	}

,	targetFolder: async function (deploy, cb)
	{
		if (deploy.target_folders)
		{
			cb(null, deploy);
		}
		else
		{
			var requestUrl = url.format({
					protocol: 'https'
				,	hostname: deploy.info.hostname
				,	pathname: '/app/site/hosting/restlet.nl'
				,	query: {
						script: deploy.info.script
					,	deploy: deploy.info.deploy
					,	t: Date.now()
					,	get: 'target-folders'
					}
				});

			const headerAuthorization = await getAuthorizationHeader({ method: 'PUT', url: requestUrl }, deploy.info.authID);

			request.get(
				requestUrl
			,	{
					headers: {
						'Content-Type': 'application/json'
					,	'Authorization': headerAuthorization
					,   'User-Agent': deploy.info.user_agent
					}
				,	rejectUnauthorized: false
				}
			,	function(err, request, response_body)
				{
					if (err)
					{
						err.message = 'Error in GET ' + requestUrl + ': ' + err.message;
						cb(err);
					}

					else
					{
						var invalid_scriptlet_id_msg = 'Please make sure the selected account/molecule have the "' + deploy.options.distroName + '" bundle installed.';
						try
						{
							var response = JSON.parse(response_body);

							if (response.error)
							{
								if (response.error.code === 'SSS_INVALID_SCRIPTLET_ID')
								{
									console.log('Error: Deployment scriptlet not found, aborting. \n' +
										invalid_scriptlet_id_msg);
									process.exit(1);
								}
								else
								{
									console.log('Error', response.error.code, response.error.message);
									if(response.error.code==='USER_ERROR')
									{
										console.log('Please check you are pointing to the right molecule/datacenter using the -m argument.');
									}
									cb(new Error(response.error.message));
								}
							}
							else
							{
								deploy.target_folders = response;
								cb(null, deploy);
							}
						}
						catch (e)
						{
							cb(new Error('Error parsing response:\n' +
								response_body + '\n\n' + invalid_scriptlet_id_msg ));
						}
					}
				}
			);
		}
	}

,	postFiles: function(deploy, cb)
	{
		net_module.ensureTargetFolder(deploy, function(error)
		{
			if(error)
			{
				cb(error);
			}
			if (args.useOldDeploy)
			{
				net_module._postFilesOld(deploy, function(){cb(null, deploy); /*cb.apply(null, arguments);*/});
			}
			else
			{
				net_module._postFilesNew(deploy, function(){cb(null, deploy); /* cb.apply(null, arguments);*/});
			}
		});
	}

	// @method ensureTargetFolder for sclite we only upload the contents of the /tmp folder into the target site folder (info.target_folder). we need to:
	// 1) see if it exists 2) if not, create it. 3) assign info.target_folder to the target folder id.
,	ensureTargetFolder: function(deploy, cb)
	{
		if(!package_manager.distro.isSCLite)
		{
			cb(null, deploy);
			return;
		}
		var Q = require('q');
		var uploader = net_module.getUploader(deploy);
		var siteFolderInternalId;

		// we get or create the 'site' folder
		uploader.getFolderNamed(deploy.info.target_folder, 'site')
		.then(function(siteFolder)
		{
			var deferred = Q.defer();
			if(!siteFolder)
			{
				deferred.resolve(uploader.mkdir(deploy.info.target_folder, 'site'));
			}
			else
			{
				deferred.resolve(siteFolder.$);
			}
			return deferred.promise;
		})
		//we get or create the site/something folder
		.then(function(siteFolderRef)
		{
			siteFolderInternalId = siteFolderRef.internalId;
			return uploader.getFolderNamed(siteFolderInternalId, deploy.info.domainUnmanagedFolder, false);
		})
		.then(function(folder)
		{
			if(!folder)
			{
				uploader.mkdir(siteFolderInternalId, deploy.info.domainUnmanagedFolder)
				.then(function(folderRef)
				{
					deploy.info.target_folder = folderRef.internalId;
					cb(null, deploy);
				})
				.catch(function(ex)
				{
					cb(ex);
				});
			}
			else
			{
				deploy.info.target_folder = folder.$.internalId;
				cb(null, deploy);
			}
		})
		.then(function()
		{

		})
		.catch(function(ex)
		{
			cb(ex);
		});
	}

,	uploadBackup: function(deploy, cb)
	{
		var spinner = new Spinner('Uploading backup');
		spinner.start();
		net_module.uploader.mkdir(deploy.info.target_folder, 'backup')
		.then(function (recordRef)
		{
			net_module.uploader.main({
				targetFolderId: recordRef.internalId
			,	sourceFolderPath: path.join(package_manager.distro.folders.deploy, '_Sources')
			})
			.then(function ()
			{
				spinner.stop();
				cb(null, deploy);
			})
			.catch(function (err)
			{
				console.log(err, err.stack);
				cb(err);
			});
		})
		.catch(function (err)
		{
			console.log(err, err.stack);
			cb(err);
		});
	}

,	getUploader: function(deploy)
	{
		if(!net_module.uploader)
		{
			var credentials = {
			 	account: deploy.info.account
			,   authID: deploy.info.authID
			,   user_agent: deploy.info.user_agent || undefined
			,	molecule: args.m || undefined
			,	nsVersion: args.nsVersion || undefined
			,	applicationId: args.applicationId || undefined
			,	key: args.key
			,	secret: args.secret
			};
			var uploader = new Uploader(credentials);
			net_module.uploader = uploader;
		}
		return net_module.uploader;
	}

,	_postFilesNew: function (deploy, cb)
	{
		var uploader = net_module.getUploader(deploy);

		var sourceFolderPath = package_manager.distro.isSCLite ? path.join(package_manager.distro.folders.deploy, 'tmp') : package_manager.distro.folders.deploy;

		var config = {
			targetFolderId: deploy.info.target_folder
		,	sourceFolderPath: sourceFolderPath
		,	cleanManifest: args.cleanManifest
		};

		// progress bar and listener
		var bar;
		uploader.addProgressListener(function(actual, total)
		{
			if(!bar)
			{
				bar = new Progress('Uploading [:bar] :percent', {
					complete: '='
				,	incomplete: ' '
				,	width: 50
				,	total: total
				});
			}
			bar.tick(1);
		});

		var t0 = new Date().getTime();
		uploader
			.main(config)
			.then(function (manifest)
			{
				var took = ((new Date().getTime() - t0)/1000/60) + '';
				took = took.substring(0, Math.min(4, took.length)) + ' minutes';
				log('Finished', c.cyan('Deploy website' + (took ? ', took ' + took : '') ) );

				uploader.progressListeners = [];
				cb(null, deploy);
			})
			.catch(function(err)
			{
				console.log('ERROR in deploy', err, err.stack);
				cb(err);
			});
	}

,	_postFilesOld: async function (deploy, cb)
	{
		var t0 = new Date().getTime();
		var payload_path = path.join(process.gulp_init_cwd, 'payload.json');
		fs.stat(payload_path, async function(err, stat)
		{
			if (err)
			{
				return cb(err);
			}

			var spinner = new Spinner('Processing');
			var bar = new Progress('Uploading [:bar] :percent', {
				complete: '='
			,	incomplete: ' '
			,	width: 50
			,	total: stat.size
			,	callback: function()
				{
					spinner.start();
				}
			});

			const requestUrl = url.format({
				protocol: 'https'
			,	hostname: deploy.info.hostname
			,	pathname: '/app/site/hosting/restlet.nl'
			,	query: {
					script: deploy.info.script
				,	deploy: deploy.info.deploy
				}
			});

			const headerAuthorization = await getAuthorizationHeader({ method: 'PUT', url: requestUrl }, deploy.info.authID);

			fs.createReadStream(payload_path)
				.pipe(through(
					function(buff, type, cb2)
					{
						bar.tick(buff.length);
						this.push(buff);
						return cb2();
					}
				))
				.pipe(request.post(
					requestUrl
				,	{
						headers: {
							'Content-Type': 'application/json'
						,	'Authorization': headerAuthorization
						}
						,	rejectUnauthorized: false
					}
				,	function(err, request, response_body)
					{
						try
						{
							if (typeof spinner !== 'undefined')
							{
								spinner.stop();
							}
							
							if (typeof process.stdout.clearLine === 'function')
							{
								process.stdout.clearLine();
							}							

							if (typeof process.stdout.cursorTo === 'function')
							{
								process.stdout.cursorTo(0);
							}							
							
							if (err)
							{
								cb(new Error('Response error: ' + err), deploy);
							}
							else
							{
								var result = JSON.parse(response_body);
								var took = ((new Date().getTime() - t0)/1000/60) + '';
								
								took = took.substring(0, Math.min(4, took.length)) + ' minutes';

								cb(null, deploy);
							}
						}
						catch (e)
						{
							cb(new Error('Error parsing response:\n'+
							response_body+'\n\n'+
							'Please make sure that:\n'+
							'- You uploaded all files in RestLet folder to a location in your account.\n'+
							'- You have a restlet script pointing to sca_deployer.js with id customscript_sca_deployer and deployment with id customdeploy_sca_deployer\n'+
							'- You have set the get, post, put, delete methods to _get, _post, _put, _delete respectively in the script.\n'+
							'- You have added the Deployment.js and FileCabinet.js scripts to the script libraries.'));
						}
					}
				)
			);
		});
	}
};

module.exports = net_module;