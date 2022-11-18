/*
	© 2020 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

/// <amd-module name="OrderWizard.Module.Address"/>
/// <reference path="../../../Commons/Utilities/JavaScript/UnderscoreExtended.d.ts" />

import * as _ from 'underscore';

import * as order_wizard_address_module_tpl from 'order_wizard_address_module.tpl';
import * as order_wizard_address_row_tpl from 'order_wizard_address_row.tpl';
import * as order_wizard_address_cell_tpl from 'order_wizard_address_cell.tpl';
import * as paymentinstrument_creditcard_edit_tpl from 'paymentinstrument_creditcard_edit.tpl';
import * as Utils from '../../../Commons/Utilities/JavaScript/Utils';
import * as jQuery from '../../../Commons/Core/JavaScript/jQuery';
import { AddressModel } from '../../../Commons/Address/JavaScript/Address.Model';
import { WizardStepModule } from '../../Wizard/JavaScript/Wizard.StepModule';
import { AddressDetailsView } from '../../../Commons/Address/JavaScript/Address.Details.View';

import AddressEditView = require('../../../Commons/Address/JavaScript/Address.Edit.View');

import GlobalViewsConfirmationView = require('../../../Commons/GlobalViews/JavaScript/GlobalViews.Confirmation.View');
import Backbone = require('../../../Commons/Utilities/JavaScript/backbone.custom');
import BackboneCollectionView = require('../../../Commons/Backbone.CollectionView/JavaScript/Backbone.CollectionView');

// @class OrderWizard.Module.Address @extend Wizard.Module
const OrderWizardModuleAddress: any = WizardStepModule.extend({
    template: order_wizard_address_module_tpl,

    sameAsMessage: Utils.translate('Same as Address'),

    selectAddressErrorMessage: {
        errorCode: 'ERR_CHK_SELECT_AN_ADDRESS',
        errorMessage: Utils.translate('Please select an address')
    },

    invalidAddressErrorMessage: {
        errorCode: 'ERR_CHK_INVALID_ADDRESS',
        errorMessage: Utils.translate('The selected address is invalid')
    },

    events: {
        'click [data-action="submit"]': 'submit',
        'click [data-action="select"]': 'selectAddress',
        'click [data-action="change-address"]': 'changeAddressHandler',
        'click [data-action="remove"]': 'validateAddressRemovalHandler',
        'click [data-action="edit-address"]': 'editAddress',
        'change [data-action="same-as"]': 'markSameAsHandler',
        'change form': 'changeForm'
    },

    errors: ['ERR_CHK_INCOMPLETE_ADDRESS', 'ERR_CHK_INVALID_ADDRESS'],

    initialize: function() {
        WizardStepModule.prototype.initialize.apply(this, arguments);
    },

    // @method editAddress Intercept the edition of address. When the source of addresses is extracted from the current model
    // (which is the expected behavior form now on) that address collection can contains address that are temporal or just not in the addresses
    // profile collection. One example is when you pay a quote transforming it into a sales order, the original shipping/billing address
    // used to created to quote can have been removed from profile addresses and so are added as temporal address, that when edited are created
    // @param {jQuery.Event} e
    // @return {Void}
    editAddress: function(e) {
        const address_id_str = this.$(e.target).data('id');
        const address_id = parseInt(address_id_str, 10);

        if (_.isNaN(address_id) || !_.isNumber(address_id)) {
            e.stopPropagation();
            e.preventDefault();

            const collection = this.getAddressCollection();
            const selected_address = collection.get(address_id_str);
            let view;

            selected_address.unset('internalid', { silent: true });

            view = new AddressEditView({
                application: this.wizard.application,
                collection: collection,
                model: selected_address
            });

            const add_new_address_on_profile = function(model) {
                // Make sure that the new address now take part of the profile addresses
                // This is important if a temporal address is edited more than once
                this.wizard.options.profile.get('addresses').add(model);
            };
            const reset_current_address = function(model) {
                // After saving the temp address, we set it as the one selected
                this.setAddress(model.id);
            };

            view.model.once('change', add_new_address_on_profile, this);

            // If the address being edited is the selected one we must re-set once it is created
            if (this.wizard.model.get(this.manage) === address_id_str) {
                view.model.once('sync', reset_current_address, this);
            }

            view.once(
                'modal-close',
                function() {
                    view.model.off('sync', reset_current_address);
                    view.model.off('change', add_new_address_on_profile);
                },
                this
            );

            this.wizard.application.getLayout().showInModal(view);
        }
    },

    // @method render
    render: function(not_trigger_ready: boolean) {
        // Is Active is overridden by child modules, like Shipping to hide this module in Multi Ship To
        if (!this.isActive()) {
            return this.$el.empty();
        }

        this.addresses = this.getAddressCollection();
        this.isGuest = this.getIsCurrentUserGuest();
        this.isSameAsEnabled = _.isFunction(this.options.enable_same_as)
            ? this.options.enable_same_as()
            : this.options.enable_same_as;

        this.addressId = this.model.get(this.manage);

        this.evaluateDisablingSameAsCheckBox();

        // if the selected manage address is the fake one
        if (this.addressId && ~this.addressId.indexOf('null')) {
            // we silently remove it
            this.setAddress(null, {
                silent: true
            });
        }

        this.evaluateSameAs();
        this.address = this.getSelectedAddress();

        // Add event listeners to allow special flows
        this.eventHandlersOn();

        this.addressView = null;

        // Calls the render function
        this._render();

        const is_address_new = this.address.isNew();

        if (
            !((this.isSameAsEnabled && this.sameAs) || (this.addressId && !is_address_new)) &&
            this.isGuest &&
            !is_address_new
        ) {
            this.setAddress(this.address.id, {
                silent: true
            });
        }

        // the module is ready when a valid address is selected.
        if (
            !not_trigger_ready &&
            this.address &&
            this.addressId &&
            this.address.get('isvalid') === 'T'
        ) {
            this.trigger('ready', true);
        }
    },

    // @method enableInterface
    enableInterface: function() {
        this.$('[data-action="change-address"]').attr('disabled', false);

        this.evaluateDisablingSameAsCheckBox();

        if (!this.disableSameAsCheckBox) {
            this.$('[data-action="same-as"]').attr('disabled', false);
        }
    },

    // @method evaluateDisablingSameAsCheckBox Evaluates if the same as checkbox should be enabled or not. This values is saved in the instance variable disableSameAsCheckBox
    // it is possible to indicate that if the new value is enable to re-render the view @param {Boolean} reRenderIsChange
    evaluateDisablingSameAsCheckBox: function(reRenderIsChange: boolean): void {
        // The other manage address is not selected AND the other temp address is not created
        const oldValue = this.disableSameAsCheckBox;
        this.disableSameAsCheckBox =
            (this.model.get(this.sameAsManage) === undefined ||
                this.model.get(this.sameAsManage) === null ||
                this.model.get(this.sameAsManage) === '-------null') &&
            !this.model.get(`temp${this.sameAsManage}`);

        this.postEvaluateDisablingSameAsCheckBox();

        if (oldValue !== this.disableSameAsCheckBox && reRenderIsChange) {
            this.render();
        }
    },

    // @method postEvaluateDisablingSameAsCheckBox method used to execute any logic before set evaluateDisablingSameAsCheckBox and/or trigger re-render
    postEvaluateDisablingSameAsCheckBox: function(): void {},

    // @method disableInterface
    disableInterface: function() {
        this.$('[data-action="change-address"], [data-action="same-as"]').attr('disabled', true);
    },

    // @method getChangeLinkText This function, which is called from the template, returns the label for the change link @return {String}
    getChangeLinkText: function() {
        return this.getIsCurrentUserGuest()
            ? Utils.translate('Edit Address')
            : Utils.translate('Change address');
    },

    // @method getIsCurrentUserGuest Returns true if the current user is logged in as Guest @return {Boolean}
    getIsCurrentUserGuest: function(): boolean {
        return this.wizard.options.profile.get('isGuest') === 'T';
    },

    // @method validateAddressRemovalHandler Handle address removal validating that the address selected is not being used by someone else @param {HTMLEvent}e
    validateAddressRemovalHandler: function(
        e // address_module
    ) {
        const address_id = jQuery(e.target).data('id');
        this.validateAddressRemoval(address_id);
    },

    // @method validateAddressRemoval Handle address removal validating that the address selected is not being used by someone else @param {String} address_id
    validateAddressRemoval: function(
        address_id: string // address_module
    ) {
        let deleteConfirmationView;
        let body = '';

        if (this.isAddressIdValidForRemoval(address_id)) {
            body = Utils.translate('Are you sure you want to remove this address?');
        } else {
            const other_address_message =
                this.sameAsManage === 'billaddress'
                    ? Utils.translate('(billing address)')
                    : this.sameAsManage === 'shipaddress'
                    ? Utils.translate('(shipping address)')
                    : '';

            body = Utils.translate(
                'The selected address is in use. $(0) Are you sure you want to delete this address?',
                other_address_message
            );
        }

        deleteConfirmationView = new GlobalViewsConfirmationView({
            callBack: this.removeAddress,
            callBackParameters: {
                context: this,
                addressId: address_id
            },
            title: Utils.translate('Remove Address'),
            body: body,
            autohide: true
        });

        this.wizard.application.getLayout().showInModal(deleteConfirmationView);
    },

    removeAddress: function(options) {
        options.context.addresses.get(options.addressId).destroy({ wait: true });
    },

    // @method isAddressIdValidForRemoval Validate that the address that want to be removed is not used by the related address (sameAsManage) @returns {Boolean}
    isAddressIdValidForRemoval: function(address_id: string): boolean {
        const related_address_id = this.model.get(this.sameAsManage);
        return +address_id !== +related_address_id;
    },

    // @method evaluateSameAs
    evaluateSameAs: function() {
        const manage_address_id = this.addressId;
        const other_address = this.getTheOtherAddress();
        const other_address_id = (other_address && other_address.get('internalid')) || null;

        if (manage_address_id && manage_address_id === other_address_id) {
            this.sameAs = true;
        } else if (!this.tempAddress && manage_address_id !== other_address_id) {
            this.sameAs = false;
        } else {
            // We need a default sameAs value so is no longer undefined
            // if the sameAs was checked, and we have an address id set or there is a temporary address
            this.sameAs =
                this.sameAs &&
                (manage_address_id || this.tempAddress || (this.isGuest && this.addresses.length));
        }
        this.model.set('sameAs', this.sameAs);
    },

    // @method eventHandlersOn
    eventHandlersOn: function() {
        const self = this;
        const other_address = this.sameAsManage;

        this.eventHandlersOff();

        this.addresses
            // Adds events to the collection
            .on(
                'add',
                function(added_address) {
                    this.address = added_address;
                    this.addressId = added_address.get('internalid');

                    this.render(true);
                },
                this
            )
            .on(
                'reset sync remove change destroy',
                function() {
                    this.render(true);
                },
                this
            )
            .on(
                'destroy',
                function(deleted_address) {
                    // if the destroyed address was used as the sameAs
                    if (self.model.get(other_address) === deleted_address.id) {
                        // we need to remove it, as it doesn't exists
                        self.model.set(other_address, null);
                    }
                },
                this
            );

        // when the value for the other address changes
        this.model.on(
            `change:${other_address}`,
            function(model, value) {
                // If same as is enabled and its selected
                if (self.isSameAsEnabled && self.sameAs) {
                    // we change this manage to the value
                    self.setAddress(value);
                    self.render();
                } else if (self.isSameAsEnabled) {
                    // This evaluation must be done despite self.sameAs is set or not to re-evaluate if the check-box status remains equal or not.
                    // Ex. If in OPC neither shipping address not billing address is selected, and after that I select one shipping address, then it's require
                    // to re-evaluate the state of the sameAs check-box
                    this.evaluateDisablingSameAsCheckBox(true);
                }
            },
            this
        );

        if (this.isSameAsEnabled && this.sameAs) {
            this.model.on(
                `change:temp${other_address}`,
                function(model, temp_address) {
                    self.tempAddress = temp_address;
                    self.render();
                },
                this
            );
        } else if (this.isSameAsEnabled) {
            this.model.once(
                `change:temp${other_address}`,
                function() {
                    // The following consideration take importance in OPC.
                    // Changes in the temp (other) address will take into account only if there is no a real (other) address, otherwise this generate that
                    // render gets executed more than once, because is this event always get triggered by the changeForm method.

                    // Problem example: When the temp address change because of submitting the other address (particularly shipping address) this will cause
                    // that the billing address get re-rendered, and if the billing is not completed all errors will disappear.
                    if (!this.model.get(other_address)) {
                        this.render();
                    }
                },
                self
            );
        }

        _.isFunction(this.onEventHandlersOn) && this.onEventHandlersOn();
    },

    // @method eventHandlersOff
    eventHandlersOff: function() {
        // Removes previously added events on the address collection
        this.addresses && this.addresses.off(null, null, this);
        this.model
            .off(`change:${this.sameAsManage}`, null, this)
            .off(`change:temp${this.sameAsManage}`, null, this);

        _.isFunction(this.onEventHandlersOff) && this.onEventHandlersOff();
    },

    past: function() {
        this.eventHandlersOff();
    },

    future: function() {
        this.eventHandlersOff();
    },

    // @method selectAddress Captures the click on the select button of the addresses list @param {HTMLEvent} e
    selectAddress: function(e) {
        jQuery('.wizard-content .alert-error').hide();

        // Grabs the address id and sets it to the model
        // on the position in which our sub class is managing (billaddress or shipaddress)
        this.setAddress(
            jQuery(e.target)
                .data('id')
                .toString()
        );

        // re render so if there is changes to be shown they are represented in the view
        this.render();

        // As we already set the address, we let the step know that we are ready
        this.trigger('ready', true);
    },

    // @method setAddress @param {String} address_id @param {Object} options
    setAddress: function(address_id, options) {
        this.model.setAddress(this.manage, address_id, options);
        this.addressId = address_id;

        return this;
    },

    // @method unsetAddress @param {Boolean} norender @param {Object} options
    unsetAddress: function(norender: boolean, options) {
        this.setAddress(null, options);
        this.tempAddress = null;

        if (!norender) {
            this.render();
        }
    },

    // @method changeAddressHandler @param {HTMLEvent} e
    changeAddressHandler: function(e) {
        e.preventDefault();
        e.stopPropagation();

        const $link = jQuery(e.currentTarget);
        const is_disabled = $link.attr('disabled');

        this.changeAddress(is_disabled);
    },

    // @method changeAddress @parma {Boolean} is_disabled
    changeAddress: function(is_disabled: boolean) {
        if (is_disabled) {
            return;
        }

        if (this.options.edit_url) {
            this.unsetAddress(true);

            Backbone.history.navigate(`${this.options.edit_url}?force=true`, {
                trigger: true
            });
        } else {
            this.unsetAddress();
        }
    },

    // @method submit. Module.submit() The step will call this function when the user clicks next or all the modules are ready
    // Will take care of saving the address if its a new one. Other way it will just
    // return a resolved promise to comply with the API
    submit: function() {
        // Is Active is overridden by child modules, like Shipping to hide this module in Multi Ship To
        if (!this.isActive()) {
            return jQuery.Deferred().resolve();
        }
        const self = this;
        // its a new address
        if (this.addressView) {
            // The saveForm function expects the event to be in an element of the form or the form itself,
            // But in this case it may be in a button outside of the form (as the nav buttons live in the step)
            //  or triggered by a module ready event, so we need to create a fake event which the target is the form itself
            const fake_event = jQuery.Event('submit', {
                target: this.addressView.$('form').get(0)
            });
            // Calls the saveForm, this may kick the backbone.validation, and it may return false if there were errors,
            // other ways it will return an Ajax promise
            const result = this.addressView.saveForm(fake_event);

            // Went well, so there is a promise we can return, before returning we will set the address in the model
            // and add the model to the profile collection
            if (result && !result.frontEndValidationError) {
                return result
                    .then(function(model) {
                        // Set Address id to the order model. This has to go before the following self.addresses.add() as it triggers the render
                        self.setAddress(model.internalid);

                        // we only want to trigger an event on add() when the user has some address and is not guest because if not,
                        // in OPC case (two instances of this module in the same page), the triggered re-render erase the module errors.
                        const add_options =
                            self.isGuest || self.addresses.length === 0 ? { silent: true } : null;
                        self.addresses.add(model, add_options);

                        self.model.set(`temp${self.manage}`, null);

                        self.newAddressCreated && self.newAddressCreated(model.internalid, add_options);

                        self.render();
                    });
            } else {
                // There were errors so we return a rejected promise
                return jQuery.Deferred().reject({
                    errorCode: 'ERR_CHK_INCOMPLETE_ADDRESS',
                    errorMessage: Utils.translate('The address is incomplete')
                });
            }
        }
        return this.isValid();
    },

    // @method getAddressCollection Return the address collection source
    // @return {Address.Collection}
    getAddressCollection: function() {
        return this.wizard.options.profile.get('addresses');
    },

    isValid: function() {
        // Is Active is override by child modules, like Shipping to hide this module in Multi Ship To
        if (!this.isActive() || this.tempAddress) {
            return jQuery.Deferred().resolve();
        }

        const addresses = this.getAddressCollection();
        const selected_address = addresses && addresses.get(this.model.get(this.manage));

        if (selected_address) {
            if (selected_address.get('isvalid') === 'T') {
                return jQuery.Deferred().resolve();
            }

            return jQuery.Deferred().reject(this.invalidAddressErrorMessage);
        }

        return jQuery.Deferred().reject(this.selectAddressErrorMessage);
    },

    changeForm: function(e) {
        this.model.set(
            `temp${this.manage}`,
            (<any>jQuery(e.target).closest('form')).serializeObject()
        );
    },

    markSameAsHandler: function(e) {
        const is_checked = jQuery(e.target).prop('checked');
        this.markSameAs(is_checked);
    },

    // @method markSameAs @param {Boolean} is_checked
    markSameAs: function(is_checked: boolean) {
        this.sameAs = is_checked;

        this.model.set('sameAs', is_checked);

        this.setAddress(is_checked ? this.model.get(this.sameAsManage) : null);

        this.tempAddress = is_checked ? this.model.get(`temp${this.sameAsManage}`) : null;

        this.render();
    },

    // @method getSelectedAddress @returns the selected address
    getSelectedAddress: function() {
        if (!this.addressId) {
            if (this.sameAs && this.tempAddress) {
                return new AddressModel(this.tempAddress);
            }
        }

        // If there is no selected address, then we look for the default address depending on
        // the type of manage among the existing addresses.
        let address = this.addresses.get(this.addressId);
        if (!address) {
            const defaultManage =
                this.manage === 'billaddress' ? 'defaultbilling' : 'defaultshipping';

            address = _.find(this.addresses.models, currentAddress => {
                return currentAddress.get(defaultManage) === 'T';
            });

            if (address) {
                this.setAddress(address.get('internalid'), {
                    silent: true
                });
            }
        }
        return address || this.getEmptyAddress();
    },

    // @method getEmptyAddress
    // If the same as check-box is not checked
    // we return a new model with any attributes that were already typed into the address form
    // that's what the temp + this.manage is, the temporary address for this manage.
    getEmptyAddress: function() {
        return new AddressModel(
            this.isSameAsEnabled && this.sameAs ? null : this.model.get(`temp${this.manage}`)
        );
    },

    // @method getTheOtherAddress returns the address in the addresses collection which id is current model's sameAsManage attribute
    getTheOtherAddress: function() {
        return this.addresses.get(this.model.get(this.sameAsManage));
    },

    // @method getAddressesToShow returns a copy of the addresses collection including the new address button available to show
    getAddressesToShow: function() {
        let addresses_to_show;

        if (this.addresses && !!this.addresses.length) {
            addresses_to_show = paymentinstrument_creditcard_edit_tpl
                ? this.addresses.getCollectionForRendering()
                : this.addresses;
        }

        return addresses_to_show ? addresses_to_show.models : [];
    },

    // @method manageError @param {Object} error
    manageError: function(error) {
        if (error && error.errorCode !== 'ERR_CHK_INCOMPLETE_ADDRESS') {
            WizardStepModule.prototype.manageError.apply(this, arguments);
        }
    },

    // @method getAddressListOptions Get the object containing the options to be passed to the Address.Details view when rendering the list of available addresses
    // @return {showSelect:Boolean,selectMessage:String,hideDefaults:Boolean}
    getAddressListOptions: function() {
        return {
            showSelect: true,
            selectMessage: this.selectMessage || '',
            hideDefaults: true,
            selectedAddressId: (this.address && this.address.get('internalid')) || '',
            hideSelector: false,
            manage: this.manage
        };
    },

    prepopulateAddressModel: function() {
        if (
            this.wizard.options.profile.get('isperson') &&
            this.wizard.isAutoPopulateEnabled &&
            this.wizard.isAutoPopulateEnabled()
        ) {
            this.address.set(
                'fullname',
                `${this.wizard.options.profile.get('firstname')} ${this.wizard.options.profile.get(
                    'lastname'
                )}`
            );
        }

        return this.address;
    },

    childViews: {
        'Single.Address.Details': function() {
            return new AddressDetailsView({
                model: this.address,
                hideDefaults: true,
                manage: this.manage,
                showChangeButton: !this.isGuest,
                hideRemoveButton: !!this.isGuest,
                hideActions: !this.address.id,
                showError: true,
                hideSelector: true
            });
        },
        'New.Address.Form': function() {
            this.addressView = new AddressEditView({
                application: this.wizard.application,
                collection: this.addresses,
                model: this.prepopulateAddressModel(),
                manage: this.manage,
                hideFooter: true,
                hideHeader: true
            });

            return this.addressView;
        },
        'Address.List': function() {
            return new BackboneCollectionView({
                collection: this.getAddressesToShow(),
                viewsPerRow:
                    this.itemsPerRow ||
                    (Utils.isDesktopDevice() ? 3 : Utils.isTabletDevice() ? 2 : 1),
                rowTemplate: order_wizard_address_row_tpl,
                cellTemplate: order_wizard_address_cell_tpl,
                childView: AddressDetailsView,
                childViewOptions: this.getAddressListOptions()
            });
        }
    },

    // @method getContext @return {OrderWizard.Module.Address.Context}
    getContext: function() {
        // @class OrderWizard.Module.Address.Context
        return {
            // @property {Boolean} showTitle
            showTitle: !!(!this.options.hide_title && this.getTitle()),
            // @property {String} title
            title: this.getTitle(),
            // @property {Boolean} isSameAsEnabled
            isSameAsEnabled: !!this.isSameAsEnabled,
            // @property {Boolean} isSameAsCheckBoxDisable
            isSameAsCheckBoxDisable: !!this.disableSameAsCheckBox,
            // @property {Boolean} isSameAsSelected
            isSameAsSelected: !!this.sameAs,
            // @property {String} sameAsMessage
            sameAsMessage: this.sameAsMessage,
            // @property {Boolean} showSingleAddressDetails
            showSingleAddressDetails: !!(
                this.address &&
                this.address.get('internalid') &&
                ((this.isSameAsEnabled && this.sameAs) ||
                    (this.addressId && !this.address.isNew()) ||
                    (this.getAddressesToShow().length && this.isGuest))
            ),
            // @property {Boolean} showAddressList
            showAddressList: !!(this.getAddressesToShow().length > 1),
            // @property {String} changeLinkText
            changeLinkText: this.getChangeLinkText(),
            // @property {String} selectedAddressId
            selectedAddressId: (this.address && this.address.get('internalid')) || '',
            // @property {Boolean} showManageValue
            showManageValue: !!this.manage,
            // @property {Boolean} manageValue
            manageValue: this.manage,
            // @property {Boolean} showSaveButton
            showSaveButton: this.showSaveButton
        };
    }
});

export = OrderWizardModuleAddress;
