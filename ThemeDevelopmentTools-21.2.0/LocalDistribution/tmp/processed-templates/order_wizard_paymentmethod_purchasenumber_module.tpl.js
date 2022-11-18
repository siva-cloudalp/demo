define('order_wizard_paymentmethod_purchasenumber_module.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "<div class=\"order-wizard-paymentmethod-purchasenumber-module\">\n	<h3 class=\"order-wizard-paymentmethod-purchasenumber-module-title\">\n		"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Purchase Order Number",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":3,"column":2},"end":{"line":3,"column":39}}}))
    + "\n	 </h3>\n	<div class=\"order-wizard-paymentmethod-purchasenumber-module-row\">\n		<label for=\"purchase-order-number\" class=\"order-wizard-paymentmethod-purchasenumber-module-purchase-order-label\">\n			"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Enter Purchase Order Number",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":7,"column":3},"end":{"line":7,"column":46}}}))
    + " <span class=\"order-wizard-paymentmethod-purchasenumber-module-purchase-order-optional\"> "
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"(Optional)",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":7,"column":135},"end":{"line":7,"column":163}}}))
    + " </span>\n		</label>\n		<input\n			type=\"text\"\n			name=\"purchase-order-number\"\n			id=\"purchase-order-number\"\n			class=\"order-wizard-paymentmethod-purchasenumber-module-purchase-order-value\"\n			value=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"purchaseNumber") || (depth0 != null ? compilerNameLookup(depth0,"purchaseNumber") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"purchaseNumber","hash":{},"data":data,"loc":{"start":{"line":14,"column":10},"end":{"line":14,"column":28}}}) : helper)))
    + "\"\n		>\n	</div>\n</div>\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/DemoCloudAlp/Suite_Commerce_Base_Theme/20.1.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/DemoCloudAlp/Suite_Commerce_Base_Theme/20.1.0/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'order_wizard_paymentmethod_purchasenumber_module'; return template;});