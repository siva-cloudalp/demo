define('list_header_view.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "	<div class=\"list-header-view\" data-type=\"accordion\">\n		<div class=\"list-header-view-accordion\" data-action=\"accordion-header\">\n\n			<div class=\"list-header-view-accordion-link\">"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"headerMarkup") || (depth0 != null ? compilerNameLookup(depth0,"headerMarkup") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"headerMarkup","hash":{},"data":data,"loc":{"start":{"line":5,"column":48},"end":{"line":5,"column":64}}}) : helper)))
    + "</div>\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showHeaderExpandable") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":3},"end":{"line":71,"column":10}}})) != null ? stack1 : "")
    + "		</div>\n	</div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, alias4="function";

  return "			<div class=\"list-header-view-accordion-header\">\n				<button class=\"list-header-view-filter-button\" data-action=\"toggle-filters\">\n					"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Filter",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":9,"column":5},"end":{"line":9,"column":27}}}))
    + " <i class=\"list-header-view-filter-button-icon\" ></i>\n				</button>\n			</div>\n			<div class=\"list-header-view-accordion-body "
    + alias3(((helper = (helper = compilerNameLookup(helpers,"initiallyCollapsed") || (depth0 != null ? compilerNameLookup(depth0,"initiallyCollapsed") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"initiallyCollapsed","hash":{},"data":data,"loc":{"start":{"line":12,"column":47},"end":{"line":12,"column":69}}}) : helper)))
    + "\" data-type=\"accordion-body\" "
    + ((stack1 = ((helper = (helper = compilerNameLookup(helpers,"accordionStyle") || (depth0 != null ? compilerNameLookup(depth0,"accordionStyle") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"accordionStyle","hash":{},"data":data,"loc":{"start":{"line":12,"column":98},"end":{"line":12,"column":118}}}) : helper))) != null ? stack1 : "")
    + ">\n				<div class=\"list-header-view-accordion-body-header "
    + alias3(((helper = (helper = compilerNameLookup(helpers,"classes") || (depth0 != null ? compilerNameLookup(depth0,"classes") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"classes","hash":{},"data":data,"loc":{"start":{"line":13,"column":55},"end":{"line":13,"column":66}}}) : helper)))
    + "\">\n\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"rangeFilter") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":15,"column":5},"end":{"line":41,"column":12}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"sorts") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":43,"column":5},"end":{"line":58,"column":12}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"filters") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":60,"column":5},"end":{"line":68,"column":12}}})) != null ? stack1 : "")
    + "				</div>\n			</div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "						<div class=\"list-header-view-datepicker-from\">\n							<label class=\"list-header-view-from\" for=\"from\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"rangeFilterLabel") || (depth0 != null ? compilerNameLookup(depth0,"rangeFilterLabel") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rangeFilterLabel","hash":{},"data":data,"loc":{"start":{"line":17,"column":55},"end":{"line":17,"column":75}}}) : helper)))
    + "</label>\n\n							<div class=\"list-header-view-datepicker-container-input\">\n								<input class=\"list-header-view-accordion-body-input\" id=\"from\" name=\"from\" type=\"date\" autocomplete=\"off\" data-format=\"yyyy-mm-dd\" data-start-date=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"rangeFilterFromMin") || (depth0 != null ? compilerNameLookup(depth0,"rangeFilterFromMin") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rangeFilterFromMin","hash":{},"data":data,"loc":{"start":{"line":20,"column":156},"end":{"line":20,"column":178}}}) : helper)))
    + "\" data-end-date=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"rangeFilterFromMax") || (depth0 != null ? compilerNameLookup(depth0,"rangeFilterFromMax") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rangeFilterFromMax","hash":{},"data":data,"loc":{"start":{"line":20,"column":195},"end":{"line":20,"column":217}}}) : helper)))
    + "\" value=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"selectedRangeFrom") || (depth0 != null ? compilerNameLookup(depth0,"selectedRangeFrom") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"selectedRangeFrom","hash":{},"data":data,"loc":{"start":{"line":20,"column":226},"end":{"line":20,"column":247}}}) : helper)))
    + "\" data-action=\"range-filter\" data-todayhighlight=\"true\"/>\n\n								<i class=\"list-header-view-accordion-body-calendar-icon\"></i>\n								<a class=\"list-header-view-accordion-body-clear\" data-action=\"clear-value\">\n									<i class=\"list-header-view-accordion-body-clear-icon\"></i>\n								</a>\n							</div>\n						</div>\n\n						<div class=\"list-header-view-datepicker-to\">\n							<label class=\"list-header-view-to\" for=\"to\">"
    + alias4((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"to",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":30,"column":51},"end":{"line":30,"column":69}}}))
    + "</label>\n\n							<div class=\"list-header-view-datepicker-container-input\">\n								<input class=\"list-header-view-accordion-body-input\" id=\"to\" name=\"to\" type=\"date\" autocomplete=\"off\" data-format=\"yyyy-mm-dd\" data-start-date=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"rangeFilterToMin") || (depth0 != null ? compilerNameLookup(depth0,"rangeFilterToMin") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rangeFilterToMin","hash":{},"data":data,"loc":{"start":{"line":33,"column":152},"end":{"line":33,"column":172}}}) : helper)))
    + "\" data-end-date=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"rangeFilterToMax") || (depth0 != null ? compilerNameLookup(depth0,"rangeFilterToMax") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rangeFilterToMax","hash":{},"data":data,"loc":{"start":{"line":33,"column":189},"end":{"line":33,"column":209}}}) : helper)))
    + "\" value=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"selectedRangeTo") || (depth0 != null ? compilerNameLookup(depth0,"selectedRangeTo") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"selectedRangeTo","hash":{},"data":data,"loc":{"start":{"line":33,"column":218},"end":{"line":33,"column":237}}}) : helper)))
    + "\" data-action=\"range-filter\" data-todayhighlight=\"true\"/>\n\n								<i class=\"list-header-view-accordion-body-calendar-icon\"></i>\n								<a class=\"list-header-view-accordion-body-clear\" data-action=\"clear-value\">\n									<i class=\"list-header-view-accordion-body-clear-icon\"></i>\n								</a>\n							</div>\n						</div>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "						<span class=\"list-header-view-sorts\">\n							<label class=\"list-header-view-filters\">\n								<select name=\"sort\" class=\"list-header-view-accordion-body-select\" data-action=\"sort\">\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"sorts") : depth0),{"name":"each","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":47,"column":9},"end":{"line":49,"column":18}}})) != null ? stack1 : "")
    + "								</select>\n							</label>\n\n							<button class=\"list-header-view-accordion-body-button-sort\" data-action=\"toggle-sort\">\n								<i class=\"list-header-view-accordion-body-button-sort-up "
    + alias4(((helper = (helper = compilerNameLookup(helpers,"sortIconUp") || (depth0 != null ? compilerNameLookup(depth0,"sortIconUp") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"sortIconUp","hash":{},"data":data,"loc":{"start":{"line":54,"column":65},"end":{"line":54,"column":79}}}) : helper)))
    + "\"></i>\n								<i class=\"list-header-view-accordion-body-button-sort-down "
    + alias4(((helper = (helper = compilerNameLookup(helpers,"sortIconDown") || (depth0 != null ? compilerNameLookup(depth0,"sortIconDown") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"sortIconDown","hash":{},"data":data,"loc":{"start":{"line":55,"column":67},"end":{"line":55,"column":83}}}) : helper)))
    + "\"></i>\n							</button>\n						</span>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "										<option value=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"value") || (depth0 != null ? compilerNameLookup(depth0,"value") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"value","hash":{},"data":data,"loc":{"start":{"line":48,"column":25},"end":{"line":48,"column":34}}}) : helper)))
    + "\" data-permissions=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"permission") || (depth0 != null ? compilerNameLookup(depth0,"permission") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"permission","hash":{},"data":data,"loc":{"start":{"line":48,"column":54},"end":{"line":48,"column":68}}}) : helper)))
    + "\" "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"selected") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":48,"column":70},"end":{"line":48,"column":103}}})) != null ? stack1 : "")
    + ">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"name") || (depth0 != null ? compilerNameLookup(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":48,"column":104},"end":{"line":48,"column":112}}}) : helper)))
    + "</option>\n";
},"7":function(container,depth0,helpers,partials,data) {
    return " selected ";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "						<label class=\"list-header-view-filters\">\n							<select name=\"filter\" class=\"list-header-view-accordion-body-select\" data-action=\"filter\">\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"filters") : depth0),{"name":"each","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":63,"column":8},"end":{"line":65,"column":17}}})) != null ? stack1 : "")
    + "							</select>\n						</label>\n";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "									<option value=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"itemValue") || (depth0 != null ? compilerNameLookup(depth0,"itemValue") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"itemValue","hash":{},"data":data,"loc":{"start":{"line":64,"column":24},"end":{"line":64,"column":37}}}) : helper)))
    + "\" class=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"cssClassName") || (depth0 != null ? compilerNameLookup(depth0,"cssClassName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cssClassName","hash":{},"data":data,"loc":{"start":{"line":64,"column":46},"end":{"line":64,"column":62}}}) : helper)))
    + "\" data-permissions=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"permission") || (depth0 != null ? compilerNameLookup(depth0,"permission") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"permission","hash":{},"data":data,"loc":{"start":{"line":64,"column":82},"end":{"line":64,"column":96}}}) : helper)))
    + "\" "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"selected") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":64,"column":98},"end":{"line":64,"column":131}}})) != null ? stack1 : "")
    + ">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"name") || (depth0 != null ? compilerNameLookup(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":64,"column":132},"end":{"line":64,"column":140}}}) : helper)))
    + "</option>\n";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "	<div class=\"list-header-view-select-all\">\n		<label class=\"list-header-view-select-all-label\" for=\"select-all\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"unselectedLength") : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.program(15, data, 0),"data":data,"loc":{"start":{"line":79,"column":3},"end":{"line":83,"column":10}}})) != null ? stack1 : "")
    + "		</label>\n	</div>\n";
},"13":function(container,depth0,helpers,partials,data) {
    return "				<input type=\"checkbox\" name=\"select-all\" id=\"select-all\" data-action=\"select-all\">"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Select All ($(0))",(depth0 != null ? compilerNameLookup(depth0,"collectionLength") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":80,"column":86},"end":{"line":80,"column":136}}}))
    + "\n";
},"15":function(container,depth0,helpers,partials,data) {
    return "				<input type=\"checkbox\" name=\"select-all\" id=\"select-all\" data-action=\"unselect-all\" checked>"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Unselect All ($(0))",(depth0 != null ? compilerNameLookup(depth0,"collectionLength") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":82,"column":96},"end":{"line":82,"column":148}}}))
    + "\n";
},"17":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "	<div class=\"list-header-view-paginator\">\n		<div data-view=\"GlobalViews.Pagination\"></div>\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"showCurrentPage") : depth0),{"name":"if","hash":{},"fn":container.program(18, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":91,"column":2},"end":{"line":93,"column":9}}})) != null ? stack1 : "")
    + "	</div>\n";
},"18":function(container,depth0,helpers,partials,data) {
    return "			<div data-view=\"GlobalViews.ShowCurrentPage\"></div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showHeader") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":74,"column":7}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showSelectAll") : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":76,"column":0},"end":{"line":86,"column":7}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showPagination") : depth0),{"name":"if","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":88,"column":0},"end":{"line":95,"column":7}}})) != null ? stack1 : "")
    + "\n\n\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/DemoCloudAlp/Suite_Commerce_Base_Theme/20.1.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/DemoCloudAlp/Suite_Commerce_Base_Theme/20.1.0/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'list_header_view'; return template;});