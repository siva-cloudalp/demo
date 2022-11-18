// Model.js
// -----------------------
// @module Case
define("CloudAlp.Certificates.Certificates.Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({

        
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "services/Certificates.Service.ss"
            )
        ),
        validation: {
            // email: { required: true, pattern: 'email', msg: Utils.translate('Valid email is required')},
            // firstname: {required: true, msg: Utils.translate('First name is required') },
            // lastname: {required: true, msg: Utils.translate('Last name is required') },
            phone: {required: false,fn: Utils.validatePhone}
            
        }
});
});
