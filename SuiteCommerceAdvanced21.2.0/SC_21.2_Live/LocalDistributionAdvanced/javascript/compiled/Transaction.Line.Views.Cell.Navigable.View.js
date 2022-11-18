/*
    © 2020 NetSuite Inc.
    User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
    provided, however, if you are an authorized user with a NetSuite account or log-in, you
    may use this code subject to the terms that govern your access and use.
*/
define("Transaction.Line.Views.Cell.Navigable.View", ["require", "exports", "transaction_line_views_cell_navigable.tpl", "Transaction.Line.Views.Options.Selected.View", "ProductLine.Stock.View", "Transaction.Line.Views.Price.View", "ProductLine.Sku.View", "ProductLine.StockDescription.View", "Transaction.Line.Views.Tax", "Backbone.View"], function (require, exports, transaction_line_views_cell_navigable_tpl, TransactionLineViewsOptionsSelectedView, ProductLineStockView, TransactionLineViewsPriceView, ProductLineSkuView, ProductLineStockDescriptionView, TransactionLineViewsTax, BackboneView) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TransactionLineViewsCellNavigableView = void 0;
    exports.TransactionLineViewsCellNavigableView = BackboneView.extend({
        template: transaction_line_views_cell_navigable_tpl,
        initialize: function (options) {
            this.options = options;
            this.application = options.application;
            this.model = options.model;
        },
        childViews: {
            'Item.Options': function () {
                return new TransactionLineViewsOptionsSelectedView({
                    model: this.model
                });
            },
            'ItemViews.Stock.View': function () {
                return new ProductLineStockView({
                    model: this.model.get('item')
                });
            },
            'Item.Price': function () {
                return new TransactionLineViewsPriceView({
                    model: this.model,
                    ignorePriceVisibility: !!this.options.ignorePriceVisibility
                });
            },
            'Item.Sku': function () {
                return new ProductLineSkuView({
                    model: this.model
                });
            },
            'Item.Tax.Info': function () {
                if (this.options.showTaxDetails) {
                    return new TransactionLineViewsTax({
                        model: this.model
                    });
                }
            },
            StockDescription: function () {
                return new ProductLineStockDescriptionView({
                    model: this.model.get('item')
                });
            }
        },
        // @method getContext
        // @return {Transaction.Line.Views.Navigable.View.Context}
        getContext: function () {
            var item = this.model.get('item');
            var line = this.model;
            var price_container_object = this.model.getPrice();
            var isPriceVisible = line.get('item') && line.get('item').get('ispricevisible') !== false;
            // @class Transaction.Line.Views.Navigable.View.Context
            return {
                // @property {Transaction.Line.Model} model
                model: this.model,
                // @property {String} itemId
                itemId: item.get('internalid'),
                // @property {String} itemName
                itemName: item.get('_name'),
                // @property {String} cellClassName
                cellClassName: this.options.cellClassName,
                // @property {Boolean} isNavigable
                isNavigable: !!this.options.navigable && !!item.get('_isPurchasable'),
                // @property {String} rateFormatted
                rateFormatted: line.get('rate_formatted'),
                // @property {Boolean} showOptions
                showOptions: !!(line.get('options') && line.get('options').length),
                // @property {String} itemURLAttributes
                itemURLAttributes: line.getFullLink({
                    quantity: null,
                    location: null,
                    fulfillmentChoice: null
                }),
                // @property {Number} quantity
                quantity: line.get('quantity'),
                // @property {Boolean} showDetail2Title
                showDetail2Title: !!this.options.detail2Title,
                // @property {String} detail2Title
                detail2Title: this.options.detail2Title,
                // @property {String} detail2
                detail2: line.get(this.options.detail2),
                // @property {Boolean} showBlockDetail2
                showBlockDetail2: !!line.get(this.options.detail2) && isPriceVisible,
                // @property {Boolean} showDetail3Title
                showDetail3Title: !!this.options.detail3Title && (isPriceVisible || !!this.options.isEstimateDone),
                // @property {String} detail3Title
                detail3Title: this.options.detail3Title,
                // @property {String} detail3
                detail3: price_container_object.total_formatted || line.get(this.options.detail3) || '',
                // @property {Boolean} showComparePrice
                showComparePrice: line.get('amount') > line.get('total') && isPriceVisible,
                // @property {String} comparePriceFormatted
                comparePriceFormatted: line.get('amount_formatted'),
                // @property {ImageContainer} thumbnail
                thumbnail: this.model.getThumbnail(),
                // @property {Boolean} isFreeGift
                isFreeGift: line.get('free_gift') === true
            };
        }
    });
});

//# sourceMappingURL=Transaction.Line.Views.Cell.Navigable.View.js.map
