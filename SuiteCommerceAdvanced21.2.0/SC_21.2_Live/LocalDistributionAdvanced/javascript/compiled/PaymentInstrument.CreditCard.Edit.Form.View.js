/*
    © 2020 NetSuite Inc.
    User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
    provided, however, if you are an authorized user with a NetSuite account or log-in, you
    may use this code subject to the terms that govern your access and use.
*/
define("PaymentInstrument.CreditCard.Edit.Form.View", ["require", "exports", "underscore", "paymentinstrument_creditcard_edit_form.tpl", "Configuration", "PaymentInstrument.CreditCard.Edit.Form.SecurityCode.View", "Backbone.View", "Backbone.FormView"], function (require, exports, _, paymentinstrument_creditcard_edit_form_tpl, Configuration_1, CreditCardEditFormSecurityCodeView, BackboneView, BackboneFormView) {
    "use strict";
    // @class PaymentInstrument.CreditCard.Edit.Form.View @extends Backbone.View
    var PaymentInstrumentCreditCardEditFormView = BackboneView.extend({
        template: paymentinstrument_creditcard_edit_form_tpl,
        bindings: {
            '[name="ccnumber"]': 'ccnumber',
            '[name="ccname"]': 'ccname',
            '[name="ccsecuritycode"]': 'ccsecuritycode',
            '[name="expmonth"]': 'expmonth',
            '[name="expyear"]': 'expyear'
        },
        initialize: function () {
            if (!this.model.isNew()) {
                delete this.bindings['[name="ccnumber"]'];
            }
            if (this.options.showSecurityCodeForm) {
                this.model.set({ hasSecurityCode: true });
            }
            else {
                this.model.unset('hasSecurityCode', { silent: true });
            }
            var expDate = this.model.get('cardexpirationdate') ||
                this.model.get('expirationdate') ||
                this.model.get('ccexpiredate');
            if (!expDate) {
                this.model.set({ expmonth: this.options.currentMonth + '' }, { silent: true });
                this.model.set({ expyear: this.options.years[0] + '' }, { silent: true });
            }
            else {
                var expDateParts = expDate.split('/');
                if (!expDateParts || expDateParts.length != 2) {
                    this.model.set({ expmonth: this.options.currentMonth + '' }, { silent: true });
                    this.model.set({ expyear: this.options.years[0] + '' }, { silent: true });
                }
                else {
                    this.model.set({ expmonth: expDateParts[0] + '' }, { silent: true });
                    this.model.set({ expyear: expDateParts[1] + '' }, { silent: true });
                }
            }
            BackboneFormView.add(this);
        },
        childViews: {
            'CreditCard.Edit.Form.SecurityCode': function () {
                return new CreditCardEditFormSecurityCodeView({
                    showCreditCardHelp: this.options.showCreditCardHelp,
                    creditCardHelpTitle: this.options.creditCardHelpTitle
                });
            }
        },
        // @method getContext @return CreditCard.Edit.Form.View.Context
        getContext: function () {
            var payment_methods_from_configuration = Configuration_1.Configuration.get('siteSettings.paymentmethods', []);
            var selected_payment_method = _.findWhere(payment_methods_from_configuration, {
                internalid: this.model.get('paymentmethod')
            });
            var self = this;
            var paymentMethods = _.map(_.where(payment_methods_from_configuration, {
                creditcard: 'T',
                creditcardtoken: 'F'
            }), function (paymentmethod) {
                // @class CreditCard.PaymentMetod
                return {
                    // @property
                    hidden: !(self.model.isNew() ||
                        (selected_payment_method &&
                            paymentmethod.key === selected_payment_method.key)),
                    icon: paymentmethod.imagesrc,
                    internalid: paymentmethod.internalid,
                    key: paymentmethod.key,
                    name: paymentmethod.name,
                    selected: selected_payment_method && paymentmethod.key === selected_payment_method.key
                };
            });
            var months = _.map(this.options.months, function (month) {
                return {
                    month: month
                };
            });
            var years = _.map(this.options.years, function (year) {
                return {
                    year: year,
                    disabled: year === self.options.expyear
                };
            });
            var ccnumber = this.model.get('cardlastfourdigits') ||
                (this.model.get('ccnumber') &&
                    this.model.get('ccnumber').substring(this.model.get('ccnumber').length - 4));
            // temporal credit card.
            if (ccnumber && !~ccnumber.indexOf('*')) {
                ccnumber = '************' + ccnumber.substring(ccnumber.length - 4);
            }
            // @class CreditCard.Form.View.Context
            return {
                // @property {Array<CreditCard.PaymentMetod>} paymentMethods
                paymentMethods: paymentMethods,
                // @property {String} paymentMethodValue
                paymentMethodValue: selected_payment_method ? selected_payment_method.key : '',
                // @property {String} ccnumber
                ccnumber: ccnumber,
                // @property {boolean} showPaymentSelector
                showPaymentSelector: this.model.isNew(),
                // @property {Boolean} isNew
                isNew: this.model.isNew(),
                // @property {Array<Object>?} months
                months: months,
                // @property {Array<Object>?} years
                years: years,
                // @property {Boolean} showDefaults
                showDefaults: !!this.options.showDefaults,
                // @property {String} ccname
                ccname: this.model.get('nameoncard') || '',
                // @property {Boolean} ccdefault
                ccdefault: this.model.get('ccdefault') === 'T',
                // @property {Boolean} showSecurityCode
                showSecurityCodeForm: !!this.options.showSecurityCodeForm,
                // @property {Boolean} showSaveCreditCardCheckbox
                showSaveCreditCardCheckbox: !!this.options.showSaveCreditCardCheckbox &&
                    (this.model.isNew() || this.model.get('internalid') === '-temporal-'),
                // @property {Boolean} saveCreditCardByDefault
                saveCreditCardByDefault: this.model.get('internalid') === '-temporal-'
                    ? false
                    : !!this.options.saveCreditCardByDefault
            };
        }
    });
    return PaymentInstrumentCreditCardEditFormView;
});

//# sourceMappingURL=PaymentInstrument.CreditCard.Edit.Form.View.js.map
