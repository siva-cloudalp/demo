/*
  © 2020 NetSuite Inc.
  User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
  provided, however, if you are an authorized user with a NetSuite account or log-in, you
  may use this code subject to the terms that govern your access and use.
*/
define("ViewCertification.Model", ["require", "exports", "Backbone"], function (require, exports, Backbone) {
    "use strict";
    var ViewCertificationModel = Backbone.Model.extend({
        // urlRoot: Utils.getAbsoluteUrl('services/ViewCertification.Service.ss'),
        urlRoot: 'services/ViewCertification.Service.ss',
        parse: function (response) {
        },
        update: function (options) {
        }
    });
    return ViewCertificationModel;
});

//# sourceMappingURL=ViewCertification.Model.js.map
