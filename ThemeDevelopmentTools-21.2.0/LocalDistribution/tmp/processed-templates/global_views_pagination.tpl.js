define('global_views_pagination.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<nav class=\"global-views-pagination\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showPageIndicator") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":1},"end":{"line":5,"column":8}}})) != null ? stack1 : "")
    + "\n	<ul class=\"global-views-pagination-links "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showPaginationLinksCompactClass") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":42},"end":{"line":7,"column":127}}})) != null ? stack1 : "")
    + "\">\n\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isCurrentPageDifferentThan1") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.program(8, data, 0),"data":data,"loc":{"start":{"line":9,"column":2},"end":{"line":21,"column":9}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showPageList") : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":23,"column":2},"end":{"line":47,"column":9}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isCurrentPageLast") : depth0),{"name":"if","hash":{},"fn":container.program(18, data, 0),"inverse":container.program(20, data, 0),"data":data,"loc":{"start":{"line":49,"column":2},"end":{"line":61,"column":9}}})) != null ? stack1 : "")
    + "	</ul>\n</nav>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "	<p class=\"global-views-pagination-count\">"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"$(0) of $(1)",(depth0 != null ? compilerNameLookup(depth0,"currentPage") : depth0),(depth0 != null ? compilerNameLookup(depth0,"totalPages") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":4,"column":42},"end":{"line":4,"column":93}}}))
    + "</p>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return " global-views-pagination-links-compact ";
},"6":function(container,depth0,helpers,partials,data) {
    var helper;

  return "		<li class=\"global-views-pagination-prev\">\n			<a href=\""
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"previousPageURL") || (depth0 != null ? compilerNameLookup(depth0,"previousPageURL") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"previousPageURL","hash":{},"data":data,"loc":{"start":{"line":11,"column":12},"end":{"line":11,"column":31}}}) : helper)))
    + "\">\n				<i class=\"global-views-pagination-prev-icon\"></i>\n			</a>\n		</li>\n";
},"8":function(container,depth0,helpers,partials,data) {
    var helper;

  return "		<li class=\"global-views-pagination-prev-disabled\">\n			<a href=\""
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"currentPageURL") || (depth0 != null ? compilerNameLookup(depth0,"currentPageURL") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"currentPageURL","hash":{},"data":data,"loc":{"start":{"line":17,"column":12},"end":{"line":17,"column":30}}}) : helper)))
    + "\">\n				<i class=\"global-views-pagination-prev-icon\"></i>\n			</a>\n		</li>\n";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isRangeStartGreaterThan1") : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":24,"column":2},"end":{"line":28,"column":9}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"pages") : depth0),{"name":"each","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":30,"column":2},"end":{"line":40,"column":11}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isRangeEndLowerThanTotalPages") : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":42,"column":2},"end":{"line":46,"column":9}}})) != null ? stack1 : "");
},"11":function(container,depth0,helpers,partials,data) {
    var helper;

  return "		<li class=\"global-views-pagination-disabled\">\n			<a href=\""
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"currentPageURL") || (depth0 != null ? compilerNameLookup(depth0,"currentPageURL") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"currentPageURL","hash":{},"data":data,"loc":{"start":{"line":26,"column":12},"end":{"line":26,"column":30}}}) : helper)))
    + "\">...</a>\n		</li>\n";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"isCurrentPageActivePage") : depth0),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.program(16, data, 0),"data":data,"loc":{"start":{"line":31,"column":2},"end":{"line":39,"column":9}}})) != null ? stack1 : "");
},"14":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "		<li class=\"global-views-pagination-links-number\">\n			<a class=\"global-views-pagination-active\" href=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"fixedURL") || (depth0 != null ? compilerNameLookup(depth0,"fixedURL") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fixedURL","hash":{},"data":data,"loc":{"start":{"line":33,"column":51},"end":{"line":33,"column":63}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"pageIndex") || (depth0 != null ? compilerNameLookup(depth0,"pageIndex") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"pageIndex","hash":{},"data":data,"loc":{"start":{"line":33,"column":65},"end":{"line":33,"column":78}}}) : helper)))
    + "</a>\n		</li>\n";
},"16":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "		<li class=\"global-views-pagination-links-number\">\n			<a href=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"URL") || (depth0 != null ? compilerNameLookup(depth0,"URL") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"URL","hash":{},"data":data,"loc":{"start":{"line":37,"column":12},"end":{"line":37,"column":19}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"pageIndex") || (depth0 != null ? compilerNameLookup(depth0,"pageIndex") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"pageIndex","hash":{},"data":data,"loc":{"start":{"line":37,"column":21},"end":{"line":37,"column":34}}}) : helper)))
    + "</a>\n		</li>\n";
},"18":function(container,depth0,helpers,partials,data) {
    var helper;

  return "		<li class=\"global-views-pagination-next-disabled\">\n			<a href=\""
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"currentPageURL") || (depth0 != null ? compilerNameLookup(depth0,"currentPageURL") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"currentPageURL","hash":{},"data":data,"loc":{"start":{"line":51,"column":12},"end":{"line":51,"column":30}}}) : helper)))
    + "\">\n				<i class=\"global-views-pagination-next-icon\"></i>\n			</a>\n		</li>\n";
},"20":function(container,depth0,helpers,partials,data) {
    var helper;

  return "		<li class=\"global-views-pagination-next\">\n			<a href=\""
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"nextPageURL") || (depth0 != null ? compilerNameLookup(depth0,"nextPageURL") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"nextPageURL","hash":{},"data":data,"loc":{"start":{"line":57,"column":12},"end":{"line":57,"column":27}}}) : helper)))
    + "\">\n				<i class=\"global-views-pagination-next-icon\"></i>\n			</a>\n		</li>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"currentPageLowerThanTotalPagesAndCurrentPageGreaterThan0AndPagesCountGreaterThan1") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":64,"column":7}}})) != null ? stack1 : "")
    + "\n\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/DemoCloudAlp/Suite_Commerce_Base_Theme/20.1.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/DemoCloudAlp/Suite_Commerce_Base_Theme/20.1.0/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'global_views_pagination'; return template;});