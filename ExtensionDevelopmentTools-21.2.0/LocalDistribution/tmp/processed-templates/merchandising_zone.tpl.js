define('merchandising_zone.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "		<p class=\"merchandising-zone-description\"> "
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"zoneDescription") || (depth0 != null ? compilerNameLookup(depth0,"zoneDescription") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"zoneDescription","hash":{},"data":data,"loc":{"start":{"line":4,"column":45},"end":{"line":4,"column":64}}}) : helper)))
    + " </p>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<aside class=\"merchandising-zone\">\n	<h3> "
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"zoneTitle") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":2,"column":6},"end":{"line":2,"column":29}}}))
    + "</h3>\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isZoneDescription") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":1},"end":{"line":5,"column":8}}})) != null ? stack1 : "")
    + "\n	<div class=\"merchandising-zone-container\">\n		<div data-view=\"Zone.Items\"></div>\n	</div>\n</aside>\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/DemoCloudAlp/Suite_Commerce_Base_Theme/20.1.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/DemoCloudAlp/Suite_Commerce_Base_Theme/20.1.0/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'merchandising_zone'; return template;});