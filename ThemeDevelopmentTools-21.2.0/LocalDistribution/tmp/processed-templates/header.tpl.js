define('header.tpl', ['Handlebars','Handlebars.CompilerNameLookup','header_sidebar.tpl','header_sidebar.tpl'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    return "header-main-wrapper-standalone";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "	<div class=\"header-subheader\">\n        <div class=\"header-subheader-container\">\n            <div class=\"header-sidebar-toggle-wrapper\">\n                <button class=\"header-sidebar-toggle\" data-action=\"header-sidebar-show\">\n                    <i class=\"header-sidebar-toggle-icon\"></i>\n                </button>\n            </div>\n            <ul class=\"header-subheader-options\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"showLanguagesOrCurrencies") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":16},"end":{"line":29,"column":23}}})) != null ? stack1 : "")
    + "                <li data-view=\"StoreLocatorHeaderLink\"></li>\n                <li data-view=\"RequestQuoteWizardHeaderLink\"></li>\n                <li data-view=\"QuickOrderHeaderLink\"></li>\n            </ul>\n		</div>\n	</div>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "                <li class=\"header-subheader-settings\">\n                    <a href=\"#\" class=\"header-subheader-settings-link\" data-toggle=\"dropdown\" title=\""
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Settings",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":15,"column":101},"end":{"line":15,"column":125}}}))
    + "\">\n                        <i class=\"header-menu-settings-icon\"></i>\n                        <i class=\"header-menu-settings-carret\"></i>\n                    </a>\n                    <div class=\"header-menu-settings-dropdown\">\n                        <h5 class=\"header-menu-settings-dropdown-title\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Site Settings",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":20,"column":72},"end":{"line":20,"column":101}}}))
    + "</h5>\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showLanguages") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":21,"column":24},"end":{"line":23,"column":31}}})) != null ? stack1 : "")
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showCurrencies") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":24,"column":24},"end":{"line":26,"column":31}}})) != null ? stack1 : "")
    + "                    </div>\n                </li>\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "                            <div data-view=\"Global.HostSelector\"></div>\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "                            <div data-view=\"Global.CurrencySelector\"></div>\n";
},"9":function(container,depth0,helpers,partials,data) {
    return "				<div class=\"header-menu-locator-mobile\" data-view=\"StoreLocatorHeaderLink\"></div>\n				<div class=\"header-menu-searchmobile\" data-view=\"SiteSearch.Button\"></div>\n				<div class=\"header-menu-cart\">\n					<div class=\"header-menu-cart-dropdown\" >\n						<div data-view=\"Header.MiniCart\"></div>\n					</div>\n				</div>\n";
},"11":function(container,depth0,helpers,partials,data) {
    return " header-secondary-wrapper-standalone";
},"13":function(container,depth0,helpers,partials,data) {
    return "<div data-view=\"SiteSearch\"></div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"header-message\" data-view=\"Message.Placeholder\"></div>\n\n<div class=\"header-main-wrapper "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isStandalone") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":32},"end":{"line":3,"column":89}}})) != null ? stack1 : "")
    + "\">\n"
    + ((stack1 = compilerNameLookup(helpers,"unless").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isStandalone") : depth0),{"name":"unless","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":4},"end":{"line":36,"column":15}}})) != null ? stack1 : "")
    + "\n	<nav class=\"header-main-nav\">\n		<div id=\"banner-header-top\" class=\"content-banner banner-header-top\" data-cms-area=\"header_banner_top\" data-cms-area-filters=\"global\"></div>\n		<div class=\"header-sidebar-toggle-wrapper\">\n			<button class=\"header-sidebar-toggle\" data-action=\"header-sidebar-show\">\n				<i class=\"header-sidebar-toggle-icon\"></i>\n			</button>\n		</div>\n		<div class=\"header-content\">\n			<div class=\"header-logo-wrapper\">\n				<div data-view=\"Header.Logo\"></div>\n			</div>\n			<div class=\"header-right-menu\">\n				<div class=\"header-menu-profile\" data-view=\"Header.Profile\"></div>\n"
    + ((stack1 = compilerNameLookup(helpers,"unless").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isStandalone") : depth0),{"name":"unless","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":51,"column":4},"end":{"line":59,"column":15}}})) != null ? stack1 : "")
    + "			</div>\n		</div>\n		<div id=\"banner-header-bottom\" class=\"content-banner banner-header-bottom\" data-cms-area=\"header_banner_bottom\" data-cms-area-filters=\"global\"></div>\n	</nav>\n\n</div>\n\n<div class=\"header-sidebar-overlay\" data-action=\"header-sidebar-hide\"></div>\n<div class=\"header-secondary-wrapper"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isStandalone") : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":68,"column":36},"end":{"line":68,"column":99}}})) != null ? stack1 : "")
    + "\" data-view=\"Header.Menu\" data-phone-template=\"header_sidebar\" data-tablet-template=\"header_sidebar\"></div>\n"
    + ((stack1 = compilerNameLookup(helpers,"unless").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isStandalone") : depth0),{"name":"unless","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":69,"column":0},"end":{"line":71,"column":11}}})) != null ? stack1 : "")
    + "\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/DemoCloudAlp/Suite_Commerce_Base_Theme/20.1.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/DemoCloudAlp/Suite_Commerce_Base_Theme/20.1.0/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'header'; return template;});