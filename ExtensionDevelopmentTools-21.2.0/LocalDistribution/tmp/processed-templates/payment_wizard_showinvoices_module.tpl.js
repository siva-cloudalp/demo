define('payment_wizard_showinvoices_module.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    return "in";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "						<tr data-id=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"id") || (depth0 != null ? compilerNameLookup(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":25,"column":19},"end":{"line":25,"column":25}}}) : helper)))
    + "\" class=\"payment-wizard-showinvoices-module-invoice\">\n							<td>\n								<span class=\"payment-wizard-showinvoices-module-value-title\">\n									"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"title") || (depth0 != null ? compilerNameLookup(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":28,"column":9},"end":{"line":28,"column":18}}}) : helper)))
    + "\n								</span>\n								<span class=\"payment-wizard-showinvoices-module-amount\">\n									<span class=\"payment-wizard-showinvoices-module-mobile-header-amount\">\n										"
    + alias4((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Amount:",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":32,"column":10},"end":{"line":32,"column":33}}}))
    + "\n									</span>\n									<span class=\"payment-wizard-showinvoices-module-value-amount\">\n										"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"amountFormatted") || (depth0 != null ? compilerNameLookup(depth0,"amountFormatted") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"amountFormatted","hash":{},"data":data,"loc":{"start":{"line":35,"column":10},"end":{"line":35,"column":29}}}) : helper)))
    + "\n									</span>\n								</span>\n							</td>\n						</tr>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "<div class=\"payment-wizard-showinvoices-module\">\n	<div class=\"payment-wizard-showinvoices-module-expander-head\">\n		<a class=\"payment-wizard-showinvoices-module-expander-head-toggle\" data-toggle=\"collapse\" data-target=\"#payment-wizard-showinvoices-module-body\" aria-expanded=\"false\" aria-controls=\"payment-wizard-showinvoices-module-body\">\n			"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Invoices (<span class=\"payment-wizard-showinvoices-module-invoices-count\">$(0)</span>)",(depth0 != null ? compilerNameLookup(depth0,"invoicesLength") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":4,"column":3},"end":{"line":4,"column":120}}}))
    + "\n			<i class=\"payment-wizard-showinvoices-module-expander-head-toggle-icon\"></i>\n		</a>\n	</div>\n\n	<div class=\"payment-wizard-showinvoices-module-expander-body collapse "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showOpenedAccordion") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":71},"end":{"line":9,"column":107}}})) != null ? stack1 : "")
    + "\" id=\"payment-wizard-showinvoices-module-body\">\n		<div class=\"payment-wizard-showinvoices-module-expander-body-wrapper\">\n\n			<table class=\"payment-wizard-showinvoices-module-records\">\n				<thead class=\"payment-wizard-showinvoices-module-records-head\">\n					<tr>\n						<th class=\"payment-wizard-showinvoices-module-header-number\">\n							<span class=\"payment-wizard-showinvoices-module-header-number-value\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Number",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":16,"column":76},"end":{"line":16,"column":98}}}))
    + "</span>\n						</th>\n						<th class=\"payment-wizard-showinvoices-module-header-amount\">\n							"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Amount",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":19,"column":7},"end":{"line":19,"column":29}}}))
    + "\n						</th>\n					</tr>\n				</thead>\n				<tbody>\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"invoices") : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":24,"column":5},"end":{"line":40,"column":14}}})) != null ? stack1 : "")
    + "					<tr class=\"payment-wizard-showinvoices-module-subtotal\">\n						<td>\n							<span class=\"payment-wizard-showinvoices-module-subtotal-label\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Invoices Subtotal: ",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":43,"column":71},"end":{"line":43,"column":106}}}))
    + "</span>\n							<span class=\"payment-wizard-showinvoices-module-value-subtotal\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"invoicesTotalFormatted") || (depth0 != null ? compilerNameLookup(depth0,"invoicesTotalFormatted") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"invoicesTotalFormatted","hash":{},"data":data,"loc":{"start":{"line":44,"column":71},"end":{"line":44,"column":98}}}) : helper)))
    + "</span>\n						</td>\n					</tr>\n				</tbody>\n			</table>\n		</div>\n	</div>\n</div>\n\n\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/DemoCloudAlp/Suite_Commerce_Base_Theme/20.1.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/DemoCloudAlp/Suite_Commerce_Base_Theme/20.1.0/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'payment_wizard_showinvoices_module'; return template;});