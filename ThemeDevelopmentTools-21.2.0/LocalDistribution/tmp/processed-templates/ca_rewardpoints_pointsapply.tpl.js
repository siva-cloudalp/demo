define('ca_rewardpoints_pointsapply.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "      <div class=\"redeem-points-container\">\n    <span class=\"redeem-points-code\">\n      <span class=\"redeem-promocode-list-item-code-label\">Points Redeem : </span>\n      <span class=\"redeem-points-value\">"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"Redeemdata") : depth0)) != null ? compilerNameLookup(stack1,"points") : stack1), depth0))
    + "</span>\n    </span>\n    <a href=\"#\" data-action=\"remove-redeem-points\" data-id=\"\">\n      <span class=\"redeem-promocode-list-item-remove-action\"><i></i>\n      </span>\n    </a>\n  </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "<section class=\"redeempoints-info-card\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"Redeemdata") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":2},"end":{"line":13,"column":10}}})) != null ? stack1 : "")
    + "</section>\n\n\n<!--\n  Available helpers:\n  "
    + alias3((compilerNameLookup(helpers,"getExtensionAssetsPath")||(depth0 && compilerNameLookup(depth0,"getExtensionAssetsPath"))||alias2).call(alias1,"img/image.jpg",{"name":"getExtensionAssetsPath","hash":{},"data":data,"loc":{"start":{"line":19,"column":2},"end":{"line":19,"column":45}}}))
    + " - reference assets in your extension\n  \n  "
    + alias3((compilerNameLookup(helpers,"getExtensionAssetsPathWithDefault")||(depth0 && compilerNameLookup(depth0,"getExtensionAssetsPathWithDefault"))||alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"context_var") : depth0),"img/image.jpg",{"name":"getExtensionAssetsPathWithDefault","hash":{},"data":data,"loc":{"start":{"line":21,"column":2},"end":{"line":21,"column":68}}}))
    + " - use context_var value i.e. configuration variable. If it does not exist, fallback to an asset from the extension assets folder\n  \n  "
    + alias3((compilerNameLookup(helpers,"getThemeAssetsPath")||(depth0 && compilerNameLookup(depth0,"getThemeAssetsPath"))||alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"context_var") : depth0),"img/image.jpg",{"name":"getThemeAssetsPath","hash":{},"data":data,"loc":{"start":{"line":23,"column":2},"end":{"line":23,"column":53}}}))
    + " - reference assets in the active theme\n  \n  "
    + alias3((compilerNameLookup(helpers,"getThemeAssetsPathWithDefault")||(depth0 && compilerNameLookup(depth0,"getThemeAssetsPathWithDefault"))||alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"context_var") : depth0),"img/theme-image.jpg",{"name":"getThemeAssetsPathWithDefault","hash":{},"data":data,"loc":{"start":{"line":25,"column":2},"end":{"line":25,"column":70}}}))
    + " - use context_var value i.e. configuration variable. If it does not exist, fallback to an asset from the theme assets folder\n-->";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/CA/RewardPoints/1.0.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/DemoCloudAlp/Suite_Commerce_Base_Theme/20.1.0/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'ca_rewardpoints_pointsapply'; return template;});