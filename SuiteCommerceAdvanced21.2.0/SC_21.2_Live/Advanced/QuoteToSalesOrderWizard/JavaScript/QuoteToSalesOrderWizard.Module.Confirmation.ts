/*
	© 2020 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

/// <amd-module name="QuoteToSalesOrderWizard.Module.Confirmation"/>

import * as quote_to_salesorder_wizard_module_confirmation_tpl from 'quote_to_salesorder_wizard_module_confirmation.tpl';
import * as Utils from '../../../Commons/Utilities/JavaScript/Utils';
import { Configuration } from '../../SCA/JavaScript/Configuration';
import { WizardStepModule } from '../../Wizard/JavaScript/Wizard.StepModule';

import Backbone = require('../../../Commons/Utilities/JavaScript/backbone.custom');

// @class QuoteToSalesOrderWizard.Module.Confirmation @extends Wizard.Module
export = WizardStepModule.extend({
    // @property {Function} template
    template: quote_to_salesorder_wizard_module_confirmation_tpl,

    // @method present Override default implementation so when the modules is being rendered we set the salesorderid parameter into the url
    // @return {Void}
    present: function() {
        const confirmation = this.model.get('confirmation') || new Backbone.Model();
        // store current order id in the hash so it is available even when the checkout process ends.
        const newHash = Utils.addParamsToUrl((<any>Backbone.history).fragment, {
            salesorderid: confirmation.get('internalid')
        });

        Backbone.history.navigate(newHash, {
            trigger: false
        });
    },

    // @method getContext
    // @return {OrderWizard.Module.Confirmation.Context}
    getContext: function() {
        // @class OrderWizard.Module.Confirmation.Context
        return {
            // property {QuoteToSalesOrder.Model} model
            model: this.model,
            // @property {String} orderId
            orderId: this.model.get('confirmation').get('internalid'),
            // @property {String} orderNumber
            orderNumber: this.model.get('confirmation').get('tranid'),
            // @property {Boolen} hasSalesrep
            hasSalesrep: !!this.model.get('quoteDetails').salesrep.internalid,
            // @property {String} salesrepPhone
            salesrepPhone: this.model.get('quoteDetails').salesrep.phone
                ? this.model.get('quoteDetails').salesrep.phone
                : Configuration.get('quote.defaultPhone', ''),
            // @property {String} salesrepEmail
            salesrepEmail: this.model.get('quoteDetails').salesrep.email
                ? this.model.get('quoteDetails').salesrep.email
                : Configuration.get('quote.defaultEmail', ''),
            // @property {String} disclaimer
            disclaimer: Configuration.get('quote.disclaimer', '')
        };
        // @class QuoteToSalesOrderWizard.Module.Confirmation
    }
});
