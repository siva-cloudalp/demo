define('error_management_expired_link.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "		<h1 class=\"error-management-expired-link-header-title\">"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"pageHeader") || (depth0 != null ? compilerNameLookup(depth0,"pageHeader") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"pageHeader","hash":{},"data":data,"loc":{"start":{"line":3,"column":57},"end":{"line":3,"column":71}}}) : helper)))
    + "</h1>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "<div class=\"error-management-expired-link-header\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"pageHeader") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":1},"end":{"line":4,"column":8}}})) != null ? stack1 : "")
    + "\n	<div id=\"main-banner\" class=\"error-management-expired-link-main-banner\"></div>\n</div>\n<div id=\"internal-error-content\" class=\"error-management-expired-link-content\">\n	"
    + ((stack1 = ((helper = (helper = compilerNameLookup(helpers,"message") || (depth0 != null ? compilerNameLookup(depth0,"message") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"message","hash":{},"data":data,"loc":{"start":{"line":9,"column":1},"end":{"line":9,"column":14}}}) : helper))) != null ? stack1 : "")
    + "\n</div>\n<hr>\n<div>\n	<a class=\"error-management-expired-link-login-button\" href=\"#\" data-touchpoint=\"login\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Login",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":13,"column":88},"end":{"line":13,"column":109}}}))
    + "</a>\n	<a class=\"error-management-expired-link-register-button\" href=\"#\" data-touchpoint=\"register\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Register",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":14,"column":94},"end":{"line":14,"column":118}}}))
    + "</a>\n</div>\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/DemoCloudAlp/Suite_Commerce_Base_Theme/20.1.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/DemoCloudAlp/Suite_Commerce_Base_Theme/20.1.0/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'error_management_expired_link'; return template;});