define('return_authorization_form_item_actions.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "	<label class=\"return-authorization-form-item-actions-label\" for=\"reason\">\n		"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(alias1,"Reason for return",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":3,"column":2},"end":{"line":3,"column":35}}}))
    + " <span class=\"return-authorization-form-item-actions-required\">*</span>\n	</label>\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showReasons") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(10, data, 0),"data":data,"loc":{"start":{"line":5,"column":1},"end":{"line":24,"column":8}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "		<select data-action=\"reasons\" name=\"reason\" class=\"return-authorization-form-item-actions-options\" data-toggle=\"false\">\n			<option value=\"\">"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(alias1,"Select a reason",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":7,"column":20},"end":{"line":7,"column":51}}}))
    + "</option>\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"reasons") : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":3},"end":{"line":10,"column":12}}})) != null ? stack1 : "")
    + "		</select>\n\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isOtherReasonSelected") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":14,"column":2},"end":{"line":16,"column":9}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"activeLinesLengthGreaterThan1") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":18,"column":2},"end":{"line":20,"column":9}}})) != null ? stack1 : "")
    + "\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "				<option value=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"id") || (depth0 != null ? compilerNameLookup(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":9,"column":19},"end":{"line":9,"column":25}}}) : helper)))
    + "\" "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isSelected") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":27},"end":{"line":9,"column":60}}})) != null ? stack1 : "")
    + ">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"text") || (depth0 != null ? compilerNameLookup(depth0,"text") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data,"loc":{"start":{"line":9,"column":61},"end":{"line":9,"column":69}}}) : helper)))
    + "</option>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "selected";
},"6":function(container,depth0,helpers,partials,data) {
    var helper;

  return "			<input type=\"text\" data-action=\"reason-text\" name=\"reason-text\" value=\""
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"textReason") || (depth0 != null ? compilerNameLookup(depth0,"textReason") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"textReason","hash":{},"data":data,"loc":{"start":{"line":15,"column":74},"end":{"line":15,"column":88}}}) : helper)))
    + "\" data-toggle=\"false\" class=\"return-authorization-form-item-actions-other-reason-input\">\n";
},"8":function(container,depth0,helpers,partials,data) {
    return "			<a href=\"#\" class=\"return-authorization-form-item-actions-apply-reason-button\" data-action=\"apply-reason\" data-toggle=\"false\">"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Apply to all",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":19,"column":129},"end":{"line":19,"column":157}}}))
    + "</a>\n";
},"10":function(container,depth0,helpers,partials,data) {
    var helper;

  return "		<input type=\"text\" data-action=\"reason-text\" name=\"reason-text\" value=\""
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"textReason") || (depth0 != null ? compilerNameLookup(depth0,"textReason") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"textReason","hash":{},"data":data,"loc":{"start":{"line":23,"column":73},"end":{"line":23,"column":87}}}) : helper)))
    + "\" data-toggle=\"false\" class=\"return-authorization-form-item-actions-other-reason-text\">\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"isLineActive") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":25,"column":7}}})) != null ? stack1 : "")
    + "\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/DemoCloudAlp/Suite_Commerce_Base_Theme/20.1.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/DemoCloudAlp/Suite_Commerce_Base_Theme/20.1.0/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'return_authorization_form_item_actions'; return template;});