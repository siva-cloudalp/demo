/*
    © 2020 NetSuite Inc.
    User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
    provided, however, if you are an authorized user with a NetSuite account or log-in, you
    may use this code subject to the terms that govern your access and use.
*/
define("PaymentMethod.CreditCard.List.View", ["require", "exports", "paymentmethod_creditcard_list.tpl", "creditcard_list.tpl", "paymentinstrument_creditcard_edit.tpl", "backbone_collection_view_cell.tpl", "backbone_collection_view_row.tpl", "Utils", "jQuery", "Configuration", "Profile.Model", "Environment", "ExportedModulesNames", "PaymentMethod.Collection", "CreditCard.View", "PaymentInstrument.CreditCard.View", "GlobalViews.Confirmation.View", "Backbone.View", "Backbone", "Backbone.CollectionView"], function (require, exports, paymentmethod_creditcard_list_tpl, creditcard_list_tpl, paymentinstrument_creditcard_edit_tpl, backbone_collection_view_cell_tpl, backbone_collection_view_row_tpl, Utils, jQuery, Configuration_1, Profile_Model_1, Environment_1, ExportedModulesNames_1, PaymentMethod_Collection_1, CreditCardView, PaymentInstrumentCreditCardView, GlobalViewsConfirmationView, BackboneView, Backbone, BackboneCollectionView) {
    "use strict";
    // @class PaymentMethod.CreditCard.List.View @extends Backbone.View
    var PaymentMethodCreditcardListView = BackboneView.extend({
        title: Utils.translate('Credit Cards'),
        page_header: Utils.translate('Credit Cards'),
        attributes: {
            id: 'PaymentMethodCreditCardsList',
            class: 'PaymentMethodCreditCardListView'
        },
        events: {
            'click [data-action="remove"]': 'removeCreditCard'
        },
        initialize: function () {
            this.template = paymentmethod_creditcard_list_tpl || creditcard_list_tpl;
            this.profileModel = Profile_Model_1.ProfileModel.getInstance();
            this.collection = this.profileModel.get('paymentmethods');
            this.collection.on('reset sync add remove change', function () {
                if (this.collection.length) {
                    this.collection.sort();
                    this.render();
                }
                else {
                    Backbone.history.navigate('#creditcards/new', { trigger: true });
                }
            }, this);
            this.isPaymentInstrumentEnabled = Environment_1.Environment.getSC().ENVIRONMENT.paymentInstrumentEnabled;
            this.isBackwardCompatible = ExportedModulesNames_1.isModuleLoaded('PaymentWizard.Module.PaymentMethod.ACH');
        },
        beforeShowContent: function beforeShowContent() {
            var promise = jQuery.Deferred();
            if (this.profileModel.get('isLoggedIn') !== 'T') {
                promise.reject();
                this.options.application.getLayout().notFound();
            }
            else if (!this.collection.length) {
                promise.reject();
                Backbone.history.navigate('#creditcards/new', { trigger: true });
            }
            else {
                promise.resolve();
            }
            return promise;
        },
        // @method getPaymentMethodsToShow returns a copy of the payment methods
        // collection including the new card button available to show
        getPaymentMethodsToShow: function () {
            var payment_methods_to_show;
            if (this.collection && !!this.collection.length) {
                this.collection.remove('-temporal-');
                payment_methods_to_show = paymentinstrument_creditcard_edit_tpl
                    ? this.collection.getCollectionForRendering()
                    : this.collection;
            }
            return payment_methods_to_show ? payment_methods_to_show.models : [];
        },
        childViews: {
            'CreditCards.Collection': function () {
                var view = SC.ENVIRONMENT.paymentInstrumentEnabled
                    ? PaymentInstrumentCreditCardView
                    : CreditCardView;
                var view_collection;
                var currentTouchpoint = this.options.application.getConfig().currentTouchpoint;
                if (!paymentinstrument_creditcard_edit_tpl) {
                    view_collection = new BackboneCollectionView({
                        collection: this.getPaymentMethodsToShow(),
                        childView: view,
                        childViewOptions: {
                            showActions: true,
                            hideSelector: true,
                            showDefaults: currentTouchpoint === 'customercenter'
                        },
                        viewsPerRow: Configuration_1.Configuration.get('itemsPerRow', 2)
                    });
                }
                else {
                    var ccCollection = this.collection;
                    if (this.isPaymentInstrumentEnabled && this.isBackwardCompatible) {
                        var recordTypes_1 = ['PaymentCard', 'PaymentCardToken'];
                        ccCollection = new PaymentMethod_Collection_1.PaymentMethodCollection(ccCollection.filter(function (model) { return recordTypes_1.indexOf(model.get('recordType')) !== -1; }));
                    }
                    if (ccCollection && !!ccCollection.length) {
                        ccCollection.remove('-temporal-');
                        ccCollection = paymentinstrument_creditcard_edit_tpl
                            ? ccCollection.getCollectionForRendering().models
                            : ccCollection;
                    }
                    else {
                        Backbone.history.navigate('#creditcards/new', { trigger: true });
                    }
                    view_collection = new BackboneCollectionView({
                        collection: ccCollection,
                        childView: view,
                        childViewOptions: {
                            showActions: true,
                            hideSelector: true,
                            showDefaults: currentTouchpoint === 'customercenter'
                        },
                        viewsPerRow: Configuration_1.Configuration.get('itemsPerRow') ||
                            (Utils.isDesktopDevice() ? 3 : Utils.isTabletDevice() ? 2 : 1),
                        cellTemplate: backbone_collection_view_cell_tpl,
                        rowTemplate: backbone_collection_view_row_tpl
                    });
                }
                return view_collection;
            }
        },
        // @method getSelectedMenu
        getSelectedMenu: function () {
            return 'paymentmethods';
        },
        // @method getBreadcrumbPages
        getBreadcrumbPages: function () {
            return {
                text: Utils.translate('Payment Methods'),
                href: '/creditcards'
            };
        },
        // @method removeCreditCard dispatch the remove event
        removeCreditCard: function (e) {
            e.preventDefault();
            var deleteConfirmationView = new GlobalViewsConfirmationView({
                callBack: this._removeCreditCardFromCollection,
                callBackParameters: {
                    context: this,
                    creditcardId: jQuery(e.target).data('id')
                },
                title: Utils.translate('Remove Credit Card'),
                body: Utils.translate('Are you sure you want to remove this Credit Card?'),
                autohide: true
            });
            return this.options.application.getLayout().showInModal(deleteConfirmationView);
        },
        _removeCreditCardFromCollection: function (options) {
            options.context.collection.get(options.creditcardId).destroy({ wait: true });
        },
        // @method getContext @return {CreditCard.List.View.Context}
        getContext: function () {
            // @class CreditCard.List.View.Context
            return {
                // @property {String} pageHeader
                pageHeader: this.page_header,
                // @property {Boolean} showBackToAccount
                showBackToAccount: Configuration_1.Configuration.get('siteSettings.sitetype') === 'STANDARD'
            };
        }
    });
    return PaymentMethodCreditcardListView;
});

//# sourceMappingURL=PaymentMethod.CreditCard.List.View.js.map
