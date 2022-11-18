/*
	© 2020 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

/// <amd-module name="OrderWizard.Module.RegisterGuest"/>
/// <reference path="../../../Commons/Utilities/JavaScript/UnderscoreExtended.d.ts" />

import * as order_wizard_register_guest_module_tpl from 'order_wizard_register_guest_module.tpl';
import * as Utils from '../../../Commons/Utilities/JavaScript/Utils';
import * as jQuery from '../../../Commons/Core/JavaScript/jQuery';
import { Configuration } from '../../SCA/JavaScript/Configuration';

import { WizardStepModule } from '../../Wizard/JavaScript/Wizard.StepModule';
import { GlobalViewsMessageView } from '../../../Commons/GlobalViews/JavaScript/GlobalViews.Message.View';
import { ProfileModel } from '../../../Commons/Profile/JavaScript/Profile.Model';

import AccountRegisterModel = require('../../Account/JavaScript/Account.Register.Model');
import LoginRegisterRegisterView = require('../../LoginRegister/JavaScript/LoginRegister.Register.View');
import Tracker = require('../../../Commons/Tracker/JavaScript/Tracker');
import Backbone = require('../../../Commons/Utilities/JavaScript/backbone.custom');

// @class OrderWizard.Module.RegisterGuest @extends WizardModule.extend
export = WizardStepModule.extend({
    // @property {Function} template
    template: order_wizard_register_guest_module_tpl,

    // @property {String} className
    className: 'OrderWizard.Module.RegisterGuest',

    // @property {Object} events
    events: {
        'submit form': 'saveForm',
        'click [data-action="remove-button"]': 'removeButton'
    },

    // @method initialize Defines this module as a composite view
    initialize: function() {
        WizardStepModule.prototype.initialize.apply(this, arguments);

        const self = this;
        this.model = new AccountRegisterModel();

        (<any>Backbone).Validation.bind(this);

        this.profileModel = this.profileModel || ProfileModel.getInstance();

        // when user is successfully registered we re-render the header
        this.profileModel.on('change', function(profileModel) {
            if (profileModel.get('isLoggedIn') === 'T') {
                self.wizard.application.getLayout().updateHeader();
            }
        });
    },

    destroy: function() {
        WizardStepModule.prototype.destroy.apply(this, arguments);
        this.profileModel.off(null, null, this);
    },

    // @method removeButton Removed the remove button
    removeButton: function() {
        this.$el.find('[data-action="remove-button"]').remove();
    },

    // @property {Array<String>} errors List of errors handle by this module
    errors: [
        'AN_ACCOUNT_WITH_THAT_NAME_AND_EMAIL_ADDRESS_ALREADY_EXISTS',
        'ERR_WS_CUSTOMER_REGISTRATION',
        'ERR_WS_INVALID_EMAIL',
        'USER_ERROR'
    ],

    // @method showSuccess Method called when the save operation finish successfully to show a confirmation message
    showSuccess: function() {
        const global_view_message = new GlobalViewsMessageView({
            message: Utils.translate('Account successfully created'),
            type: 'success'
        });

        this.$('form')
            .empty()
            .html(global_view_message.render().$el.html());
    },

    // @method trackEvent Track the creation of a user account
    // @param {Function} callback
    trackEvent: function(callback: Function) {
        Tracker.getInstance().trackEvent({
            category: 'create-account',
            action: 'click',
            value: 1,
            callback: callback
        });
    },

    // @method saveForm Handle the submit event of the account form
    // @param {HTMLEvent} e
    saveForm: function(e) {
        e.preventDefault();

        this.clearError();

        const self = this;
        const $target = jQuery(e.target);
        const user_data = (<any>$target).serializeObject();

        this.model.set(user_data, { silent: true });

        if (this.model.isValid(true)) {
            this.profileModel = this.profileModel || ProfileModel.getInstance();
            this.$savingForm = $target.closest('form');

            const button = $target.find('button');

            button && button.prop('disabled', true);

            const promise = this.model.save(user_data);

            if (promise) {
                promise
                    .done(function() {
                        self.trackEvent();
                        self.profileModel.set(self.model.get('user'));
                        self.showSuccess();
                    })
                    .fail(function(jqXhr) {
                        button && button.prop('disabled', false);
                        jqXhr.preventDefault = true;
                        self.wizard.manageError(JSON.parse(jqXhr.responseText));
                    });
            }
        }
    },

    // @method saveForm Override default implementation to handle the case when the error code indicate duplicated user email
    showError: function() {
        if (
            this.error &&
            this.error.errorCode === 'AN_ACCOUNT_WITH_THAT_NAME_AND_EMAIL_ADDRESS_ALREADY_EXISTS'
        ) {
            this.error.errorMessage = this.error.errorMessage.replace(
                "href='{1}'",
                'href="#" data-touchpoint="login"'
            );
        }

        WizardStepModule.prototype.showError.apply(this, arguments);
    },

    // @method isActive Override default implementation to be active when the user is guest and registration type is not disabled
    // @return {Boolean}
    isActive: function(): boolean {
        return (
            this.profileModel.get('isGuest') === 'T' &&
            Configuration.getRegistrationType() !== 'disabled'
        );
    },

    // @property {Object} childViews
    childViews: {
        RegisterGuestForm: function() {
            this.model.set(
                {
                    firstname: this.profileModel.get('firstname'),
                    lastname: this.profileModel.get('lastname'),
                    email: this.profileModel.get('email'),
                    password: '',
                    password2: ''
                },
                { silent: true }
            );

            return new LoginRegisterRegisterView({ showFormFieldsOnly: true, model: this.model });
        }
    }
});
