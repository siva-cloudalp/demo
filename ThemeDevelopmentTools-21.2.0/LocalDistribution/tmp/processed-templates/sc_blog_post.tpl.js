define('sc_blog_post.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    return "    <h3>"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Loading",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":4,"column":8},"end":{"line":4,"column":31}}}))
    + "...</h3>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "	\n		<div class=\"blogpost-heading\">\n			<h1 class=\"blogpost-title\">\n				"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"title") || (depth0 != null ? compilerNameLookup(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":9,"column":4},"end":{"line":9,"column":13}}}) : helper)))
    + "\n			</h1>\n\n			<p class=\"blogpost-author-date\">\n				By "
    + alias4(((helper = (helper = compilerNameLookup(helpers,"author") || (depth0 != null ? compilerNameLookup(depth0,"author") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"author","hash":{},"data":data,"loc":{"start":{"line":13,"column":7},"end":{"line":13,"column":17}}}) : helper)))
    + " | "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"datePublished") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":20},"end":{"line":13,"column":68}}})) != null ? stack1 : "")
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"category") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":68},"end":{"line":13,"column":103}}})) != null ? stack1 : "")
    + "\n			</p>\n		</div>\n		<div class=\"blogpost-content-row\">\n			<div class=\"col-sm-9\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"headerImage") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":18,"column":4},"end":{"line":22,"column":11}}})) != null ? stack1 : "")
    + "				<div class=\"blogpost-content\">\n					"
    + ((stack1 = ((helper = (helper = compilerNameLookup(helpers,"content") || (depth0 != null ? compilerNameLookup(depth0,"content") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"content","hash":{},"data":data,"loc":{"start":{"line":24,"column":5},"end":{"line":24,"column":18}}}) : helper))) != null ? stack1 : "")
    + "\n				</div>\n			</div>\n			<div class=\"col-sm-3 blog-recent-post\">\n			\n				<h4>Recent Posts</h4>	\n				"
    + ((stack1 = compilerNameLookup(helpers,"each").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"list") : depth0),{"name":"each","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":30,"column":4},"end":{"line":30,"column":68}}})) != null ? stack1 : "")
    + "\n			</div>\n        </div>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"datePublished") || (depth0 != null ? compilerNameLookup(depth0,"datePublished") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"datePublished","hash":{},"data":data,"loc":{"start":{"line":13,"column":41},"end":{"line":13,"column":58}}}) : helper)))
    + " | ";
},"6":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"category") || (depth0 != null ? compilerNameLookup(depth0,"category") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"category","hash":{},"data":data,"loc":{"start":{"line":13,"column":84},"end":{"line":13,"column":96}}}) : helper)));
},"8":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, alias4="function";

  return "				<div class=\"blogpost-heading-image\">\n					<img src=\""
    + alias3((compilerNameLookup(helpers,"resizeImage")||(depth0 && compilerNameLookup(depth0,"resizeImage"))||alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"headerImage") : depth0),(depth0 != null ? compilerNameLookup(depth0,"headerImageResizeId") : depth0),{"name":"resizeImage","hash":{},"data":data,"loc":{"start":{"line":20,"column":15},"end":{"line":20,"column":62}}}))
    + "\" alt=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"headerImageAlt") || (depth0 != null ? compilerNameLookup(depth0,"headerImageAlt") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"headerImageAlt","hash":{},"data":data,"loc":{"start":{"line":20,"column":69},"end":{"line":20,"column":87}}}) : helper)))
    + "\" title=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"headerImageAlt") || (depth0 != null ? compilerNameLookup(depth0,"headerImageAlt") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"headerImageAlt","hash":{},"data":data,"loc":{"start":{"line":20,"column":96},"end":{"line":20,"column":114}}}) : helper)))
    + "\" />\n				</div>\n";
},"10":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "<a href=\""
    + alias2(alias1((depth0 != null ? compilerNameLookup(depth0,"url") : depth0), depth0))
    + "\">"
    + alias2(alias1((depth0 != null ? compilerNameLookup(depth0,"title") : depth0), depth0))
    + "</a>";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"container-fluid blogpost-container\">\n\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"loading") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":3,"column":4},"end":{"line":33,"column":11}}})) != null ? stack1 : "")
    + "\n</div>\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/NetSuite/SC_Blog/1.1.1/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/DemoCloudAlp/Suite_Commerce_Base_Theme/20.1.0/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'sc_blog_post'; return template;});