define('order_wizard_paymentmethod_paypal_module.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "\n            <p>\n                "
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"You have <b>selected to pay using PayPal</b> as your payment method.",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":20,"column":16},"end":{"line":20,"column":100}}}))
    + "\n            </p>\n            <p>\n                "
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"To <b>review</b> your order, click the <b>\"Continue\" button</b> below.",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":23,"column":16},"end":{"line":23,"column":102}}}))
    + "\n            </p>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "            <p>\n                "
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Please select the <b>\"Continue To PayPal\" button</b> below to <b>sign in into your PayPal</b> account.",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":27,"column":16},"end":{"line":27,"column":134}}}))
    + "\n            </p>\n            <p>\n                "
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"You will be <b>redirected to PayPal</b>, but <b>will have an opportunity to review</b> your order back on our site before purchasing.",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":30,"column":16},"end":{"line":30,"column":165}}}))
    + "\n            </p>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "<div class=\"order-wizard-paymentmethod-paypal-module-row\">\n\n	<a class=\"order-wizard-paymentmethod-paypal-module-container order-wizard-paymentmethod-paypal-module-container-selected\">\n		<input type=\"radio\" name=\"paymentmethod-paypal-option\" class=\"order-wizard-paymentmethod-paypal-module-radio\" data-id=\"paypal\" value=\"paypal\" checked>\n			<b>"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Selected",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":5,"column":6},"end":{"line":5,"column":30}}}))
    + "</b>\n	</a>\n	<div class=\"order-wizard-paymentmethod-paypal-module-details order-wizard-paymentmethod-paypal-module-container-selected\">\n		<div class=\"order-wizard-paymentmethod-paypal-module-details-container\">\n			<img class=\"order-wizard-paymentmethod-paypal-module-paypal-logo\" src=\""
    + alias3((compilerNameLookup(helpers,"getThemeAssetsPathWithDefault")||(depth0 && compilerNameLookup(depth0,"getThemeAssetsPathWithDefault"))||alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"paypalImageUrl") : depth0),"img/paypal.png",{"name":"getThemeAssetsPathWithDefault","hash":{},"data":data,"loc":{"start":{"line":9,"column":74},"end":{"line":9,"column":139}}}))
    + "\" alt=\"PayPal\">\n		</div>\n	</div>\n</div>\n\n\n<div class=\"order-wizard-paymentmethod-paypal-module-description\">\n\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isPaypalComplete") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":17,"column":1},"end":{"line":32,"column":15}}})) != null ? stack1 : "")
    + "</div>\n\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/DemoCloudAlp/Suite_Commerce_Base_Theme/20.1.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/DemoCloudAlp/Suite_Commerce_Base_Theme/20.1.0/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'order_wizard_paymentmethod_paypal_module'; return template;});