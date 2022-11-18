var {log, color, colorText} = require('ns-logs')
,	fs = require('fs')
,	configurations = require('../configurations')
,   configs = configurations.getConfigs()
,	path = require('path')
,	args = require('ns-args').argv()
,	_ = require('underscore')
;

var ConversionTool = require('../conversion-tool');

function getCompilationTasks()
{
    require('../../tasks/validate');
    require('../../tasks/templates');
    require('../../tasks/sass');

	var deploy_config = configs.deploy_config;
    configs.deploy_config = deploy_config;

	var compilation_tasks = configs.credentials.is_scis ? ['update-validate'] : ['update-validate', 'templates', 'sass'],
	application_manifest = configs.application.application_manifest;

	if(configs.extensionMode)
	{
        require('../../tasks/javascript');
		compilation_tasks.push('javascript');
	}

	//select tasks to execute if --source argument is passed
	if(application_manifest && args.source)
	{
		var sources = args.source.split(',')
		var valid_sources = configs.application.application_manifest.extensible_resources;

		sources = _.filter(sources, function(source)
		{
			if(!configs.extensionMode)
			{
				return _.contains(['templates', 'sass', 'assets', 'skins'], source);
			}

			return _.contains(valid_sources, source);
		});

		//the sources that I need to execute compilation task
		var sources_tasks = _.filter(sources, function(source)
		{
			return _.contains(compilation_tasks, source);
		});

        configs.deploy_config.source = sources;
		compilation_tasks = ['update-validate'].concat(sources_tasks);
		compilation_tasks = deploy_config.skip_compilation ? ['update-validate'] : compilation_tasks;

		log(colorText(color.GREEN, 'Deploying only ' + sources.join(',') + '...'));
	}

	return compilation_tasks;
}

function copyDir(src, dest) {
    fs.mkdirSync(dest, {recursive: true});
    const files = fs.readdirSync(src);
    for(let i = 0; i < files.length; i++) {
        const current = fs.lstatSync(path.join(src, files[i]));
        if(current.isDirectory()) {
            copyDir(path.join(src, files[i]), path.join(dest, files[i]));
        } else {
            fs.copyFileSync(path.join(src, files[i]),  path.join(dest, files[i]));
        }
    }
}

// In case the developer has updated the theme name in the manifest,
// rename the folder and update config paths accordingly
function syncThemeFolder() {

	if(_.indexOf(['theme:deploy', 'theme:local'], process.argv[2]) !== -1)
	{
		if(configs.folders.theme_path && fs.existsSync(configs.folders.theme_path) &&
			fs.existsSync(path.join(configs.folders.theme_path, 'manifest.json')))
		{
			var manifest_path = path.join(configs.folders.theme_path, 'manifest.json')
			,	manifest = JSON.parse(fs.readFileSync(manifest_path).toString());

			var config_theme_path = configs.folders.theme_path
			,	manifest_theme_path = path.join(configs.folders.source.source_path, manifest.name);

			if(path.sep !== '/')
			{
				config_theme_path = config_theme_path.replace('/', '\\');
			}

			if(config_theme_path !== manifest_theme_path)
			{
				copyDir(config_theme_path, manifest_theme_path);
				fs.rmdirSync(config_theme_path, { recursive: true });
				ConversionTool.updateConfigPaths(manifest);
			}
		}
	}
}

function syncExtensionsFolder() {
	if(_.indexOf(['extension:deploy', 'extension:local'], process.argv[2]) !== -1)
	{
		if(configs.folders.extensions_path)
		{
			var extensions = configs.folders.extensions_path;
			_.each(extensions, function(ext_folder)
			{
				var manifest_path = path.join(ext_folder, 'manifest.json')
				,	manifest = JSON.parse(fs.readFileSync(manifest_path).toString());

				var configured_ext_path = ext_folder
				,	manifest_ext_path = path.join(configs.folders.source.source_path, manifest.name);

				if(path.sep !== '/')
				{
					configured_ext_path = configured_ext_path.replace('/', '\\');
				}

				if(configured_ext_path !== manifest_ext_path)
				{
					copyDir( configured_ext_path, manifest_ext_path);
                    fs.rmdirSync(configured_ext_path, { recursive: true });
					ConversionTool.updateConfigPaths(manifest, {replace: true, replace_path: ext_folder});
				}
			});
		}
	}
}

module.exports = {
	getCompilationTasks: getCompilationTasks,
	syncThemeFolder: syncThemeFolder,
	syncExtensionsFolder: syncExtensionsFolder,
	copyDir: copyDir
};
