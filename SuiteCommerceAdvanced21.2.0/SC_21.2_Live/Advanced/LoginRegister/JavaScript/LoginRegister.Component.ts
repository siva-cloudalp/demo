/*
	© 2020 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

/// <amd-module name="LoginRegister.Component"/>

import SCVisualComponent = require('../../../Commons/SC/JavaScript/SC.VisualComponent');

const LoginRegisterComponent: any = function LoginRegisterComponentGenerator(application) {
    // @class LoginRegister.Component The LoginRegister component let's the user interact with most important aspect of the
    // Login Register Page, like setting options, changing quantity, and obtain item's related information. @extend SC.VisualComponent @public @extlayer
    const privateComponent = SCVisualComponent.extend({
        componentName: 'LoginRegisterPage',

        application: application,

        DEFAULT_VIEW: 'LoginRegister.View',

        LRP_VIEW: 'LoginRegister.View',

        // @method _isViewFromComponent Indicate if the passed-in the View is a Login Register Page of the current component
        // @private
        // @param {Backbone.View} view Any view of the system
        // @return {Boolean} True in case the passed in View is a Login Register Page of the current Component, false otherwise
        _isViewFromComponent: function _isViewFromComponent(view) {
            const view_identifier = this._getViewIdentifier(view);
            const view_prototype_id = view && this._getViewIdentifier(view.prototype);

            return (
                view && (view_identifier === this.LRP_VIEW || view_prototype_id === this.LRP_VIEW)
            );
        },

        _getComponentIdentifiers: function _getComponentIdentifiers(): string[] {
            return [this.LRP_VIEW];
        }
    });

    const innerToOuterMap = [
        { inner: 'before:LoginRegister.login', outer: 'beforeLogin', normalize: null },
        { inner: 'before:LoginRegister.register', outer: 'beforeRegister', normalize: null },
        { inner: 'after:LoginRegister.register', outer: 'afterRegister', normalize: null }
    ];

    application.getLayout().on('beforeAppendView', function(view) {
        if (privateComponent._isViewFromComponent(view, true)) {
            if (view.getChildViewInstance('Login')) {
                privateComponent._suscribeToInnerEvents(
                    innerToOuterMap,
                    view.getChildViewInstance('Login')
                );
            }

            if (view.getChildViewInstance('Register')) {
                privateComponent._suscribeToInnerEvents(
                    innerToOuterMap,
                    view.getChildViewInstance('Register')
                );
            }
        }
    });

    return privateComponent;
};

export = LoginRegisterComponent;
