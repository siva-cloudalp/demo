define('order_history_list_tracking_number.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"showContentOnEmpty") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":1},"end":{"line":7,"column":8}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "		<span class=\"order-history-list-tracking-number-not-available-label\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Tracking Number:",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":3,"column":71},"end":{"line":3,"column":103}}}))
    + "</span>\n		<span class=\"order-history-list-tracking-number-not-available "
    + alias3(((helper = (helper = compilerNameLookup(helpers,"contentClass") || (depth0 != null ? compilerNameLookup(depth0,"contentClass") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"contentClass","hash":{},"data":data,"loc":{"start":{"line":4,"column":64},"end":{"line":4,"column":80}}}) : helper)))
    + "\">\n			"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"N/A",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":5,"column":3},"end":{"line":5,"column":22}}}))
    + "\n		</span>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"isTrackingNumberCollectionLengthEqual1") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(12, data, 0),"data":data,"loc":{"start":{"line":9,"column":1},"end":{"line":38,"column":8}}})) != null ? stack1 : "");
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showTrackPackagesLabel") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":2},"end":{"line":14,"column":9}}})) != null ? stack1 : "")
    + "			<span class=\"order-history-list-tracking-number-available-label\">"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(alias1,"Tracking Number:",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":15,"column":68},"end":{"line":15,"column":100}}}))
    + " </span>\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"firstTrackingNumberName") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.program(10, data, 0),"data":data,"loc":{"start":{"line":16,"column":2},"end":{"line":20,"column":9}}})) != null ? stack1 : "");
},"6":function(container,depth0,helpers,partials,data) {
    return "			<span class=\"order-history-list-tracking-number-label\">\n				"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Track Package",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":12,"column":4},"end":{"line":12,"column":33}}}))
    + ":\n			</span>\n";
},"8":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "			<a target=\"_blank\" class=\"order-history-list-tracking-number-control-numbers-link\" data-action=\"tracking-number\" href=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"firstTrackingNumberURL") || (depth0 != null ? compilerNameLookup(depth0,"firstTrackingNumberURL") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"firstTrackingNumberURL","hash":{},"data":data,"loc":{"start":{"line":17,"column":122},"end":{"line":17,"column":148}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"firstTrackingNumberName") || (depth0 != null ? compilerNameLookup(depth0,"firstTrackingNumberName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"firstTrackingNumberName","hash":{},"data":data,"loc":{"start":{"line":17,"column":150},"end":{"line":17,"column":177}}}) : helper)))
    + " "
    + alias4(((helper = (helper = compilerNameLookup(helpers,"firstTrackingNumberText") || (depth0 != null ? compilerNameLookup(depth0,"firstTrackingNumberText") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"firstTrackingNumberText","hash":{},"data":data,"loc":{"start":{"line":17,"column":178},"end":{"line":17,"column":205}}}) : helper)))
    + "</a>\n";
},"10":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "			<a target=\"_blank\" class=\"order-history-list-tracking-number-control-numbers-link\" data-action=\"tracking-number\" href=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"firstTrackingNumberURL") || (depth0 != null ? compilerNameLookup(depth0,"firstTrackingNumberURL") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"firstTrackingNumberURL","hash":{},"data":data,"loc":{"start":{"line":19,"column":122},"end":{"line":19,"column":148}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"firstTrackingNumberText") || (depth0 != null ? compilerNameLookup(depth0,"firstTrackingNumberText") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"firstTrackingNumberText","hash":{},"data":data,"loc":{"start":{"line":19,"column":150},"end":{"line":19,"column":177}}}) : helper)))
    + "</a>\n";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "		<div class=\"order-history-list-tracking-number-control\">\n			<button class=\"order-history-list-tracking-number-control-button\"  data-toggle=\"dropdown\">\n				"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(alias1,"Track Packages",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":24,"column":4},"end":{"line":24,"column":34}}}))
    + "\n				<i class=\"order-history-list-tracking-number-control-toggle-icon\"></i>\n			</button>\n			<div class=\"order-history-list-tracking-number-control-numbers "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"collapseElements") : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":27,"column":66},"end":{"line":27,"column":106}}})) != null ? stack1 : "")
    + "\">\n				<ul>\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"trackingNumbers") : depth0),{"name":"each","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":29,"column":4},"end":{"line":34,"column":13}}})) != null ? stack1 : "")
    + "				</ul>\n			</div>\n		</div>\n";
},"13":function(container,depth0,helpers,partials,data) {
    return "collapsed";
},"15":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "					<li>\n						<a target=\"_blank\" class=\"order-history-list-tracking-number-control-numbers-link\" data-action=\"tracking-number\" href=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"serviceURL") || (depth0 != null ? compilerNameLookup(depth0,"serviceURL") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"serviceURL","hash":{},"data":data,"loc":{"start":{"line":31,"column":125},"end":{"line":31,"column":139}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"trackingNumber") || (depth0 != null ? compilerNameLookup(depth0,"trackingNumber") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"trackingNumber","hash":{},"data":data,"loc":{"start":{"line":31,"column":141},"end":{"line":31,"column":159}}}) : helper)))
    + "</a>\n						"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"serviceName") || (depth0 != null ? compilerNameLookup(depth0,"serviceName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"serviceName","hash":{},"data":data,"loc":{"start":{"line":32,"column":6},"end":{"line":32,"column":21}}}) : helper)))
    + "\n					</li>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"isTrackingNumberCollectionEmpty") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":39,"column":7}}})) != null ? stack1 : "")
    + "\n\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/DemoCloudAlp/Suite_Commerce_Base_Theme/20.1.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/DemoCloudAlp/Suite_Commerce_Base_Theme/20.1.0/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'order_history_list_tracking_number'; return template;});