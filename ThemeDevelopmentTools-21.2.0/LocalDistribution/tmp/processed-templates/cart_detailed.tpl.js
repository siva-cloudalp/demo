define('cart_detailed.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "			<h1 class=\"cart-detailed-title\">\n				"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"pageHeader") || (depth0 != null ? compilerNameLookup(depth0,"pageHeader") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"pageHeader","hash":{},"data":data,"loc":{"start":{"line":6,"column":4},"end":{"line":6,"column":18}}}) : helper)))
    + "\n				<small class=\"cart-detailed-title-details-count\">\n					"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"productsAndItemsCount") || (depth0 != null ? compilerNameLookup(depth0,"productsAndItemsCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"productsAndItemsCount","hash":{},"data":data,"loc":{"start":{"line":8,"column":5},"end":{"line":8,"column":30}}}) : helper)))
    + "\n				</small>\n			</h1>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "				<h2 class=\"cart-detailed-title\">"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Your Shopping Cart is empty",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":12,"column":36},"end":{"line":12,"column":79}}}))
    + "</h2>\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "cart-detailed-left ";
},"7":function(container,depth0,helpers,partials,data) {
    return "cart-detailed-empty";
},"9":function(container,depth0,helpers,partials,data) {
    return "				<div data-view=\"Quick.Order.EmptyCart\">\n					<p class=\"cart-detailed-body-info\">\n						"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Continue Shopping on our <a href=\"/\" data-touchpoint=\"home\">Home Page</a>.",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":24,"column":6},"end":{"line":24,"column":97}}}))
    + "\n					</p>\n				</div>\n";
},"11":function(container,depth0,helpers,partials,data) {
    return "			<div class=\"cart-detailed-proceed-to-checkout-container\">\n				<a class=\"cart-detailed-proceed-to-checkout\" data-action=\"sticky\" href=\"#\" data-touchpoint=\"checkout\" data-hashtag=\"#\">\n					"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Proceed to Checkout",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":34,"column":5},"end":{"line":34,"column":40}}}))
    + "\n				</a>\n			</div>\n			<div data-confirm-message class=\"cart-detailed-confirm-message\"></div>\n\n			<div class=\"cart-detailed-item-view-cell-actionable-table cart-detailed-table-row-with-border\">\n				<div data-view=\"Item.ListNavigable\">\n				</div>\n			</div>\n\n			<div class=\"cart-detailed-item-free-info\" data-view=\"FreeGift.Info\"></div>\n			<div class=\"cart-detailed-item-free\" data-view=\"Item.FreeGift\"></div>\n";
},"13":function(container,depth0,helpers,partials,data) {
    return "		<section class=\"cart-detailed-right\">\n			<div data-view=\"Cart.Summary\"></div>\n		</section>\n";
},"15":function(container,depth0,helpers,partials,data) {
    return "			<div data-view=\"SavedForLater\" class=\"cart-detailed-savedforlater\"></div>\n\n			<div data-view=\"RecentlyViewed.Items\" class=\"cart-detailed-recently-viewed\"></div>\n			<div data-view=\"Related.Items\" class=\"cart-detailed-related\"></div>\n			<div data-view=\"Correlated.Items\" class=\"cart-detailed-correlated\"></div>\n";
},"17":function(container,depth0,helpers,partials,data) {
    return "			<div data-view=\"SavedForLater\" class=\"cart-detailed-savedforlater\"></div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"cart-detailed\">\n	<div class=\"cart-detailed-view-header\">\n		<header class=\"cart-detailed-header\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showLines") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":4,"column":3},"end":{"line":13,"column":10}}})) != null ? stack1 : "")
    + "		</header>\n	</div>\n\n	<div data-cms-area=\"cart_detailed_cms_area_1\" data-cms-area-filters=\"path\"></div>\n\n	<div class=\"cart-detailed-body\">\n		<section class=\""
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showLines") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data,"loc":{"start":{"line":20,"column":18},"end":{"line":20,"column":88}}})) != null ? stack1 : "")
    + "\">\n"
    + ((stack1 = compilerNameLookup(helpers,"unless").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showLines") : depth0),{"name":"unless","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":21,"column":3},"end":{"line":27,"column":14}}})) != null ? stack1 : "")
    + "\n			<div data-view=\"Quick.Order\"></div>\n\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showLines") : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":31,"column":3},"end":{"line":46,"column":10}}})) != null ? stack1 : "")
    + "\n			<div data-cms-area=\"cart_detailed_cms_area_2\" data-cms-area-filters=\"path\"></div>\n		</section>\n\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showLines") : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":51,"column":2},"end":{"line":55,"column":9}}})) != null ? stack1 : "")
    + "	</div>\n	<div class=\"cart-detailed-footer\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showLines") : depth0),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.program(17, data, 0),"data":data,"loc":{"start":{"line":58,"column":2},"end":{"line":66,"column":9}}})) != null ? stack1 : "")
    + "	</div>\n\n	<div data-cms-area=\"cart_detailed_cms_area_3\" data-cms-area-filters=\"path\"></div>\n</div>\n\n\n\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/DemoCloudAlp/Suite_Commerce_Base_Theme/20.1.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/DemoCloudAlp/Suite_Commerce_Base_Theme/20.1.0/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'cart_detailed'; return template;});