define('cart_quickaddtocart.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "		<div data-view=\"AddToCart\">\n			<input name=\"quantity\" data-action=\"setquantity\" class=\"cart-quickaddtocart-quantity\" type=\"number\" min=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"minimumQuantity") || (depth0 != null ? compilerNameLookup(depth0,"minimumQuantity") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"minimumQuantity","hash":{},"data":data,"loc":{"start":{"line":5,"column":108},"end":{"line":5,"column":127}}}) : helper)))
    + "\""
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isMaximumQuantity") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":128},"end":{"line":5,"column":186}}})) != null ? stack1 : "")
    + " value=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"quantity") || (depth0 != null ? compilerNameLookup(depth0,"quantity") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"quantity","hash":{},"data":data,"loc":{"start":{"line":5,"column":194},"end":{"line":5,"column":206}}}) : helper)))
    + "\"/>\n		</div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper;

  return " max=\""
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"maximumQuantity") || (depth0 != null ? compilerNameLookup(depth0,"maximumQuantity") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"maximumQuantity","hash":{},"data":data,"loc":{"start":{"line":5,"column":159},"end":{"line":5,"column":178}}}) : helper)))
    + "\"";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<form class=\"cart-quickaddtocart\" data-action=\"add-to-cart\">\n	<div data-view=\"ProductViewsPrice.Price\" class=\"cart-quickaddtocart-price\"></div>\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"showQuickAddToCartButton") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":1},"end":{"line":7,"column":8}}})) != null ? stack1 : "")
    + "</form>\n\n\n\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/DemoCloudAlp/Suite_Commerce_Base_Theme/20.1.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/DemoCloudAlp/Suite_Commerce_Base_Theme/20.1.0/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'cart_quickaddtocart'; return template;});