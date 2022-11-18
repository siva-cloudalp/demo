define('login_register_reset_password.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "<div class=\"login-register-reset-password-body\">\n	<h2 class=\"login-register-reset-password-title\">\n		"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Reset Password",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":3,"column":2},"end":{"line":3,"column":32}}}))
    + "\n	</h2>\n\n	<form class=\"login-register-reset-password-form\" novalidate>\n		<p class=\"login-register-reset-password-description\">\n			"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Enter a new password below",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":8,"column":3},"end":{"line":8,"column":45}}}))
    + "\n		</p>\n\n		<fieldset>\n			<div class=\"login-register-reset-password-control-group\" data-validation=\"control-group\">\n				<label class=\"login-register-reset-password-control-label\" for=\"password\">\n					"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Password <small class=\"login-register-reset-password-forgot-password-form-required\">*</small>",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":14,"column":5},"end":{"line":14,"column":114}}}))
    + "\n				</label>\n				<div class=\"login-register-reset-password-controls\" data-validation=\"control\">\n					<input type=\"password\" class=\"login-register-reset-password-input\" id=\"password\" name=\"password\" value=\"\">\n				</div>\n			</div>\n\n			<div class=\"login-register-reset-password-control-group\" data-validation=\"control-group\">\n				<label class=\"login-register-reset-password-control-label\" for=\"confirm_password\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Confirm Password <small class=\"login-register-reset-password-forgot-password-form-required\">*</small>",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":22,"column":86},"end":{"line":22,"column":203}}}))
    + "</label>\n				<div class=\"login-register-reset-password-controls\" data-validation=\"control\">\n					<input type=\"password\" class=\"login-register-reset-password-input\" id=\"confirm_password\" name=\"confirm_password\" value=\"\">\n				</div>\n			</div>\n\n			<div data-type=\"alert-placeholder\"></div>\n\n			<div class=\"login-register-reset-password-control-group\">\n				<button type=\"submit\" class=\"login-register-reset-password-submit\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Change Password",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":31,"column":71},"end":{"line":31,"column":102}}}))
    + "</button>\n				<a class=\"login-register-reset-password-sign-in\" href=\"/login-register\" data-target=\".register\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Cancel & Return To Log in",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":32,"column":100},"end":{"line":32,"column":141}}}))
    + "</a>\n			</div>\n\n		</fieldset>\n	</form>\n</div>\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/DemoCloudAlp/Suite_Commerce_Base_Theme/20.1.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/DemoCloudAlp/Suite_Commerce_Base_Theme/20.1.0/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'login_register_reset_password'; return template;});