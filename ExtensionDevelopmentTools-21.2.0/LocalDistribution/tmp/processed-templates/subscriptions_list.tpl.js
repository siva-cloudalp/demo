define('subscriptions_list.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    return "	<a href=\"/\" class=\"subscriptions-list-button-back\">\n		<i class=\"subscriptions-list-button-back-icon\"></i>\n		"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Back to Account",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":4,"column":2},"end":{"line":4,"column":33}}}))
    + "\n	</a>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "			<table class=\"subscriptions-list-results-table\">\n				<thead class=\"subscriptions-list-actionable-header\">\n					<tr>\n						<th class=\"subscriptions-list-title-header-details\">\n							<span>"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Plan Name",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":21,"column":13},"end":{"line":21,"column":38}}}))
    + "</span>\n						</th>\n                        <th class=\"subscriptions-list-title-header-activation-date\">\n                            <span>"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Activation",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":24,"column":34},"end":{"line":24,"column":60}}}))
    + "</span>\n                        </th>\n						<th class=\"subscriptions-list-table-header-row-date\">\n							<span>"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Last Billing",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":27,"column":13},"end":{"line":27,"column":41}}}))
    + "</span>\n						</th>\n						<th class=\"subscriptions-list-table-header-row-date\">\n							<span>"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Next Billing",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":30,"column":13},"end":{"line":30,"column":41}}}))
    + "</span>\n						</th>\n						<th class=\"subscriptions-list-table-header-row-renewal\">\n							<span>"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Renewal",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":33,"column":13},"end":{"line":33,"column":36}}}))
    + "</span>\n						</th>\n						<th class=\"subscriptions-list-title-header-status\">\n							<span>"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Status",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":36,"column":13},"end":{"line":36,"column":35}}}))
    + "</span>\n						</th>\n					</tr>\n				</thead>\n				<tbody data-view=\"Records.Collection\" class=\"subscriptions-list-collection\"></tbody>\n			</table>\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "                <div class=\"transaction-history-list-empty-section\">\n                    <h5>"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"No subscriptions were found",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":44,"column":24},"end":{"line":44,"column":67}}}))
    + "</h5>\n                </div>\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "			<div class=\"subscriptions-list-paginator\">\n				<div data-view=\"GlobalViews.Pagination\"></div>\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"showCurrentPage") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":52,"column":4},"end":{"line":54,"column":11}}})) != null ? stack1 : "")
    + "			</div>\n";
},"8":function(container,depth0,helpers,partials,data) {
    return "					<div data-view=\"GlobalViews.ShowCurrentPage\"></div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showBackToAccount") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":6,"column":7}}})) != null ? stack1 : "")
    + "\n<section class=\"subscriptions-list\">\n	<header class=\"subscriptions-list-title\">\n		<h2>"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"pageHeader") || (depth0 != null ? compilerNameLookup(depth0,"pageHeader") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"pageHeader","hash":{},"data":data,"loc":{"start":{"line":10,"column":6},"end":{"line":10,"column":20}}}) : helper)))
    + "</h2>\n	</header>\n\n        <div data-view=\"ListHeader.View\"></div>\n\n		<div class=\"subscriptions-list-results-container\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isThereAnyResult") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data,"loc":{"start":{"line":16,"column":2},"end":{"line":46,"column":19}}})) != null ? stack1 : "")
    + "		</div>\n\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showPagination") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":49,"column":2},"end":{"line":56,"column":9}}})) != null ? stack1 : "")
    + "\n</section>\n\n\n\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/DemoCloudAlp/Suite_Commerce_Base_Theme/20.1.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/DemoCloudAlp/Suite_Commerce_Base_Theme/20.1.0/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'subscriptions_list'; return template;});