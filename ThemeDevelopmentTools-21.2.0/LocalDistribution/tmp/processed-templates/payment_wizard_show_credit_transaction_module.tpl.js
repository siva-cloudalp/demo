define('payment_wizard_show_credit_transaction_module.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    return "				"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Credits",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":5,"column":4},"end":{"line":5,"column":27}}}))
    + "\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "				"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Deposits",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":7,"column":4},"end":{"line":7,"column":28}}}))
    + "\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "in";
},"7":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "					<div class=\"payment-wizard-show-credit-transaction-module-accordion-container-row\" data-id=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"id") || (depth0 != null ? compilerNameLookup(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":19,"column":97},"end":{"line":19,"column":103}}}) : helper)))
    + "\">\n						<div class=\"payment-wizard-show-credit-transaction-module-accordion-container-row-left\">\n							<p>"
    + alias4((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"$(0) #$(1)",(depth0 != null ? compilerNameLookup(depth0,"type") : depth0),(depth0 != null ? compilerNameLookup(depth0,"number") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":21,"column":10},"end":{"line":21,"column":48}}}))
    + "</p>\n						</div>\n						<div class=\"payment-wizard-show-credit-transaction-module-accordion-container-row-right\">\n							<p>\n							<span class=\"payment-wizard-show-credit-transaction-module-accordion-container-label\">"
    + alias4((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Amount: ",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":25,"column":93},"end":{"line":25,"column":117}}}))
    + " </span> \n							<span class=\"payment-wizard-show-credit-transaction-module-accordion-container-value\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"amountFormatted") || (depth0 != null ? compilerNameLookup(depth0,"amountFormatted") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"amountFormatted","hash":{},"data":data,"loc":{"start":{"line":26,"column":93},"end":{"line":26,"column":112}}}) : helper)))
    + "</span>\n\n							</p>\n						</div>\n					</div>\n";
},"9":function(container,depth0,helpers,partials,data) {
    return "						"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Credits Subtotal:",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":39,"column":6},"end":{"line":39,"column":39}}}))
    + "\n";
},"11":function(container,depth0,helpers,partials,data) {
    return "						"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Deposits Subtotal:",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":41,"column":6},"end":{"line":41,"column":40}}}))
    + "\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "<div class=\"payment-wizard-show-credit-transaction-module-accordion-divider\">\n	<div class=\"payment-wizard-show-credit-transaction-module-accordion-head\">\n		<a class=\"payment-wizard-show-credit-transaction-module-accordion-head-toggle\" data-toggle=\"collapse\" data-target=\"#payment-wizard-show-credit-transaction-module-products\" aria-expanded=\"true\" aria-controls=\"payment-wizard-show-credit-transaction-module-products\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isTransactionTypeCredit") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":4,"column":3},"end":{"line":8,"column":10}}})) != null ? stack1 : "")
    + "		<i class=\"payment-wizard-show-credit-transaction-module-accordion-toggle-icon\"></i>\n		</a>\n	</div>\n	<div class=\"payment-wizard-show-credit-transaction-module-accordion-body collapse "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showOpenedAccordion") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":83},"end":{"line":12,"column":119}}})) != null ? stack1 : "")
    + "\" id=\"payment-wizard-show-credit-transaction-module-products\" role=\"tabpanel\" data-target=\"#payment-wizard-show-credit-transaction-module-products\">\n		<div data-content=\"items-body\">\n			<div class=\"payment-wizard-show-credit-transaction-module-accordion-body-header\">\n				<p class=\"payment-wizard-show-credit-transaction-module-accordion-body-header-label\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Amount",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":15,"column":89},"end":{"line":15,"column":111}}}))
    + "</p>\n			</div>\n			<div class=\"payment-wizard-show-credit-transaction-module-accordion-container\">\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"transactions") : depth0),{"name":"each","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":18,"column":4},"end":{"line":31,"column":13}}})) != null ? stack1 : "")
    + "\n			</div>\n\n			<div class=\"payment-wizard-show-credit-transaction-module-accordion-body-footer\">\n				<div class=\"payment-wizard-show-credit-transaction-module-accordion-container-row\">\n					<span class=\"payment-wizard-show-credit-transaction-module-accordion-container-row-label\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isTransactionTypeCredit") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.program(11, data, 0),"data":data,"loc":{"start":{"line":38,"column":5},"end":{"line":42,"column":12}}})) != null ? stack1 : "")
    + "					</span>\n					<b>"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"totalFormatted") || (depth0 != null ? compilerNameLookup(depth0,"totalFormatted") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"totalFormatted","hash":{},"data":data,"loc":{"start":{"line":44,"column":8},"end":{"line":44,"column":26}}}) : helper)))
    + "</b>\n				</div>\n			</div>\n		</div>\n	</div>\n</div>\n\n\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/DemoCloudAlp/Suite_Commerce_Base_Theme/20.1.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/DemoCloudAlp/Suite_Commerce_Base_Theme/20.1.0/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'payment_wizard_show_credit_transaction_module'; return template;});