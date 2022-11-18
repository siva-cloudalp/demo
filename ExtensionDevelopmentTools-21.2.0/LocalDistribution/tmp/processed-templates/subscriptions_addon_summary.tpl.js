define('subscriptions_addon_summary.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "    <div class=\"subscriptions-addon-summary-container\">\n\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"hasItemPrice") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(5, data, 0),"data":data,"loc":{"start":{"line":4,"column":8},"end":{"line":33,"column":15}}})) != null ? stack1 : "")
    + "\n    </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, alias4="function";

  return "            <h3 class=\"subscriptions-addon-summary-title\">Summary</h3>\n            <div class=\"subscriptions-addon-summary-subtotal-wrapper\">\n                <h4 class=\"subscriptions-addon-summary-subtotal\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Subtotal",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":7,"column":65},"end":{"line":7,"column":89}}}))
    + "</h4>\n                <p class=\"subscriptions-addon-summary-grid-float\">\n                    <span class=\"subscriptions-addon-summary-grid-left\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"itemQuantity") || (depth0 != null ? compilerNameLookup(depth0,"itemQuantity") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"itemQuantity","hash":{},"data":data,"loc":{"start":{"line":9,"column":72},"end":{"line":9,"column":88}}}) : helper)))
    + " "
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"item",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":9,"column":89},"end":{"line":9,"column":109}}}))
    + "(s)</span>\n                    <span class=\"subscriptions-addon-summary-grid-right\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"itemPrice") || (depth0 != null ? compilerNameLookup(depth0,"itemPrice") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"itemPrice","hash":{},"data":data,"loc":{"start":{"line":10,"column":73},"end":{"line":10,"column":86}}}) : helper)))
    + "</span>\n                </p>\n            </div>\n\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasDiscount") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":14,"column":12},"end":{"line":19,"column":19}}})) != null ? stack1 : "")
    + "\n            <div class=\"subscriptions-addon-summary-total\">\n                <p class=\"subscriptions-addon-summary-grid-float\">\n                    "
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Total",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":23,"column":20},"end":{"line":23,"column":41}}}))
    + " <span class=\"subscriptions-addon-summary-grid-right\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"itemPriceTotal") || (depth0 != null ? compilerNameLookup(depth0,"itemPriceTotal") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"itemPriceTotal","hash":{},"data":data,"loc":{"start":{"line":23,"column":95},"end":{"line":23,"column":113}}}) : helper)))
    + "</span>\n                    <span class=\"subscriptions-addon-summary-grid-right subscriptions-addon-summary-frequency\"><small>"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"frequency") || (depth0 != null ? compilerNameLookup(depth0,"frequency") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"frequency","hash":{},"data":data,"loc":{"start":{"line":24,"column":118},"end":{"line":24,"column":131}}}) : helper)))
    + "</small></span>\n                </p>\n            </div>\n\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, alias4="function";

  return "                <div class=\"subscriptions-addon-summary-discount\">\n                    <span class=\"subscriptions-addon-summary-grid-left\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Discount ",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":16,"column":72},"end":{"line":16,"column":97}}}))
    + " "
    + alias3(((helper = (helper = compilerNameLookup(helpers,"discount") || (depth0 != null ? compilerNameLookup(depth0,"discount") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"discount","hash":{},"data":data,"loc":{"start":{"line":16,"column":98},"end":{"line":16,"column":110}}}) : helper)))
    + "</span>\n                    <span class=\"subscriptions-addon-summary-grid-right\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"discountedValue") || (depth0 != null ? compilerNameLookup(depth0,"discountedValue") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"discountedValue","hash":{},"data":data,"loc":{"start":{"line":17,"column":73},"end":{"line":17,"column":92}}}) : helper)))
    + "</span>\n                </div>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "\n            <div class=\"subscriptions-addon-summary-discount is-by-usage\">\n                <span class=\"subscriptions-addon-summary-grid-left\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"discount") || (depth0 != null ? compilerNameLookup(depth0,"discount") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"discount","hash":{},"data":data,"loc":{"start":{"line":31,"column":68},"end":{"line":31,"column":80}}}) : helper)))
    + " "
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"discount will be applied at billing.",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":31,"column":81},"end":{"line":31,"column":133}}}))
    + "</span>\n            </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"showSummaryContainer") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":36,"column":7}}})) != null ? stack1 : "");
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/DemoCloudAlp/Suite_Commerce_Base_Theme/20.1.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/DemoCloudAlp/Suite_Commerce_Base_Theme/20.1.0/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'subscriptions_addon_summary'; return template;});