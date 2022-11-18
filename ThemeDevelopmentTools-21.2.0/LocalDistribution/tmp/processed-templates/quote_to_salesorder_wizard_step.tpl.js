define('quote_to_salesorder_wizard_step.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "		<div class=\"quote-to-salesorder-wizard-step-actions\">\n			<div class=\"quote-to-salesorder-wizard-step-button-container\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showContinueButton") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":19,"column":4},"end":{"line":23,"column":11}}})) != null ? stack1 : "")
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showBackButton") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":24,"column":4},"end":{"line":28,"column":11}}})) != null ? stack1 : "")
    + "			</div>\n		</div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper;

  return "					<button class=\"quote-to-salesorder-wizard-step-button-continue\" data-action=\"submit-step\">\n						"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"continueButtonLabel") || (depth0 != null ? compilerNameLookup(depth0,"continueButtonLabel") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"continueButtonLabel","hash":{},"data":data,"loc":{"start":{"line":21,"column":6},"end":{"line":21,"column":29}}}) : helper)))
    + "\n					</button>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "					<button class=\"quote-to-salesorder-wizard-step-button-back\" data-action=\"previous-step\">\n						"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Back",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":26,"column":6},"end":{"line":26,"column":26}}}))
    + "\n					</button>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"hasSalesrep") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(9, data, 0),"data":data,"loc":{"start":{"line":35,"column":3},"end":{"line":43,"column":10}}})) != null ? stack1 : "");
},"7":function(container,depth0,helpers,partials,data) {
    return "				<small class=\"quote-to-salesorder-wizard-step-disclaimer-message\">\n					"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"For immediate assistance contact <strong>$(0)</strong> at <strong>$(1)</strong> or send an email to <strong>$(2)</strong>",(depth0 != null ? compilerNameLookup(depth0,"salesrepName") : depth0),(depth0 != null ? compilerNameLookup(depth0,"salesrepPhone") : depth0),(depth0 != null ? compilerNameLookup(depth0,"salesrepEmail") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":37,"column":5},"end":{"line":37,"column":183}}}))
    + "\n				</small>\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "				<small class=\"quote-to-salesorder-wizard-step-disclaimer-message\">\n					"
    + ((stack1 = ((helper = (helper = compilerNameLookup(helpers,"disclaimer") || (depth0 != null ? compilerNameLookup(depth0,"disclaimer") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"disclaimer","hash":{},"data":data,"loc":{"start":{"line":41,"column":5},"end":{"line":41,"column":21}}}) : helper))) != null ? stack1 : "")
    + "\n				</small>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div>\n	<header>\n		<h1 class=\"quote-to-salesorder-wizard-step-header-title\">"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"currentStepGroupName") || (depth0 != null ? compilerNameLookup(depth0,"currentStepGroupName") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"currentStepGroupName","hash":{},"data":data,"loc":{"start":{"line":3,"column":59},"end":{"line":3,"column":83}}}) : helper)))
    + "</h1>\n	</header>\n</div>\n\n<div data-type=\"alert-placeholder-step\"></div>\n\n<div class=\"quote-to-salesorder-wizard-step-content-wrapper\">\n\n	<div id=\"wizard-step-content\" class=\"quote-to-salesorder-wizard-step-content-main\"></div>\n\n	<div id=\"wizard-step-content-right\" class=\"quote-to-salesorder-wizard-step-content-right\"></div>\n\n\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showNavButtons") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":1},"end":{"line":31,"column":8}}})) != null ? stack1 : "")
    + "\n	<div class=\"quote-to-salesorder-wizard-step-disclaimer-bottom-content\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showBottomMessage") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":34,"column":2},"end":{"line":44,"column":9}}})) != null ? stack1 : "")
    + "	</div>\n</div>\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/DemoCloudAlp/Suite_Commerce_Base_Theme/20.1.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/DemoCloudAlp/Suite_Commerce_Base_Theme/20.1.0/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'quote_to_salesorder_wizard_step'; return template;});