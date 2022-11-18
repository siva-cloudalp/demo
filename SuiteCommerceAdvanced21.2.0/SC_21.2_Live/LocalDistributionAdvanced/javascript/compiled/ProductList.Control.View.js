/*
    © 2020 NetSuite Inc.
    User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
    provided, however, if you are an authorized user with a NetSuite account or log-in, you
    may use this code subject to the terms that govern your access and use.
*/
define("ProductList.Control.View", ["require", "exports", "underscore", "product_list_control.tpl", "Utils", "jQuery", "Profile.Model", "Backbone", "Backbone.View", "ProductList.Model", "ProductList.Item.Model", "ProductList.Item.Collection", "ProductList.ControlItem.View", "ProductList.ControlNewItem.View", "Session", "Tracker"], function (require, exports, _, product_list_control_tpl, Utils, jQuery, Profile_Model_1, Backbone, BackboneView, ProductListModel, ProductListItemModel, ProductListItemCollection, ControlItemView, ControlNewItemView, Session, Tracker) {
    "use strict";
    return BackboneView.extend({
        template: product_list_control_tpl,
        attributes: { class: 'dropdown product-lists' },
        events: {
            'click [data-action="show-productlist-control"]': 'validateLogin',
            'click [data-toggle="showFlyout"]': 'showFlyout',
            'click [data-type="productlist-control"]': 'stopPropagation',
            click: 'contentClick',
            mouseup: 'contentMouseUp'
        },
        stopPropagation: function (event) {
            // For elements that are inside of some item lists (Ex. dropdowns),
            // Prevent the item to be selected
            if (event &&
                event.target &&
                !this.$(event.target).hasClass('global-views-message-button')) {
                event.stopPropagation();
            }
        },
        initialize: function (options) {
            this.product = options.product;
            this.collection = options.collection;
            this.application = options.application;
            this.moveOptions = options.moveOptions;
            this.countedClicks = options.countedClicks;
            if (this.moveOptions) {
                this.mode = 'move';
            }
            // need to hide the menu (data-type="productlist-control") when clicked outside, so we register here a click handler on the document.:
            jQuery(document).click(function (event) {
                var outside = jQuery(event.target)
                    .parents()
                    .index((jQuery(event.target).closest('[data-type^="productlist-control"]'))) === -1;
                outside = outside && jQuery(event.target).data('action') !== 'show-productlist-control';
                if (outside) {
                    if (jQuery('[data-type="productlist-control"]').is(':visible')) {
                        var $control = jQuery('[data-type="productlist-control"]');
                        // return the control to its initial state
                        $control.find('form').hide();
                        $control.find('[data-action="show-add-new-list-form"]').show();
                        $control.slideUp();
                    }
                }
            });
            this.product.on('change', this.render, this);
        },
        // Render the control view, appending the items views and add new list form
        render: function () {
            // if the control is currently visible then we remember that !
            this.is_visible = this.$('[data-type="productlist-control"]').is(':visible');
            BackboneView.prototype.render.apply(this);
            var self = this;
            self.collection.each(function (model) {
                var view = new ControlItemView({
                    model: model,
                    product: self.product,
                    application: self.application,
                    parentView: self
                });
                self.$('ul').prepend(view.render().el);
            });
            var new_product_list_model = this.getNewProductListModel();
            var new_item_view = new ControlNewItemView({
                model: new_product_list_model,
                application: self.application,
                parentView: self
            });
            self.$('[data-type="new-item-container"]').html(new_item_view.render().el);
            // also we don't want to erase any previous confirmation messages
            self.confirm_message && self.saveAndShowConfirmationMessage(self.confirm_message);
        },
        // This method is overridden in POS.
        getNewProductListModel: function () {
            return new ProductListModel();
        },
        // if the user is not logged in we redirect it to login page and then back to the PDP.
        validateLogin: function (e) {
            if (Profile_Model_1.ProfileModel.getInstance().get('isLoggedIn') === 'T') {
                return true;
            }
            e.stopPropagation();
            e.stopImmediatePropagation();
            e.preventDefault();
            var login = Session.get('touchpoints.login');
            login += "&origin=" + this.application.getConfig().currentTouchpoint;
            if (this.$el.closest('.modal-product-detail').length > 0) {
                // we are in the quick view
                var hashtag = this.product.generateURL();
                login += "&origin_hash=" + encodeURIComponent(hashtag.replace('#/', ''));
            }
            else {
                login += "&origin_hash=" + encodeURIComponent(Backbone.history.fragment);
            }
            window.location.href = login;
        },
        // validates the passed gift cert item and return false and render an error message if invalid.
        validateGiftCertificate: function validateGiftCertificate(line) {
            var line_option_email = line.get('options') &&
                line.get('options').findWhere({ cartOptionId: 'GIFTCERTRECIPIENTEMAIL' });
            if (line_option_email && !line_option_email.isValid(true)) {
                this.render(); // for unchecking the just checked checkbox
                this.showError(this.application.getErrorMessage('recipientEmailIsInvalid'));
                return false;
            }
            return true;
        },
        getItemOptions: function (line) {
            var selected_options = line.get('options').filter(function (option) {
                return !!option.get('value');
            });
            return _.reduce(selected_options, function (acc, option) {
                var value = option.get('value') || {};
                acc[option.get('cartOptionId')] = {
                    value: value.internalid,
                    displayvalue: value.label
                };
                return acc;
            }, {});
        },
        // Adds the product to the newly created list, renders the control and shows a confirmation msg
        addNewProductToList: function (newList) {
            var _this = this;
            return this.addItemToList(this.product, newList, true).then(function () {
                _this.saveAndShowConfirmationMessage(_this.$('.ul-product-lists [type="checkbox"]:checked').length > 1
                    ? Utils.translate('Good! You added this item to your product lists')
                    : Utils.translate('Good! You added this item to your product list'));
            });
        },
        // Add a new product list item into a product list
        addItemToList: function (line, productList, dontShowMessage) {
            var addItemPromise = jQuery.Deferred();
            if (line.isValid(true)) {
                var self_1 = this;
                if (!productList.get('internalid')) {
                    // this is a predefined list
                    productList.save().done(function (data) {
                        var new_model = new ProductListModel(data);
                        self_1.application.ProductListModule.Utils.getProductLists().add(new_model, {
                            merge: true
                        });
                        self_1.doAddItemToList(line, new_model, dontShowMessage).then(function () {
                            addItemPromise.resolve();
                        });
                    });
                }
                else {
                    self_1.doAddItemToList(line, productList, dontShowMessage).then(function () {
                        addItemPromise.resolve();
                    });
                }
            }
            return addItemPromise;
        },
        // This method is overridden in POS
        getNewItemData: function (line, productList) {
            var product_list_line = ProductListItemModel.createFromProduct(line);
            product_list_line.set('productList', {
                id: productList.get('internalid'),
                owner: productList.get('owner').id
            });
            return product_list_line;
        },
        // Adds the new item to the collection
        doAddItemToList: function (product, productList, dontShowMessage) {
            var self = this;
            var product_list_line_to_save = this.getNewItemData(product, productList);
            return product_list_line_to_save.save(null, {
                // Note this is lack of validation is require to not validate the JSON returned from the
                // services as it will lack the Model/Collection structure required to run the
                // validation. for example the list of options will be an array and not a collection
                // as the event handle that parse them didn't run yet
                validate: false,
                success: function (product_list_line_to_save_saved) {
                    productList.get('items').add(product_list_line_to_save_saved);
                    Tracker.getInstance().trackAddToWishlist(self.product);
                    self.collection.trigger('changed');
                    self.render();
                    if (!dontShowMessage) {
                        self.saveAndShowConfirmationMessage(self.$('.ul-product-lists [type="checkbox"]:checked').length > 1
                            ? Utils.translate('Good! You added this item to your product lists')
                            : Utils.translate('Good! You added this item to your product list'));
                    }
                }
            });
        },
        // Check for predefined list before moving
        moveProductHandler: function (destination) {
            var self = this;
            if (!destination.get('internalid')) {
                // this is a predefined list
                return destination.save().then(function (data) {
                    var new_product_list = new ProductListModel(data);
                    self.application.ProductListModule.Utils.getProductLists().add(new_product_list, {
                        merge: true
                    });
                    return self.moveProduct(new_product_list);
                });
            }
            return self.moveProduct(destination);
        },
        // Moves the item to the destination list
        moveProduct: function (destination) {
            var self = this;
            var original_item = this.moveOptions.productListItem;
            var original_item_clone = original_item.clone();
            var details_view = this.moveOptions.parentView;
            original_item_clone.set('productList', {
                id: destination.get('internalid')
            });
            var moveProductResult = jQuery.Deferred();
            destination.get('items').create(original_item_clone, {
                validate: false,
                success: function (saved_model) {
                    var app = details_view.application;
                    var from_list = self.application.ProductListModule.Utils.getProductLists().findWhere({ internalid: self.moveOptions.parentView.model.get('internalid') });
                    var to_list = self.application.ProductListModule.Utils.getProductLists().findWhere({
                        internalid: destination.get('internalid')
                    });
                    self.doMoveProduct(from_list, to_list, original_item, saved_model);
                    details_view.model.get('items').remove(original_item);
                    details_view.render();
                    jQuery('.sc-flyout-bg').remove();
                    app.getLayout().currentView.showConfirmationMessage(Utils.translate('<div class="product-list-control-message">Good! You successfully moved the item from this to <a href="/wishlist/$(0)">$(1)</a></div>', destination.get('internalid'), destination.get('name')));
                    moveProductResult.resolve();
                },
                wait: true
            });
            return moveProductResult;
        },
        // Adds the item clone to the destination list and removes the original from its list
        doMoveProduct: function (from, to, original_model, saved_model) {
            // if add not defined, create the collection
            if (to.get('items') instanceof Array) {
                to.set('items', new ProductListItemCollection());
            }
            // add the item to the application collection
            to.get('items').add(saved_model);
            from.get('items').remove(original_model);
            this.collection.trigger('changed');
        },
        // Gets the internal product id for a store item considering it could be a matrix child.
        getProductId: function (line) {
            if (line.getItemId) {
                return line.getItemId();
            }
            if (this.application.ProductListModule) {
                return this.application.ProductListModule.Utils.internalGetProductId(line);
            }
            return "" + line.get('_id');
        },
        // Determines if the control is visible
        isAvailable: function () {
            // if you want to disable the product list experience you instead can
            // return: ProfileModel.getInstance().get('isLoggedIn') === 'T';
            return true;
        },
        // Renders a confirmation message storing message parameter and also stores the message
        saveAndShowConfirmationMessage: function (message) {
            this.confirm_message = message;
            this.showConfirmationMessage(this.confirm_message, true);
        },
        // Hides the confirmation message
        hideConfirmationMessage: function () {
            this.confirm_message = null;
            this.$('[data-confirm-message]').hide();
        },
        // @method showFlyout Handle showing/hiding (toggle) data-toggle="showFlyout" elements
        // @param {jQuery.Event} e
        // @return {Void}
        showFlyout: function (e) {
            e.stopPropagation();
            // Here no extra validation is specified as those are not required to add an item
            // into a product list
            if (this.product.areAttributesValid(['options', 'quantity'], {})) {
                // Hide any other open flyout instances...
                jQuery('.product-list-control-flyout').hide();
                this.countedClicks[e.pageX + "|" + e.pageY] = false;
                var self_2 = jQuery(e.target);
                if (Utils.isPhoneDevice()) {
                    self_2.next().toggle();
                    var body = jQuery('body');
                    var scrollvalue = self_2.offset();
                    body.animate({ scrollTop: scrollvalue.top }, '500', function () {
                        jQuery('#main').append('<div class="sc-flyout-bg"></div>');
                        jQuery('.sc-flyout-bg').on('click', function () {
                            jQuery('.sc-flyout-bg').remove();
                        });
                    });
                }
                else {
                    self_2.next().toggle();
                }
            }
        },
        // @method contentClick
        // Keeps track of the clicks you have made onto the view, so the contentMouseUp
        // knows if it needs to trigger the click event once again
        // @param {jQuery.Event} e
        // @return {Void}
        contentClick: function (e) {
            this.countedClicks[e.pageX + "|" + e.pageY] = true;
        },
        // @method contentMouseUp
        // this is used just to register a delayed function to check if the click went through
        // if it didn't we fire the click once again on the top most element
        // @param {jQuery.Event} e
        // @return {Void}
        contentMouseUp: function (e) {
            if (e.which !== 2 && e.which !== 3) {
                var self_3 = this;
                _.delay(function () {
                    if (!self_3.countedClicks[e.pageX + "|" + e.pageY]) {
                        jQuery(document.elementFromPoint(e.clientX, e.clientY)).click();
                    }
                    delete self_3.countedClicks[e.pageX + "|" + e.pageY];
                }, 100);
            }
        },
        // @method getContext @return {ProductList.Control.View.Context}
        getContext: function () {
            // @class ProductList.Control.View.Context
            return {
                // @property {Boolean} isMoving
                isMoving: this.mode === 'move',
                // @property {Boolean} showControl
                showControl: this.is_visible,
                // @property {Boolean} isEmpty
                isEmpty: this.collection.length === 0,
                // @property {Boolean} hasOneProductList
                hasOneProductList: this.collection.length === 1,
                // @property {Boolean} hasProductLists
                hasProductLists: this.collection.length > 0,
                // @property {Integer} productListLength
                productListLength: this.collection.length
            };
        }
    });
});

//# sourceMappingURL=ProductList.Control.View.js.map
