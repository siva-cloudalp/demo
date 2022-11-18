/*
	© 2020 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

/// <amd-module name="ProductList.DetailsLaterMacro.View"/>

import '../../../Commons/BackboneExtras/JavaScript/Backbone.View.render';
import * as product_list_details_later_macro_tpl from 'product_list_details_later_macro.tpl';

import ProductViewsPriceView = require('../../../Commons/ProductViews/JavaScript/ProductViews.Price.View');
import ProductLineStockView = require('../../../Commons/ProductLine/JavaScript/ProductLine.Stock.View');
import ProductLineStockDescriptionView = require('../../../Commons/ProductLine/JavaScript/ProductLine.StockDescription.View');
import ProductListDetailsMinQuantityView = require('./ProductList.DetailsMinQuantity.View');
import TransactionLineViewsOptionsSelectedView = require('../../../Commons/Transaction.Line.Views/JavaScript/Transaction.Line.Views.Options.Selected.View');
import BackboneView = require('../../../Commons/BackboneExtras/JavaScript/Backbone.View');

// @class ProductList.DetailsLaterMacro.View @extends Backbone.View
export = BackboneView.extend({
    template: product_list_details_later_macro_tpl,

    childViews: {
        'ItemViews.Price': function() {
            return new ProductViewsPriceView({
                model: this.model,
                origin: 'PRODUCTLISTDETAILSLATER'
            });
        },
        'Item.SelectedOptions': function() {
            return new TransactionLineViewsOptionsSelectedView({
                model: this.model
            });
        },
        'ItemViews.Stock': function() {
            return new ProductLineStockView({
                model: this.model
            });
        },
        'ProductList.DetailsMinQuantity': function() {
            return new ProductListDetailsMinQuantityView({
                model: this.model
            });
        },
        StockDescription: function() {
            return new ProductLineStockDescriptionView({
                model: this.model
            });
        }
    },

    // @method getContext
    // @return {ProductList.DetailsLaterMacro.View.Context}
    getContext: function() {
        const item = this.model.get('item');

        // @class ProductList.DetailsLaterMacro.View.Context
        return {
            // @property {ProductList.Item.Model} model
            model: this.model,
            // @property {Integer} quantity
            quantity: this.model.get('quantity'),
            // @property {String} itemId
            itemId: item.get('internalid'),
            // @property {Boolean} canBeAddedToCart
            canBeAddedToCart:
                item.get('ispurchasable') &&
                this.model.fulfillsMinimumQuantityRequirement() &&
                this.model.fulfillsMaximumQuantityRequirement(),
            // @property {String} itemDetailsUrl
            itemDetailsUrl: this.model.generateURL(),
            // @property {Boolean} isGiftCertificate
            isGiftCertificate: item.get('itemtype') === 'GiftCert',
            // @property {Boolean} showActions
            showActions: !this.options.hide_actions,
            // @property {ImageContainer} thumbnail
            thumbnail: this.model.getThumbnail()
        };
        // @class ProductList.DetailsLaterMacro.View
    }
});
