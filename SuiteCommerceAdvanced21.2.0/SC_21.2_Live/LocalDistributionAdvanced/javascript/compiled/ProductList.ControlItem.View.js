/*
    © 2020 NetSuite Inc.
    User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
    provided, however, if you are an authorized user with a NetSuite account or log-in, you
    may use this code subject to the terms that govern your access and use.
*/
define("ProductList.ControlItem.View", ["require", "exports", "product_list_control_item.tpl", "jQuery", "Backbone.View"], function (require, exports, product_list_control_item_tpl, jQuery, BackboneView) {
    "use strict";
    return BackboneView.extend({
        tagName: 'li',
        template: product_list_control_item_tpl,
        events: {
            'click [data-action="product-list-item"]': 'pListItemHandler'
        },
        initialize: function (options) {
            this.model = options.model; //	ProductList.Model
            this.line = options.product; //	Product.Model
            this.application = options.application;
            this.parentView = options.parentView;
        },
        // @method checked Determines if an item is checked if the item belongs the list
        // Whilst on move mode, returns always false @return {Boolean}
        checked: function () {
            return this.parentView.mode !== 'move' ? this.model.checked(this.line) : false;
        },
        // @method pListItemHandler dispatch mouse event - if move mode enabled, move the item, if not, an item is added/removed from a list
        pListItemHandler: function (e) {
            e.preventDefault();
            var self = this;
            var checkbox = jQuery(e.target);
            if (self.parentView.mode === 'move') {
                self.moveProduct();
            }
            else {
                self.addRemoveProduct(checkbox);
            }
        },
        // @method moveProduct Moves an item to another list
        moveProduct: function () {
            var _this = this;
            this.parentView.moveProductHandler(this.model).then(function () {
                _this.application.ProductListModule.Utils.updateProductListMenu();
            });
        },
        // @method addRemoveProduct Adds/removes an item from a list @param {jQuery} checkbox
        addRemoveProduct: function ($checkbox) {
            var _this = this;
            $checkbox.attr('disabled', true);
            if ($checkbox.is(':checked')) {
                // add to list
                this.parentView.addItemToList(this.line, this.model).then(function () {
                    _this.application.ProductListModule.Utils.updateProductListMenu();
                });
            }
            else {
                // remove from list
                this.removeItemFromList(this.line);
                this.application.ProductListModule.Utils.updateProductListMenu();
            }
        },
        // @method removeItemFromList Remove a line list item from the product list
        // @param {Item.Model} product
        removeItemFromList: function (line) {
            var self = this;
            var selected_line = self.model.get('items').find(function (product_list_line) {
                return product_list_line.isEqual(line);
            });
            if (selected_line) {
                selected_line.set('productList', {
                    id: self.model.get('internalid'),
                    owner: self.model.get('owner').id
                });
                self.model.get('items').remove(selected_line);
                selected_line.destroy().done(function () {
                    self.model.collection.trigger('changed');
                    self.parentView.render();
                    self.parentView.hideConfirmationMessage();
                });
            }
            else {
                self.parentView.render();
            }
        },
        // @method getContext @return {ProductList.ControlItem.View.Context}
        getContext: function () {
            return {
                // @class ProductList.ControlItem.View.Context
                // @property {Boolean} isMoving
                isMoving: this.parentView.mode === 'move',
                // @property {Boolean} isChecked
                isChecked: this.checked(),
                // @property {Boolean} isTypePredefined
                isTypePredefined: this.model.get('typeName') === 'predefined',
                // @property {String} itemName
                itemName: this.model.get('name'),
                // @property {String} listId
                listId: this.model.get('internalid')
            };
        }
    });
});

//# sourceMappingURL=ProductList.ControlItem.View.js.map
