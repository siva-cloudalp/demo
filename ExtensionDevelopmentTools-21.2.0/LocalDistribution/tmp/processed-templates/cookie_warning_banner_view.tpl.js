define('cookie_warning_banner_view.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "	<div class=\"cookie-warning-banner-view alert\" role=\"alert\">\n		<div>\n			"
    + ((stack1 = ((helper = (helper = compilerNameLookup(helpers,"cookieMessage") || (depth0 != null ? compilerNameLookup(depth0,"cookieMessage") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"cookieMessage","hash":{},"data":data,"loc":{"start":{"line":4,"column":3},"end":{"line":4,"column":22}}}) : helper))) != null ? stack1 : "")
    + "\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showLink") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":3},"end":{"line":7,"column":10}}})) != null ? stack1 : "")
    + "		</div>\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"closable") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":2},"end":{"line":11,"column":9}}})) != null ? stack1 : "")
    + "	</div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "			 <a href=\"https://system.netsuite.com"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"linkHref") || (depth0 != null ? compilerNameLookup(depth0,"linkHref") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"linkHref","hash":{},"data":data,"loc":{"start":{"line":6,"column":40},"end":{"line":6,"column":52}}}) : helper)))
    + "\" data-toggle=\"show-in-modal\" data-page-header=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"linkContent") || (depth0 != null ? compilerNameLookup(depth0,"linkContent") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"linkContent","hash":{},"data":data,"loc":{"start":{"line":6,"column":100},"end":{"line":6,"column":115}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"linkContent") || (depth0 != null ? compilerNameLookup(depth0,"linkContent") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"linkContent","hash":{},"data":data,"loc":{"start":{"line":6,"column":117},"end":{"line":6,"column":132}}}) : helper)))
    + "</a>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "			<button class=\"cookie-warning-banner-view-close-button\" data-action=\"close-message\" type=\"button\" data-dismiss=\"alert\">&times;</button>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"showBanner") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":13,"column":7}}})) != null ? stack1 : "")
    + "\n\n\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/DemoCloudAlp/Suite_Commerce_Base_Theme/20.1.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/DemoCloudAlp/Suite_Commerce_Base_Theme/20.1.0/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'cookie_warning_banner_view'; return template;});