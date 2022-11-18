/* jshint node: true */
/* jshint esversion: 6 */

const gulp = require('gulp');
const Vinyl = require('vinyl');
const ts = require('gulp-typescript');
const through = require('through2').obj;
const path = require('path');
const _ = require('underscore');
const glob = require('glob').sync;
const package_manager = require('../package-manager');

const backendDestFolder = process.gulp_dest_suitescript;
const servicesDestFolder = 'services';

require('./configuration');

function getBackendSS2Files() {
    const suitescript = (package_manager.distro.backend || {}).suitescript || [];
    const backend_ss2_files = _.map(suitescript, relative_path =>
        path.join(package_manager.env.srcDir, relative_path)
    );

    backend_ss2_files.push('!' + path.join(package_manager.env.srcDir, '../Backend/**/Tests/**'));

    return backend_ss2_files;
}

function setExtraContent(content, extraContent) {
    content = content.replace(
        /\/\/ Overwrite starts[\n\s]*.*[\n\s]*\/\/ Overwrite ends/,
        extraContent
    );

    return content;
}

function validateSuiteScriptHeaders(file) {
    const content = file.contents.toString();
    const metadata = ['@NApiVersion 2\.x', ' @NModuleScope TargetAccount'];

    const validation = metadata.map(regexp => new RegExp(regexp).test(content));
    const errorIndex = validation.indexOf(false);
    if (!/\.d\.ts$/.test(file.path) && errorIndex > -1) {
        return new Error(
            `${file.relative} does not start with the mandatory metadata: ${metadata[errorIndex]}`
        );
    }

    return null;
}

gulp.task('suitescript', cb => {
    const backend_path = path.join(package_manager.env.srcDir, '..', 'Backend');
    const dest = process.gulp_dest_ss2;
    const backend_ss2_files = getBackendSS2Files();

    if (_.isEmpty(backend_ss2_files)) {
        return cb();
    }

    return gulp
        .src(backend_ss2_files, { base: backend_path, allowEmpty: true })
        .pipe(
            // This should not be needed with SuiteScript 2.1 since it supports es6
            through(function(file, type, done) {
                this.push(file);

                const file_name = path.basename(file.path, '.ServiceController.ts');
                let src_file_name = path.basename(file.path);

                // If it's not a ServiceController do nothing
                if (file_name === src_file_name) {
                    const error = validateSuiteScriptHeaders(file);
                    return done(error);
                }

                src_file_name = path
                    .join(`${backendDestFolder}`, path.relative(file.base, file.path))
                    .replace(/\\/g, '/')
                    .replace(/\.ts$/, '');

                const content = [
                    '/**',
                    '* @NApiVersion 2.x',
                    '* @NModuleScope Public',
                    '*/',
                    '',
                    `import ServiceController = require('${src_file_name}');`,
                    'export = { service: (ctx) => ServiceController.service(ctx) };'
                ].join('\n');

                const ss_file_name = file_name + '.Service.ts';
                const ss_file_path = path.join(file.base, servicesDestFolder, ss_file_name);

                const ss_file = new Vinyl({
                    path: ss_file_path,
                    base: file.base,
                    contents: Buffer.from(content)
                });

                this.push(ss_file);
                return done();
            })
        )
        .pipe(
            through(function(file, type, done) {
                const file_name = path.basename(file.path, '.ts');
                // If it's not a ActivationContext do nothing
                if (file_name !== 'ActivationContext') {
                    this.push(file);
                    return done();
                }

                const appManifest = package_manager.distro.app_manifest;
                const extraData = {
                    appManifest: { ...appManifest, ...{ version: null } },
                    ieFiles: {}
                };

                if (!process.is_SCA_devTools && appManifest.type !== 'SCIS') {
                    const basePath = package_manager.getNonManageResourcesPath();
                    appManifest.application.forEach(app => {
                        const files = glob(
                            path.join(basePath, `css_ie/${app.replace('_', '')}*.css`)
                        );

                        extraData.ieFiles[app] = files.map(ieFile =>
                            path.relative(basePath, ieFile).replace('\\', '/')
                        );
                    });
                }

                let content = file.contents.toString();
                content = setExtraContent(content, `return ${JSON.stringify(extraData, null, 4)};`);

                file.contents = Buffer.from(content);
                this.push(file);
                return done();
            })
        )
        .pipe(
            ts({
                module: 'amd',
                target: 'es5',
                allowJs: true,
                experimentalDecorators: true,
                types: [],
                baseUrl: './node_modules/',
                paths: {
                    N: ['@hitc/netsuite-types/N'],
                    'N/*': ['@hitc/netsuite-types/N/*'],
                    '_suitescript/*': ['../Backend/*'],
                    'N/sessionRecordHandler': [
                        '../Backend/SCIS/SessionManager/sessionRecordHandler.d.ts'
                    ]
                }
            })
        )
        .pipe(
            through(function(file, type, done) {
                file.path = file.path.replace(/\.Service\.js$/, '.ss');

                if (!/\.ss$/.test(file.path)) {
                    file.path = file.path.replace(
                        file.base,
                        path.join(file.base, backendDestFolder)
                    );
                } else {
                    const content = file.contents
                        .toString()
                        .replace(`${backendDestFolder}`, `../${backendDestFolder}`);
                    file.contents = Buffer.from(content);
                }

                done(null, file);
            })
        )
        .pipe(gulp.dest(dest, { mode: 0o700 }));
});

gulp.task('third_parties', cb => {
    const dest = path.join(process.gulp_dest_ss2, backendDestFolder, 'third_parties');

    let third_parties = (package_manager.distro.backend || {}).third_parties || [];
    third_parties = _.map(third_parties, third_party =>
        package_manager.getGlobsForModule(third_party, 'suitescript2')
    );
    third_parties = _.flatten(third_parties);

    if (_.isEmpty(third_parties)) {
        return cb();
    }

    return gulp
        .src(third_parties, { allowEmpty: true })
        .pipe(gulp.dest(dest, { mode: 0o700 }));
});

gulp.task('backend_ss2-no-dep', gulp.parallel('suitescript', 'third_parties'));

let deps = 'configuration';
if (!process.is_SCA_devTools) {
    require('./sass');
    deps = gulp.parallel('sass', 'configuration');
}

gulp.task('backend_ss2', gulp.series(deps, 'backend_ss2-no-dep'));
