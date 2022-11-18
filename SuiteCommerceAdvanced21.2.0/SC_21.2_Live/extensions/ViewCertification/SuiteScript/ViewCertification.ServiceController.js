/*
	© 2020 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

// ViewCertification.ServiceController.js
// ----------------
// Service to manage cart items requests
define('ViewCertification.ServiceController', [
    'ServiceController',
    'ViewCertification.Model',
    'SiteSettings.Model',
    'SC.Models.Init',
    'Utils'
], function (ServiceController, ViewCertificationModel, SiteSettings, ModelsInit,Utils) {
    // @extend ServiceController
    return ServiceController.extend({
        // @property {String} name Mandatory for all ssp-libraries model
        name: 'ViewCertification.ServiceController',

        // @method get The call to ViewCertification.Service.ss with http method 'get' is managed by this function
        // @return {ViewCertification.Model.Data}
        get: function () {
        
            return ViewCertificationModel.getCustCertification();
        }
    });
});
