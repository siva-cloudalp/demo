define('product_list_details_later.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    return "						"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"No products yet",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":11,"column":6},"end":{"line":11,"column":37}}}))
    + "\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"hasMoreThanOneItem") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(6, data, 0),"data":data,"loc":{"start":{"line":13,"column":6},"end":{"line":17,"column":13}}})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    return "							"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"$(0) Products",(depth0 != null ? compilerNameLookup(depth0,"itemsLength") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":14,"column":7},"end":{"line":14,"column":48}}}))
    + "\n";
},"6":function(container,depth0,helpers,partials,data) {
    return "							"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"$(0) Product",(depth0 != null ? compilerNameLookup(depth0,"itemsLength") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":16,"column":7},"end":{"line":16,"column":47}}}))
    + "\n";
},"8":function(container,depth0,helpers,partials,data) {
    return "				<div class=\"product-list-details-later-explanation\">\n					"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"To buy an item now, click \"Move to Cart\"",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":26,"column":5},"end":{"line":26,"column":61}}}))
    + "\n				</div>\n				<div class=\"product-list-details-later-list-items\" data-type=\"product-list-items\">\n					<div data-view=\"ProductList.DetailsLater.Collection\"></div>\n				</div>\n";
},"10":function(container,depth0,helpers,partials,data) {
    return "				<div class=\"product-list-details-later-header-no-items\">\n					"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"You don't have items in this list yet.",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":33,"column":5},"end":{"line":33,"column":60}}}))
    + "\n				</div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "<div class=\"product-list-details-later\">\n	<button class=\"product-list-details-later-button-saveforlater-pusher\" data-type=\"sc-pusher\" data-target=\"cart-save-for-later\">\n		"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Saved for Later",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":3,"column":2},"end":{"line":3,"column":33}}}))
    + " <i></i>\n	</button>\n	<div class=\"product-list-details-later-row\" data-action=\"pushable\" data-id=\"cart-save-for-later\">\n		<div class=\"product-list-details-later-col\">\n			<h3 class=\"product-list-details-later-list-header-title\">\n				"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Saved for Later",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":8,"column":4},"end":{"line":8,"column":35}}}))
    + "\n				<small class=\"product-list-details-later-shopping-cart-title-details-count\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isEmpty") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":10,"column":5},"end":{"line":18,"column":12}}})) != null ? stack1 : "")
    + "				</small>\n			</h3>\n			\n			<div data-confirm-message class=\"product-list-details-later-confirm-message\"></div>\n			\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasItems") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.program(10, data, 0),"data":data,"loc":{"start":{"line":24,"column":3},"end":{"line":35,"column":10}}})) != null ? stack1 : "")
    + "		</div>\n	</div>\n</div>\n\n\n\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/DemoCloudAlp/Suite_Commerce_Base_Theme/20.1.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/DemoCloudAlp/Suite_Commerce_Base_Theme/20.1.0/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'product_list_details_later'; return template;});