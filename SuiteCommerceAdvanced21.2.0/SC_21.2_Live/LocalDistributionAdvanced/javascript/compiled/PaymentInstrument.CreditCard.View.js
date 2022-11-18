/*
    © 2020 NetSuite Inc.
    User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
    provided, however, if you are an authorized user with a NetSuite account or log-in, you
    may use this code subject to the terms that govern your access and use.
*/
define("PaymentInstrument.CreditCard.View", ["require", "exports", "paymentinstrument_creditcard.tpl", "CreditCard.Edit.Form.SecurityCode.View", "Backbone.View", "Backbone.FormView", "Utils"], function (require, exports, paymentinstrument_creditcard_tpl, CreditCardEditFormSecurityCodeView, BackboneView, BackboneFormView) {
    "use strict";
    // @class PaymentInstrument.CreditCard.View @extends Backbone.View
    var PaymentInstrumentCreditCardView = BackboneView.extend({
        template: paymentinstrument_creditcard_tpl,
        initialize: function (options) {
            this.options = options;
            if (this.options.showSecurityCodeForm) {
                this.model.set('hasSecurityCode', true);
                this.bindings = {
                    '[name="ccsecuritycode"]': 'ccsecuritycode'
                };
                this.events = {
                    'submit form': 'doNothing'
                };
                BackboneFormView.add(this);
            }
        },
        childViews: {
            'CreditCard.Edit.Form.SecurityCode': function () {
                return new CreditCardEditFormSecurityCodeView({
                    error: this.options.securityNumberError,
                    showCreditCardHelp: this.options.showCreditCardHelp,
                    creditCardHelpTitle: this.options.creditCardHelpTitle
                });
            }
        },
        doNothing: function (e) {
            e.preventDefault();
        },
        // @method getContext @return CreditCard.View
        getContext: function () {
            var icon = this.model.get('paymentmethod').imagesrc && this.model.get('paymentmethod').imagesrc[0];
            var isSelected = this.options.hideSelector ||
                this.model.get('internalid') === this.options.selectedCreditCardId;
            // @class CreditCard.View
            return {
                // @property {String} creditCartId
                creditCartId: this.model.get('internalid'),
                // @property {Boolean} showSecurityCodeForm
                showSecurityCodeForm: !!this.options.showSecurityCodeForm && isSelected,
                // @property {String} showCreditCardImage
                showCreditCardImage: !!icon,
                // @property {String} paymentMethodImageUrl
                paymentMethodImageUrl: icon || '',
                // @property {String} paymentName
                paymentName: this.model.get('paymentmethod').name,
                // @property {String} lastfourdigits
                lastfourdigits: this.model.get('cardlastfourdigits') ||
                    (this.model.get('ccnumber') &&
                        this.model.get('ccnumber').substring(this.model.get('ccnumber').length - 4)),
                // @property {String} ccname
                ccname: this.model.get('ccname') || '',
                // @property {String} expirationDate
                expirationDate: this.model.get('cardexpirationdate') ||
                    this.model.get('expirationdate') ||
                    this.model.get('ccexpiredate'),
                // @property {Boolean} showDefaults
                showDefaults: !!this.options.showDefaults,
                // @property {Boolean} isDefaultCreditCard
                isDefaultCreditCard: this.model.get('ccdefault') === 'T',
                // @property {Boolean} showSelect
                showSelect: !!this.options.showSelect,
                // @property {String} selectMessage
                selectMessage: this.options.selectMessage,
                // @property {Boolean} showActions
                showActions: !!this.options.showActions,
                // @property {Boolean} isSelected
                isSelected: isSelected,
                // @property {Boolean} showSelector
                showSelector: !this.options.hideSelector,
                // @property {Boolean} isNewPaymentMethod
                isNewPaymentMethod: this.model.get('internalid') < 0
            };
        }
    });
    return PaymentInstrumentCreditCardView;
});

//# sourceMappingURL=PaymentInstrument.CreditCard.View.js.map
