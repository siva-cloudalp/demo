define('invoice_paid_list.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    return "	<a href=\"/\" class=\"invoice-paid-list-button-back\">\n		<i class=\"invoice-paid-list-button-back-icon\"></i>\n		"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Back to Account",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":4,"column":2},"end":{"line":4,"column":33}}}))
    + "\n	</a>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "			<table class=\"invoice-paid-list-records\">\n				<thead class=\"invoice-paid-list-records-head\">\n					<tr class=\"invoice-paid-list-records-head-row\">\n						<th class=\"invoice-paid-list-head-invoicenumber\">"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(alias1,"Invoice No.",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":29,"column":55},"end":{"line":29,"column":82}}}))
    + "</th>\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"columns") : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":30,"column":6},"end":{"line":34,"column":15}}})) != null ? stack1 : "")
    + "					</tr>\n				</thead>\n				<tbody class=\"invoice-paid-list-records-body\" data-view=\"Invoice.Results\"></tbody>\n			</table>\n\n";
},"4":function(container,depth0,helpers,partials,data) {
    var helper;

  return "							<th>\n								"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"label") || (depth0 != null ? compilerNameLookup(depth0,"label") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"label","hash":{},"data":data,"loc":{"start":{"line":32,"column":8},"end":{"line":32,"column":17}}}) : helper)))
    + "\n							</th>\n";
},"6":function(container,depth0,helpers,partials,data) {
    return "			<div class=\"invoice-paid-list-no-records\">\n				<h5>"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"You don't have any Invoices Paid In Full at the moment,<br/> see <a href=\"/invoices\" class=\"invoice-paid-list-anchor-open\" >Open Invoices</a>",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":42,"column":8},"end":{"line":42,"column":166}}}))
    + "</h5>\n			</div>\n";
},"8":function(container,depth0,helpers,partials,data) {
    return "        <div class=\"invoice-paid-list-paginator\">\n            <div data-view=\"GlobalViews.Pagination\"></div>\n        </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showBackToAccount") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":6,"column":7}}})) != null ? stack1 : "")
    + "\n<section class=\"invoice-paid-list\">\n	<header class=\"invoice-paid-list-header\">\n		<h2 class=\"invoice-paid-list-title\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"pageHeader") || (depth0 != null ? compilerNameLookup(depth0,"pageHeader") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"pageHeader","hash":{},"data":data,"loc":{"start":{"line":10,"column":38},"end":{"line":10,"column":52}}}) : helper)))
    + "</h2>\n	</header>\n\n\n	<div class=\"invoice-paid-list-header-nav\">\n		<div class=\"invoice-paid-list-header-button-group\">\n			<a href=\"/invoices\" class=\"invoice-paid-list-header-button-open\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Open",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":16,"column":68},"end":{"line":16,"column":88}}}))
    + "</a>\n			<span class=\"invoice-paid-list-header-button-paid\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Paid in Full",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":17,"column":54},"end":{"line":17,"column":82}}}))
    + "</span>\n\n		</div>\n	</div>\n\n	<div data-view=\"ListHeader\"></div>\n\n	<div class=\"invoice-paid-list-body\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showInvoices") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(6, data, 0),"data":data,"loc":{"start":{"line":25,"column":2},"end":{"line":44,"column":9}}})) != null ? stack1 : "")
    + "	</div>\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showPagination") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":46,"column":1},"end":{"line":50,"column":11}}})) != null ? stack1 : "")
    + "</section>\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/DemoCloudAlp/Suite_Commerce_Base_Theme/20.1.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/DemoCloudAlp/Suite_Commerce_Base_Theme/20.1.0/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'invoice_paid_list'; return template;});