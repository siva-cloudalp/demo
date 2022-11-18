/*
	© 2020 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

/// <amd-module name="Transaction.Line.Views.Cell.SelectableActionable.View"/>

import * as _ from 'underscore';

import * as transaction_line_views_cell_selectable_actionable_tpl from 'transaction_line_views_cell_selectable_actionable_navigable.tpl';

import TransactionLineViewsPriceView = require('./Transaction.Line.Views.Price.View');
import TransactionLineViewsOptionsSelectedView = require('./Transaction.Line.Views.Options.Selected.View');
import ProductLineSkuView = require('../../ProductLine/JavaScript/ProductLine.Sku.View');

import BackboneView = require('../../BackboneExtras/JavaScript/Backbone.View');

const TransactionLineViewsCellSelectableActionableView: any = BackboneView.extend({
    template: transaction_line_views_cell_selectable_actionable_tpl,

    initialize: function(options) {
        this.options = options;
        this.application = options.application;
        this.model = options.model;
    },

    childViews: {
        'Item.Price': function() {
            return new TransactionLineViewsPriceView({
                model: this.model,
                ignorePriceVisibility: !!this.options.ignorePriceVisibility
            });
        },
        'Item.SelectedOptions': function() {
            return new TransactionLineViewsOptionsSelectedView({
                model: this.model
            });
        },
        'Item.Summary.View': function() {
            const child_options = _.extend(this.options.summaryOptions || {}, {
                model: this.model,
                application: this.application
            });

            return new this.options.SummaryView(child_options);
        },
        'Item.Actions.View': function() {
            const child_options = _.extend(this.options.actionsOptions || {}, {
                model: this.model,
                application: this.application
            });

            return new this.options.ActionsView(child_options);
        },
        'Item.Sku': function() {
            return new ProductLineSkuView({
                model: this.model
            });
        }
    },

    // @method getContext
    // @return {Transaction.Line.Views.SelectableActionable.View.Context}
    getContext: function() {
        const item = this.model.get('item');

        // @class Transaction.Line.Views.SelectableActionable.View.Context
        return {
            // @property {Transaction.Line.Model} line
            line: this.model,
            // @property {String} lineId
            lineId: this.model.get('internalid'),
            // @property {Item.Model} item
            item: this.model.get('item'),
            // @property {String} itemName
            itemName: item.get('_name'),
            // @property {String} itemId
            itemId: item.get('internalid'),
            // @property {String} linkAttributes
            linkAttributes: this.model.getFullLink({
                quantity: null,
                location: null,
                fulfillmentChoice: null
            }),
            // @property {Boolean} isNavigable
            isNavigable: !!this.options.navigable,
            // @property {Boolean} showCustomAlert
            showCustomAlert: !!item.get('_cartCustomAlert'),
            // @property {String} alertText
            alertText: item.get('_cartCustomAlert'),
            // @property {String} customAlertType
            customAlertType: item.get('_cartCustomAlertType') || 'info',
            // @property {Boolean} showActionsView
            showActionsView: !!this.options.ActionsView,
            // @property {Boolean} showSummaryView
            showSummaryView: !!this.options.SummaryView,
            // @property {Boolean} isLineChecked
            isLineChecked: this.model.get('checked'),
            // @property {Boolean} activeLinesLengthGreaterThan1
            activeLinesLengthGreaterThan1: this.options.activeLinesLength > 1,
            // @property {ImageContainer} thumbnail
            thumbnail: this.model.getThumbnail()
        };
    }
});

export = TransactionLineViewsCellSelectableActionableView;
