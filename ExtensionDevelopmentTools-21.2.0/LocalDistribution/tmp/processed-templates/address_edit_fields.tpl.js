define('address_edit_fields.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "	<div class=\"address-edit-fields-group\" "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isCompanyFieldMandatory") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":40},"end":{"line":16,"column":132}}})) != null ? stack1 : "")
    + ">\n		<label class=\"address-edit-fields-group-label\" for=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"manage") || (depth0 != null ? compilerNameLookup(depth0,"manage") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"manage","hash":{},"data":data,"loc":{"start":{"line":17,"column":54},"end":{"line":17,"column":64}}}) : helper)))
    + "company\">\n			"
    + alias4((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Company",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":18,"column":3},"end":{"line":18,"column":26}}}))
    + "\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isCompanyFieldMandatory") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(6, data, 0),"data":data,"loc":{"start":{"line":19,"column":3},"end":{"line":23,"column":10}}})) != null ? stack1 : "")
    + "		</label>\n		<div  class=\"address-edit-fields-group-form-controls\" "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isCompanyFieldMandatory") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":25,"column":56},"end":{"line":25,"column":121}}})) != null ? stack1 : "")
    + ">\n			<input type=\"text\" class=\"address-edit-fields-group-input\" id=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"manage") || (depth0 != null ? compilerNameLookup(depth0,"manage") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"manage","hash":{},"data":data,"loc":{"start":{"line":26,"column":66},"end":{"line":26,"column":76}}}) : helper)))
    + "company\" name=\"company\" value=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"company") || (depth0 != null ? compilerNameLookup(depth0,"company") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"company","hash":{},"data":data,"loc":{"start":{"line":26,"column":107},"end":{"line":26,"column":118}}}) : helper)))
    + "\" >\n		</div>\n	</div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return " data-input=\"company\" data-validation=\"control-group\" ";
},"4":function(container,depth0,helpers,partials,data) {
    return "				 <span class=\"address-edit-fields-group-label-required\">*</span>\n";
},"6":function(container,depth0,helpers,partials,data) {
    return "				<p class=\"address-edit-fields-company-optional-label\">"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"(optional)",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":22,"column":58},"end":{"line":22,"column":84}}}))
    + "</p>\n";
},"8":function(container,depth0,helpers,partials,data) {
    return " data-validation=\"control\" ";
},"10":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "	<div class=\"address-edit-fields-group address-edit-fields-group-big\" data-input=\"addr2\">\n		<label for=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"manage") || (depth0 != null ? compilerNameLookup(depth0,"manage") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"manage","hash":{},"data":data,"loc":{"start":{"line":43,"column":14},"end":{"line":43,"column":24}}}) : helper)))
    + "addr2\" class=\"address-edit-fields-addr2-optional-label\">\n			"
    + alias4((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"(optional)",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":44,"column":3},"end":{"line":44,"column":29}}}))
    + "\n		</label>\n		<div>\n			<input type=\"text\" class=\"address-edit-fields-group-input\" id=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"manage") || (depth0 != null ? compilerNameLookup(depth0,"manage") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"manage","hash":{},"data":data,"loc":{"start":{"line":47,"column":66},"end":{"line":47,"column":76}}}) : helper)))
    + "addr2\" name=\"addr2\" value=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"addressLine2") || (depth0 != null ? compilerNameLookup(depth0,"addressLine2") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"addressLine2","hash":{},"data":data,"loc":{"start":{"line":47,"column":103},"end":{"line":47,"column":119}}}) : helper)))
    + "\">\n			<small class=\"address-edit-fields-input-help\">"
    + alias4((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Example: Apt. 3 or Suite #1516",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":48,"column":49},"end":{"line":48,"column":95}}}))
    + "</small>\n		</div>\n	</div>\n";
},"12":function(container,depth0,helpers,partials,data) {
    return " hide ";
},"14":function(container,depth0,helpers,partials,data) {
    return " style=\"display: none;\" ";
},"16":function(container,depth0,helpers,partials,data) {
    return "				 <span class=\"address-edit-fields-input-required\">*</span>\n";
},"18":function(container,depth0,helpers,partials,data) {
    return "				<p class=\"address-edit-fields-phone-optional-label\">"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"(optional)",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":83,"column":56},"end":{"line":83,"column":82}}}))
    + "</p>\n";
},"20":function(container,depth0,helpers,partials,data) {
    return " checked ";
},"22":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "		<div class=\"address-edit-fields-group\" data-input=\"defaultbilling\">\n			<label class=\"address-edit-fields-group-input-checkbox\">\n				<input type=\"checkbox\" id=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"manage") || (depth0 != null ? compilerNameLookup(depth0,"manage") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"manage","hash":{},"data":data,"loc":{"start":{"line":104,"column":31},"end":{"line":104,"column":41}}}) : helper)))
    + "defaultbilling\" value=\"T\" data-unchecked-value=\"F\" name=\"defaultbilling\" "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isAddressDefaultBilling") : depth0),{"name":"if","hash":{},"fn":container.program(20, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":104,"column":114},"end":{"line":104,"column":161}}})) != null ? stack1 : "")
    + ">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isCurrentTouchPointCheckout") : depth0),{"name":"if","hash":{},"fn":container.program(23, data, 0),"inverse":container.program(25, data, 0),"data":data,"loc":{"start":{"line":105,"column":4},"end":{"line":109,"column":11}}})) != null ? stack1 : "")
    + "			</label>\n		</div>\n\n		<div class=\"address-edit-fields-group\" data-input=\"defaultshipping\">\n			<label class=\"address-edit-fields-group-input-checkbox\">\n				<input type=\"checkbox\" id=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"manage") || (depth0 != null ? compilerNameLookup(depth0,"manage") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"manage","hash":{},"data":data,"loc":{"start":{"line":115,"column":31},"end":{"line":115,"column":41}}}) : helper)))
    + "defaultshipping\" value=\"T\" data-unchecked-value=\"F\" name=\"defaultshipping\" "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isAddressDefaultShipping") : depth0),{"name":"if","hash":{},"fn":container.program(20, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":115,"column":116},"end":{"line":115,"column":164}}})) != null ? stack1 : "")
    + ">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isCurrentTouchPointCheckout") : depth0),{"name":"if","hash":{},"fn":container.program(27, data, 0),"inverse":container.program(29, data, 0),"data":data,"loc":{"start":{"line":116,"column":4},"end":{"line":120,"column":11}}})) != null ? stack1 : "")
    + "			</label>\n		</div>\n";
},"23":function(container,depth0,helpers,partials,data) {
    return "					"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Save as my primary billing address",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":106,"column":5},"end":{"line":106,"column":55}}}))
    + "\n";
},"25":function(container,depth0,helpers,partials,data) {
    return "					"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Make this my default billing address",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":108,"column":5},"end":{"line":108,"column":57}}}))
    + "\n";
},"27":function(container,depth0,helpers,partials,data) {
    return "					"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Save as my primary shipping address",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":117,"column":5},"end":{"line":117,"column":56}}}))
    + "\n";
},"29":function(container,depth0,helpers,partials,data) {
    return "					"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Make this my default shipping address",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":119,"column":5},"end":{"line":119,"column":58}}}))
    + "\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, alias4="function";

  return "<div class=\"address-edit-fields\">\n	<div data-type=\"alert-placeholder\"></div>\n\n	<small class=\"address-edit-fields\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Required",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":4,"column":36},"end":{"line":4,"column":60}}}))
    + " <span class=\"address-edit-fields-required\">*</span></small>\n	<div class=\"address-edit-fields-group\" data-input=\"fullname\" data-validation=\"control-group\">\n		<label class=\"address-edit-fields-group-label\" for=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"manage") || (depth0 != null ? compilerNameLookup(depth0,"manage") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"manage","hash":{},"data":data,"loc":{"start":{"line":6,"column":54},"end":{"line":6,"column":64}}}) : helper)))
    + "fullname\">\n			"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Full Name",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":7,"column":3},"end":{"line":7,"column":28}}}))
    + " <span class=\"address-edit-fields-group-label-required\">*</span>\n		</label>\n		<div  class=\"address-edit-fields-group-form-controls\" data-validation=\"control\">\n			<input type=\"text\" class=\"address-edit-fields-group-input\" id=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"manage") || (depth0 != null ? compilerNameLookup(depth0,"manage") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"manage","hash":{},"data":data,"loc":{"start":{"line":10,"column":66},"end":{"line":10,"column":76}}}) : helper)))
    + "fullname\" name=\"fullname\" value=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"fullName") || (depth0 != null ? compilerNameLookup(depth0,"fullName") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"fullName","hash":{},"data":data,"loc":{"start":{"line":10,"column":109},"end":{"line":10,"column":121}}}) : helper)))
    + "\">\n		</div>\n	</div>\n\n\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showCompanyField") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":15,"column":1},"end":{"line":29,"column":8}}})) != null ? stack1 : "")
    + "\n	<div class=\"address-edit-fields-group\" data-input=\"addr1\" data-validation=\"control-group\">\n		<label class=\"address-edit-fields-group-label\" for=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"manage") || (depth0 != null ? compilerNameLookup(depth0,"manage") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"manage","hash":{},"data":data,"loc":{"start":{"line":32,"column":54},"end":{"line":32,"column":64}}}) : helper)))
    + "addr1\">\n			"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Address",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":33,"column":3},"end":{"line":33,"column":26}}}))
    + " <span class=\"address-edit-fields-input-required\">*</span>\n		</label>\n		<div  class=\"address-edit-fields-group-form-controls\" data-validation=\"control\">\n			<input type=\"text\" class=\"address-edit-fields-group-input\" id=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"manage") || (depth0 != null ? compilerNameLookup(depth0,"manage") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"manage","hash":{},"data":data,"loc":{"start":{"line":36,"column":66},"end":{"line":36,"column":76}}}) : helper)))
    + "addr1\" name=\"addr1\" value=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"addressLine1") || (depth0 != null ? compilerNameLookup(depth0,"addressLine1") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"addressLine1","hash":{},"data":data,"loc":{"start":{"line":36,"column":103},"end":{"line":36,"column":119}}}) : helper)))
    + "\">\n			<small class=\"address-edit-fields-input-help\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Example: 1234 Main Street",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":37,"column":49},"end":{"line":37,"column":90}}}))
    + "</small>\n		</div>\n	</div>\n\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showAddressFormSecondAddress") : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":41,"column":1},"end":{"line":51,"column":8}}})) != null ? stack1 : "")
    + "	<div class=\"address-edit-fields-group\" data-input=\"city\" data-validation=\"control-group\">\n		<label class=\"address-edit-fields-group-label\" for=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"manage") || (depth0 != null ? compilerNameLookup(depth0,"manage") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"manage","hash":{},"data":data,"loc":{"start":{"line":53,"column":54},"end":{"line":53,"column":64}}}) : helper)))
    + "city\">\n			"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"City",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":54,"column":3},"end":{"line":54,"column":23}}}))
    + " <span class=\"address-edit-fields-input-required\">*</span>\n		</label>\n		<div  class=\"address-edit-fields-group-form-controls\" data-validation=\"control\">\n			<input type=\"text\" class=\"address-edit-fields-group-input\" id=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"manage") || (depth0 != null ? compilerNameLookup(depth0,"manage") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"manage","hash":{},"data":data,"loc":{"start":{"line":57,"column":66},"end":{"line":57,"column":76}}}) : helper)))
    + "city\" name=\"city\" value=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"city") || (depth0 != null ? compilerNameLookup(depth0,"city") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"city","hash":{},"data":data,"loc":{"start":{"line":57,"column":101},"end":{"line":57,"column":109}}}) : helper)))
    + "\">\n		</div>\n	</div>\n\n	<div class=\"address-edit-fields-group "
    + ((stack1 = compilerNameLookup(helpers,"unless").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showCountriesField") : depth0),{"name":"unless","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":61,"column":39},"end":{"line":61,"column":86}}})) != null ? stack1 : "")
    + "\" data-view=\"CountriesDropdown\" data-input=\"country\" data-validation=\"control-group\">\n	</div>\n\n	<div class=\"address-edit-fields-group\" data-input=\"state\" data-view=\"StatesView\" data-validation=\"control-group\">\n	</div>\n\n	<div class=\"address-edit-fields-group\" data-input=\"zip\" "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isZipOptional") : depth0),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":67,"column":57},"end":{"line":67,"column":109}}})) != null ? stack1 : "")
    + " data-validation=\"control-group\">\n		<label class=\"address-edit-fields-group-label\" for=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"manage") || (depth0 != null ? compilerNameLookup(depth0,"manage") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"manage","hash":{},"data":data,"loc":{"start":{"line":68,"column":54},"end":{"line":68,"column":64}}}) : helper)))
    + "zip\">\n			"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Zip Code",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":69,"column":3},"end":{"line":69,"column":27}}}))
    + " <span class=\"address-edit-fields-input-required\">*</span>\n		</label>\n		<div  class=\"address-edit-fields-group-form-controls\" data-validation=\"control\">\n			<input type=\"text\" class=\"address-edit-fields-group-input-zip\" id=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"manage") || (depth0 != null ? compilerNameLookup(depth0,"manage") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"manage","hash":{},"data":data,"loc":{"start":{"line":72,"column":70},"end":{"line":72,"column":80}}}) : helper)))
    + "zip\" name=\"zip\" value=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"zip") || (depth0 != null ? compilerNameLookup(depth0,"zip") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"zip","hash":{},"data":data,"loc":{"start":{"line":72,"column":103},"end":{"line":72,"column":110}}}) : helper)))
    + "\" data-type=\"zip\">\n			<small class=\"address-edit-fields-input-help\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Example: 94117",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":73,"column":49},"end":{"line":73,"column":79}}}))
    + "</small>\n		</div>\n	</div>\n\n	<div class=\"address-edit-fields-group\"  data-input=\"phone\" data-validation=\"control-group\">\n		<label class=\"address-edit-fields-group-label\" for=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"manage") || (depth0 != null ? compilerNameLookup(depth0,"manage") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"manage","hash":{},"data":data,"loc":{"start":{"line":78,"column":54},"end":{"line":78,"column":64}}}) : helper)))
    + "phone\">\n			"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Phone Number",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":79,"column":3},"end":{"line":79,"column":31}}}))
    + "\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isPhoneFieldMandatory") : depth0),{"name":"if","hash":{},"fn":container.program(16, data, 0),"inverse":container.program(18, data, 0),"data":data,"loc":{"start":{"line":80,"column":3},"end":{"line":84,"column":10}}})) != null ? stack1 : "")
    + "		</label>\n		<div  class=\"address-edit-fields-group-form-controls\" data-validation=\"control\">\n			<input type=\"tel\" class=\"address-edit-fields-group-input\" id=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"manage") || (depth0 != null ? compilerNameLookup(depth0,"manage") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"manage","hash":{},"data":data,"loc":{"start":{"line":87,"column":65},"end":{"line":87,"column":75}}}) : helper)))
    + "phone\" name=\"phone\" value=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"phone") || (depth0 != null ? compilerNameLookup(depth0,"phone") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"phone","hash":{},"data":data,"loc":{"start":{"line":87,"column":102},"end":{"line":87,"column":111}}}) : helper)))
    + "\" data-action=\"inputphone\">\n			<small class=\"address-edit-fields-input-help\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Example: 555-123-1234",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":88,"column":49},"end":{"line":88,"column":86}}}))
    + "</small>\n		</div>\n	</div>\n\n	<div class=\"address-edit-fields-group\" data-input=\"isresidential\">\n		<label class=\"address-edit-fields-group-input-checkbox\">\n			<input type=\"checkbox\" id=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"manage") || (depth0 != null ? compilerNameLookup(depth0,"manage") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"manage","hash":{},"data":data,"loc":{"start":{"line":94,"column":30},"end":{"line":94,"column":40}}}) : helper)))
    + "isresidential\" value=\"T\" data-unchecked-value=\"F\" name=\"isresidential\" "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isAddressResidential") : depth0),{"name":"if","hash":{},"fn":container.program(20, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":94,"column":111},"end":{"line":94,"column":155}}})) != null ? stack1 : "")
    + " >\n			"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"This is a Residential Address",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":95,"column":3},"end":{"line":95,"column":48}}}))
    + "\n			<i class=\"address-edit-fields-icon-question-sign\" data-toggle=\"tooltip\" title=\"\" data-original-title=\""
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Indicating that this is a residential address will help us determine the best delivery method for your items.",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":96,"column":105},"end":{"line":96,"column":230}}}))
    + "\"></i>\n		</label>\n	</div>\n\n\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showDefaultControls") : depth0),{"name":"if","hash":{},"fn":container.program(22, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":101,"column":1},"end":{"line":123,"column":8}}})) != null ? stack1 : "")
    + "</div>\n\n\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/DemoCloudAlp/Suite_Commerce_Base_Theme/20.1.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/DemoCloudAlp/Suite_Commerce_Base_Theme/20.1.0/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'address_edit_fields'; return template;});