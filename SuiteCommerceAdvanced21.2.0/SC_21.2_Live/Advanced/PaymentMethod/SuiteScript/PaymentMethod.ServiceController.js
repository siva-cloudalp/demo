/*
	© 2020 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

// PaymentMethod.ServiceController.js
// ----------------
// Service to manage credit cards requests
define('PaymentMethod.ServiceController', ['ServiceController', 'PaymentMethod.Model'], function(
    ServiceController,
    PaymentMethodModel
) {
    // @class PaymentMethod.ServiceController Manage credit cards requests
    // @extend ServiceController
    return ServiceController.extend({
        // @property {String} name Mandatory for all ssp-libraries model
        name: 'PaymentMethod.ServiceController',

        // @property {Service.ValidationOptions} options. All the required validation, permissions, etc.
        // The values in this object are the validation needed for the current service.
        // Can have values for all the request methods ('common' values) and specific for each one.
        options: {
            common: {
                requireLogin: true
            }
        },

        // @method get The call to PaymentMethod.Service.ss with http method 'get' is managed by this function
        // @return {PaymentMethod.Model.Attributes || Array<PaymentMethod.Model.Attributes>} One or a list of credit cards
        get: function() {
            const id = this.request.getParameter('internalid');
            return id ? PaymentMethodModel.get(id) : PaymentMethodModel.list() || [];
        },

        // @method post The call to PaymentMethod.Service.ss with http method 'post' is managed by this function
        // @return {StatusObject}
        post: function() {
            const id = PaymentMethodModel.create(this.data);
            
            // Because of this issue https://nlcorp.app.netsuite.com/app/crm/support/issuedb/issue.nl?id=90370875
            // We set 'ccsecuritycode' (quick fix) in the response becasue Backbone.validation will trigger a 
            // 'Security code invalid' error when a new credit card is added amd continue's button is clicked.
            // The error message is shown (for a brief period of time) because there's no CCSecuritycode in the  
            // response object's property as result of adding a new credit card. After that, checkout's next step
            // flows as expected.
            const paymentMethodModel = PaymentMethodModel.get(id);
            paymentMethodModel.ccsecuritycode = this.data.ccsecuritycode;

            this.sendContent(paymentMethodModel, { status: 201 });
            // Do not return here as we need to output the status 201
        },

        // @method put The call to PaymentMethod.Service.ss with http method 'put' is managed by this function
        // @return {PaymentMethod.Model.Attributes} The updated credit card
        put: function() {
            const id = this.request.getParameter('internalid');
            PaymentMethodModel.update(id, this.data);
            return PaymentMethodModel.get(id);
        },

        // @method delete The call to PaymentMethod.Service.ss with http method 'delete' is managed by this function
        // @return {StatusObject}
        delete: function() {
            const id = this.request.getParameter('internalid');
            PaymentMethodModel.remove(id);

            return { status: 'ok' };
        }
    });
});
