define('order_history_list.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    return "	<a href=\"/\" class=\"order-history-list-button-back\">\n		<i class=\"order-history-list-button-back-icon\"></i>\n		"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Back to Account",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":4,"column":2},"end":{"line":4,"column":33}}}))
    + "\n	</a>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "				<span class=\"order-history-list-header-button-open-active\">"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Open",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":17,"column":63},"end":{"line":17,"column":83}}}))
    + "</span>\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "				<a href=\"/open-purchases\" class=\"order-history-list-header-button-open\">"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Open",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":19,"column":76},"end":{"line":19,"column":96}}}))
    + "</a>\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"inStoreIsActive") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.program(10, data, 0),"data":data,"loc":{"start":{"line":23,"column":4},"end":{"line":27,"column":11}}})) != null ? stack1 : "");
},"8":function(container,depth0,helpers,partials,data) {
    return "					<span class=\"order-history-list-header-button-instore-active\">"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"In Store",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":24,"column":67},"end":{"line":24,"column":91}}}))
    + "</span>\n";
},"10":function(container,depth0,helpers,partials,data) {
    return "					<a href=\"/instore-purchases\" class=\"order-history-list-header-button-instore\">"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"In Store",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":26,"column":83},"end":{"line":26,"column":107}}}))
    + "</a>\n";
},"12":function(container,depth0,helpers,partials,data) {
    return "				<span class=\"order-history-list-header-button-all-active\">"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"All",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":31,"column":62},"end":{"line":31,"column":81}}}))
    + "</span>\n";
},"14":function(container,depth0,helpers,partials,data) {
    return "				<a href=\"/purchases\" class=\"order-history-list-header-button-all\">"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"All",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":33,"column":70},"end":{"line":33,"column":89}}}))
    + "</a>\n";
},"16":function(container,depth0,helpers,partials,data) {
    return "style=\"display:none;\"";
},"18":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "	<div class=\"order-history-list-recordviews-container\">\n		<table class=\"order-history-list-recordviews-actionable-table\">\n			<thead class=\"order-history-list-recordviews-actionable-header\">\n				<tr>\n					<th class=\"order-history-list-recordviews-actionable-title-header\">\n						<span>"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Purchase No.",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":46,"column":12},"end":{"line":46,"column":40}}}))
    + "</span>\n					</th>\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"columns") : depth0),{"name":"each","hash":{},"fn":container.program(19, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":48,"column":20},"end":{"line":52,"column":29}}})) != null ? stack1 : "")
    + "					<th class=\"order-history-list-recordviews-actionable-actions-header\">\n						<span>"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Track Items",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":54,"column":12},"end":{"line":54,"column":39}}}))
    + "</span>\n					</th>\n				</tr>\n			</thead>\n			<tbody class=\"order-history-list\" data-view=\"Order.History.Results\"></tbody>\n		</table>\n	</div>\n\n";
},"19":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                        <th class=\"order-history-list-recordviews-actionable-"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"type") || (depth0 != null ? compilerNameLookup(depth0,"type") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"type","hash":{},"data":data,"loc":{"start":{"line":49,"column":77},"end":{"line":49,"column":85}}}) : helper)))
    + "-header\">\n                            <span>"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"label") || (depth0 != null ? compilerNameLookup(depth0,"label") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"label","hash":{},"data":data,"loc":{"start":{"line":50,"column":34},"end":{"line":50,"column":43}}}) : helper)))
    + "</span>\n                        </th>\n";
},"21":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"isLoading") : depth0),{"name":"if","hash":{},"fn":container.program(22, data, 0),"inverse":container.program(24, data, 0),"data":data,"loc":{"start":{"line":63,"column":2},"end":{"line":79,"column":9}}})) != null ? stack1 : "")
    + "\n";
},"22":function(container,depth0,helpers,partials,data) {
    return "			<p class=\"order-history-list-empty\">"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Loading...",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":64,"column":39},"end":{"line":64,"column":65}}}))
    + "</p>\n";
},"24":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "			<div class=\"order-history-list-empty-section\">\n				<h5>"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(alias1,"You don't have any purchases in your account right now",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":67,"column":8},"end":{"line":67,"column":79}}}))
    + "</h5>\n\n"
    + ((stack1 = compilerNameLookup(helpers,"unless").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"allIsActive") : depth0),{"name":"unless","hash":{},"fn":container.program(25, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":69,"column":4},"end":{"line":71,"column":15}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isSCISIntegrationEnabled") : depth0),{"name":"if","hash":{},"fn":container.program(27, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":73,"column":4},"end":{"line":77,"column":11}}})) != null ? stack1 : "")
    + "			</div>\n";
},"25":function(container,depth0,helpers,partials,data) {
    return "					<h5>"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"To see a list of all your past purchases, you can go to the tab <a href=\"/purchases\" class=\"\">All</a>",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":70,"column":9},"end":{"line":70,"column":126}}}))
    + "</h5>\n";
},"27":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"openIsActive") : depth0),{"name":"if","hash":{},"fn":container.program(28, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":74,"column":5},"end":{"line":76,"column":12}}})) != null ? stack1 : "");
},"28":function(container,depth0,helpers,partials,data) {
    return "						<h5>"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"If you are looking to review some past purchases made in one of our brick and mortar stores, please check the tab <a href=\"/instore-purchases\" class=\"\">In Store</a>",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":75,"column":10},"end":{"line":75,"column":190}}}))
    + "</h5>\n";
},"30":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "		<div class=\"order-history-list-case-list-paginator\">\n			<div data-view=\"GlobalViews.Pagination\"></div>\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"showCurrentPage") : depth0),{"name":"if","hash":{},"fn":container.program(31, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":86,"column":3},"end":{"line":88,"column":10}}})) != null ? stack1 : "")
    + "		</div>\n";
},"31":function(container,depth0,helpers,partials,data) {
    return "				<div data-view=\"GlobalViews.ShowCurrentPage\"></div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showBackToAccount") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":6,"column":7}}})) != null ? stack1 : "")
    + "\n<section class=\"order-history-list\">\n	<header class=\"order-history-list-header\">\n		<h2>"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"pageHeader") || (depth0 != null ? compilerNameLookup(depth0,"pageHeader") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"pageHeader","hash":{},"data":data,"loc":{"start":{"line":10,"column":6},"end":{"line":10,"column":20}}}) : helper)))
    + "</h2>\n	</header>\n\n\n	<div class=\"order-history-list-header-nav\">\n		<div class=\"order-history-list-header-button-group\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"openIsActive") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data,"loc":{"start":{"line":16,"column":3},"end":{"line":20,"column":10}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isSCISIntegrationEnabled") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":22,"column":3},"end":{"line":28,"column":10}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"allIsActive") : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.program(14, data, 0),"data":data,"loc":{"start":{"line":30,"column":3},"end":{"line":34,"column":10}}})) != null ? stack1 : "")
    + "		</div>\n	</div>\n\n	<div data-view=\"ListHeader\" "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"openIsActive") : depth0),{"name":"if","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":38,"column":29},"end":{"line":38,"column":77}}})) != null ? stack1 : "")
    + "></div>\n\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"collectionLengthGreaterThan0") : depth0),{"name":"if","hash":{},"fn":container.program(18, data, 0),"inverse":container.program(21, data, 0),"data":data,"loc":{"start":{"line":40,"column":1},"end":{"line":81,"column":8}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showPagination") : depth0),{"name":"if","hash":{},"fn":container.program(30, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":83,"column":1},"end":{"line":90,"column":8}}})) != null ? stack1 : "")
    + "</section>\n\n\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/DemoCloudAlp/Suite_Commerce_Base_Theme/20.1.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/DemoCloudAlp/Suite_Commerce_Base_Theme/20.1.0/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'order_history_list'; return template;});