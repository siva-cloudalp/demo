define('payment_wizard_invoice_module.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "	<div class=\"payment-wizard-invoice-module-list-subheader\">\n			<table class=\"payment-wizard-invoice-module-table\">\n				<thead class=\"payment-wizard-invoice-module-table-header\">\n					<tr>\n						<th class=\"payment-wizard-invoice-module-table-invoice-number\">\n							<span>"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Invoice No.",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":10,"column":13},"end":{"line":10,"column":40}}}))
    + "</span>\n						</th>\n						<th class=\"payment-wizard-invoice-module-table-invoice-due-date\">\n							<span>"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Due date",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":13,"column":13},"end":{"line":13,"column":37}}}))
    + "</span>\n						</th>\n						<th class=\"payment-wizard-invoice-module-table-invoice-amount\">\n							<span>"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Amount Due",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":16,"column":13},"end":{"line":16,"column":39}}}))
    + "</span>\n						</th>\n						<th class=\"payment-wizard-invoice-module-table-invoice-action\">\n							&nbsp;\n						</th>\n					</tr>\n				</thead>\n			<tbody class=\"payment-wizard-invoice-module-table-body\" data-view=\"Invoices.Collection\"></tbody>\n			</table>\n		</div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "	<p class=\"payment-wizard-invoice-module-list-empty\">\n	    <h5>"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"No invoices selected",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":28,"column":9},"end":{"line":28,"column":45}}}))
    + "</h5>\n	</p>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div data-view=\"ListHeader.View\"></div>\n\n<div class=\"payment-wizard-invoice-module-payment-list\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"isInvoiceLengthGreaterThan0") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":4,"column":0},"end":{"line":30,"column":7}}})) != null ? stack1 : "")
    + "</div>\n\n\n\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/DemoCloudAlp/Suite_Commerce_Base_Theme/20.1.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/DemoCloudAlp/Suite_Commerce_Base_Theme/20.1.0/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'payment_wizard_invoice_module'; return template;});