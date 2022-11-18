define('product_list_bulk_actions.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    return "disabled";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "<div class=\"product-list-bulk-actions-button-group\">\n\n	<button class=\"product-list-bulk-actions-button-addtocart\" data-action=\"add-items-to-cart\" "
    + ((stack1 = compilerNameLookup(helpers,"unless").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isAddToCartEnabled") : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":92},"end":{"line":3,"column":141}}})) != null ? stack1 : "")
    + ">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Add Items to Cart",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":3,"column":142},"end":{"line":3,"column":175}}}))
    + "</button>\n	<button class=\"product-list-bulk-actions-button-expander\" data-toggle=\"dropdown\" aria-expanded=\"false\" "
    + ((stack1 = compilerNameLookup(helpers,"unless").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isAtLeastOneItemChecked") : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":104},"end":{"line":4,"column":158}}})) != null ? stack1 : "")
    + ">\n		<i></i>\n	</button>\n	\n	<ul class=\"product-list-bulk-actions-dropdown\" role=\"menu\">\n		<li>\n			<a href=\"#\" data-action=\"delete-items\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Remove Items",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":10,"column":42},"end":{"line":10,"column":70}}}))
    + "</a>\n		</li>\n	</ul>\n</div>\n\n\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/DemoCloudAlp/Suite_Commerce_Base_Theme/20.1.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/DemoCloudAlp/Suite_Commerce_Base_Theme/20.1.0/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'product_list_bulk_actions'; return template;});