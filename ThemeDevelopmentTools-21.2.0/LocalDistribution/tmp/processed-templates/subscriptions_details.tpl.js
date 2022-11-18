define('subscriptions_details.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "            <div class=\"subscriptions-details-header-container subscriptions-details-activation-date\">\n                <span class=\"subscriptions-details-line-label\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Activation",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":11,"column":63},"end":{"line":11,"column":89}}}))
    + "</span><br/>\n                <span class=\"subscriptions-details-line-value\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"startDate") || (depth0 != null ? compilerNameLookup(depth0,"startDate") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"startDate","hash":{},"data":data,"loc":{"start":{"line":12,"column":63},"end":{"line":12,"column":76}}}) : helper)))
    + "</span>\n            </div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "            <div class=\"subscriptions-details-header-container subscriptions-details-last-bill\">\n                <span class=\"subscriptions-details-line-label\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Last Billing",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":17,"column":63},"end":{"line":17,"column":91}}}))
    + "</span><br/>\n                <span class=\"subscriptions-details-line-value\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"lastBillDate") || (depth0 != null ? compilerNameLookup(depth0,"lastBillDate") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"lastBillDate","hash":{},"data":data,"loc":{"start":{"line":18,"column":63},"end":{"line":18,"column":79}}}) : helper)))
    + "</span>\n            </div>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "            <div class=\"subscriptions-details-header-container subscriptions-details-next-bill\">\n                <span class=\"subscriptions-details-line-label\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Next Billing",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":23,"column":63},"end":{"line":23,"column":91}}}))
    + "</span><br/>\n                <span class=\"subscriptions-details-line-value\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"nextBillCycleDate") || (depth0 != null ? compilerNameLookup(depth0,"nextBillCycleDate") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"nextBillCycleDate","hash":{},"data":data,"loc":{"start":{"line":24,"column":63},"end":{"line":24,"column":84}}}) : helper)))
    + "</span>\n            </div>\n";
},"7":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "            <div class=\"subscriptions-details-header-container subscriptions-details-renewal\">\n                <span class=\"subscriptions-details-line-label\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Renewal",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":29,"column":63},"end":{"line":29,"column":86}}}))
    + "</span><br/>\n                <span class=\"subscriptions-details-line-value\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"nextRenewalStartDate") || (depth0 != null ? compilerNameLookup(depth0,"nextRenewalStartDate") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"nextRenewalStartDate","hash":{},"data":data,"loc":{"start":{"line":30,"column":63},"end":{"line":30,"column":87}}}) : helper)))
    + "</span>\n            </div>\n";
},"9":function(container,depth0,helpers,partials,data) {
    return "    <section class=\"subscriptions-details-plan\">\n        <div data-view='Required.Lines.Collection' class=\"subscriptions-details-required-lines-list\"></div>\n    </section>\n";
},"11":function(container,depth0,helpers,partials,data) {
    return "    <section class=\"subscriptions-details-lines\">\n	    <div class=\"subscriptions-details-lines-header\">\n                <h3>"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Add-ons",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":44,"column":20},"end":{"line":44,"column":43}}}))
    + "</h3>\n	    </div>\n        <div data-view='Optional.Lines.Collection' class=\"subscriptions-details-optional-lines-list\"></div>\n    </section>\n";
},"13":function(container,depth0,helpers,partials,data) {
    return "        <button data-action=\"goToAddOnsMarket\" class=\"subscriptions-details-addons-button\">\n            "
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"View all Add-ons",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":54,"column":12},"end":{"line":54,"column":44}}}))
    + "\n        </button>\n";
},"15":function(container,depth0,helpers,partials,data) {
    return "        <button class=\"subscriptions-details-cancel-button\" data-action=\"cancel-subscription\">"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Cancel Subscription",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":60,"column":94},"end":{"line":60,"column":129}}}))
    + "</button>\n";
},"17":function(container,depth0,helpers,partials,data) {
    return "        <button class=\"subscriptions-details-reactivate-button\" data-action=\"reactivate-subscription\">"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Reactivate Subscription",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":63,"column":102},"end":{"line":63,"column":141}}}))
    + "</button>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"subscriptions-details\">\n\n    <header class=\"subscriptions-details-top-header\">\n            <h2>"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"name") || (depth0 != null ? compilerNameLookup(depth0,"name") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":4,"column":16},"end":{"line":4,"column":24}}}) : helper)))
    + "</h2>\n            <span data-view=\"StatusView\"></span>\n    </header>\n\n    <section class=\"subscriptions-details-top-info\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasStartDate") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":12},"end":{"line":14,"column":19}}})) != null ? stack1 : "")
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasLastBillDate") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":15,"column":12},"end":{"line":20,"column":19}}})) != null ? stack1 : "")
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasNextBillCycleDate") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":21,"column":12},"end":{"line":26,"column":19}}})) != null ? stack1 : "")
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasNextRenewalStartDate") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":27,"column":12},"end":{"line":32,"column":19}}})) != null ? stack1 : "")
    + "    </section>\n\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isRequiredLinesCountGreaterThan0") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":35,"column":4},"end":{"line":39,"column":11}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isOptionalLinesCountGreaterThan0") : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":41,"column":4},"end":{"line":48,"column":11}}})) != null ? stack1 : "")
    + "\n    <div class=\"subscriptions-details-buttons-container\">\n\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isNonIncludedLinesCountGreaterThan0") : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":52,"column":8},"end":{"line":56,"column":15}}})) != null ? stack1 : "")
    + "        <br>\n        <hr>\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"canBeSuspended") : depth0),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":59,"column":8},"end":{"line":61,"column":15}}})) != null ? stack1 : "")
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"canBeReactivated") : depth0),{"name":"if","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":62,"column":8},"end":{"line":64,"column":15}}})) != null ? stack1 : "")
    + "    </div>\n\n</div>\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/DemoCloudAlp/Suite_Commerce_Base_Theme/20.1.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/DemoCloudAlp/Suite_Commerce_Base_Theme/20.1.0/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'subscriptions_details'; return template;});