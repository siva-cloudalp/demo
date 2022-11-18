define('overview_shipping.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "		<div data-view=\"Address.Details\" class=\"overview-shipping-card-content\"></div>\n		<div class=\"overview-shipping-card-button-edit-container\">\n			<a class=\"overview-shipping-card-button-edit\" href=\"/addressbook/"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"shippingAddressInternalid") || (depth0 != null ? compilerNameLookup(depth0,"shippingAddressInternalid") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"shippingAddressInternalid","hash":{},"data":data,"loc":{"start":{"line":9,"column":68},"end":{"line":9,"column":97}}}) : helper)))
    + "\" data-toggle=\"show-in-modal\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Edit",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":9,"column":127},"end":{"line":9,"column":147}}}))
    + "</a>\n		</div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "		<div class=\"overview-shipping-card-content\">\n			<p>"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"We have no default address on file for this account.",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":13,"column":6},"end":{"line":13,"column":74}}}))
    + "</p>\n		</div>\n		<a href=\"/addressbook/new\" class=\"overview-shipping-card-button-edit\" data-toggle=\"show-in-modal\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Create New Address",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":15,"column":100},"end":{"line":15,"column":134}}}))
    + "</a>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<article class=\"overview-shipping\">\n	<div class=\"overview-shipping-header\">\n		<h4>"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(alias1,"Shipping",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":3,"column":6},"end":{"line":3,"column":30}}}))
    + "</h4>\n	</div>\n	<section class=\"overview-shipping-card\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasDefaultShippingAddress") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":6,"column":1},"end":{"line":16,"column":8}}})) != null ? stack1 : "")
    + "	</section>\n</article>\n\n\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/DemoCloudAlp/Suite_Commerce_Base_Theme/20.1.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/DemoCloudAlp/Suite_Commerce_Base_Theme/20.1.0/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'overview_shipping'; return template;});