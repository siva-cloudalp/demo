define('order_wizard_confirmation_module.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "				<a href=\"#\" data-touchpoint=\"customercenter\" data-hashtag=\"#/purchases/view/salesorder/"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"orderId") || (depth0 != null ? compilerNameLookup(depth0,"orderId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"orderId","hash":{},"data":data,"loc":{"start":{"line":6,"column":91},"end":{"line":6,"column":102}}}) : helper)))
    + "\">#"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"confirmationNumber") || (depth0 != null ? compilerNameLookup(depth0,"confirmationNumber") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"confirmationNumber","hash":{},"data":data,"loc":{"start":{"line":6,"column":105},"end":{"line":6,"column":127}}}) : helper)))
    + "</a>.\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper;

  return "				#"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"confirmationNumber") || (depth0 != null ? compilerNameLookup(depth0,"confirmationNumber") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"confirmationNumber","hash":{},"data":data,"loc":{"start":{"line":8,"column":5},"end":{"line":8,"column":27}}}) : helper)))
    + "\n";
},"5":function(container,depth0,helpers,partials,data) {
    var helper;

  return "		<p class=\"order-wizard-confirmation-module-body\" data-type=\"additional-confirmation-message\">"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"additionalConfirmationMessage") || (depth0 != null ? compilerNameLookup(depth0,"additionalConfirmationMessage") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"additionalConfirmationMessage","hash":{},"data":data,"loc":{"start":{"line":16,"column":95},"end":{"line":16,"column":128}}}) : helper)))
    + "</p>\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "data-touchpoint=\"home\"";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, alias4="function";

  return "<div class=\"order-wizard-confirmation-module alert fade in\">\n	<h2 class=\"order-wizard-confirmation-module-title\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Thank you for shopping with us!",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":2,"column":52},"end":{"line":2,"column":99}}}))
    + "</h2>\n	<p class=\"order-wizard-confirmation-module-body\" name=\"orderNumber\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Your order number is",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":3,"column":69},"end":{"line":3,"column":105}}}))
    + "\n		<strong>\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isGuestAndCustomerCenter") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":5,"column":3},"end":{"line":9,"column":10}}})) != null ? stack1 : "")
    + "		</strong>\n	</p>\n\n	<div data-view=\"Reward.points\"></div>\n	<p class=\"order-wizard-confirmation-module-body\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"We received your order and will process it right away.",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":14,"column":50},"end":{"line":14,"column":120}}}))
    + "</p>\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"additionalConfirmationMessage") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":15,"column":1},"end":{"line":17,"column":8}}})) != null ? stack1 : "")
    + "	<a class=\"order-wizard-confirmation-module-continue\" href=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"continueURL") || (depth0 != null ? compilerNameLookup(depth0,"continueURL") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"continueURL","hash":{},"data":data,"loc":{"start":{"line":18,"column":60},"end":{"line":18,"column":75}}}) : helper)))
    + "\" "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"touchPoint") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":18,"column":77},"end":{"line":18,"column":124}}})) != null ? stack1 : "")
    + " data-hashtag=\"#/\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Continue shopping",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":18,"column":143},"end":{"line":18,"column":176}}}))
    + "</a>\n		<!-- DOWNLOAD AS PDF -->\n		"
    + alias3(compilerNameLookup(helpers,"log").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"pdfUrl") : depth0),"pdfUrl",{"name":"log","hash":{},"data":data,"loc":{"start":{"line":20,"column":2},"end":{"line":20,"column":25}}}))
    + "\n	<a href=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"pdfUrl") || (depth0 != null ? compilerNameLookup(depth0,"pdfUrl") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"pdfUrl","hash":{},"data":data,"loc":{"start":{"line":21,"column":10},"end":{"line":21,"column":20}}}) : helper)))
    + "\" target=\"_blank\" class=\"order-wizard-confirmation-module-download-pdf\">\n		"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Download PDF",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":22,"column":2},"end":{"line":22,"column":30}}}))
    + "\n	</a>\n</div>\n\n\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/DemoCloudAlp/Suite_Commerce_Base_Theme/20.1.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/DemoCloudAlp/Suite_Commerce_Base_Theme/20.1.0/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'order_wizard_confirmation_module'; return template;});