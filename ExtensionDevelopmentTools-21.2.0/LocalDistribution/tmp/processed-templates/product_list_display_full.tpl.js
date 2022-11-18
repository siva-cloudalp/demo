define('product_list_display_full.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    return "active";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "	<td class=\"product-list-display-full-select\">\n		<input type=\"checkbox\" value=\""
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"lineId") || (depth0 != null ? compilerNameLookup(depth0,"lineId") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"lineId","hash":{},"data":data,"loc":{"start":{"line":4,"column":32},"end":{"line":4,"column":42}}}) : helper)))
    + "\" data-action=\"select\" "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isChecked") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":65},"end":{"line":4,"column":96}}})) != null ? stack1 : "")
    + ">\n	</td>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "checked";
},"6":function(container,depth0,helpers,partials,data) {
    return "		<p class=\"product-list-display-full-rating\">\n				<span data-view=\"GlobalViews.StarRating\"></span>\n			</p>\n";
},"8":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "			<p class=\"product-list-display-full-date\">\n				<span class=\"product-list-display-full-date-label\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Added on: ",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":51,"column":55},"end":{"line":51,"column":81}}}))
    + "</span>\n				<span class=\"product-list-display-full-date-value\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"itemCreatedDate") || (depth0 != null ? compilerNameLookup(depth0,"itemCreatedDate") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"itemCreatedDate","hash":{},"data":data,"loc":{"start":{"line":52,"column":55},"end":{"line":52,"column":74}}}) : helper)))
    + "</span>\n			</p>\n";
},"10":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "			<span class=\"product-list-display-full-notes-label\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Notes: ",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":58,"column":55},"end":{"line":58,"column":78}}}))
    + "</span>\n			<span class=\"product-list-display-full-notes-value\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"description") || (depth0 != null ? compilerNameLookup(depth0,"description") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"description","hash":{},"data":data,"loc":{"start":{"line":59,"column":55},"end":{"line":59,"column":70}}}) : helper)))
    + "</span>\n";
},"12":function(container,depth0,helpers,partials,data) {
    return "			<button class=\"product-list-display-full-edit\" data-action=\"edit-item\" data-toggle=\"show-in-modal\">"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Edit",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":66,"column":102},"end":{"line":66,"column":122}}}))
    + "</button>\n";
},"14":function(container,depth0,helpers,partials,data) {
    return "			<div class=\"product-list-display-full-move\" data-type=\"productlist-control-move\"></div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<tr class=\""
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isChecked") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":11},"end":{"line":1,"column":41}}})) != null ? stack1 : "")
    + "\" data-id=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"lineId") || (depth0 != null ? compilerNameLookup(depth0,"lineId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lineId","hash":{},"data":data,"loc":{"start":{"line":1,"column":52},"end":{"line":1,"column":62}}}) : helper)))
    + "\" data-item-id=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"itemId") || (depth0 != null ? compilerNameLookup(depth0,"itemId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"itemId","hash":{},"data":data,"loc":{"start":{"line":1,"column":78},"end":{"line":1,"column":88}}}) : helper)))
    + "\" data-action=\"product-list-item\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showCheckbox") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":1},"end":{"line":6,"column":8}}})) != null ? stack1 : "")
    + "\n	<td class=\"product-list-display-full-thumnail\">\n		<img src=\""
    + alias4((compilerNameLookup(helpers,"resizeImage")||(depth0 && compilerNameLookup(depth0,"resizeImage"))||alias2).call(alias1,((stack1 = (depth0 != null ? compilerNameLookup(depth0,"thumbnail") : depth0)) != null ? compilerNameLookup(stack1,"url") : stack1),"thumbnail",{"name":"resizeImage","hash":{},"data":data,"loc":{"start":{"line":9,"column":12},"end":{"line":9,"column":53}}}))
    + "\" alt=\""
    + alias4(container.lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"thumbnail") : depth0)) != null ? compilerNameLookup(stack1,"altimagetext") : stack1), depth0))
    + "\">\n	</td>\n\n	<td class=\"product-list-display-full-details\">\n		<p class=\"product-list-display-full-name\">\n			<a class=\"product-list-display-full-name-anchor\" "
    + ((stack1 = ((helper = (helper = compilerNameLookup(helpers,"linkAttributes") || (depth0 != null ? compilerNameLookup(depth0,"linkAttributes") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"linkAttributes","hash":{},"data":data,"loc":{"start":{"line":14,"column":52},"end":{"line":14,"column":72}}}) : helper))) != null ? stack1 : "")
    + "> "
    + alias4(((helper = (helper = compilerNameLookup(helpers,"productName") || (depth0 != null ? compilerNameLookup(depth0,"productName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"productName","hash":{},"data":data,"loc":{"start":{"line":14,"column":74},"end":{"line":14,"column":89}}}) : helper)))
    + "</a>\n		</p>\n\n		<div class=\"product-list-display-full-price\">\n			<div data-view=\"ItemViews.Price\"></div>\n		</div>\n\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showRating") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":21,"column":2},"end":{"line":25,"column":9}}})) != null ? stack1 : "")
    + "\n		<div data-view=\"Item.SelectedOptions\"></div>\n\n		<div class=\"product-list-display-full-stock\">\n			<div data-view=\"ItemViews.Stock\"></div>\n\n			<div data-view=\"StockDescription\"></div>\n		</div>\n\n		<div data-view=\"ProductList.DetailsMinQuantity\"></div>\n	</td>\n\n	<td class=\"product-list-display-full-extras\">\n		<p class=\"product-list-display-full-quantity\">\n			<span class=\"product-list-display-full-quantity-label\">"
    + alias4((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Desired Quantity: ",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":40,"column":58},"end":{"line":40,"column":92}}}))
    + "</span>\n			<span class=\"product-list-display-full-quantity-value\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"quantity") || (depth0 != null ? compilerNameLookup(depth0,"quantity") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"quantity","hash":{},"data":data,"loc":{"start":{"line":41,"column":58},"end":{"line":41,"column":70}}}) : helper)))
    + "</span>\n		</p>\n\n		<p class=\"product-list-display-full-priority\">\n			<span class=\"product-list-display-full-priority-label\">"
    + alias4((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Priority: ",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":45,"column":58},"end":{"line":45,"column":84}}}))
    + "</span>\n			<span class=\"product-list-display-full-priority-value\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"priorityName") || (depth0 != null ? compilerNameLookup(depth0,"priorityName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"priorityName","hash":{},"data":data,"loc":{"start":{"line":46,"column":58},"end":{"line":46,"column":74}}}) : helper)))
    + "</span>\n		</p>\n\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showAddedOn") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":49,"column":2},"end":{"line":54,"column":9}}})) != null ? stack1 : "")
    + "\n		<p class=\"product-list-display-full-notes\" data-type=\"item-details-notes\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasDescription") : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":57,"column":3},"end":{"line":60,"column":10}}})) != null ? stack1 : "")
    + "		</p>\n	</td>\n\n	<td class=\"product-list-display-full-actions\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showEdit") : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":65,"column":2},"end":{"line":67,"column":9}}})) != null ? stack1 : "")
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showMoveAction") : depth0),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":68,"column":2},"end":{"line":70,"column":9}}})) != null ? stack1 : "")
    + "	</td>\n</tr>\n\n\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/DemoCloudAlp/Suite_Commerce_Base_Theme/20.1.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/DemoCloudAlp/Suite_Commerce_Base_Theme/20.1.0/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'product_list_display_full'; return template;});