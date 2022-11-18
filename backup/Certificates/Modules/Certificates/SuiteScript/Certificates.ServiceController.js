define("CloudAlp.Certificates.Certificates.ServiceController", ["ServiceController","Certificates.Model"], function(
  ServiceController,
  CertificatesModel
) {
  "use strict";

  return ServiceController.extend({
    name: "CloudAlp.Certificates.Certificates.ServiceController",

    // The values in this object are the validation needed for the current service.
    options: {
      common: {}
    },

    get: function get() {
      return   CertificatesModel.getCustCertification();
      // return JSON.stringify({
      //   message: "Hello World I'm an Extension using a Service!"
      // });
    },

    post: function post() {
      // not implemented
    },

    put: function put() {
      // not implemented
    },

    delete: function() {
      // not implemented
    }
  });
});
