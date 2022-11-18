/*
	© 2020 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

/// <amd-module name="OrderWizard.Module.PaymentMethod.ThreeDSecure"/>

import '../../../Commons/Transaction/JavaScript/Transaction.Model';
import * as _ from 'underscore';
import * as order_wizard_paymentmethod_threedsecure_module_tpl from 'order_wizard_paymentmethod_threedsecure_module.tpl';
import * as Utils from '../../../Commons/Utilities/JavaScript/Utils';
import { WizardStepModule } from '../../Wizard/JavaScript/Wizard.StepModule';

import Deferred = JQuery.Deferred;

const OrderWizardModulePaymentMethodThreeDSecure: any = WizardStepModule.extend({
    // @property {Function} template
    template: order_wizard_paymentmethod_threedsecure_module_tpl,

    // @property {String} title
    title: Utils.translate('Credit Card Authentication'),
    // @property {Object} addressType
    steps: {
        DEVICE_AUTHENTICATION: 'authenticatedevice',
        SHOPPER_CHALLENGE: 'challengeshopper'
    },
    // @method initialize
    // @param {Object} options
    initialize: function (options) {
        this.application = options.application;
        this.deferred = options.deferred;
        this.confirmation = options.confirmation;
        this.visible = options.confirmation && options.confirmation.reasoncode !== 'ERR_WS_REQ_DEVICE_AUTHENTICATION';
        this.serviceHTML = options.confirmation.authenticationformaction ? this.createIFrame(options.confirmation.authenticationformaction) : this.confirmation.get('paymentauthorization').servicehtml;

        this.receiveMessage = this.receiveMessage.bind(this);

        this.currentStep = this.steps.DEVICE_AUTHENTICATION;

        WizardStepModule.prototype.initialize.apply(this, arguments);
    },

    // @method render
    // @return {Backbone.View} result
    render: function () {
        return WizardStepModule.prototype.render.apply(this, arguments);
    },

    // @method showInModal
    // @param {Object} options
    // @return {jQuery.Deferred}
    showInModal: function (options) {
        const error = this.error;
        if (error) {
        this.render();
        }

        const promise = this.application
            .getLayout()
            .showInModal(this, _.extend({ keyboard: false, backdrop: 'static' }, options));

        promise.done(() => {
            this.listenForCallback();

            if (!this.visible) {
                //Hidden iframe for device authentication
                this.$containerModal
                    .addClass('invisible')
                    .removeClass('fade');
            } else if (!error) {
                //Visible iframe for shopper challenge
                this.$containerModal
                    .removeClass('invisible')
                    .addClass('fade');

                this.on('modal-close', () => {
                    this.model.fetch().done(() => {
                        this.model.set('internalid', 'cart');
                        this.model.unset('3dsecure_error');
                        this.wizard.getCurrentStep().enableNavButtons();
                    });
                });
            }
        });

        return promise;
    },

    // @method process3DSecure. Called from ssp 3D Secure file (threedsecure.ssp)
    // @param {Json} confirmation Order submit answer.
    process3DSecure: function (order_info) {
        if (order_info.confirmation && order_info.confirmation.confirmationnumber) {
            this.model.set(order_info);
            this.success();
        } else if (
            order_info.confirmation &&
            order_info.confirmation.reasoncode === 'ERR_WS_REQ_SHOPPER_CHALLENGE'
        ) {
            this.currentStep = this.steps.SHOPPER_CHALLENGE;
            this.visible = true;
            this.serviceHTML = this.createIFrame(order_info.confirmation.authenticationformaction);
            this.showInModal();
        } else if (
            order_info.confirmation &&
            order_info.confirmation.reasoncode === 'ERR_WS_REQUIRE_CUSTOMER_LOGIN' &&
            order_info.confirmation.body !== '' &&
            !!this.currentStep
        ) {
            // calls to threedsecure.ssp coming from external sites may fail,
            // it needs to be triggered again from samesite.
            if (this.currentStep === this.steps.DEVICE_AUTHENTICATION) {
                this.currentStep = this.steps.SHOPPER_CHALLENGE;
            } else if (this.currentStep === this.steps.SHOPPER_CHALLENGE) {
                delete this.currentStep;
            }
            let returnedParameters = order_info.confirmation.body.replace(
                /([^&=]+=null&)*(&[^&=]+=null)?/g,
                ''
            );
            returnedParameters = encodeURIComponent(
                '{"' + returnedParameters.replace(/( |&amp;)/g, '", "').replace(/=/g, '": "') + '"}'
            );
            this.serviceHTML = this.createIFrame(
                Utils.getAbsoluteUrl(`threedsecureProxy.ssp?data=${returnedParameters}`)
            );
            this.showInModal();
        } else {
            this.fail(order_info.errorMessage);
        }
    },

    // @method listenForCallback. Turns callback widely available. Emptying it after use
    listenForCallback: function () {
        (<any>window).process3DSecure = data => {
            (<any>window).process3DSecure = function () { };
            this.process3DSecure(data);
        };

        (<any>window).addEventListener('message', this.receiveMessage, false);
    },

    // @method receiveMessage. listen for 3d secure 2.0 response. postMessage flow.
    receiveMessage: function(event) {
        if (!new RegExp(event.origin).test(this.serviceHTML)) {
            throw new Error('Invalid Origin');
        }

        this.visible = false;
        this.serviceHTML = this.createIFrame(
            Utils.getAbsoluteUrl(`threedsecure.ssp?data=${event.data}`)
        );
        this.showInModal();
    },

    // @method fail Called if confirmation coming from 3D Secure ssp file fails.
    // @return {jQuery.Deferred} Rejected promise.
    fail: function (errorMessage: string): Deferred<string> {
        this.closeModal();
        this.model.set('internalid', 'cart');
        return this.deferred.rejectWith(this, [errorMessage]);
    },

    // @method success Called if confirmation coming from 3D Secure ssp file succeeded.
    // @return {jQuery.Deferred} Resolved promise.
    success: function () {
        this.closeModal();
        return this.deferred.resolve();
    },

    // @method closeModal Closes the modal
    closeModal: function () {
        this.$containerModal
            .removeClass('fade')
            .modal('hide')
            .data('bs.modal', null);

        (<any>window).removeEventListener('message', this.receiveMessage, false);
    },

    createIFrame: function (action: string): string {
        return (
            "<iframe src='" +
            action +
            "' id='3dform' name='threedsecureframe' width='100%' height=600 border=0 frameborder=0></iframe>"
        );
    },

    // @method getContext
    // @return {OrderWizard.Module.PaymentMethod.ThreeDSecure.Context}
    getContext: function () {
        return {
            threeDSecureError: this.model.get('3dsecure_error'),
            iframe: this.serviceHTML
        };
    }
});

export = OrderWizardModulePaymentMethodThreeDSecure;
