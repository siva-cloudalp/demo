/*
    © 2020 NetSuite Inc.
    User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
    provided, however, if you are an authorized user with a NetSuite account or log-in, you
    may use this code subject to the terms that govern your access and use.
*/
define("CMSadapter.Plugin.RecollectCMSSelectors", ["require", "exports", "SC.BaseComponent.Plugin.RecollectCMSSelectors"], function (require, exports, SC_BaseComponent_Plugin_RecollectCMSSelectors_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CMSadapterPluginRecollectCMSSelectorsGenerator = void 0;
    /*
        Loads the recollectCMSSelectors plugin that iterates through all the tags
        that contains data-cms in the template string.
    */
    function CMSadapterPluginRecollectCMSSelectorsGenerator(application) {
        return {
            name: 'recollectCMSSelectors',
            priority: 20,
            execute: SC_BaseComponent_Plugin_RecollectCMSSelectors_1.scBaseComponentPluginRecollectCMSSelectorsGenerator
        };
    }
    exports.CMSadapterPluginRecollectCMSSelectorsGenerator = CMSadapterPluginRecollectCMSSelectorsGenerator;
});

//# sourceMappingURL=CMSadapter.Plugin.RecollectCMSSelectors.js.map
