/*
	© 2020 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

// Invoice.Service.ss
// ----------------
// Service to manage invoice requests
define('Invoice.ServiceController', ['ServiceController', 'Invoice.Model'], function(
    ServiceController,
    InvoiceModel
) {
    // @class Invoice.ServiceController Supports login process
    // @extend ServiceController
    return ServiceController.extend({
        // @property {String} name Mandatory for all ssp-libraries model
        name: 'Invoice.ServiceController',

        // @property {Service.ValidationOptions} options. All the required validation, permissions, etc.
        // The values in this object are the validation needed for the current service.
        // Can have values for all the request methods ('common' values) and specific for each one.
        options: {
            common: {
                requireLogin: true,
                requirePermissions: {
                    list: ['transactions.tranFind.1', 'transactions.tranCustInvc.1']
                }
            }
        },

        // @method get The call to Invoice.Service.ss with http method 'get' is managed by this function
        // @return {Transaction.Model.Get.Result || Transaction.Model.List.Result}
        get: function() {
            const id = this.request.getParameter('internalid');
            const status = this.request.getParameter('status');
            const page = this.request.getParameter('page');

            let extraParameters = {};
            if(
                this.request.getParameter('order') &&
                this.request.getParameter('sort') &&
                this.request.getParameter('results_per_page')
            ) {
                extraParameters = {
                    order: this.request.getParameter('order'),
                    sort: this.request.getParameter('sort'),
                    results_per_page: this.request.getParameter('results_per_page')
                }
            }

            return id
                ? InvoiceModel.get('invoice', id)
                : InvoiceModel.list({
                      types: 'CustInvc',
                      status: status,
                      page: page,
                      ...extraParameters
                  });
        }
    });
});
