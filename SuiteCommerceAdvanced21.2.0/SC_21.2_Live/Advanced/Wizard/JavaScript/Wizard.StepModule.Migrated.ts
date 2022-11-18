/*
	© 2020 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

/// <amd-module name="Wizard.StepModule.Migrated"/>
// @Typescript-partial
// Migrate sufix shoulde be removed after full migration of this file.

import * as _ from 'underscore';
import * as wizard_module_tpl from 'wizard_module.tpl';
import * as jQuery from '../../../Commons/Core/JavaScript/jQuery';
import * as Utils from '../../../Commons/Utilities/JavaScript/Utils';
import { GlobalViewsMessageView } from '../../../Commons/GlobalViews/JavaScript/GlobalViews.Message.View';
import { View } from '../../../Commons/Core/JavaScript/View';

interface WizardStepModuleMigratedEvents {
    error: (param) => void;
    ready: (param) => void;
}

export class WizardStepModuleMigrated<
    TContext extends object,
    TEvents extends object = {}
> extends View<TContext, WizardStepModuleMigratedEvents> {
    protected tagName = 'article';

    protected template = wizard_module_tpl;

    public errors = [];

    public wizard;

    private readonly step;

    public model;

    private moduleId;

    private error;

    private options;

    protected title;

    private state;

    public constructor(options) {
        super();

        this.wizard = options.wizard;
        this.step = options.step;
        this.model = options.wizard.model;

        this.moduleId = options.module_id || (this.template ? this.template.Name : '');

        // errors array in the configuration file completely overrides the default one.
        if (options.errors) {
            this.errors = options.errors;
        }
    }

    // @method disableInterface General method to disable the module interface
    // called at the moment of submitting the step
    private disableInterface(): void {}

    // @method enableInterface General method to re-enable the module interface
    // called after getting an ERROR on submitting
    private enableInterface(): void {}

    // @method refresh Auxiliary method to refresh a module. It is implemented
    // by the OrderWizard to refresh titles
    private refresh(): void {}

    public _render(...args) {
        let ret;
        if (!this.isActive()) {
            ret = this.$el.empty();
        } else {
            this.$el.addClass('module-rendered');
            ret = super.render.apply(this, args);
            // add the error message box to the module
            if (!this.$('[data-type="alert-placeholder-module"]').length) {
                this.$el.prepend('<div data-type="alert-placeholder-module"></div>');
            }

            // we show module errors (if any) and remove the error object
            if (this.error) {
                this.showError();
            }
        }

        // We trigger the resize event of the body as the DOM is changed
        // and some components might be positioned based on the body size
        jQuery(document.body).trigger('resize');

        return ret;
    }

    // @method submit by default, a module returns it's validation promise.
    // @returns {jQuery.Deferred}
    public submit() {
        return this.isValid();
    }

    // @method cancel @returns {jQuery.Deferred}
    private cancel() {
        return jQuery.Deferred().resolve();
    }

    // @method isValid validate resolves a promise because maybe it needs to
    // do some ajax for validation @returns {jQuery.Deferred}
    public isValid(): JQueryDeferred<void> {
        return jQuery.Deferred().resolve();
    }

    // @method isActive Base implementation to determines is a module is active
    // (can be submitted, rendered or just use) or not. @returns {Boolean}
    public isActive(...args) {
        return _.isFunction(this.options.isActive) ? this.options.isActive.apply(this, args) : true;
    }

    // @method getTitle returns the title of the module, can be overridden in the
    // configuration file. @returns {String}
    public getTitle() {
        return _.isFunction(this.options.title)
            ? this.options.title.apply(this)
            : this.options.title || this.title || '';
    }

    // @method manageError @param {Wizard.Module.Error} error
    public manageError(error) {
        if (this.state !== 'future' && this.isActive()) {
            // @property {Wizard.Module.Error} error the current error object if any
            this.error = error;
            this.trigger('error', error);

            // if the module is being shown we show the error
            if (this.wizard.getCurrentStep() === this.step) {
                this.showError();
            }
        }
    }

    // @method showError render the error message
    private showError() {
        const global_view_message = new GlobalViewsMessageView({
            message: this.error.errorMessage,
            type: 'error',
            closable: true
        });

        // Note: in special situations (like in payment-selector), there are modules
        // inside modules, so we have several place holders, so we only want to show
        // the error in the first place holder.
        const error_container = this.$('[data-type="alert-placeholder-module"]:first');
        const error_container_parent = error_container.parents('.module-rendered:last');

        if (error_container_parent.length) {
            // may be more than one, we are interested in the last one
            Utils.animatedScroll(error_container_parent[0]);
        }

        error_container.html(global_view_message.render().$el.html());
        this.error = null;
    }

    // @method clearError empty the error message container
    private clearError() {
        this.$('[data-type="alert-placeholder-module"]').empty();
        this.error = null;
    }

    // @method clearGeneralMessages General method to clear any message at step level
    private clearGeneralMessages() {
        this.$('[data-type="alert-placeholder-module"]:first').empty();
    }

    // @method showGeneralMessage Notify a message (not just an error) at step level.
    // Type can be a boolean (true: for errors, false: for success) or string to add
    // a class alert-<type>
    private showGeneralMessage(message, type) {
        const message_type = _.isString(type) ? type : (type && 'error') || 'success';

        const global_view_message = new GlobalViewsMessageView({
            message: message,
            type: message_type,
            closable: true
        });

        this.$('[data-type="alert-placeholder-module"]:first').html(
            global_view_message.render().$el.html()
        );
    }

    public getContext(): any {
        return {};
    }
}
