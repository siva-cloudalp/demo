/*
	© 2020 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

/// <amd-module name="PickupInStore.View"/>

import * as _ from 'underscore';
import * as pickup_in_store_tpl from 'pickup_in_store.tpl';
import * as Utils from '../../../Commons/Utilities/JavaScript/Utils';
import * as jQuery from '../../../Commons/Core/JavaScript/jQuery';
import { ProfileModel } from '../../../Commons/Profile/JavaScript/Profile.Model';

import PickupInStoreStoreSelectorView = require('./PickupInStore.StoreSelector.View');
import LocationVenueDetailsView = require('../../Location.SCA/JavaScript/Location.VenueDetails.View');
import LiveOrderModel = require('../../../Commons/LiveOrder/JavaScript/LiveOrder.Model');
import ReferenceMap = require('../../../Advanced/StoreLocatorReferenceMapImplementation/JavaScript/ReferenceMap');
import Location = require('../../Location.SCA/JavaScript/Location');
import BackboneView = require('../../../Commons/BackboneExtras/JavaScript/Backbone.View');
import Cookies = require('../../../Commons/Utilities/JavaScript/js.cookie');

const PickupInStoreView: any = BackboneView.extend({
    // @property {Function} template
    template: pickup_in_store_tpl,

    // @property {Object} events
    events: {
        'change [data-action="selectShip"]': 'selectShip',
        'change [data-action="selectPickup"]': 'selectPickup',
        'click [data-action="selectPickupLink"]': 'selectPickup',
        'click [data-action="changeStore"]': 'changeStore'
    },

    // @method initialize
    initialize: function initialize(options) {
        this.model = options.model;
        this.application = options.application;
        this.source = options.source;

        this.profile_model = ProfileModel.getInstance();

        this.reference_map = new ReferenceMap();

        this.model.on('change:location', this.render, this);
        this.model.on('change:location', this.dismissSelectStore, this);
        this.model.on('change:fulfillmentChoice', this.render, this);

        this.model.get('location').on('change', this.render, this);
        this.model.get('options').on('change', this.render, this);

        const location_id = this.model.get('location').get('internalid') || Cookies.get('myStore');
        if (location_id) {
            Location.fetchLocations(location_id).done(function() {
                options.model.set('location', Location.get(location_id));
            });
        }
    },

    // @method render Override default. We'll render only when the item is fulfillable
    // (meaning it is not downloadable, gift certificate or service)
    // @return {function} _render | {Backbone.View} this Returning either the usual render function or this view.
    render: function render() {
        if (this.model.getItem().get('_isfulfillable')) {
            return this._render();
        }

        return this;
    },

    // @property {ChildViews} childViews
    childViews: {
        'PickupInStore.StoreLocationInfo': function() {
            const self = this;

            if (this.model.get('location')) {
                return new LocationVenueDetailsView({
                    model: this.model.get('location'),
                    application: self.application,
                    showAddress: true
                });
            }
        }
    },

    // @method selectShip Set up the choosen fulfillment choice to 'ship'
    selectShip: function selectShip(e) {
        e.preventDefault();

        this.model.set('fulfillmentChoice', 'ship');

        // if the source is the Cart, then the Live Order must be updated
        if (this.source && this.source === 'cart') {
            LiveOrderModel.getInstance().updateLine(this.model);
        }
    },

    // @method selectShip Set up the choosen fulfillment choice to 'pickup'
    selectPickup: function selectPickup(e) {
        e.preventDefault();

        if (this.getLocationStock() > 0) {
            this.model.set('fulfillmentChoice', 'pickup');

            // if the source is the Cart, then the Live Order must be updated
            if (this.source && this.source === 'cart') {
                LiveOrderModel.getInstance().updateLine(this.model);
            }
        } else {
            this.changeStore(e);
        }
    },

    // @method changeStore
    changeStore: function changeStore(e) {
        e.preventDefault();

        const self = this;
        const view = new PickupInStoreStoreSelectorView({
            model: this.model,
            application: this.application,
            reference_map: this.reference_map,
            source: this.source
        });

        if (Utils.isPhoneDevice()) {
            this.application.getLayout().showInPush(view);
        } else {
            view.showInModal({ className: 'pickup-in-store-select-store-modal' });

            view.on('modal-close', function() {
                if (!self.model.get('location').get('internalid')) {
                    self.render();
                }
            });
        }
    },

    // @method dismissSelectStore
    dismissSelectStore: function dismissSelectStore() {
        if (Utils.isPhoneDevice()) {
            this.application.getLayout().closePush();
        } else {
            this.application.getLayout().closeModal();
        }
    },

    // @method getLocationStock
    getLocationStock: function getLocationStock() {
        const location = this.model.get('location');
        const stock_information = this.model.getStockInfo();
        const location_stock = location
            ? _.findWhere(stock_information.stockPerLocation, {
                  internalid: parseInt(location.get('internalid'), 10)
              })
            : null;

        return location_stock ? (<any>location_stock).qtyavailableforstorepickup : 0;
    },

    // @method getContext
    getContext: function getContext() {
        const location = this.model.get('location');
        const item = this.model.getItem();
        const stock_information = this.model.getStockInfo();
        const location_stock = this.getLocationStock();
        const is_available_for_ship = item.get('_isBackorderable') || item.get('_isInStock');
        const internal_id =
            this.source && this.source === 'cart'
                ? this.model.get('internalid')
                : item.get('internalid');

        return {
            // @property {Boolean} isAvailableForShip
            isAvailableForShip: is_available_for_ship,
            // @property {Boolean} isAvailableForPickup
            isAvailableForPickup: stock_information.isAvailableForPickup,
            // @property {String} getDirectionsUrl
            getDirectionsUrl:
                location && !location.isNew()
                    ? this.reference_map.getDirectionsUrl(
                          this.profile_model.get('storeLocator_last_search'),
                          location.get('location')
                      )
                    : '',
            // @property {Boolean} showDividerLines
            showDividerLines: this.options.source !== 'cart',
            // @property {Boolean} isShipSelected
            isShipSelected: this.model.get('fulfillmentChoice') !== 'pickup',
            // @property {Boolean} isPickupSelected
            isPickupSelected: this.model.get('fulfillmentChoice') === 'pickup',
            // @property {Object} stockInfo
            stockInfo: stock_information,
            // @property {Boolean} showQuantityAvailable
            showQuantityAvailable:
                stock_information.showQuantityAvailable && !_.isUndefined(stock_information.stock),
            // @property {Boolean} isAvailableForPickupOnly
            isAvailableForPickupOnly:
                stock_information.isAvailableForPickup && !is_available_for_ship,
            // @property {Boolean} isAvailableForShipOnly
            isAvailableForShipOnly:
                !stock_information.isAvailableForPickup && is_available_for_ship,
            // @property {Boolean} isAvailable
            isAvailable: stock_information.isAvailableForPickup || is_available_for_ship,
            // @property {Boolean} isLocationSelected
            isLocationSelected: location && !location.isNew(),
            // @property {Boolean} locationHasStock
            locationHasStock: location_stock > 0,
            // @property {Object} locationStock
            locationStock: location_stock,
            // @property {Boolean} locationShowNextPickupDay
            locationShowNextPickupDay: location && !!location.get('nextpickupcutofftime'),
            // @property {Object} location
            location: location,
            // @property {LiveOrder.Model} model
            model: this.model,
            // @property {Boolean} showCutoffTime
            showCutoffTime: !!location.get('nextpickupday'),
            // @property {Boolean} nextPickupDayIsToday
            nextPickupDayIsToday: location.get('nextpickupday') === 'today',
            // @property {Boolean} nextPickupDayIsTomorrow
            nextPickupDayIsTomorrow: location.get('nextpickupday') === 'tomorrow',
            // @property {Boolean} nextPickupDayIsSunday
            nextPickupDayIsSunday: location.get('nextpickupday') === 'sunday',
            // @property {Boolean} nextPickupDayIsMonday
            nextPickupDayIsMonday: location.get('nextpickupday') === 'monday',
            // @property {Boolean} nextPickupDayIsTuesday
            nextPickupDayIsTuesday: location.get('nextpickupday') === 'tuesday',
            // @property {Boolean} nextPickupDayIsWednesday
            nextPickupDayIsWednesday: location.get('nextpickupday') === 'wednesday',
            // @property {Boolean} nextPickupDayIsThursday
            nextPickupDayIsThursday: location.get('nextpickupday') === 'thursday',
            // @property {Boolean} nextPickupDayIsFriday
            nextPickupDayIsFriday: location.get('nextpickupday') === 'friday',
            // @property {Boolean} nextPickupDayIsSaturday
            nextPickupDayIsSaturday: location.get('nextpickupday') === 'saturday',
            // @property {String} itemInternalId
            itemInternalId: internal_id
        };
    }
});

export = PickupInStoreView;
