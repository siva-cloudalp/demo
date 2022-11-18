define('paymentinstrument_creditcard_edit_form_securitycode.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, alias4="function";

  return "<div class=\"paymentinstrument-creditcard-edit-form-securitycode\">\n	<div class=\"paymentinstrument-creditcard-edit-form-securitycode-group\" data-input=\"ccsecuritycode\" data-validation=\"control-group\">\n		<label class=\"paymentinstrument-creditcard-edit-form-securitycode-group-label\" for=\"ccsecuritycode\">\n			"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Security Number",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":4,"column":3},"end":{"line":4,"column":34}}}))
    + " <span class=\"paymentinstrument-creditcard-edit-form-securitycode-group-label-required\">*</span>\n		</label>\n\n		<div class=\"paymentinstrument-creditcard-edit-form-securitycode-controls\" data-validation=\"control\">\n			<input type=\"text\" class=\"paymentinstrument-creditcard-edit-form-securitycode-group-input\" id=\"ccsecuritycode\" name=\"ccsecuritycode\" value=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"value") || (depth0 != null ? compilerNameLookup(depth0,"value") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"value","hash":{},"data":data,"loc":{"start":{"line":8,"column":143},"end":{"line":8,"column":152}}}) : helper)))
    + "\" maxlength=\"4\">\n\n			<a href=\"#\" class=\"paymentinstrument-creditcard-edit-form-securitycode-link\">\n				<span class=\"paymentinstrument-creditcard-edit-form-securitycode-icon-container\">\n					<i class=\"paymentinstrument-creditcard-edit-form-securitycode-icon\"  data-toggle=\"popover\" data-placement=\"bottom\" data-title=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"creditCardHelpTitle") || (depth0 != null ? compilerNameLookup(depth0,"creditCardHelpTitle") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"creditCardHelpTitle","hash":{},"data":data,"loc":{"start":{"line":12,"column":132},"end":{"line":12,"column":155}}}) : helper)))
    + "\"/>\n				</span>\n			</a>\n		</div>\n	</div>\n</div>\n\n\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/DemoCloudAlp/Suite_Commerce_Base_Theme/20.1.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/DemoCloudAlp/Suite_Commerce_Base_Theme/20.1.0/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'paymentinstrument_creditcard_edit_form_securitycode'; return template;});