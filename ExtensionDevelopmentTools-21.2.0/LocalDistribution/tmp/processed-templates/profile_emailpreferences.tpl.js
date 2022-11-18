define('profile_emailpreferences.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    return "	<a href=\"/\" class=\"profile-emailpreferences-button-back\">\n		<i class=\"profile-emailpreferences-button-back-icon\"></i>\n		"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Back to Account",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":4,"column":2},"end":{"line":4,"column":33}}}))
    + "\n	</a>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "checked";
},"5":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "			<hr class=\"profile-emailpreferences-divider\">\n\n			<fieldset>\n				<legend class=\"profile-emailpreferences-subtitle\">\n					"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(alias1,"Subscriptions",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":34,"column":5},"end":{"line":34,"column":34}}}))
    + "\n				</legend>\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"subscriptions") : depth0),{"name":"each","hash":{},"fn":container.program(6, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":36,"column":4},"end":{"line":45,"column":13}}})) != null ? stack1 : "")
    + "			</fieldset>\n\n";
},"6":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "					<div class=\"profile-emailpreferences-controls-group\">\n						<div class=\"profile-emailpreferences-controls\">\n							<label class=\"profile-emailpreferences-label\">\n								<input type=\"checkbox\" id=\"subscription-"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"internalid") || (depth0 != null ? compilerNameLookup(depth0,"internalid") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"internalid","hash":{},"data":data,"loc":{"start":{"line":40,"column":48},"end":{"line":40,"column":62}}}) : helper)))
    + "\" data-type=\"subscription-checkbox\" value=\"T\" data-unchecked-value=\"F\" name=\"subscription-"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"internalid") || (depth0 != null ? compilerNameLookup(depth0,"internalid") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"internalid","hash":{},"data":data,"loc":{"start":{"line":40,"column":152},"end":{"line":40,"column":166}}}) : helper)))
    + "\" "
    + ((stack1 = compilerNameLookup(helpers,"unless").call(alias1,(depths[1] != null ? compilerNameLookup(depths[1],"isEmailSuscribe") : depths[1]),{"name":"unless","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":40,"column":168},"end":{"line":40,"column":217}}})) != null ? stack1 : "")
    + " "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"subscribed") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":40,"column":218},"end":{"line":40,"column":250}}})) != null ? stack1 : "")
    + ">\n								"
    + alias4((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"name") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":41,"column":8},"end":{"line":41,"column":26}}}))
    + "\n							</label>\n						</div>\n				</div>\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "disabled";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showBackToAccount") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":6,"column":7}}})) != null ? stack1 : "")
    + "\n<section class=\"profile-emailpreferences\">\n\n	<h2 class=\"profile-emailpreferences-title\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"pageHeader") || (depth0 != null ? compilerNameLookup(depth0,"pageHeader") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"pageHeader","hash":{},"data":data,"loc":{"start":{"line":10,"column":44},"end":{"line":10,"column":58}}}) : helper)))
    + "</h2>\n	<div class=\"profile-emailpreferences-alert-placeholder\" data-type=\"alert-placeholder\"></div>\n\n	<form class=\"profile-emailpreferences-form\">\n		\n		<fieldset>\n			<legend class=\"profile-emailpreferences-subtitle\">\n				"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Newsletter",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":17,"column":4},"end":{"line":17,"column":30}}}))
    + "\n			</legend>\n			<div class=\"profile-emailpreferences-controls-group\">\n				<div class=\"profile-emailpreferences-controls\">\n					<label class=\"profile-emailpreferences-label\">\n						<input type=\"checkbox\" id=\"emailsubscribe\" data-type=\"emailsubscribe-checkbox\" value=\"T\" data-unchecked-value=\"F\" name=\"emailsubscribe\" "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isEmailSuscribe") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":22,"column":142},"end":{"line":22,"column":179}}})) != null ? stack1 : "")
    + ">\n						"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Yes, I would like to sign up for your Newsletter.",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":23,"column":6},"end":{"line":23,"column":71}}}))
    + "\n					</label>\n				</div>\n			</div>\n		</fieldset>\n\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"campaignSubscriptions") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":29,"column":2},"end":{"line":48,"column":9}}})) != null ? stack1 : "")
    + "		<div class=\"profile-emailpreferences-controls-submit\">\n			<button type=\"submit\" class=\"profile-emailpreferences-submit\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Update",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":50,"column":65},"end":{"line":50,"column":87}}}))
    + "</button>\n			<button type=\"reset\"  class=\"profile-emailpreferences-reset\" data-action=\"reset\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Cancel",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":51,"column":84},"end":{"line":51,"column":106}}}))
    + "</button>\n		</div>\n	</form>\n</section>\n\n\n\n\n";
},"useData":true,"useDepths":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/DemoCloudAlp/Suite_Commerce_Base_Theme/20.1.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/DemoCloudAlp/Suite_Commerce_Base_Theme/20.1.0/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'profile_emailpreferences'; return template;});