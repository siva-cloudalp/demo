define('product_reviews_review.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    return "			- <i class=\"product-reviews-review-icon-ok-sign\" data-toggle=\"tooltip\" data-placement=\"right\" title=\""
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"verified purchaser",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":14,"column":104},"end":{"line":14,"column":138}}}))
    + "\"></i>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "			<div class=\"product-reviews-review-rating-per-attribute\">\n				<div data-view=\"Global.StarRatingAttribute\"></div>\n			</div>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, alias4="function";

  return "	<div class=\"product-reviews-review-comment-footer\">\n		<p>"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Was this review helpful?",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":31,"column":5},"end":{"line":31,"column":46}}}))
    + "</p>\n\n		<button class=\"product-reviews-review-comment-footer-button "
    + alias3(((helper = (helper = compilerNameLookup(helpers,"usefulButtonClass") || (depth0 != null ? compilerNameLookup(depth0,"usefulButtonClass") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"usefulButtonClass","hash":{},"data":data,"loc":{"start":{"line":33,"column":62},"end":{"line":33,"column":83}}}) : helper)))
    + "\" type=\"button\" data-action=\"vote\" data-type=\"mark-as-useful\" data-review-id=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"reviewId") || (depth0 != null ? compilerNameLookup(depth0,"reviewId") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"reviewId","hash":{},"data":data,"loc":{"start":{"line":33,"column":161},"end":{"line":33,"column":173}}}) : helper)))
    + "\">\n			<!-- <i class=\"product-reviews-review-comment-footer-button-icon-like\"></i>\n\n			<span>\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"usefulCountGreaterThan0") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":37,"column":4},"end":{"line":39,"column":11}}})) != null ? stack1 : "")
    + "			</span>\n			-->\n\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"usefulCountGreaterThan0") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.program(10, data, 0),"data":data,"loc":{"start":{"line":43,"column":3},"end":{"line":47,"column":10}}})) != null ? stack1 : "")
    + "		</button>\n\n		<button class=\"product-reviews-review-comment-footer-button "
    + alias3(((helper = (helper = compilerNameLookup(helpers,"notUsefulButtonClass") || (depth0 != null ? compilerNameLookup(depth0,"notUsefulButtonClass") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"notUsefulButtonClass","hash":{},"data":data,"loc":{"start":{"line":50,"column":62},"end":{"line":50,"column":86}}}) : helper)))
    + "\" type=\"button\" data-action=\"vote\" data-type=\"mark-as-not-useful\" data-review-id=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"reviewId") || (depth0 != null ? compilerNameLookup(depth0,"reviewId") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"reviewId","hash":{},"data":data,"loc":{"start":{"line":50,"column":168},"end":{"line":50,"column":180}}}) : helper)))
    + "\">\n			<!-- <i class=\"product-reviews-review-comment-footer-button-icon-unlike\"></i>\n\n			<span>\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"notusefulCountGreater") : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":54,"column":4},"end":{"line":56,"column":11}}})) != null ? stack1 : "")
    + "			</span> -->\n\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"notusefulCountGreater") : depth0),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.program(16, data, 0),"data":data,"loc":{"start":{"line":59,"column":3},"end":{"line":63,"column":10}}})) != null ? stack1 : "")
    + "		</button>\n	</div>\n	<div data-type=\"alert-placeholder\"></div>\n";
},"6":function(container,depth0,helpers,partials,data) {
    return "					"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {})," ($(0))",(depth0 != null ? compilerNameLookup(depth0,"usefulCount") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":38,"column":5},"end":{"line":38,"column":41}}}))
    + "\n";
},"8":function(container,depth0,helpers,partials,data) {
    return "				"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Yes ($(0))",(depth0 != null ? compilerNameLookup(depth0,"usefulCount") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":44,"column":4},"end":{"line":44,"column":43}}}))
    + "\n";
},"10":function(container,depth0,helpers,partials,data) {
    return "				"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Yes",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":46,"column":4},"end":{"line":46,"column":23}}}))
    + "\n";
},"12":function(container,depth0,helpers,partials,data) {
    return "					"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {})," ($(0))",(depth0 != null ? compilerNameLookup(depth0,"notUsefulCount") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":55,"column":5},"end":{"line":55,"column":43}}}))
    + "\n";
},"14":function(container,depth0,helpers,partials,data) {
    return "				"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"No ($(0))",(depth0 != null ? compilerNameLookup(depth0,"notUsefulCount") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":60,"column":4},"end":{"line":60,"column":44}}}))
    + "\n";
},"16":function(container,depth0,helpers,partials,data) {
    return "				"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"No",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":62,"column":4},"end":{"line":62,"column":22}}}))
    + "\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"product-reviews-review\" itemprop=\"review\" data-id=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"reviewId") || (depth0 != null ? compilerNameLookup(depth0,"reviewId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"reviewId","hash":{},"data":data,"loc":{"start":{"line":1,"column":63},"end":{"line":1,"column":75}}}) : helper)))
    + "\">\n	<div class=\"product-reviews-review-comment-item-cell\">\n		<div data-view=\"ProductReview.Review.Global.StarRating\" itemprop=\"reviewRating\" ></div>\n		<span class=\"product-reviews-review-comment-item-cell-date\" itemprop=\"datePublished\">\n			"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"reviewCreatedOn") || (depth0 != null ? compilerNameLookup(depth0,"reviewCreatedOn") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"reviewCreatedOn","hash":{},"data":data,"loc":{"start":{"line":5,"column":3},"end":{"line":5,"column":24}}}) : helper)))
    + "\n		</span>\n	</div>\n	<h4 class=\"product-reviews-review-title\" itemprop=\"name\">\n		"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"reviewTitle") || (depth0 != null ? compilerNameLookup(depth0,"reviewTitle") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"reviewTitle","hash":{},"data":data,"loc":{"start":{"line":9,"column":2},"end":{"line":9,"column":17}}}) : helper)))
    + "\n	</h4>\n	<p class=\"product-reviews-review-comment-username\">\n		"
    + alias4((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"by <span itemprop=\"author\">$(0)</span>",(depth0 != null ? compilerNameLookup(depth0,"reviewAuthor") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":12,"column":2},"end":{"line":12,"column":69}}}))
    + "\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isReviewVerified") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":2},"end":{"line":15,"column":9}}})) != null ? stack1 : "")
    + "	</p>\n	<div class=\"product-reviews-review-review\">\n		<p class=\"product-reviews-review-review-description\" itemprop=\"description\">\n			"
    + alias4((compilerNameLookup(helpers,"breaklines")||(depth0 && compilerNameLookup(depth0,"breaklines"))||alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"reviewText") : depth0),{"name":"breaklines","hash":{},"data":data,"loc":{"start":{"line":19,"column":3},"end":{"line":19,"column":28}}}))
    + "\n		</p>\n		<div class=\"product-reviews-review-review-rating\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isReviewRatingPerAttributesLegthGreaterThan0") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":22,"column":2},"end":{"line":26,"column":9}}})) != null ? stack1 : "")
    + "		</div>\n	</div>\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showActionButtons") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":29,"column":1},"end":{"line":67,"column":8}}})) != null ? stack1 : "")
    + "</div>\n\n\n\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/DemoCloudAlp/Suite_Commerce_Base_Theme/20.1.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/DemoCloudAlp/Suite_Commerce_Base_Theme/20.1.0/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'product_reviews_review'; return template;});