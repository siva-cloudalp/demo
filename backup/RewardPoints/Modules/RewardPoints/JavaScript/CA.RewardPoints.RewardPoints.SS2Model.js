// Model.js
// -----------------------
// @module Case
define("CA.RewardPoints.RewardPoints.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/RewardPoints/SuiteScript2/RewardPoints.Service.ss"
            ),
            true
        )
});
});
