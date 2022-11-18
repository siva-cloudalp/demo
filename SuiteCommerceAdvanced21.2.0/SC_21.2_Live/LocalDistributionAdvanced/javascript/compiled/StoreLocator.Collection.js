/*
    © 2020 NetSuite Inc.
    User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
    provided, however, if you are an authorized user with a NetSuite account or log-in, you
    may use this code subject to the terms that govern your access and use.
*/
define("StoreLocator.Collection", ["require", "exports", "Utils", "Location.Collection", "StoreLocator.Model"], function (require, exports, Utils, LocationCollection, StoreLocatorModel) {
    "use strict";
    // @class StoreLocator.Collection @extend Backbone.Collection
    var StoreLocatorCollection = LocationCollection.extend({
        // @property {StoreLocator.Model} model
        model: StoreLocatorModel,
        // @property {String} url
        url: Utils.getAbsoluteUrl('services/StoreLocator.Service.ss')
    });
    return StoreLocatorCollection;
});

//# sourceMappingURL=StoreLocator.Collection.js.map
