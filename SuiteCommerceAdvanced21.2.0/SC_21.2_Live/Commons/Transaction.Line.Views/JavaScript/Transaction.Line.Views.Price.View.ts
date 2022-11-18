/*
	© 2020 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

/// <amd-module name="Transaction.Line.Views.Price.View"/>

import * as transaction_line_views_price_tpl from 'transaction_line_views_price.tpl';
import { Configuration } from '../../Utilities/JavaScript/Configuration';
import { ProfileModel } from '../../Profile/JavaScript/Profile.Model';

import Backbone = require('../../Utilities/JavaScript/backbone.custom');
import BackboneView = require('../../BackboneExtras/JavaScript/Backbone.View');
import Session = require('../../Session/JavaScript/Session');

const TransactionLineViewsPriceView: any = BackboneView.extend({
    // @property {Function} template
    template: transaction_line_views_price_tpl,

    // @method initialize
    // @param {Transaction.Line.Views.Price.View.Options} options
    // @return {Void}
    initialize: function() {
        this.profileModel = ProfileModel.getInstance();

        const isPriceVisible =
            !!this.options.ignorePriceVisibility ||
            (this.model.get('item') && this.model.get('item').get('ispricevisible') !== false);

        this.isPriceEnabled = !ProfileModel.getInstance().hidePrices() && isPriceVisible;

        if (this.isPriceEnabled) {
            this.model.on(
                'change:quantity',
                function() {
                    this.render();
                },
                this
            );
        }
    },

    // @method getUrlLogin Get the login URL contains an origin hash parameter indicating the current URL to came back after login
    // @return {String}
    getUrlLogin: function() {
        const url = `${Session.get('touchpoints.login')}&origin=${Configuration.get(
            'currentTouchpoint'
        ) || 'home'}&origin_hash=`;

        return (
            url +
            encodeURIComponent(
                this.options.origin === 'PDPQUICK'
                    ? this.model.generateURL().replace('/', '')
                    : Backbone.history.fragment
            )
        );
    },

    // @method getContext
    // @returns {Transaction.Line.Views.Price.View.Context}
    getContext: function() {
        const price_container_object = this.model.getPrice();
        let showComparePrice =
            this.options.showComparePrice &&
            price_container_object.price < price_container_object.compare_price;

        const item = this.model.get('item') || this.model;
        const quantity = this.model.get('quantity');
        const betterPrice = item && item.getBetterPrice(quantity);
        if (betterPrice) {
            showComparePrice = true;
        }

        // @class Transaction.Line.Views.Price.View.Context
        return {
            // @property {Transaction.Line.Model} model
            model: this.model,
            // @property {Boolean} showComparePrice
            showComparePrice: showComparePrice,
            // @property {Boolean} isInStock
            isInStock: !!this.model.getStockInfo().isInStock,
            // @property {String} currencyCode
            currencyCode:
                (SC.getSessionInfo('currency') && SC.getSessionInfo('currency').code) ||
                SC.ENVIRONMENT.currencyCodeSpecifiedOnUrl,
            // @property {String} comparePriceFormatted
            comparePriceFormatted: betterPrice
                ? betterPrice.defaultItemPrice
                : price_container_object.compare_price_formatted || '',
            // @property {Number} price
            price: price_container_object.price || 0,
            // @property {String} rateFormatted
            rateFormatted: betterPrice
                ? betterPrice.betterItemPrice
                : this.model.get('rate_formatted') || price_container_object.price_formatted || '',
            // @property {Boolean} isPriceEnabled
            isPriceEnabled: this.isPriceEnabled,
            // @property {String} urlLogin
            urlLogin: this.getUrlLogin(),
            // @property {Boolean} isLoggedIn
            isLoggedIn: this.profileModel.isLoggedIn()
        };
        // @class Transaction.Line.Views.Price.View
    }
});

export = TransactionLineViewsPriceView;
