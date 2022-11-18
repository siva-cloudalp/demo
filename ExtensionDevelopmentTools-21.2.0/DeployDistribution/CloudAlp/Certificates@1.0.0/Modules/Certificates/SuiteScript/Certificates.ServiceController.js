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
      console.warn("this data certificates");
      var returnresp = {}
      
      try {
      console.warn("this data certificates",this.data);
          // nlapiSendEmail(author, recipient, subject, body, cc, bcc, records, attachments, notifySenderOnBounce, internalOnly, replyTo);
           nlapiSendEmail(this.data.author, this.data.recipient, "Customer Request For Update Password",this.data.body, null, null, null,null ); 
           return  returnresp.status = true;
          } catch (error) {
      
            return returnresp.status = error;
          }
    },

    put: function put() {
      // not implemented
    },

    delete: function() {
      // not implemented
    }
  });
});
