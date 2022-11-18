define('payment_wizard_confirmation_module.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "		<p class=\"payment-wizard-confirmation-module-body\">\n			<a href=\"/transactionhistory/customerpayment/"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"confirmationId") || (depth0 != null ? compilerNameLookup(depth0,"confirmationId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"confirmationId","hash":{},"data":data,"loc":{"start":{"line":5,"column":48},"end":{"line":5,"column":66}}}) : helper)))
    + "\" data-touchpoint=\"customercenter\" data-hashtag=\"#transactionhistory/customerpayment/"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"confirmationId") || (depth0 != null ? compilerNameLookup(depth0,"confirmationId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"confirmationId","hash":{},"data":data,"loc":{"start":{"line":5,"column":151},"end":{"line":5,"column":169}}}) : helper)))
    + "\" data-action=\"update-layout\">"
    + alias4((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Payment #$(0)",(depth0 != null ? compilerNameLookup(depth0,"tranId") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":5,"column":199},"end":{"line":5,"column":235}}}))
    + "</a>\n		</p>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "		<p class=\"payment-wizard-confirmation-module-body\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"A Deposit/Credit Memo Application was generated.",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":8,"column":53},"end":{"line":8,"column":117}}}))
    + "</p>\n		<p class=\"payment-wizard-confirmation-module-body\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"You can see the details in <a href=\"/transactionhistory\" data-action=\"update-layout\">Transaction History</a> page.",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":9,"column":53},"end":{"line":9,"column":183}}}))
    + "</p>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing;

  return "		<a href=\""
    + ((stack1 = ((helper = (helper = compilerNameLookup(helpers,"dwonloadPDFURL") || (depth0 != null ? compilerNameLookup(depth0,"dwonloadPDFURL") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"dwonloadPDFURL","hash":{},"data":data,"loc":{"start":{"line":14,"column":11},"end":{"line":14,"column":31}}}) : helper))) != null ? stack1 : "")
    + "\" target=\"_blank\" class=\"payment-wizard-confirmation-module-download\" >\n			"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Download as PDF",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":15,"column":3},"end":{"line":15,"column":34}}}))
    + "\n		</a>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "<div class=\"payment-wizard-confirmation-module alert fade in\">\n	<h2 class=\"payment-wizard-confirmation-module-title\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Thank you!",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":2,"column":54},"end":{"line":2,"column":80}}}))
    + "</h2>\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showLinkConfirmation") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":3,"column":1},"end":{"line":10,"column":8}}})) != null ? stack1 : "")
    + "	<p class=\"payment-wizard-confirmation-module-body\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"You will receive an email with your payment confirmation.",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":11,"column":52},"end":{"line":11,"column":125}}}))
    + "</p>\n\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isConfirmationCreated") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":1},"end":{"line":17,"column":8}}})) != null ? stack1 : "")
    + "\n	<a href=\"/invoices\" class=\"payment-wizard-confirmation-module-payment\" data-action=\"update-layout\" >"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Back to Invoices",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":19,"column":101},"end":{"line":19,"column":133}}}))
    + " </a>\n</div>\n\n\n\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/DemoCloudAlp/Suite_Commerce_Base_Theme/20.1.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/DemoCloudAlp/Suite_Commerce_Base_Theme/20.1.0/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'payment_wizard_confirmation_module'; return template;});