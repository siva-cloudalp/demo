/*
    © 2020 NetSuite Inc.
    User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
    provided, however, if you are an authorized user with a NetSuite account or log-in, you
    may use this code subject to the terms that govern your access and use.
*/
define("PaymentMethod", ["require", "exports", "Utils", "PaymentInstrument.CreditCard.Edit.View", "PaymentMethod.CreditCard.List.View"], function (require, exports, Utils, CreditCardEditView, PaymentMethodCreditCardListView) {
    "use strict";
    // @class PaymentMethod @extends ApplicationModule
    var PaymentMethod = {
        MenuItems: {
            parent: 'settings',
            id: 'paymentmethod',
            name: Utils.translate('Credit Cards'),
            url: 'paymentmethods',
            index: 4
        },
        mountToApp: function (application) {
            var pageType = application.getComponent('PageType');
            pageType.registerPageType({
                name: 'CreditCardsList',
                routes: ['creditcards', 'paymentmethods'],
                view: PaymentMethodCreditCardListView,
                defaultTemplate: {
                    name: 'creditcard_list.tpl',
                    displayName: 'Credit Cards List Default',
                    thumbnail: Utils.getThemeAbsoluteUrlOfNonManagedResources('img/default-layout-credit-cards-list.png')
                }
            });
            pageType.registerPageType({
                name: 'CreditCardDetails',
                routes: ['creditcards/:id'],
                view: CreditCardEditView,
                defaultTemplate: {
                    name: 'creditcard_edit.tpl',
                    displayName: 'Credit Card Edit Default',
                    thumbnail: Utils.getThemeAbsoluteUrlOfNonManagedResources('img/default-layout-credit-card-detail.png')
                }
            });
        }
    };
    return PaymentMethod;
});

//# sourceMappingURL=PaymentMethod.js.map
