define('order_wizard_paymentmethod_invoice_module.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    return "		<p class=\"order-wizard-paymentmethod-invoice-module-conditions\">\n			"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"I agree to pay with my current Invoice <a data-toggle=\"show-terms\" href=\"#\">Terms & Conditions</a>",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":23,"column":3},"end":{"line":23,"column":117}}}))
    + "\n		</p>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, alias4="function";

  return "<div class=\"order-wizard-paymentmethod-invoice-module\">\n	<div class=\"order-wizard-paymentmethod-invoice-module-row\">\n		<div class=\"order-wizard-paymentmethod-invoice-module-terms\">\n			<p class=\"order-wizard-paymentmethod-invoice-module-terms-label\">\n				"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Terms",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":5,"column":4},"end":{"line":5,"column":25}}}))
    + "\n			</p>\n			<p class=\"order-wizard-paymentmethod-invoice-module-terms-value\">\n				"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"termsName") || (depth0 != null ? compilerNameLookup(depth0,"termsName") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"termsName","hash":{},"data":data,"loc":{"start":{"line":8,"column":4},"end":{"line":8,"column":17}}}) : helper)))
    + "\n			</p>\n		</div>\n		<div class=\"order-wizard-paymentmethod-invoice-module-balance\">\n			<p class=\"order-wizard-paymentmethod-invoice-module-balance-label\">\n				"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Available Balance",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":13,"column":4},"end":{"line":13,"column":37}}}))
    + "\n			</p>\n			<p class=\"order-wizard-paymentmethod-invoice-module-balance-value\">\n				"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"balanceAvailable") || (depth0 != null ? compilerNameLookup(depth0,"balanceAvailable") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"balanceAvailable","hash":{},"data":data,"loc":{"start":{"line":16,"column":4},"end":{"line":16,"column":24}}}) : helper)))
    + "\n			</p>\n		</div>\n	</div>\n\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showTerms") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":21,"column":1},"end":{"line":25,"column":8}}})) != null ? stack1 : "")
    + "</div>\n\n\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/DemoCloudAlp/Suite_Commerce_Base_Theme/20.1.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/DemoCloudAlp/Suite_Commerce_Base_Theme/20.1.0/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'order_wizard_paymentmethod_invoice_module'; return template;});