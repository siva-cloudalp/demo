define('cq_customquote_customquotemodule.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"lines") : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":31,"column":0},"end":{"line":39,"column":11}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<tr>\n  <td class=\"firstcol\">"
    + alias2(alias1(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"item") : depth0)) != null ? compilerNameLookup(stack1,"displayname") : stack1), depth0))
    + "</td>\n  <td >"
    + alias2(alias1(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"item") : depth0)) != null ? compilerNameLookup(stack1,"internalid") : stack1), depth0))
    + "</td>\n  <td >"
    + alias2(alias1((depth0 != null ? compilerNameLookup(depth0,"quantity") : depth0), depth0))
    + "</td>\n  <td >"
    + alias2(alias1((depth0 != null ? compilerNameLookup(depth0,"rate") : depth0), depth0))
    + "</td>\n  <td >"
    + alias2(alias1((depth0 != null ? compilerNameLookup(depth0,"amount") : depth0), depth0))
    + "</td>\n  </tr>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<tr><td></td><td></td><td></td> <td  >Shipping("
    + alias4(((helper = (helper = compilerNameLookup(helpers,"shippingrate") || (depth0 != null ? compilerNameLookup(depth0,"shippingrate") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"shippingrate","hash":{},"data":data,"loc":{"start":{"line":48,"column":47},"end":{"line":48,"column":63}}}) : helper)))
    + "%)</td><td>"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"shippingcost") || (depth0 != null ? compilerNameLookup(depth0,"shippingcost") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"shippingcost","hash":{},"data":data,"loc":{"start":{"line":48,"column":74},"end":{"line":48,"column":90}}}) : helper)))
    + "</td></tr>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<tr><td></td><td></td><td></td> <td  >Shipping</td><td>"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"shippingcost") || (depth0 != null ? compilerNameLookup(depth0,"shippingcost") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"shippingcost","hash":{},"data":data,"loc":{"start":{"line":50,"column":55},"end":{"line":50,"column":71}}}) : helper)))
    + "</td></tr>\n";
},"8":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "	<img class=\"header-logo-image\" src=\""
    + alias3((compilerNameLookup(helpers,"getThemeAssetsPathWithDefault")||(depth0 && compilerNameLookup(depth0,"getThemeAssetsPathWithDefault"))||alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"logoUrl") : depth0),"img/SC_Logo.png",{"name":"getThemeAssetsPathWithDefault","hash":{},"data":data,"loc":{"start":{"line":69,"column":37},"end":{"line":69,"column":96}}}))
    + "\" alt=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"siteName") || (depth0 != null ? compilerNameLookup(depth0,"siteName") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"siteName","hash":{},"data":data,"loc":{"start":{"line":69,"column":103},"end":{"line":69,"column":115}}}) : helper)))
    + "\">\n";
},"10":function(container,depth0,helpers,partials,data) {
    var helper;

  return "	<span class=\"header-logo-sitename\">\n		"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"siteName") || (depth0 != null ? compilerNameLookup(depth0,"siteName") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"siteName","hash":{},"data":data,"loc":{"start":{"line":72,"column":2},"end":{"line":72,"column":14}}}) : helper)))
    + "\n	</span>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"completepage\">\n<div class=\"mainsection\">\n<section id=\"print\" class=\"customquotemodule-info-card\">\n<div class=\"title-container\">\n<div> <h1>"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"title") || (depth0 != null ? compilerNameLookup(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":5,"column":10},"end":{"line":5,"column":19}}}) : helper)))
    + "</h1></div>\n\n<div>\n  <button class=\"btn btn-primary epbtn printPageButton\" value = \"Print\"   onclick = \"window.print()\" >Print </button>\n  <button class=\"btn btn-primary epbtn printPageButton\" data-action=\"openmailbox\">Email </button>\n  </div>\n</div>\n<p class=\"validitydate\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"date") || (depth0 != null ? compilerNameLookup(depth0,"date") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date","hash":{},"data":data,"loc":{"start":{"line":12,"column":24},"end":{"line":12,"column":32}}}) : helper)))
    + " "
    + alias4((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"(Quote is valid for 60 days)",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":12,"column":33},"end":{"line":12,"column":77}}}))
    + "</p>\n<div class=\"subtext-cotainer\">\n"
    + ((stack1 = ((helper = (helper = compilerNameLookup(helpers,"subtext") || (depth0 != null ? compilerNameLookup(depth0,"subtext") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"subtext","hash":{},"data":data,"loc":{"start":{"line":14,"column":0},"end":{"line":14,"column":13}}}) : helper))) != null ? stack1 : "")
    + "\n</div>\n\n<table >\n<thead >\n<tr>\n 	<th>Item</th>  \n  <th>Item Number</th>\n	<th>Quantity</th>\n	<th>Price</th>\n	<th>Total</th>\n  </tr>\n</thead>\n\n\n<tbody>\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"lines") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":30,"column":0},"end":{"line":40,"column":7}}})) != null ? stack1 : "")
    + "</tbody>\n\n\n<tfoot>\n<tr> <td></td><td></td><td></td> <td  >Subtotal</td><td>"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"subtotal") || (depth0 != null ? compilerNameLookup(depth0,"subtotal") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"subtotal","hash":{},"data":data,"loc":{"start":{"line":45,"column":56},"end":{"line":45,"column":68}}}) : helper)))
    + "</td></tr>\n<tr><td></td><td></td><td></td> <td  >Sales Tax</td><td>"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"salestax") || (depth0 != null ? compilerNameLookup(depth0,"salestax") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"salestax","hash":{},"data":data,"loc":{"start":{"line":46,"column":56},"end":{"line":46,"column":68}}}) : helper)))
    + "</td></tr>\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"shippingrate") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(6, data, 0),"data":data,"loc":{"start":{"line":47,"column":0},"end":{"line":51,"column":7}}})) != null ? stack1 : "")
    + "<tr><td></td><td></td><td></td> <td  >Total</td><td>"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"total") || (depth0 != null ? compilerNameLookup(depth0,"total") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"total","hash":{},"data":data,"loc":{"start":{"line":52,"column":52},"end":{"line":52,"column":61}}}) : helper)))
    + "</td></tr>\n</tfoot>\n\n</table>\n\n<p class=\"below-total\">For AK and HI orders, add 15% shipping.</p>\n\n<div class=\"notes-container\">\n"
    + ((stack1 = ((helper = (helper = compilerNameLookup(helpers,"notes") || (depth0 != null ? compilerNameLookup(depth0,"notes") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"notes","hash":{},"data":data,"loc":{"start":{"line":60,"column":0},"end":{"line":60,"column":11}}}) : helper))) != null ? stack1 : "")
    + "\n</div>\n</section>\n\n</div>\n\n<a class=\"header-logo\" href=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"headerLinkHref") || (depth0 != null ? compilerNameLookup(depth0,"headerLinkHref") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"headerLinkHref","hash":{},"data":data,"loc":{"start":{"line":66,"column":29},"end":{"line":66,"column":47}}}) : helper)))
    + "\" data-touchpoint=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"headerLinkTouchPoint") || (depth0 != null ? compilerNameLookup(depth0,"headerLinkTouchPoint") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"headerLinkTouchPoint","hash":{},"data":data,"loc":{"start":{"line":66,"column":66},"end":{"line":66,"column":90}}}) : helper)))
    + "\" data-hashtag=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"headerLinkHashtag") || (depth0 != null ? compilerNameLookup(depth0,"headerLinkHashtag") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"headerLinkHashtag","hash":{},"data":data,"loc":{"start":{"line":66,"column":106},"end":{"line":66,"column":127}}}) : helper)))
    + "\" title=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"headerLinkTitle") || (depth0 != null ? compilerNameLookup(depth0,"headerLinkTitle") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"headerLinkTitle","hash":{},"data":data,"loc":{"start":{"line":66,"column":136},"end":{"line":66,"column":155}}}) : helper)))
    + "\">\n\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"logoUrl") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.program(10, data, 0),"data":data,"loc":{"start":{"line":68,"column":0},"end":{"line":74,"column":7}}})) != null ? stack1 : "")
    + "</a>\n\n<p class=\"logo-tag\">Curriculum for teachers who want to revolutionize teaching.</p>\n\n</div>\n<!--\n  Available helpers:\n  "
    + alias4((compilerNameLookup(helpers,"getExtensionAssetsPath")||(depth0 && compilerNameLookup(depth0,"getExtensionAssetsPath"))||alias2).call(alias1,"img/image.jpg",{"name":"getExtensionAssetsPath","hash":{},"data":data,"loc":{"start":{"line":82,"column":2},"end":{"line":82,"column":45}}}))
    + " - reference assets in your extension\n  \n  "
    + alias4((compilerNameLookup(helpers,"getExtensionAssetsPathWithDefault")||(depth0 && compilerNameLookup(depth0,"getExtensionAssetsPathWithDefault"))||alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"context_var") : depth0),"img/image.jpg",{"name":"getExtensionAssetsPathWithDefault","hash":{},"data":data,"loc":{"start":{"line":84,"column":2},"end":{"line":84,"column":68}}}))
    + " - use context_var value i.e. configuration variable. If it does not exist, fallback to an asset from the extension assets folder\n  \n  "
    + alias4((compilerNameLookup(helpers,"getThemeAssetsPath")||(depth0 && compilerNameLookup(depth0,"getThemeAssetsPath"))||alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"context_var") : depth0),"img/image.jpg",{"name":"getThemeAssetsPath","hash":{},"data":data,"loc":{"start":{"line":86,"column":2},"end":{"line":86,"column":53}}}))
    + " - reference assets in the active theme\n  \n  "
    + alias4((compilerNameLookup(helpers,"getThemeAssetsPathWithDefault")||(depth0 && compilerNameLookup(depth0,"getThemeAssetsPathWithDefault"))||alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"context_var") : depth0),"img/theme-image.jpg",{"name":"getThemeAssetsPathWithDefault","hash":{},"data":data,"loc":{"start":{"line":88,"column":2},"end":{"line":88,"column":70}}}))
    + " - use context_var value i.e. configuration variable. If it does not exist, fallback to an asset from the theme assets folder\n-->";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/CQ/CustomQuote/1.0.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/DemoCloudAlp/Suite_Commerce_Base_Theme/20.1.0/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'cq_customquote_customquotemodule'; return template;});