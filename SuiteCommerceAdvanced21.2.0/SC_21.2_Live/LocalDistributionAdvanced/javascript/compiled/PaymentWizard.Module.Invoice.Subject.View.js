/*
    © 2020 NetSuite Inc.
    User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
    provided, however, if you are an authorized user with a NetSuite account or log-in, you
    may use this code subject to the terms that govern your access and use.
*/
define("PaymentWizard.Module.Invoice.Subject.View", ["require", "exports", "payment_wizard_invoice_subject.tpl", "Backbone.View"], function (require, exports, payment_wizard_invoice_subject_tpl, BackboneView) {
    "use strict";
    // @class PaymentWizard.Module.Invoice.Subject.View @extend BackboneView
    var PaymentWizardModuleInvoiceSubjectView = BackboneView.extend({
        template: payment_wizard_invoice_subject_tpl,
        // @method getContext @return {PaymentWizard.Module.Invoice.Subject.View.Context}
        getContext: function () {
            // @class PaymentWizard.Module.Invoice.Subject.View.Context
            return {
                // @property {Boolean} isOverdue
                isOverdue: !!this.model.get('isoverdue'),
                // @property {String} dueDate
                dueDate: this.model.get('duedate') || ' ',
                // @property {Boolean} isDiscountApplied
                isDiscountApplied: !!this.model.get('discountapplies'),
                // @property {String} discountFormatted
                discountFormatted: this.model.get('discount_formatted'),
                // @property {String} discDate
                discDate: this.model.get('discdate'),
                // @property {Boolean} isPaid
                isPaid: !!this.model.get('ispaid')
            };
        }
    });
    return PaymentWizardModuleInvoiceSubjectView;
});

//# sourceMappingURL=PaymentWizard.Module.Invoice.Subject.View.js.map
