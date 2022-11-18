/*
	© 2020 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

/// <amd-module name="PaymentMethod.CreditCard.List.View"/>

import * as paymentmethod_creditcard_list_tpl from 'paymentmethod_creditcard_list.tpl';
import * as creditcard_list_tpl from 'creditcard_list.tpl';
import * as paymentinstrument_creditcard_edit_tpl from 'paymentinstrument_creditcard_edit.tpl';
import * as backbone_collection_view_cell_tpl from 'backbone_collection_view_cell.tpl';
import * as backbone_collection_view_row_tpl from 'backbone_collection_view_row.tpl';
import * as Utils from '../../../Commons/Utilities/JavaScript/Utils';
import * as jQuery from '../../../Commons/Core/JavaScript/jQuery';
import { Configuration } from '../../SCA/JavaScript/Configuration';
import { ProfileModel } from '../../../Commons/Profile/JavaScript/Profile.Model';
import { Environment } from '../../../Commons/Core/JavaScript/Environment';
import { isModuleLoaded } from '../../../Commons/Core/JavaScript/ExportedModulesNames';
import { PaymentMethodCollection } from './PaymentMethod.Collection';

import CreditCardView = require('../../../Commons/CreditCard/JavaScript/CreditCard.View');
import PaymentInstrumentCreditCardView = require('../../../Commons/PaymentInstrument/JavaScript/PaymentInstrument.CreditCard.View');
import GlobalViewsConfirmationView = require('../../../Commons/GlobalViews/JavaScript/GlobalViews.Confirmation.View');
import BackboneView = require('../../../Commons/BackboneExtras/JavaScript/Backbone.View');
import Backbone = require('../../../Commons/Utilities/JavaScript/backbone.custom');
import BackboneCollectionView = require('../../../Commons/Backbone.CollectionView/JavaScript/Backbone.CollectionView');

// @class PaymentMethod.CreditCard.List.View @extends Backbone.View
const PaymentMethodCreditcardListView: any = BackboneView.extend({
    title: Utils.translate('Credit Cards'),
    page_header: Utils.translate('Credit Cards'),

    attributes: {
        id: 'PaymentMethodCreditCardsList',
        class: 'PaymentMethodCreditCardListView'
    },

    events: {
        'click [data-action="remove"]': 'removeCreditCard'
    },

    initialize: function() {
        this.template = paymentmethod_creditcard_list_tpl || creditcard_list_tpl;

        this.profileModel = ProfileModel.getInstance();
        this.collection = this.profileModel.get('paymentmethods');

        this.collection.on(
            'reset sync add remove change',
            function() {
                if (this.collection.length) {
                    this.collection.sort();
                    this.render();
                } else {
                    Backbone.history.navigate('#creditcards/new', { trigger: true });
                }
            },
            this
        );

        this.isPaymentInstrumentEnabled = Environment.getSC().ENVIRONMENT.paymentInstrumentEnabled;

        this.isBackwardCompatible = isModuleLoaded('PaymentWizard.Module.PaymentMethod.ACH');
    },

    beforeShowContent: function beforeShowContent() {
        const promise = jQuery.Deferred();

        if (this.profileModel.get('isLoggedIn') !== 'T') {
            promise.reject();
            this.options.application.getLayout().notFound();
        } else if (!this.collection.length) {
            promise.reject();
            Backbone.history.navigate('#creditcards/new', { trigger: true });
        } else {
            promise.resolve();
        }

        return promise;
    },

    // @method getPaymentMethodsToShow returns a copy of the payment methods
    // collection including the new card button available to show
    getPaymentMethodsToShow: function() {
        let payment_methods_to_show;

        if (this.collection && !!this.collection.length) {
            this.collection.remove('-temporal-');
            payment_methods_to_show = paymentinstrument_creditcard_edit_tpl
                ? this.collection.getCollectionForRendering()
                : this.collection;
        }

        return payment_methods_to_show ? payment_methods_to_show.models : [];
    },

    childViews: {
        'CreditCards.Collection': function() {
            const view = SC.ENVIRONMENT.paymentInstrumentEnabled
                ? PaymentInstrumentCreditCardView
                : CreditCardView;
            let view_collection;

            const { currentTouchpoint } = this.options.application.getConfig();

            if (!paymentinstrument_creditcard_edit_tpl) {
                view_collection = new BackboneCollectionView({
                    collection: this.getPaymentMethodsToShow(),
                    childView: view,
                    childViewOptions: {
                        showActions: true,
                        hideSelector: true,
                        showDefaults: currentTouchpoint === 'customercenter'
                    },
                    viewsPerRow: Configuration.get('itemsPerRow', 2)
                });
            } else {
                let ccCollection = this.collection;

                if (this.isPaymentInstrumentEnabled && this.isBackwardCompatible) {
                    const recordTypes = ['PaymentCard', 'PaymentCardToken'];
                    ccCollection = new PaymentMethodCollection(
                        ccCollection.filter(
                            model => recordTypes.indexOf(model.get('recordType')) !== -1
                        )
                    );
                }

                if (ccCollection && !!ccCollection.length) {
                    ccCollection.remove('-temporal-');
                    ccCollection = paymentinstrument_creditcard_edit_tpl
                        ? ccCollection.getCollectionForRendering().models
                        : ccCollection;
                } else {
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
                    viewsPerRow:
                        Configuration.get('itemsPerRow') ||
                        (Utils.isDesktopDevice() ? 3 : Utils.isTabletDevice() ? 2 : 1),
                    cellTemplate: backbone_collection_view_cell_tpl,
                    rowTemplate: backbone_collection_view_row_tpl
                });
            }

            return view_collection;
        }
    },

    // @method getSelectedMenu
    getSelectedMenu: function() {
        return 'paymentmethods';
    },

    // @method getBreadcrumbPages
    getBreadcrumbPages: function() {
        return {
            text: Utils.translate('Payment Methods'),
            href: '/creditcards'
        };
    },

    // @method removeCreditCard dispatch the remove event
    removeCreditCard: function(e) {
        e.preventDefault();

        const deleteConfirmationView = new GlobalViewsConfirmationView({
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

    _removeCreditCardFromCollection: function(options) {
        options.context.collection.get(options.creditcardId).destroy({ wait: true });
    },

    // @method getContext @return {CreditCard.List.View.Context}
    getContext: function() {
        // @class CreditCard.List.View.Context
        return {
            // @property {String} pageHeader
            pageHeader: this.page_header,
            // @property {Boolean} showBackToAccount
            showBackToAccount: Configuration.get('siteSettings.sitetype') === 'STANDARD'
        };
    }
});

export = PaymentMethodCreditcardListView;
