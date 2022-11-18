define('sc_blog_list.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    return "    <h3>"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Loading",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":3,"column":8},"end":{"line":3,"column":31}}}))
    + "...</h3>\n	\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "    \n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"postsNotFound") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":2},"end":{"line":9,"column":9}}})) != null ? stack1 : "")
    + "		<div class=\"blogpostlist-list\" data-view=\"PostList.Collection\"></div>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var helper;

  return "			<p>"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"postsNotFoundText") || (depth0 != null ? compilerNameLookup(depth0,"postsNotFoundText") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"postsNotFoundText","hash":{},"data":data,"loc":{"start":{"line":8,"column":6},"end":{"line":8,"column":27}}}) : helper)))
    + "</p>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<section class=\"blogpostlist-container container\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"loading") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":2,"column":4},"end":{"line":11,"column":11}}})) != null ? stack1 : "")
    + "</section>\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/NetSuite/SC_Blog/1.1.1/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/DemoCloudAlp/Suite_Commerce_Base_Theme/20.1.0/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'sc_blog_list'; return template;});