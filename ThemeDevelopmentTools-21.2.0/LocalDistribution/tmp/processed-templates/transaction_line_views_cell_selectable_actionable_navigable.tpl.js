define('transaction_line_views_cell_selectable_actionable_navigable.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    return " selected";
},"3":function(container,depth0,helpers,partials,data) {
    return "checked";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function";

  return "			<a "
    + ((stack1 = ((helper = (helper = compilerNameLookup(helpers,"linkAttributes") || (depth0 != null ? compilerNameLookup(depth0,"linkAttributes") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"linkAttributes","hash":{},"data":data,"loc":{"start":{"line":13,"column":6},"end":{"line":13,"column":26}}}) : helper))) != null ? stack1 : "")
    + " class=\"\">\n				"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"itemName") || (depth0 != null ? compilerNameLookup(depth0,"itemName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"itemName","hash":{},"data":data,"loc":{"start":{"line":14,"column":4},"end":{"line":14,"column":16}}}) : helper)))
    + "\n			</a>\n";
},"7":function(container,depth0,helpers,partials,data) {
    var helper;

  return "			<span class=\"transaction-line-views-cell-selectable-actionable-navigable-viewonly\">\n				"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"itemName") || (depth0 != null ? compilerNameLookup(depth0,"itemName") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"itemName","hash":{},"data":data,"loc":{"start":{"line":18,"column":4},"end":{"line":18,"column":16}}}) : helper)))
    + "\n			</span>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<tr class=\"transaction-line-views-cell-selectable-actionable-navigable-row"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isLineChecked") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":74},"end":{"line":1,"column":111}}})) != null ? stack1 : "")
    + "\" data-action=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"actionType") || (depth0 != null ? compilerNameLookup(depth0,"actionType") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"actionType","hash":{},"data":data,"loc":{"start":{"line":1,"column":126},"end":{"line":1,"column":140}}}) : helper)))
    + "\" data-id=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"lineId") || (depth0 != null ? compilerNameLookup(depth0,"lineId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lineId","hash":{},"data":data,"loc":{"start":{"line":1,"column":151},"end":{"line":1,"column":161}}}) : helper)))
    + "\">\n	<td class=\"transaction-line-views-cell-selectable-actionable-navigable-select\">\n		<input type=\"checkbox\" value=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"itemId") || (depth0 != null ? compilerNameLookup(depth0,"itemId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"itemId","hash":{},"data":data,"loc":{"start":{"line":3,"column":32},"end":{"line":3,"column":42}}}) : helper)))
    + "\" data-action=\"select\" "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isLineChecked") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":65},"end":{"line":3,"column":100}}})) != null ? stack1 : "")
    + ">\n	</td>\n\n	<td class=\"transaction-line-views-cell-selectable-actionable-navigable-thumbnail\">\n		<img class=\"transaction-line-views-cell-selectable-actionable-navigable-thumbnail-image\" src=\""
    + alias4((compilerNameLookup(helpers,"resizeImage")||(depth0 && compilerNameLookup(depth0,"resizeImage"))||alias2).call(alias1,((stack1 = (depth0 != null ? compilerNameLookup(depth0,"thumbnail") : depth0)) != null ? compilerNameLookup(stack1,"url") : stack1),"thumbnail",{"name":"resizeImage","hash":{},"data":data,"loc":{"start":{"line":7,"column":96},"end":{"line":7,"column":137}}}))
    + "\" alt=\""
    + alias4(container.lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"thumbnail") : depth0)) != null ? compilerNameLookup(stack1,"altimagetext") : stack1), depth0))
    + "\">\n	</td>\n\n	<td class=\"transaction-line-views-cell-selectable-actionable-navigable-details\">\n		<div class=\"transaction-line-views-cell-selectable-actionable-navigable-name\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isNavigable") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data,"loc":{"start":{"line":12,"column":3},"end":{"line":20,"column":10}}})) != null ? stack1 : "")
    + "		</div>\n\n		<div class=\"transaction-line-views-cell-selectable-actionable-navigable-price\">\n			<div data-view=\"Item.Price\"></div>\n		</div>\n\n		<div data-view=\"Item.Sku\"></div>\n\n		<div class=\"transaction-line-views-cell-selectable-actionable-navigable-options\">\n			<div data-view=\"Item.SelectedOptions\"></div>\n		</div>\n	</td>\n\n	<td class=\"transaction-line-views-cell-selectable-actionable-navigable-extras\">\n		<div class=\"\" data-view=\"Item.Summary.View\"></div>\n	</td>\n\n	<td class=\"transaction-line-views-cell-selectable-actionable-navigable-actions\">\n		<div data-view=\"Item.Actions.View\" class=\"\"></div>\n	</td>\n</tr>\n\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/DemoCloudAlp/Suite_Commerce_Base_Theme/20.1.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/DemoCloudAlp/Suite_Commerce_Base_Theme/20.1.0/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'transaction_line_views_cell_selectable_actionable_navigable'; return template;});