define('global_views_rating_by_star.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"global-views-rating-by-star\" data-id=\"stars"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"index") || (depth0 != null ? compilerNameLookup(depth0,"index") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":2,"column":55},"end":{"line":2,"column":64}}}) : helper)))
    + "\">\n  <ul>\n    <li class=\"global-views-rating-by-star-label\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showLink") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":6},"end":{"line":7,"column":13}}})) != null ? stack1 : "")
    + "        \n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(data && compilerNameLookup(data,"last")),{"name":"if","hash":{},"fn":container.program(4, data, 0, blockParams, depths),"inverse":container.program(6, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":9,"column":8},"end":{"line":13,"column":15}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showLink") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":15,"column":6},"end":{"line":17,"column":13}}})) != null ? stack1 : "")
    + "    </li>\n    <li class=\"global-views-rating-by-star-percentage-area\">\n      <div class=\"global-views-rating-by-star-percentage-area-progress-bar\">\n        <div class=\"global-views-rating-by-star-percentage-area-progress-bar-filled\" style=\"width: "
    + alias4(((helper = (helper = compilerNameLookup(helpers,"percentage") || (depth0 != null ? compilerNameLookup(depth0,"percentage") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"percentage","hash":{},"data":data,"loc":{"start":{"line":21,"column":99},"end":{"line":21,"column":113}}}) : helper)))
    + "%;\">\n        </div>\n      </div>\n    </li>\n    <li class=\"global-views-rating-by-star-second-label\">\n\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showLink") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":27,"column":6},"end":{"line":29,"column":13}}})) != null ? stack1 : "")
    + "        \n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depths[1] != null ? compilerNameLookup(depths[1],"showCount") : depths[1]),{"name":"if","hash":{},"fn":container.program(10, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":31,"column":8},"end":{"line":39,"column":15}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showLink") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":41,"column":6},"end":{"line":43,"column":13}}})) != null ? stack1 : "")
    + "    </li>\n  </ul>  \n</div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper;

  return "        <a href=\""
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"url") || (depth0 != null ? compilerNameLookup(depth0,"url") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"url","hash":{},"data":data,"loc":{"start":{"line":6,"column":17},"end":{"line":6,"column":24}}}) : helper)))
    + "\" class=\"global-views-rating-by-star-link\">\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "          "
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"1 star",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":10,"column":10},"end":{"line":10,"column":32}}}))
    + "\n";
},"6":function(container,depth0,helpers,partials,data) {
    return "          "
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"$(0) stars",(depth0 != null ? compilerNameLookup(depth0,"index") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":12,"column":10},"end":{"line":12,"column":42}}}))
    + "\n";
},"8":function(container,depth0,helpers,partials,data) {
    return "        </a>\n";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "          <span class=\"global-views-rating-by-star-label-count\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"isOneReview") : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.program(13, data, 0),"data":data,"loc":{"start":{"line":33,"column":12},"end":{"line":37,"column":19}}})) != null ? stack1 : "")
    + "          </span>\n";
},"11":function(container,depth0,helpers,partials,data) {
    return "              "
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"1 review",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":34,"column":14},"end":{"line":34,"column":38}}}))
    + "\n";
},"13":function(container,depth0,helpers,partials,data) {
    return "              "
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"$(0) reviews",(depth0 != null ? compilerNameLookup(depth0,"count") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":36,"column":14},"end":{"line":36,"column":48}}}))
    + "\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"rates") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":47,"column":9}}})) != null ? stack1 : "")
    + "\n\n\n";
},"useData":true,"useDepths":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/DemoCloudAlp/Suite_Commerce_Base_Theme/20.1.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/DemoCloudAlp/Suite_Commerce_Base_Theme/20.1.0/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'global_views_rating_by_star'; return template;});