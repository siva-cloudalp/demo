define('login_register_checkout_as_guest.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    return "in";
},"3":function(container,depth0,helpers,partials,data) {
    return "			<button href=\"#\" class=\"login-register-checkout-as-guest-button-show\" data-toggle=\"collapse\" data-target=\"#guest-show-view,#guest-view\">\n				"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Checkout as a Guest",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":8,"column":4},"end":{"line":8,"column":39}}}))
    + "\n			</button>\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "			<form class=\"login-register-checkout-as-guest-form\" method=\"POST\" novalidate>\n				<div class=\"login-register-checkout-as-guest-control-group\">\n					<button type=\"submit\" class=\"login-register-checkout-as-guest-submit\">\n						"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Checkout as a Guest",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":14,"column":6},"end":{"line":14,"column":41}}}))
    + "\n					</button>\n				</div>\n			</form>\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "			"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Checkout as a Guest",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":23,"column":3},"end":{"line":23,"column":38}}}))
    + "\n";
},"9":function(container,depth0,helpers,partials,data) {
    return "			"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Checkout as a guest and you will have an opportunity to create an account when you are finished.",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":25,"column":3},"end":{"line":25,"column":115}}}))
    + "\n";
},"11":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "			<div class=\"login-register-checkout-as-guest-control-group\" data-validation=\"control-group\">\n				<label class=\"login-register-checkout-as-guest-control-label\" for=\"register-firstname\">\n					"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"First Name <small class=\"login-register-checkout-as-guest-required\">*</small>",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":33,"column":5},"end":{"line":33,"column":98}}}))
    + "\n				</label>\n				<div class=\"login-register-checkout-as-guest-controls\" data-validation=\"control\">\n					<input type=\"text\" name=\"firstname\" id=\"guest-firstname\" class=\"login-register-checkout-as-guest-input\">\n				</div>\n			</div>\n\n			<div class=\"login-register-checkout-as-guest-control-group\" data-validation=\"control-group\">\n				<label class=\"login-register-checkout-as-guest-control-label\" for=\"guest-lastname\">\n					"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Last Name <small class=\"login-register-checkout-as-guest-required\">*</small>",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":42,"column":5},"end":{"line":42,"column":97}}}))
    + "\n				</label>\n				<div class=\"login-register-checkout-as-guest-controls\" data-validation=\"control\">\n					<input type=\"text\" name=\"lastname\" id=\"guest-lastname\" class=\"login-register-checkout-as-guest-input\">\n				</div>\n			</div>\n";
},"13":function(container,depth0,helpers,partials,data) {
    return "			<div class=\"login-register-checkout-as-guest-form-controls-group\" data-validation=\"control-group\">\n				<div class=\"login-register-checkout-as-guest-register-form-controls\" data-validation=\"control\">\n					<input value=\"true\" type=\"hidden\" name=\"redirect\" id=\"redirect\" >\n				</div>\n			</div>\n";
},"15":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "			<div class=\"login-register-checkout-as-guest-control-group\" data-validation=\"control-group\">\n				<label class=\"login-register-checkout-as-guest-control-label\" for=\"register-email\">\n					"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Email Address <small class=\"login-register-checkout-as-guest-required\">*</small>",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":61,"column":5},"end":{"line":61,"column":101}}}))
    + "\n				</label>\n				<div class=\"login-register-checkout-as-guest-controls\" data-validation=\"control\">\n					<input type=\"email\" name=\"email\" id=\"guest-email\" class=\"login-register-checkout-as-guest-input\" placeholder=\""
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"your@email.com",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":64,"column":115},"end":{"line":64,"column":145}}}))
    + "\" value=\"\">\n					<p class=\"login-register-checkout-as-guest-help-block\">\n						<small>"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"We need your email address to contact you about your order.",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":66,"column":13},"end":{"line":66,"column":88}}}))
    + "</small>\n					</p>\n				</div>\n			</div>\n";
},"17":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "	<hr>\n	<div class=\"login-register-checkout-as-guest-register-header collapse in\" id=\"register-show-view\">\n		<p class=\"login-register-checkout-as-guest-description\">\n			"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Create an account and take advantage of faster checkouts and other great benefits.",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":86,"column":3},"end":{"line":86,"column":101}}}))
    + "\n		</p>\n		<button class=\"login-register-checkout-as-guest-button-show\" data-toggle=\"collapse\" data-target=\"#register-show-view,#register-view\">\n			"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Create Account",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":89,"column":3},"end":{"line":89,"column":33}}}))
    + "\n		</button>\n	</div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "<div class=\"login-register-checkout-as-guest-header collapse "
    + ((stack1 = compilerNameLookup(helpers,"unless").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hideRegister") : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":61},"end":{"line":1,"column":98}}})) != null ? stack1 : "")
    + "\" id=\"guest-show-view\">\n	\n		<p class=\"login-register-checkout-as-guest-description\">\n			"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Checkout as a guest and you will have an opportunity to create an account when you are finished.",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":4,"column":3},"end":{"line":4,"column":115}}}))
    + "\n		</p>\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"expandGuestUserEnabled") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data,"loc":{"start":{"line":6,"column":2},"end":{"line":18,"column":8}}})) != null ? stack1 : "")
    + "</div>\n<div class=\"login-register-checkout-as-guest-body collapse "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hideRegister") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":20,"column":59},"end":{"line":20,"column":88}}})) != null ? stack1 : "")
    + "\" id=\"guest-view\">\n	<p class=\"login-register-checkout-as-guest-description\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hideRegister") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(9, data, 0),"data":data,"loc":{"start":{"line":22,"column":2},"end":{"line":26,"column":9}}})) != null ? stack1 : "")
    + "	</p>\n	<form class=\"login-register-checkout-as-guest-form\" method=\"POST\" novalidate>\n\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showGuestFirstandLastname") : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":30,"column":2},"end":{"line":48,"column":9}}})) != null ? stack1 : "")
    + "		\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isRedirect") : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":50,"column":2},"end":{"line":56,"column":9}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showGuestEmail") : depth0),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":58,"column":2},"end":{"line":70,"column":9}}})) != null ? stack1 : "")
    + "\n		<div class=\"login-register-checkout-as-guest-form-messages\" data-type=\"alert-placeholder\"></div>\n\n		<div class=\"login-register-checkout-as-guest-control-group\">\n			<button type=\"submit\" class=\"login-register-checkout-as-guest-submit\">\n				"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Proceed to Checkout",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":76,"column":4},"end":{"line":76,"column":39}}}))
    + "\n			</button>\n		</div>\n	</form>\n</div>\n\n"
    + ((stack1 = compilerNameLookup(helpers,"unless").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hideRegister") : depth0),{"name":"unless","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":82,"column":0},"end":{"line":92,"column":11}}})) != null ? stack1 : "")
    + "\n\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/DemoCloudAlp/Suite_Commerce_Base_Theme/20.1.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/DemoCloudAlp/Suite_Commerce_Base_Theme/20.1.0/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'login_register_checkout_as_guest'; return template;});