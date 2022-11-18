define('receipt_details.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "	"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"<a href=\"/purchases/view/$(1)/$(2)\" class=\"receipt-details-back-btn\">&lt; Back to $(0)</a>",((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"createdfrom") : stack1)) != null ? compilerNameLookup(stack1,"name") : stack1),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"createdfrom") : stack1)) != null ? compilerNameLookup(stack1,"recordtype") : stack1),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"createdfrom") : stack1)) != null ? compilerNameLookup(stack1,"internalid") : stack1),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":2,"column":1},"end":{"line":2,"column":188}}}))
    + "\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "	<a href=\"/transactionhistory\" class=\"receipt-details-back-btn\">"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"&lt; Back to Transaction History",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":4,"column":64},"end":{"line":4,"column":112}}}))
    + "\n	</a>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "			<div class=\"receipt-details-accordion-divider\">\n				<div class=\"receipt-details-accordion-head\">\n					<a class=\"receipt-details-accordion-head-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#receipt-products-list\" aria-expanded=\"true\" aria-controls=\"#receipt-products-list\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isLinesLengthGreaterThan1") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.program(8, data, 0),"data":data,"loc":{"start":{"line":46,"column":6},"end":{"line":50,"column":13}}})) != null ? stack1 : "")
    + "					<i class=\"receipt-details-accordion-toggle-icon\"></i>\n					</a>\n				</div>\n				<div class=\"receipt-details-accordion-body collapse "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showOpenedAccordion") : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":54,"column":56},"end":{"line":54,"column":92}}})) != null ? stack1 : "")
    + "\" id=\"receipt-products-list\" role=\"tabpanel\" data-target=\"#receipt-products-list\">\n					<div class=\"receipt-details-accordion-container\" data-content=\"order-items-body\">\n						<table class=\"receipt-details-item-details-table\">\n							<tbody data-view=\"Item.Details.Line\"></tbody>\n						</table>\n					</div>\n				</div>\n			</div>\n";
},"6":function(container,depth0,helpers,partials,data) {
    return "							"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Products (<span class=\"receipt-details-items-count\">$(0)</span>)",(depth0 != null ? compilerNameLookup(depth0,"linesLength") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":47,"column":7},"end":{"line":47,"column":99}}}))
    + "\n";
},"8":function(container,depth0,helpers,partials,data) {
    return "							"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Product (<span class=\"receipt-details-items-count\">$(0)</span>)",(depth0 != null ? compilerNameLookup(depth0,"linesLength") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":49,"column":7},"end":{"line":49,"column":98}}}))
    + "\n";
},"10":function(container,depth0,helpers,partials,data) {
    return "in";
},"12":function(container,depth0,helpers,partials,data) {
    return "									<div data-view=\"FormatPaymentMethod\"></div>\n";
},"14":function(container,depth0,helpers,partials,data) {
    return "									"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"N/A",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":84,"column":9},"end":{"line":84,"column":28}}}))
    + "\n";
},"16":function(container,depth0,helpers,partials,data) {
    return "									<div data-view=\"Address.View\"></div>\n";
},"18":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "									"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"itemsQuantityNumber") || (depth0 != null ? compilerNameLookup(depth0,"itemsQuantityNumber") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"itemsQuantityNumber","hash":{},"data":data,"loc":{"start":{"line":124,"column":9},"end":{"line":124,"column":32}}}) : helper)))
    + " "
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Items",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":124,"column":33},"end":{"line":124,"column":54}}}))
    + "\n";
},"20":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "									"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"itemsQuantityNumber") || (depth0 != null ? compilerNameLookup(depth0,"itemsQuantityNumber") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"itemsQuantityNumber","hash":{},"data":data,"loc":{"start":{"line":126,"column":9},"end":{"line":126,"column":32}}}) : helper)))
    + " "
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Item",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":126,"column":33},"end":{"line":126,"column":53}}}))
    + "\n";
},"22":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "					<p class=\"receipt-details-summary-grid-float\">\n						<span class=\"receipt-details-summary-amount-discount\">\n						"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"discountTotalFormatted") || (depth0 != null ? compilerNameLookup(depth0,"discountTotalFormatted") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"discountTotalFormatted","hash":{},"data":data,"loc":{"start":{"line":135,"column":6},"end":{"line":135,"column":32}}}) : helper)))
    + "\n						</span>\n							"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Discount",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":137,"column":7},"end":{"line":137,"column":31}}}))
    + "\n					</p>\n";
},"24":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "					<p class=\"receipt-details-summary-grid-float\">\n						<span class=\"receipt-details-summary-amount-shipping\">\n							<span class=\"receipt-details-summary-shippingcost\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"shippingCostFormatted") || (depth0 != null ? compilerNameLookup(depth0,"shippingCostFormatted") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"shippingCostFormatted","hash":{},"data":data,"loc":{"start":{"line":144,"column":58},"end":{"line":144,"column":83}}}) : helper)))
    + "</span>\n						</span>\n						"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Shipping Total",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":146,"column":6},"end":{"line":146,"column":36}}}))
    + "\n					</p>\n";
},"26":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "					<p class=\"receipt-details-summary-grid-float\">\n						<span class=\"receipt-details-summary-amount-handling\">\n							"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"handlingCostFormatted") || (depth0 != null ? compilerNameLookup(depth0,"handlingCostFormatted") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"handlingCostFormatted","hash":{},"data":data,"loc":{"start":{"line":153,"column":7},"end":{"line":153,"column":32}}}) : helper)))
    + "\n						</span>\n						"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Handling Total",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":155,"column":6},"end":{"line":155,"column":36}}}))
    + "\n					</p>\n";
},"28":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "					<p class=\"receipt-details-summary-grid-float\">\n						<span class=\"receipt-details-summary-amount-promocode\">\n						"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"promocode") || (depth0 != null ? compilerNameLookup(depth0,"promocode") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"promocode","hash":{},"data":data,"loc":{"start":{"line":162,"column":6},"end":{"line":162,"column":19}}}) : helper)))
    + "\n						</span>\n						"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Promo Code",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":164,"column":6},"end":{"line":164,"column":32}}}))
    + "\n					</p>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, alias4="function";

  return ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"haveCreatedFrom") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":6,"column":7}}})) != null ? stack1 : "")
    + "<section>\n	<header>\n		<h2 class=\"receipt-details-order-title\">\n			"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Receipt <span class=\"tranid\">#$(0)</span>",(depth0 != null ? compilerNameLookup(depth0,"orderNumber") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":10,"column":3},"end":{"line":10,"column":72}}}))
    + "\n			<span class=\"receipt-details-title-header-amount\">\n				"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"totalFormatted") || (depth0 != null ? compilerNameLookup(depth0,"totalFormatted") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"totalFormatted","hash":{},"data":data,"loc":{"start":{"line":12,"column":4},"end":{"line":12,"column":22}}}) : helper)))
    + "\n			</span>\n		</h2>\n		\n	</header>\n\n	<!-- HEADER INFORMATION -->\n	<div class=\"receipt-details-header-information\">\n		<div class=\"receipt-details-header-row\">\n			<div class=\"receipt-details-header-col-left\">\n				<p class=\"receipt-details-header-date-info\">\n					"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"<span class=\"receipt-details-header-date-label\">Date: </span> <span class=\"receipt-details-header-date\">$(0)</span>",(depth0 != null ? compilerNameLookup(depth0,"date") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":23,"column":5},"end":{"line":23,"column":141}}}))
    + "\n				</p>\n			</div>\n			<div class=\"receipt-details-header-col-right\">\n				<p class=\"receipt-details-header-status-info\">\n					"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"<span class=\"receipt-details-header-status-label\">Status: </span> <span class=\"receipt-details-header-status\">$(0)</span>",(depth0 != null ? compilerNameLookup(depth0,"status") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":28,"column":5},"end":{"line":28,"column":149}}}))
    + "\n				</p>\n			</div>\n			<div class=\"receipt-details-header-amount\">\n				<p class=\"receipt-details-header-amount-info\">\n					"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"<span class=\"receipt-details-header-amount-label\">Amount: </span> <span class=\"receipt-details-header-amount-number\">$(0)</span>",(depth0 != null ? compilerNameLookup(depth0,"totalFormatted") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":33,"column":5},"end":{"line":33,"column":164}}}))
    + "\n				</p>\n			</div>\n		</div>\n	</div>\n\n	<div class=\"receipt-details-row\">\n		<div class=\"receipt-details-content-col\">\n			<!-- ITEMS -->\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showLines") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":42,"column":3},"end":{"line":62,"column":10}}})) != null ? stack1 : "")
    + "\n			<div class=\"receipt-details-accordion-divider\">\n				<!-- PAYMENT INFORMATION -->\n				<div class=\"receipt-details-accordion-head\">\n					<a class=\"receipt-details-accordion-head-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#receipt-payment-info\" aria-expanded=\"true\" aria-controls=\"#receipt-payment-info\">\n						"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Payment Information",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":68,"column":6},"end":{"line":68,"column":41}}}))
    + "\n						<i class=\"receipt-details-accordion-toggle-icon\"></i>\n					</a>\n				</div>\n\n				<div class=\"receipt-details-accordion-body collapse "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showOpenedAccordion") : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":73,"column":56},"end":{"line":73,"column":92}}})) != null ? stack1 : "")
    + "\" id=\"receipt-payment-info\" role=\"tabpanel\" data-target=\"#receipt-payment-info\">\n					<div class=\"receipt-details-accordion-container\" data-content=\"order-items-body\">\n						<div class=\"receipt-details-info-card\">\n							<h5 class=\"receipt-details-info-card-title\">\n									"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Payment Method:",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":77,"column":9},"end":{"line":77,"column":40}}}))
    + "\n							</h5>\n		\n							<div class=\"receipt-details-info-card-info\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showPaymentMethod") : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.program(14, data, 0),"data":data,"loc":{"start":{"line":81,"column":8},"end":{"line":85,"column":15}}})) != null ? stack1 : "")
    + "							</div>\n						</div>\n											\n						<div class=\"receipt-details-info-card\">\n							<h5 class=\"receipt-details-info-card-title\">\n									"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Bill to:",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":91,"column":9},"end":{"line":91,"column":33}}}))
    + "\n							</h5>\n		\n							<div class=\"receipt-details-info-card-info-billing\">\n								<address>\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showBillingAddress") : depth0),{"name":"if","hash":{},"fn":container.program(16, data, 0),"inverse":container.program(14, data, 0),"data":data,"loc":{"start":{"line":96,"column":8},"end":{"line":100,"column":15}}})) != null ? stack1 : "")
    + "								</address>\n							</div>\n						</div>\n					</div>\n				</div>\n			</div>\n		</div>\n\n\n		<div class=\"receipt-details-summary-col\">\n			<div class=\"receipt-details-summary-container\">\n					<!-- SUMMARY -->\n					<h3 class=\"receipt-details-summary-title\">\n						"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"SUMMARY",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":114,"column":6},"end":{"line":114,"column":29}}}))
    + "\n					</h3>\n					<div class=\"receipt-details-summary-subtotal\">\n						<p class=\"receipt-details-summary-grid-float\">\n							<span class=\"receipt-details-summary-amount-subtotal\">\n								"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"subTotalFormatted") || (depth0 != null ? compilerNameLookup(depth0,"subTotalFormatted") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"subTotalFormatted","hash":{},"data":data,"loc":{"start":{"line":119,"column":8},"end":{"line":119,"column":29}}}) : helper)))
    + "\n							</span>\n							"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Subtotal",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":121,"column":7},"end":{"line":121,"column":31}}}))
    + "\n							<span class=\"receipt-details-summary-subtotal-items\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"itemsQuantityLengthGreaterThan1") : depth0),{"name":"if","hash":{},"fn":container.program(18, data, 0),"inverse":container.program(20, data, 0),"data":data,"loc":{"start":{"line":123,"column":8},"end":{"line":127,"column":15}}})) != null ? stack1 : "")
    + "							</span>\n						</p>\n					</div>\n\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showDiscountTotal") : depth0),{"name":"if","hash":{},"fn":container.program(22, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":132,"column":5},"end":{"line":139,"column":12}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showShippingCost") : depth0),{"name":"if","hash":{},"fn":container.program(24, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":141,"column":5},"end":{"line":148,"column":12}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showHandlingCost") : depth0),{"name":"if","hash":{},"fn":container.program(26, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":150,"column":5},"end":{"line":157,"column":12}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showPromocode") : depth0),{"name":"if","hash":{},"fn":container.program(28, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":159,"column":5},"end":{"line":166,"column":12}}})) != null ? stack1 : "")
    + "\n					<p class=\"receipt-details-summary-grid-float\">\n						<span class=\"receipt-details-summary-amount-tax\">\n						"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"taxTotalFormatted") || (depth0 != null ? compilerNameLookup(depth0,"taxTotalFormatted") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"taxTotalFormatted","hash":{},"data":data,"loc":{"start":{"line":170,"column":6},"end":{"line":170,"column":27}}}) : helper)))
    + "\n						</span>\n						"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Tax Total",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":172,"column":6},"end":{"line":172,"column":31}}}))
    + "\n					</p>\n\n					<div class=\"receipt-details-summary-total\">\n						<p class=\"receipt-details-summary-grid-float\">\n							<span class=\"receipt-details-summary-amount-total\">\n								"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"totalFormatted") || (depth0 != null ? compilerNameLookup(depth0,"totalFormatted") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"totalFormatted","hash":{},"data":data,"loc":{"start":{"line":178,"column":8},"end":{"line":178,"column":26}}}) : helper)))
    + "\n							</span>\n							"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Total",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":180,"column":7},"end":{"line":180,"column":28}}}))
    + "\n						</p>\n					</div>	\n				</div>\n\n				<!-- DOWNLOAD AS PDF -->\n				<div class=\"receipt-details-row-fluid\">\n					<a href=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"pdfUrl") || (depth0 != null ? compilerNameLookup(depth0,"pdfUrl") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"pdfUrl","hash":{},"data":data,"loc":{"start":{"line":187,"column":14},"end":{"line":187,"column":24}}}) : helper)))
    + "\" target=\"_blank\" class=\"receipt-details-button-download-pdf\">\n						"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Download as PDF",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":188,"column":6},"end":{"line":188,"column":37}}}))
    + "\n					</a>\n				</div>\n		</div>\n	</div>\n</section>\n\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/DemoCloudAlp/Suite_Commerce_Base_Theme/20.1.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/DemoCloudAlp/Suite_Commerce_Base_Theme/20.1.0/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'receipt_details'; return template;});