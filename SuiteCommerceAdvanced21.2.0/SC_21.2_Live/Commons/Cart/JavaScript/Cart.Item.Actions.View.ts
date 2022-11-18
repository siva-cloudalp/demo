/*
	© 2020 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

/// <amd-module name="Cart.Item.Actions.View"/>

import * as cart_item_actions_tpl from 'cart_item_actions.tpl';
import * as Utils from '../../Utilities/JavaScript/Utils';
import { Configuration } from '../../Utilities/JavaScript/Configuration';

import BackboneView = require('../../BackboneExtras/JavaScript/Backbone.View');

// @class Cart.Item.Actions.View @extend Backbone.View
export = BackboneView.extend({
    template: cart_item_actions_tpl,

    initialize: function() {
        this.application = this.options.application;
    },

    // @method getContext @return Cart.Item.Actions.View.Context
    getContext: function() {
        // @class Cart.Item.Actions.View.Context
        return {
            // @property {Model} line
            line: this.model,
            // @property {Item.Model} item
            item: this.model.get('item'),
            // @property {String} editUrl
            editUrl: Utils.addParamsToUrl(this.model.generateURL(), {
                source: 'cart',
                internalid: this.model.get('internalid')
            }),
            // @property {Boolean} isAdvanced
            isAdvanced: Configuration.siteSettings.sitetype !== 'STANDARD',
            // @property {Boolean} showSaveForLateButton
            showSaveForLateButton:
                this.application.ProductListModule &&
                this.application.ProductListModule.Utils.isProductListEnabled() &&
                Configuration.currentTouchpoint === 'home',
            // @property {String} lineId
            lineId: this.model.get('internalid'),
            // @property {Boolean} showQuantity
            showQuantity: this.model.get('item').get('_itemType') === 'GiftCert',
            // @property {Boolean} isEditable
            isEditable: !this.application.isStandalone()
        };
        // @class Cart.Item.Actions.View
    }
});
