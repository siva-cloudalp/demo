define('product_list_new.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    return "	<div class=\"product-list-new-modal-body\">\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "					"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Your list name <small class=\"product-list-new-form-required\">*</small>",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":15,"column":5},"end":{"line":15,"column":91}}}))
    + "\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "					"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Name your new list <small class=\"product-list-new-form-required\">*</small>",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":17,"column":5},"end":{"line":17,"column":95}}}))
    + "\n";
},"7":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"List name",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":21,"column":153},"end":{"line":21,"column":178}}}));
},"9":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"New list name",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":21,"column":186},"end":{"line":21,"column":215}}}));
},"11":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"name") || (depth0 != null ? compilerNameLookup(depth0,"name") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"name","hash":{},"data":data,"loc":{"start":{"line":21,"column":245},"end":{"line":21,"column":253}}}) : helper)));
},"13":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"description") || (depth0 != null ? compilerNameLookup(depth0,"description") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"description","hash":{},"data":data,"loc":{"start":{"line":31,"column":190},"end":{"line":31,"column":205}}}) : helper)));
},"15":function(container,depth0,helpers,partials,data) {
    return "	</div>\n";
},"17":function(container,depth0,helpers,partials,data) {
    return "product-list-new-modal-footer";
},"19":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Save",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":42,"column":17},"end":{"line":42,"column":37}}}));
},"21":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Create List",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":42,"column":45},"end":{"line":42,"column":72}}}));
},"23":function(container,depth0,helpers,partials,data) {
    return "			<button class=\"product-list-new-form-cancel\" data-dismiss=\"modal\">"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Cancel",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":45,"column":69},"end":{"line":45,"column":91}}}))
    + "</button>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "<form action=\"#\" class=\"product-list-new\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"inModal") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":1},"end":{"line":4,"column":8}}})) != null ? stack1 : "")
    + "\n		<small class=\"product-list-new-required\">\n			"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Required <span class=\"product-list-new-form-required\">*</span>",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":7,"column":3},"end":{"line":7,"column":81}}}))
    + "\n		</small>\n\n		<div data-type=\"alert-placeholder\"></div>\n\n		<div data-validation=\"control-group\">\n			<label for=\"product-list-new-name\" class=\"product-list-new-form-label\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isEdit") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data,"loc":{"start":{"line":14,"column":4},"end":{"line":18,"column":11}}})) != null ? stack1 : "")
    + "			</label>\n			<div class=\"product-list-new-form-controls\"  data-validation=\"control\">\n				<input id=\"product-list-new-name\" type=\"text\" name=\"name\" data-action=\"prevent-enter\" class=\"product-list-new-form-input\" placeholder=\""
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isEdit") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(9, data, 0),"data":data,"loc":{"start":{"line":21,"column":139},"end":{"line":21,"column":222}}})) != null ? stack1 : "")
    + "\" value=\""
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isEdit") : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":21,"column":231},"end":{"line":21,"column":260}}})) != null ? stack1 : "")
    + "\">\n			</div>\n		</div>\n\n		<div class=\"product-list-new-form-controls-group\" data-validation=\"control-group\">\n			<label for=\"product-list-new-description\" class=\"product-list-new-form-label\">\n				"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Notes for the list",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":27,"column":4},"end":{"line":27,"column":38}}}))
    + "\n				<span class=\"product-list-new-form-label-optional\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"(optional)",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":28,"column":55},"end":{"line":28,"column":81}}}))
    + "</span>\n			</label>\n			<div class=\"product-list-new-form-controls\"  data-validation=\"control\">\n				<textarea id=\"product-list-new-description\" class=\"product-list-new-form-textarea\" name=\"description\" placeholder=\""
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Add a note or description for your list",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":31,"column":119},"end":{"line":31,"column":174}}}))
    + "\">"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isEdit") : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":31,"column":176},"end":{"line":31,"column":212}}})) != null ? stack1 : "")
    + "</textarea>\n			</div>\n		</div>\n\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"inModal") : depth0),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":35,"column":1},"end":{"line":37,"column":8}}})) != null ? stack1 : "")
    + "\n	<div class=\""
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"inModal") : depth0),{"name":"if","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":39,"column":13},"end":{"line":39,"column":64}}})) != null ? stack1 : "")
    + " product-list-new-form-controls-group\">\n\n		<button type=\"submit\" class=\"product-list-new-form-submit\">\n			"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isEdit") : depth0),{"name":"if","hash":{},"fn":container.program(19, data, 0),"inverse":container.program(21, data, 0),"data":data,"loc":{"start":{"line":42,"column":3},"end":{"line":42,"column":79}}})) != null ? stack1 : "")
    + "\n		</button>\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"inModal") : depth0),{"name":"if","hash":{},"fn":container.program(23, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":44,"column":2},"end":{"line":46,"column":9}}})) != null ? stack1 : "")
    + "	</div>\n</form>\n\n\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/DemoCloudAlp/Suite_Commerce_Base_Theme/20.1.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/DemoCloudAlp/Suite_Commerce_Base_Theme/20.1.0/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'product_list_new'; return template;});