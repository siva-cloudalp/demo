/*
	© 2020 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

/// <amd-module name="Item.Model"/>
/// <reference path="../../../Commons/Utilities/JavaScript/GlobalDeclarations.d.ts" />

import * as _ from 'underscore';
import * as Utils from '../../Utilities/JavaScript/Utils';
import { Configuration } from '../../Utilities/JavaScript/Configuration';
import { MasterOptionsHelper } from '../../SC/JavaScript/MasterOptionsHelper';
import { ProfileModel } from '../../Profile/JavaScript/Profile.Model';

import { UrlHelper } from '../../UrlHelper/JavaScript/UrlHelper';
import Deferred = JQuery.Deferred;

import BackboneCachedModel = require('../../BackboneExtras/JavaScript/Backbone.CachedModel');
import Session = require('../../Session/JavaScript/Session');
import ItemOptionCollection = require('./Item.Option.Collection');

interface ItemsApiFetchXhrFields {
    withCredentials: boolean;
}

interface ItemsApiFetchData {
    as_of_date: string;
    force_avoid_redirect?: boolean;
}

interface FetchOptions {
    cache?: boolean;
    data?: ItemsApiFetchData;
    xhrFields?: ItemsApiFetchXhrFields;
    crossDomain?: boolean;
}

let ItemCollection = null;
let forceAvoidRedirect: boolean;

const originalFetch = BackboneCachedModel.prototype.fetch;

type BetterPrice = {
    defaultItemPrice: string;
    betterItemPrice: string;
} | null;

interface PriceTier {
    maximumquantity: number;
    minimumquantity: number;
    price: number;
    price_formatted: string;
    index: number;
}

const ItemModel = BackboneCachedModel.extend({
    moduleName: 'Item.Model',

    constructor: function (attributes) {
        this.sanitize(attributes);
        BackboneCachedModel.apply(this, arguments);
    },

    // @method url
    // @return {String}
    url: function url() {
        const profile = ProfileModel.getInstance();
        const url = Utils.addParamsToUrl(
            profile.getSearchApiUrl(),
            _.extend({}, this.searchApiMasterOptions, Session.getSearchApiParams()),
            profile.isAvoidingDoubleRedirect(forceAvoidRedirect)
        );

        return url;
    },

    // @method fetch overrides fetch so we make sure that options are set, so we wrap it
    fetch: function (options: FetchOptions): Deferred<void> {
        Utils.deepExtend(options || {}, this.options);
        if (options.cache === undefined) {
            options.cache = true;
        }

        forceAvoidRedirect = options && options.data && options.data.force_avoid_redirect;

        return originalFetch.apply(this, arguments);
    },

    // @method parse The API returns the items as an array always this takes care of returning the object
    // @return {Item.Model.Model.Attributes}
    parse: function parse(response) {
        // if we are performing a direct API call the item is response.items[0]
        // but if you are using the Item.Collection to fetch this guys
        // The item is the response
        const single_item = response.items && response.items[0];

        if (single_item) {
            single_item.facets = response.facets;
        }
        return single_item ? this.sanitize(single_item) : this.sanitize(response);
    },
    sanitize: function (attributes) {
        if (
            attributes &&
            attributes.onlinecustomerprice_detail &&
            attributes.onlinecustomerprice_detail.onlinecustomerprice === ''
        ) {
            attributes.onlinecustomerprice_detail.onlinecustomerprice = null;
        }
        return attributes;
    },

    // @method generateURL Returns the current URL. This method is just an alias over get('_url') to provide a unified interface with the Product.Model
    // @return {String}
    generateURL: function generateURL() {
        return this.get('_url');
    },

    // @method getFullLink Generates a String ready to be used to a link for a PDP. In difference to the method generateURL, getFullLink
    // returns a string that contains the value of href, data-hashtag and data-touchpoint.
    // output example: href="/Californium-Mtr" data-touchpoint="home" data-hashtag="#/Californium-Mtr"
    // @return {Object}
    getFullLink: function getFullLink() {
        const url: string = this.generateURL();
        const link_attributes = {
            href: url
        };

        if (SC.ENVIRONMENT.siteSettings.sitetype === 'ADVANCED') {
            _.extend(link_attributes, {
                data: {
                    touchpoint: 'home',
                    hashtag:
                        Configuration.get('currentTouchpoint') !== 'home'
                            ? encodeURIComponent(url)
                            : url
                }
            });
        }

        return Utils.objectToAtrributes(link_attributes);
    },

    // @method initialize
    // @return {Void}
    initialize: function initialize() {
        // Wires the config options to the URL of the model
        this.searchApiMasterOptions = MasterOptionsHelper.getSearchAPIMasterOption('itemDetails');
        this.itemOptionsConfig = Configuration.get('ItemOptions.optionsConfiguration', []);
        const self = this;
        this.set('options', this.getPosibleOptions(), { silent: true });
        this.on(
            'change:itemoptions_detail',
            function () {
                self.set('options', self.getPosibleOptions(), { silent: true });
            },
            this
        );
    },

    deepCopy: function deepCopy() {
        const self = this;
        const obj = this.attributes || {};
        const item_key_mapping = this.getKeyMapping(Configuration);

        _.each(item_key_mapping, function (value: any, attr: any) {
            if (attr.charAt(0) === '_') {
                attr = `keyMapping${attr}`;
            }

            obj[attr] = _.isFunction(value) ? value(self) : value;
        });

        return obj;
    },

    // @method getPosibleOptions
    // @returns {Item.Options.Collection} an array of all the possible options with values and information
    getPosibleOptions: function getPosibleOptions() {
        if (this.cachedPosibleOptions) {
            return this.cachedPosibleOptions;
        }

        const result = new ItemOptionCollection();

        if (this.get('_optionsDetails') && this.get('_optionsDetails').fields) {
            const self = this;
            // Prepares a simple map of the configuration
            const options_config_map = {};

            _.each(this.itemOptionsConfig, function (option: any) {
                if (option.cartOptionId) {
                    options_config_map[option.cartOptionId] = option;
                }
            });

            // if you are an child in the cart it then checks for the options of the parent
            const fields = this.get('_matrixParent').get('_id')
                ? this.get('_matrixParent').get('_optionsDetails').fields
                : this.get('_optionsDetails').fields;

            // Walks the _optionsDetails to generate a standard options response.
            _.each(fields, function (option_details: any) {
                // @class Item.Model.Option.Value
                // @property {String} internalid
                // @property {String} label
                // @property {String} url The url of the option to navigate to the PDP with that option selected by default

                // @class Item.Model.Option
                let option = {
                    // @property {String} label Visible option name
                    label: option_details.label,
                    // @property {Array<Item.Model.Option.Value>} values
                    values: option_details.values,
                    // @property {String} type Type of the option. Possible values are: select, textarea, email, text
                    type: option_details.type,
                    // @property {String} cartOptionId Value used to set options in the Commerce API
                    cartOptionId: option_details.internalid,
                    // @property {String} itemOptionId Value returned from the Search API (API value 'sourcefrom')
                    itemOptionId: option_details.sourcefrom || '',
                    // @property {Boolean} isMatrixDimension
                    isMatrixDimension: !!option_details.ismatrixdimension || false,
                    // @property {Boolean} isMandatory Indicate if the options is required or not
                    isMandatory: !!option_details.ismandatory || false,
                    // @property {String} urlParameterName Parameter used to generate the url of this options. For example size instead or custcol12 in www.yourdomain.com/item?size=12&custcol12=3
                    urlParameterName: option_details.internalid,
                    // @property {Boolean} useLabelsOnUrl Indicate if this option should show the label's value when displayed in the URL
                    // or instead the internalid's value should be used (the second is the default)
                    useLabelsOnUrl: false,
                    // @property {Number} index Property used to sort options. 10 by default
                    index: 10
                };

                // Makes sure all options are availabe by defualt
                _.each(option.values, function (value: any) {
                    value.isAvailable = true;
                });

                // Merges this with the configuration object
                if (options_config_map[option.cartOptionId]) {
                    option = _.extend(option, options_config_map[option.cartOptionId]);
                }

                option.values = _.map(option.values, function (value: any) {
                    value.url = UrlHelper.setUrlParameter(
                        self.get('_url'),
                        option.urlParameterName,
                        option.useLabelsOnUrl ? value.label : value.internalid
                    );
                    return value;
                });

                if (option_details.ismatrixdimension && self.get('_matrixChilds').length) {
                    const item_values = self.get('_matrixChilds').pluck(option.itemOptionId);

                    option.values = _.filter(option.values, function (value: any) {
                        if (value.internalid) {
                            return _.contains(item_values, value.label);
                        }

                        return true;
                    });
                }

                result.add(option);
            });

            // Since this is not going to change in the life of the model we can cache it
            this.cachedPosibleOptions = result;
        }

        return result;
    },

    // @method isProperlyConfigured Check in case the item has options all options have a itemOptionId property and in the item is matrix
    // check there are child matrix items
    // @returns {Boolean} true If the current item is properly configured
    isProperlyConfigured: function isProperlyConfigured() {
        const options = this.getPosibleOptions();
        let option = null;

        if (options && options.length) {
            for (let i = 0; i < options.length; i++) {
                option = options.at(i);

                if (option.get('isMatrixDimension') && !option.get('itemOptionId')) {
                    return false;
                }
            }
        }
        // If you omit item options from the field set and use matrix, that's an issue.
        else if (this.get('_matrixChilds') && this.get('_matrixChilds').length) {
            return false;
        }

        return true;
    },

    // @method getKeyMapping
    // @return {ItemsKeyMapping}
    getKeyMapping: function getKeyMapping() {
        if (!this._keyMapping) {
            //This should be migrated, don't use SC.Application because of type checking.
            //Application should be received as parameter
            this._keyMapping = SC.Application.getKeyMapping();
        }

        return this._keyMapping;
    },

    // @method get We have override the get function for this model in order to honor the ItemKeyMapping
    // It also makes sure that _matrixChilds and _relatedItems are Item.Collection and _matrixParent is an Item.Model
    // @param {String} attr
    // @param {Boolean} dont_cache if true it won't return the cached attribute value.
    get: function get(attr, dont_cache) {
        const keyMapping = this.getKeyMapping();

        // var keyMapping = this.keyMapping || (this.collection && this.collection.keyMapping); // TODO: Dev Tools migration concern...
        if (dont_cache || (keyMapping && !this.attributes[attr] && keyMapping[attr])) {
            const mapped_key = keyMapping[attr];

            if (_.isFunction(mapped_key)) {
                this.attributes[attr] = mapped_key(this);
            } else if (_.isArray(mapped_key)) {
                // then the value is get(arr[0]) || get(arr[1]) || ...
                for (let i = 0; i < mapped_key.length; i++) {
                    if (this.attributes[mapped_key[i]]) {
                        this.attributes[attr] = this.attributes[mapped_key[i]];
                        break;
                    }
                }
            } else {
                this.attributes[attr] = this.attributes[mapped_key];
            }

            if (attr === '_matrixChilds' || attr === '_relatedItems') {
                ItemCollection = ItemCollection || Utils.requireModules('Item.Collection');
                if (!(this.attributes[attr] instanceof ItemCollection)) {
                    this.attributes[attr] = new ItemCollection(this.attributes[attr] || []);
                }
            } else if (attr === '_matrixParent') {
                if (!(this.attributes[attr] instanceof ItemModel)) {
                    this.attributes[attr] = new ItemModel(this.attributes[attr] || {});
                }
            }
        }

        return this.attributes[attr];
    },

    //SCIS specific, added as workaround
    getSelectedMatrixChilds: function (selection) {
        selection = selection || this.getMatrixOptionsSelection();
        const selection_key = JSON.stringify(selection);

        // Creates the Cache container
        if (!this.matrixSelectionCache) {
            this.matrixSelectionCache = {};
        }

        if (!this.get('_matrixChilds')) {
            return [];
        }

        // Caches the entry for the item
        if (!this.matrixSelectionCache[selection_key]) {
            this.matrixSelectionCache[selection_key] = _.values(selection).length
                ? this.get('_matrixChilds').where(selection)
                : this.get('_matrixChilds').models;
        }

        return this.matrixSelectionCache[selection_key];
    },

    //SCIS specific, added as workaround
    getMatrixOptionsSelection: function () {
        const matrix_options = _.where(this.getPosibleOptions(), { isMatrixDimension: true });
        const result = {};
        const self = this;

        _.each(matrix_options, function (matrix_option: any) {
            const value = self.getOption(matrix_option.cartOptionId);
            if (value && value.label) {
                result[matrix_option.itemOptionId] = value.label;
            }
        });

        return result;
    },

    //SCIS specific, added as workaround
    getQueryStringWithQuantity: function (quantity, exclude_matrix_options) {
        const self = this;
        let result = '?quantity=' + (quantity || 1);

        const matrixParent = this.get('_matrixParent');
        // If this item is a child of a matrix use the options of the parent
        if (!_.isEmpty(matrixParent) && matrixParent.get('internalid')) {
            const childItem = matrixParent.get('_matrixChilds').get(self.id);
            if (childItem) {
                _.each(matrixParent.getPosibleOptions(), function (option: any) {
                    if (exclude_matrix_options && option.isMatrixDimension) {
                        return;
                    }

                    let value = childItem.get(option.itemOptionId || option.cartOptionId);
                    if (!value) {
                        const selectedOption = self.getOption(
                            option.itemOptionId || option.cartOptionId
                        );
                        value = selectedOption && selectedOption.internalid;
                    }
                    result += '&' + option.url + '=' + encodeURIComponent(value);
                });
            }
        } else {
            let options = this.getPosibleOptions();
            if (options && options.length) {
                for (let i = 0; i < options.length; i++) {
                    let option = options.at(i);

                    if (exclude_matrix_options && option.get('isMatrixDimension')) {
                        return;
                    }

                    const value = self.getOption(option.get('cartOptionId'));
                    if (value) {
                        result += '&' + option.url + '=' + encodeURIComponent(value.internalid);
                    }
                }
            }
        }

        return result;
    },

    //SCIS specific, added as workaround
    getQueryString: function () {
        return this.getQueryStringWithQuantity(this.get('quantity'));
    },

    // @method  getDefaultPrice Given the price details of an item (class OnlineCustomerPriceDetail) returns the default onlinecustomerprice_formatted and onlinecustomerprice
    // @param {OnlineCustomerPriceDetail} details_object
    // @return {ItemPrice}
    getDefaultPrice: function getDefaultPrice(details_object) {
        // @class ItemPrice
        return {
            // @property {Number} price
            price: _.isNumber(details_object.onlinecustomerprice) ? details_object.onlinecustomerprice : this.get('onlinecustomerprice'),
            // @property {String} price_formatted
            price_formatted: _.isNumber(details_object.onlinecustomerprice) ? details_object.onlinecustomerprice_formatted : Utils.formatCurrency(this.get('onlinecustomerprice'))
        };
        // @class Item.Model
    },

    // IMPORTANT: The following method are shared with Product.Model, allowing to use Products or Items interchangeably
    // If you edit them, please consider reflect the same changes in the Product.Model and potentially in the
    // Transaction.Line.Model

    // @method getPrice Gets the price based on the selection of the item and the quantity
    // @param {Number} quantity
    // @param {Array<Item.Model>?} selected_matrix_children
    // @return {ItemPrice}
    getPrice: function getPrice(quantity, selected_matrix_children) {
        selected_matrix_children =
            selected_matrix_children ||
            (this.get('_matrixChilds') ? this.get('_matrixChilds').models : []);
        quantity = quantity || 1;

        const details_object = this.get('_priceDetails') || {};
        let result = this.getDefaultPrice(details_object);

        // Computes Quantity pricing based on the quantity specified as parameter
        if (details_object.priceschedule && details_object.priceschedule.length) {
            let price_schedule;
            let min;
            let max;

            for (let i = 0; i < details_object.priceschedule.length; i++) {
                price_schedule = details_object.priceschedule[i];

                min = parseInt(price_schedule.minimumquantity, 10);
                max = parseInt(price_schedule.maximumquantity, 10);

                if ((min <= quantity && quantity < max) || (min <= quantity && !max)) {
                    result = {
                        price: price_schedule.price,
                        price_formatted: price_schedule.price_formatted
                    };
                }
            }
        }

        // if it's a matrix it will compute the matrix price
        if (selected_matrix_children.length) {
            // Gets the price of each child
            const children_prices = [];

            _.each(selected_matrix_children, function (child: any) {
                children_prices.push(child.getPrice(quantity));
            });

            if (children_prices.length === 1) {
                // If there is only one it means there is only one price to show
                result = children_prices[0];
            } else {
                // otherwise we should compute max and min to show a range in the GUI
                const children_prices_values = _.pluck(children_prices, 'price');
                const min_value = _.min(children_prices_values); // Minimum price from all children items
                const max_value = _.max(children_prices_values); // Maximum price from all children items

                if (min_value !== max_value) {
                    // We return them alongside the result of the parent
                    // @class ItemPrice
                    // @property {Number?} min This value will be present only in the case the current item is Matrix, has a partial selection and its children have different range
                    // of prices. When this property is present will contain the minimum price of all the children items valid to be selected.
                    result.min = _.where(children_prices, { price: min_value })[0];
                    // @property {Number?} max This value will be present only in the case the current item is Matrix, has a partial selection and its children have different range
                    // of prices. When this property is present will contain the maximum price of all the children items valid to be selected.
                    result.max = _.where(children_prices, { price: max_value })[0];
                    // @class Item.Model
                } else {
                    // they are all alike so we can show any of them
                    result = children_prices[0];
                }
            }
        }

        // Adds the compare against price if its not set by one of the children
        if (!result.compare_price && this.get('_comparePriceAgainst')) {
            // @class ItemPrice
            // @property {Number} compare_price
            result.compare_price = this.get('_comparePriceAgainst');
            // @property {String} compare_price_formatted
            result.compare_price_formatted = this.get('_comparePriceAgainstFormated');
            // @class Item.Model
        }

        return result;
    },

    // @method getThumbnail Gets the thumbnail. This method acts as an alias for get('_thumbnail') which allows to use
    // Item.Model in places where Product.Model or Transaction.Line.Model is expected
    // @return {ImageContainer}
    getThumbnail: function getThumbnail() {
        return this.get('_thumbnail');
    },

    // @method getSku Returns the sky of the current item. This method exist to complain with the Product.Model interface
    // @return {String}
    getSku: function getSku() {
        return this.get('_sku');
    },
    // @method getImages Returns the first image should be displayed
    // @return ImageContainer
    getFirstImage: function (flattenedImages) {
        for (let i = 0; i < flattenedImages.length; i++) {
            const detail = flattenedImages[i];
            const splitted = detail.url.split('.');
            if (splitted[splitted.length - 2] === 'default') {
                return detail;
            }
        }
        return flattenedImages[0];
    },
    // @method getImages Returns the list of the item images
    // @return {Array<ImageContainer>}
    getImages: function getImages(filter) {
        let result = [];
        let item_images_detail = this.get('itemimages_detail') || {};

        item_images_detail = item_images_detail.media || item_images_detail;

        if (filter) {
            const image_filters = Configuration.get('productline.multiImageOption', []);
            item_images_detail = filter.filterImages(item_images_detail, image_filters);
        }

        result = Utils.imageFlatten(item_images_detail);
        if (result.length > 1) {
            const firstImage = this.getFirstImage(result);
            result = _.filter(result, function (image) {
                return firstImage != image;
            });
            result.unshift(firstImage);
        }
        // @class ImageContainer
        return result.length
            ? result
            : [
                {
                    // @property {String} url
                    url: Utils.getThemeAbsoluteUrlOfNonManagedResources(
                        'img/no_image_available.jpeg',
                        Configuration.get('imageNotAvailable')
                    ),
                    // @property {String} altimagetext
                    altimagetext: this.get('_name')
                }
            ];
        // @class Item.Model
    },

    // @method getOption
    // Returns an item option
    // @param {String} cart_option_id
    // @return {Item.Option.Model}
    getOption: function getOption(cart_option_id) {
        return this.get('options').findWhere({ cartOptionId: cart_option_id });
    },

    // @method getStockInfo
    // Returns an standard formated object for the stock info taking in consideration current matrix option selection.
    // the login is the following: if there is an unique child selected use that. Else use the parent as default
    // values and open children properties if it has the same value for all selected children.
    // @param {Array<Item.Model>} selected_matrix_children
    // @param {OptionHelper.MatrixSelection} options_selection
    // @return {Item.StockInfo} the stock information of the current item
    getStockInfo: function getStockInfo(selected_matrix_children, options_selection) {
        options_selection = options_selection || {};
        // Standardize the result object

        selected_matrix_children = selected_matrix_children || [];

        // if we have one selected child we use that - else we use the parent as default
        const model = selected_matrix_children.length === 1 ? selected_matrix_children[0] : this;
        const parent = this.get('_matrixParent');
        // @class Item.StockInfo
        const stock_info = {
            // @property {Object}stock
            stock: model.get('_stock'),

            // @property {Boolean} isInStock
            isInStock: model.get('_isInStock'),

            // @property {String} outOfStockMessage
            outOfStockMessage:
                model.get('_outOfStockMessage') ||
                this.get('_outOfStockMessage') ||
                (parent && parent.get('_outOfStockMessage')) ||
                Utils.translate('Out of Stock'),

            // @property {Boolean} showOutOfStockMessage
            showOutOfStockMessage:
                model.get('_showOutOfStockMessage') || this.get('_showOutOfStockMessage'),

            // @property {String} inStockMessage
            inStockMessage: model.get('_inStockMessage'),

            // @property {Boolean} showInStockMessage
            showInStockMessage: model.get('_showInStockMessage'),

            // @property {String} stockDescription
            stockDescription: model.get('_stockDescription') || this.get('_stockDescription'),

            // @property {Boolean} showStockDescription
            showStockDescription: model.get('_showStockDescription'),

            // @property {String} stockDescriptionClass
            stockDescriptionClass: model.get('_stockDescriptionClass'),

            // @property {Boolean} isNotAvailableInStore Indicate if the item is present in the store (returned by the store item and the search API)
            isNotAvailableInStore:
                _.isUndefined(model.get('_isPurchasable')) || model.get('isdisplayable') === false,

            // @property {Boolean} isPurchasable
            isPurchasable: !!model.get('_isPurchasable'),

            // @property {Object} stockPerLocation
            stockPerLocation: model.get('_quantityavailableforstorepickup_detail'),

            // @propery {Boolean} isAvailableForPickUp
            isAvailableForPickup: !!model.get('_isstorepickupallowed'),

            // @propery {Boolean} showQuantityAvailable
            showQuantityAvailable: !!model.get('_showQuantityAvailable')
        };
        // @class Item.Model

        const is_something_selected = _(options_selection).keys().length;

        // if this is an open selection we compute them all
        if (is_something_selected && selected_matrix_children.length > 1) {
            const matrix_children_stock_info = [];

            _.each(selected_matrix_children, function (child: any) {
                matrix_children_stock_info.push(child.getStockInfo());
            });

            // If all matrix children return the same value for a given attribute that becomes the output,
            // with the exception of stock that is an addition of the stocks of the children - but only if the parent has
            _.each(stock_info, function (value, key) {
                let children_values_for_attribute = _.pluck(matrix_children_stock_info, key);

                if (key === 'stock') {
                    stock_info.stock = _.reduce(
                        children_values_for_attribute,
                        function (memo, num) {
                            return memo + num;
                        },
                        0
                    );

                    if (isNaN(stock_info.stock)) {
                        delete stock_info.stock;
                    }
                } else if (key === 'isInStock') {
                    // the parent is in stock if any of the child items is in stock
                    // so, if in the array of the values of 'isInStock' for the childs
                    // there is a 'true', then the parent item is in stock
                    stock_info.isInStock = _.contains(children_values_for_attribute, true);
                } else {
                    children_values_for_attribute = _.uniq(children_values_for_attribute);

                    if (children_values_for_attribute.length === 1) {
                        stock_info[key] = children_values_for_attribute[0];
                    }
                }
            });
        }

        return stock_info;
    },
    // @method getBetterPrice
    // Returns a standard formated object for the price taking in consideration de Base Price and the OnlineCustomerPrice.
    getBetterPrice: function getBetterPrice(quantity: number): BetterPrice {
        const priceLevelEnabled: boolean =
            SC &&
            SC.CONFIGURATION &&
            SC.CONFIGURATION.priceLevel &&
            SC.CONFIGURATION.priceLevel.enabled;

        const defaultPriceLevel: string =
            SC &&
            SC.CONFIGURATION &&
            SC.CONFIGURATION.priceLevel &&
            SC.CONFIGURATION.priceLevel.default;

        const priceObject = this.getPrice(quantity);

        if (priceObject && priceObject.price < priceObject.compare_price) {
            return {
                defaultItemPrice: priceObject.compare_price_formatted,
                betterItemPrice: priceObject.price_formatted
            }
        }

        // We're checking this, besides whether is enabled, because price could not be configured or PCV Item Purchasability functionality (prices are removed from api result)
        if (!priceLevelEnabled || !this.get(`${defaultPriceLevel}`)) return null;

        const hasPriceSchedule =
            this.get('onlinecustomerprice_detail') &&
            this.get('onlinecustomerprice_detail').priceschedule &&
            this.get('onlinecustomerprice_detail').priceschedule.length;

        let defaultItemPrice = this.get(`${defaultPriceLevel}`);
        let defaultItemPrice_formatted = this.get(`${defaultPriceLevel}_formatted`);
        let priceByQuantity;
        let priceByQuantity_formatted;

        if (hasPriceSchedule) {
            const priceSchedule = this.get('onlinecustomerprice_detail').priceschedule;
            _.forEach(priceSchedule, (tier: PriceTier, index: number) => {
                if (!tier.maximumquantity) tier.maximumquantity = this.get('quantityavailable');
                tier.index = index;
            });
            const itemMaximumQuantity = this.get('maximumquantity');
            const tiersAmount = (priceSchedule && priceSchedule.length) || 0;

            const currentTier = _.filter(priceSchedule, (tier: PriceTier, index: number) => {
                if (!tier.maximumquantity && quantity) {
                    return priceSchedule[priceSchedule.length - 1];
                }
                if (
                    tier.maximumquantity === quantity &&
                    tier.maximumquantity === itemMaximumQuantity &&
                    index === tiersAmount - 1
                ) {
                    return true;
                }
                return tier.minimumquantity <= quantity && tier.maximumquantity > quantity;
            });

            if (currentTier.length) {
                const firstCurrentTierIndex = currentTier[0].index;
                const currentRange = priceSchedule[firstCurrentTierIndex];
                priceByQuantity = currentRange.price;
                priceByQuantity_formatted = currentRange.price_formatted;

                const previousIndex = firstCurrentTierIndex - 1;
                const previousRange = priceSchedule[previousIndex];
                defaultItemPrice = previousIndex >= 0 ? previousRange.price : defaultItemPrice;
                defaultItemPrice_formatted =
                    previousIndex >= 0 ? previousRange.price_formatted : defaultItemPrice_formatted;
            } else {
                priceByQuantity = priceSchedule[0].price;
                priceByQuantity_formatted = priceSchedule[0].price_formatted;
            }
        } else {
            priceByQuantity =
                this.get('onlinecustomerprice_detail') &&
                this.get('onlinecustomerprice_detail').onlinecustomerprice;
            priceByQuantity_formatted =
                this.get('onlinecustomerprice_detail') &&
                this.get('onlinecustomerprice_detail').onlinecustomerprice_formatted;
        }

        const betterPrice = priceByQuantity < defaultItemPrice && {
            defaultItemPrice: defaultItemPrice_formatted,
            betterItemPrice: priceByQuantity_formatted
        };

        return betterPrice || null;
    }
});

export = ItemModel;
