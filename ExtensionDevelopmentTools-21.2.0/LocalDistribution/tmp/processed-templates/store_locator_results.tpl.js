define('store_locator_results.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    return "		<div class=\"store-locator-results-map\" data-id=\"map-view\" data-type=\"map-view\" data-view=\"ResultStoreLocatorMap\"></div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, alias4="function";

  return "<div class=\"store-locator-results\">\n	<div class=\"store-locator-results-nav-back\" data-action=\"refine-search\" data-type=\"sc-pusher-header\">\n		<a data-action=\"sc-pusher-dismiss\" class=\"store-locator-results-nav-back-link\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Back to Refine Search",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":3,"column":81},"end":{"line":3,"column":118}}}))
    + "</a>\n	</div>\n	<div class=\"store-locator-results-nav-button-container\">\n		<div class=\"store-locator-results-nav-button-container-grid\">\n			<button class=\"store-locator-results-nav-button-list active\" data-action=\"show-list\"> "
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"List View",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":7,"column":89},"end":{"line":7,"column":114}}}))
    + " </button>\n		</div>\n		<div class=\"store-locator-results-nav-button-container-grid\">\n			<button class=\"store-locator-results-nav-button-map\" data-action=\"show-map\"> "
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Map View",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":10,"column":80},"end":{"line":10,"column":104}}}))
    + " </button>\n		</div>\n	</div>\n	<div class=\"store-locator-results-nav-description\">\n		<span class=\"store-locator-results-nav-description-highlight\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"totalStores") || (depth0 != null ? compilerNameLookup(depth0,"totalStores") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"totalStores","hash":{},"data":data,"loc":{"start":{"line":14,"column":64},"end":{"line":14,"column":79}}}) : helper)))
    + " "
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"stores",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":14,"column":80},"end":{"line":14,"column":102}}}))
    + "</span> "
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"near",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":14,"column":110},"end":{"line":14,"column":130}}}))
    + "\n		<span class=\"store-locator-results-nav-description-geolocation\">\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"myposition") || (depth0 != null ? compilerNameLookup(depth0,"myposition") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"myposition","hash":{},"data":data,"loc":{"start":{"line":15,"column":67},"end":{"line":15,"column":81}}}) : helper)))
    + "\"</span>\n	</div>\n	<div data-id=\"list-view\" data-type=\"list-view\">\n		<div class=\"store-locator-results-list active\" >\n			<ul class=\"store-locator-results-list-container\" data-view=\"LocatorList\"></ul>\n		</div>\n\n		<div class=\"store-locator-results-see-all-stores\">\n			<a data-touchpoint=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"touchpoint") || (depth0 != null ? compilerNameLookup(depth0,"touchpoint") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"touchpoint","hash":{},"data":data,"loc":{"start":{"line":23,"column":23},"end":{"line":23,"column":37}}}) : helper)))
    + "\" data-hashtag=\"stores/all\" href=\"stores/all\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"See complete list of stores",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":23,"column":83},"end":{"line":23,"column":126}}}))
    + "</a>\n		</div>\n	</div>\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showMap") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":26,"column":1},"end":{"line":28,"column":8}}})) != null ? stack1 : "")
    + "</div>\n\n\n\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/DemoCloudAlp/Suite_Commerce_Base_Theme/20.1.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/DemoCloudAlp/Suite_Commerce_Base_Theme/20.1.0/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'store_locator_results'; return template;});