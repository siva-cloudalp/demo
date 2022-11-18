define('payment_wizard_confirmation_summary_module.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "				<div class=\"payment-wizard-confirmation-summary-module-deposits-subtotal\">\n					<p class=\"payment-wizard-confirmation-summary-module-grid-float\">\n						<span class=\"payment-wizard-confirmation-summary-module-deposits-subtotal-value\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"depositTotalFormatted") || (depth0 != null ? compilerNameLookup(depth0,"depositTotalFormatted") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"depositTotalFormatted","hash":{},"data":data,"loc":{"start":{"line":19,"column":87},"end":{"line":19,"column":112}}}) : helper)))
    + "</span>\n						"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Deposits Subtotal",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":20,"column":6},"end":{"line":20,"column":39}}}))
    + "\n						\n					</p>\n				</div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "				<div class=\"payment-wizard-confirmation-summary-module-credits-subtotal\">\n					<p class=\"payment-wizard-confirmation-summary-module-grid-float\">\n						<span class=\"payment-wizard-confirmation-summary-module-credits-subtotal-value\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"creditTotalFormatted") || (depth0 != null ? compilerNameLookup(depth0,"creditTotalFormatted") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"creditTotalFormatted","hash":{},"data":data,"loc":{"start":{"line":29,"column":86},"end":{"line":29,"column":110}}}) : helper)))
    + "</span>\n						"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Credits Subtotal",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":30,"column":6},"end":{"line":30,"column":38}}}))
    + "						\n					</p>\n				</div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, alias4="function";

  return "<div class=\"payment-wizard-confirmation-summary-module\">\n	<div class=\"payment-wizard-confirmation-summary-module-container\">\n		<header class=\"payment-wizard-confirmation-summary-module-header\">\n			<h3 class=\"payment-wizard-confirmation-summary-module-title\">\n				"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Payment Summary",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":5,"column":4},"end":{"line":5,"column":35}}}))
    + "\n			</h3>\n		</header>\n		<div class=\"payment-wizard-confirmation-summary-module-body\">\n			<div class=\"payment-wizard-confirmation-summary-module-invoices\">\n				<p class=\"payment-wizard-confirmation-summary-module-grid-float\">\n					<span class=\"payment-wizard-confirmation-summary-module-invoices-value\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"invoiceTotalFormatted") || (depth0 != null ? compilerNameLookup(depth0,"invoiceTotalFormatted") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"invoiceTotalFormatted","hash":{},"data":data,"loc":{"start":{"line":11,"column":77},"end":{"line":11,"column":102}}}) : helper)))
    + "</span>\n					"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Invoices (<span class=\"payment-wizard-confirmation-summary-module-invoices-number\">$(0)</span>)",(depth0 != null ? compilerNameLookup(depth0,"selectedInvoicesLength") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":12,"column":5},"end":{"line":12,"column":139}}}))
    + "					\n				</p>\n			</div>\n\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasDeposit") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":3},"end":{"line":24,"column":10}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasCredit") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":26,"column":3},"end":{"line":33,"column":10}}})) != null ? stack1 : "")
    + "\n			<div class=\"payment-wizard-confirmation-summary-module-estimated\">\n				<p class=\"payment-wizard-confirmation-summary-module-grid-float\">\n					<span class=\"payment-wizard-confirmation-summary-module-total-value\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"paymentFormatted") || (depth0 != null ? compilerNameLookup(depth0,"paymentFormatted") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"paymentFormatted","hash":{},"data":data,"loc":{"start":{"line":37,"column":74},"end":{"line":37,"column":94}}}) : helper)))
    + "</span>\n					<span class=\"payment-wizard-confirmation-summary-module-total-label\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Payment Total",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":38,"column":74},"end":{"line":38,"column":103}}}))
    + "</span>\n				</p>\n			</div>			\n		</div>\n	</div>\n</div>\n\n\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/DemoCloudAlp/Suite_Commerce_Base_Theme/20.1.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/DemoCloudAlp/Suite_Commerce_Base_Theme/20.1.0/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'payment_wizard_confirmation_summary_module'; return template;});