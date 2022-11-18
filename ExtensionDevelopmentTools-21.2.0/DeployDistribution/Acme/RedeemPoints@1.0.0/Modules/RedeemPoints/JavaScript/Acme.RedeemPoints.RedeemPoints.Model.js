// Model.js
// -----------------------
// @module Case
define("Acme.RedeemPoints.RedeemPoints.Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({

        
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "services/RedeemPoints.Service.ss"
            )
        )
        
});
});
