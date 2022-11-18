/*
    © 2020 NetSuite Inc.
    User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
    provided, however, if you are an authorized user with a NetSuite account or log-in, you
    may use this code subject to the terms that govern your access and use.
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define("PaymentWizard.Module.PaymentMethod.ACH", ["require", "exports", "underscore", "payment_wizard_paymentmethod_ach_module.tpl", "paymentinstrument_ach_edit.tpl", "Utils", "jQuery", "Configuration", "Profile.Model", "Wizard.StepModule.Migrated", "PaymentInstrumentACH.Model", "PaymentInstrumentACH.Collection", "PaymentInstrumentACH.CollectionView", "PaymentInstrumentACH.Edit.Form.View", "AjaxRequestsKiller", "GlobalViews.Confirmation.View", "Backbone.View"], function (require, exports, _, payment_wizard_paymentmethod_ach_module_tpl, paymentinstrument_ach_edit_tpl, Utils, jQuery, Configuration_1, Profile_Model_1, Wizard_StepModule_Migrated_1, PaymentInstrumentACH_Model_1, PaymentInstrumentACH_Collection_1, PaymentInstrumentACH_CollectionView_1, PaymentInstrumentACH_Edit_Form_View_1, AjaxRequestsKiller_1, GlobalViewsConfirmationView, BackboneView) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PaymentWizardModulePaymentMethodACH = void 0;
    var PaymentWizardModulePaymentMethodACH = /** @class */ (function (_super) {
        __extends(PaymentWizardModulePaymentMethodACH, _super);
        function PaymentWizardModulePaymentMethodACH(args) {
            var _this = _super.call(this, args) || this;
            _this.template = payment_wizard_paymentmethod_ach_module_tpl;
            _this.selectMessage = Utils.translate('Use this ACH');
            _this.itemsPerRow = Utils.isDesktopDevice() ? 3 : 2;
            _this.events = {
                'click [data-action="select"]': 'selectACH',
                'mouseover [data-toggle="popover"]': 'openPopover',
                'click [data-action="change-ach"]': 'changeACH',
                'click [data-action="remove"]': 'removeACH',
                'click [data-action="show-safe-secure-info"]': 'showSecureInfo'
            };
            _this.errors = ['ERR_CHK_INCOMPLETE_ACH', 'ERR_CHK_SELECT_ACH', 'ERR_WS_INVALID_PAYMENT'];
            _this.wizard.model.on('change:payment', jQuery.proxy(_this, 'changeTotal'));
            _this.itemsPerRow = _.result(args, 'itemsPerRow') || _this.itemsPerRow;
            _this.profileModel = Profile_Model_1.ProfileModel.getInstance();
            if (!_this.profileModel.get('paymentmethodsach')) {
                _this.profileModel.set('paymentmethodsach', new PaymentInstrumentACH_Collection_1.PaymentInstrumentACHCollection());
            }
            _this.paymentmethods = _this.profileModel.get('paymentmethodsach');
            _this.updateCollectionList();
            return _this;
        }
        PaymentWizardModulePaymentMethodACH.prototype.listenPaymentMethods = function () {
            var _this = this;
            this.paymentmethods.on('reset', function () {
                _this.updateCollectionList().then(function () {
                    _this.selectedPaymentMethod();
                });
            }, this);
            this.paymentmethods.on('add', function () {
                _this.updateCollectionList().then(function () {
                    _this.selectedPaymentMethod();
                });
            }, this);
            this.paymentmethods.on('update', function () {
                _this.selectedPaymentMethod();
            }, this);
            this.paymentmethods.on('remove', function () {
                _this.updateCollectionList().then(function () {
                    _this.selectedPaymentMethod();
                });
            }, this);
            this.paymentmethods.on('noconsent', function () {
                _this.updateCollectionList().then(function () {
                    _this.selectedPaymentMethod();
                });
            }, this);
        };
        PaymentWizardModulePaymentMethodACH.prototype.updateCollectionList = function () {
            var promise = jQuery.Deferred();
            return this.paymentmethods
                .fetch({
                killerId: AjaxRequestsKiller_1.AjaxRequestsKiller.getKillerId()
            })
                .then(function () {
                promise.resolve();
                return promise;
            });
        };
        PaymentWizardModulePaymentMethodACH.prototype.isActive = function () {
            var anACH = _.findWhere(Configuration_1.Configuration.get('siteSettings.paymentmethods', []), {
                isautomatedclearinghouse: 'T'
            });
            return (this.wizard.application.getConfig().paymentInstrumentACHEnabled &&
                anACH &&
                !!anACH.internalid);
        };
        PaymentWizardModulePaymentMethodACH.prototype.selectedPaymentMethod = function () {
            if (this.wizard.hidePayment()) {
                this.$el.empty();
            }
            else {
                var self_1 = this;
                // search for the paymentmethod in the order that is ach
                var orderPayMethod = self_1.model.get('paymentmethods').findWhere({ type: 'ACH' });
                var orderACHId = (orderPayMethod &&
                    orderPayMethod.get('ACH') &&
                    orderPayMethod.get('ACH').internalid) ||
                    this.getDefaultACHId();
                // used by the view to show radio input selected
                self_1.paymentMethodSelected = orderACHId;
                // if the order has an ACH and that ACH exists on
                // the profile we set it (making sure it is the same as in the profile)
                if (orderACHId && self_1.paymentmethods.get(orderACHId)) {
                    self_1.setACH({ id: orderACHId });
                }
                // if the ACH in the order is not longer in the profile we delete it.
                else if (orderACHId) {
                    self_1.unsetACH(null);
                }
                self_1.render();
            }
        };
        PaymentWizardModulePaymentMethodACH.prototype.render = function () {
            if (this.wizard.hidePayment()) {
                this.$el.empty();
            }
            else {
                this.paymentmethods.off(null, null, this);
                this.listenPaymentMethods();
                var self_2 = this;
                var orderPaymentMethod = this.model.get('paymentmethods').findWhere({ type: 'ACH' });
                this.paymentmethod = null;
                this.paymentMethod =
                    orderPaymentMethod || new PaymentInstrumentACH_Model_1.PaymentInstrumentACHModel({ type: 'ACH' });
                var orderACH = this.paymentMethod.get('ACH') || this.paymentMethod;
                this.paymentMethodSelected = orderACH.get('internalid');
                if (!this.paymentmethods.length) {
                    this.paymentmethod = new PaymentInstrumentACH_Model_1.PaymentInstrumentACHModel({
                        paymentmethods: Configuration_1.Configuration.get('siteSettings.paymentmethods')
                    });
                }
                else if (orderACH && orderACH.get('internalid')) {
                    this.paymentmethod = this.paymentmethods.get(orderACH.get('internalid'));
                }
                else if (this.profileModel.get('isGuest') === 'T') {
                    // if the order is empty and is a guest use the first ACH in the list
                    this.paymentmethod = this.paymentmethods.at(0);
                    this.setACH({
                        id: this.paymentmethod.get('id')
                    });
                }
                else if (!this.unset) {
                    this.paymentmethod = _.findWhere(this.paymentmethods.models, {
                        isdefault: 'T'
                    });
                    if (this.paymentmethod && this.paymentmethod.get('id')) {
                        this.setACH({
                            id: this.paymentmethod.get('id')
                        });
                    }
                }
                this._render();
                this.isValid().done(function () {
                    self_2.trigger('ready', true);
                });
            }
            return this;
        };
        PaymentWizardModulePaymentMethodACH.prototype.removeACH = function (e) {
            e.preventDefault();
            var deleteConfirmationView = new GlobalViewsConfirmationView({
                callBack: this._removeACHFromCollection,
                callBackParameters: {
                    context: this,
                    achId: jQuery(e.target).data('id')
                },
                title: Utils.translate('Remove ACH'),
                body: Utils.translate('Are you sure you want to remove this ACH?'),
                autohide: true
            });
            return this.wizard.application.getLayout().showInModal(deleteConfirmationView);
        };
        PaymentWizardModulePaymentMethodACH.prototype._removeACHFromCollection = function (options) {
            options.context.unsetACH();
            if (options.achId !== '-temporal-') {
                options.context.paymentmethods.get(options.achId).destroy({ wait: true });
            }
            else {
                options.context.paymentmethods.remove(options.achId);
            }
        };
        PaymentWizardModulePaymentMethodACH.prototype.changeACH = function (e) {
            if (Profile_Model_1.ProfileModel.getInstance().get('isGuest') !== 'T' ||
                this.paymentmethod.get('internalid') === '-temporal-') {
                if (this.paymentmethod.get('internalid') === '-temporal-') {
                    var internalid = this.paymentmethod.get('internalid');
                    this.paymentmethods.remove(internalid);
                    Profile_Model_1.ProfileModel.getInstance()
                        .get('paymentmethodsach')
                        .remove(internalid);
                }
                this.unsetACH(e);
            }
            else {
                var self_3 = this;
                e.preventDefault();
                e.stopPropagation();
                var des = this.paymentmethod.destroy({ wait: true });
                if (des) {
                    des.then(function () {
                        self_3.paymentmethods.reset([]);
                        Profile_Model_1.ProfileModel.getInstance()
                            .get('paymentmethodsach')
                            .reset([]);
                    });
                }
            }
        };
        PaymentWizardModulePaymentMethodACH.prototype.changeTotal = function () {
            var was = this.model.previous('payment');
            var was_confirmation = this.model.previous('confirmation');
            var is_confirmation = this.model.get('confirmation');
            var is = this.model.get('payment');
            // Changed from or to 0
            if (((was === 0 && is !== 0) || (was !== 0 && is === 0)) &&
                !was_confirmation &&
                !is_confirmation) {
                this.render();
            }
        };
        PaymentWizardModulePaymentMethodACH.prototype.selectACH = function (e) {
            var idSelected = jQuery(e.target).data('id');
            if (idSelected) {
                this.paymentMethodSelected = idSelected.toString();
                this.setACH({
                    id: idSelected
                });
            }
            // re render so if there is changes to be shown they are represented in the view
            this.render();
            // As we alreay set the ach, we let the step know that we are ready
            this.trigger('ready', true);
        };
        PaymentWizardModulePaymentMethodACH.prototype.setACH = function (options) {
            var ACH = options.model ||
                (this.paymentmethods.get(options.id) && this.paymentmethods.get(options.id)) ||
                this.paymentmethods.get(options);
            this.paymentMethod = new PaymentInstrumentACH_Model_1.PaymentInstrumentACHModel({
                type: 'ACH',
                ACH: ACH
            });
            this.model.addPayment(this.paymentMethod);
        };
        PaymentWizardModulePaymentMethodACH.prototype.unsetACH = function (e) {
            if (e) {
                e.preventDefault();
                e.stopPropagation();
            }
            this.unset = true;
            this.paymentMethod = new PaymentInstrumentACH_Model_1.PaymentInstrumentACHModel({
                type: 'ACH'
            });
            var payment_method = this.paymentMethod;
            this.model.addPayment(payment_method);
            // We re render so if there is changes to be shown they are represented in the view
            this.render();
        };
        // @method submit
        PaymentWizardModulePaymentMethodACH.prototype.submit = function () {
            var _this = this;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            // This order is bing payed with some other method (Gift Cert probably)
            if (this.wizard.hidePayment()) {
                return jQuery.Deferred().resolve();
            }
            if (this.ACHDetailView) {
                var save_result_1 = jQuery.Deferred();
                var result = this.ACHDetailView.persistForm();
                if (result) {
                    result
                        .then(function () {
                        _this.paymentmethods.once('add', function (payment_method) {
                            _this.model.addPayment(payment_method);
                            _this.setACH({
                                model: payment_method
                            });
                            save_result_1.resolve();
                        });
                        _this.paymentmethods.once('noconsent', function () {
                            save_result_1.reject();
                        });
                    })
                        .catch(save_result_1.reject);
                }
                else {
                    save_result_1.reject();
                }
                return save_result_1;
            }
            return this.isValid().always(function () {
                _this.render();
            });
        };
        PaymentWizardModulePaymentMethodACH.prototype.isValid = function () {
            if (this.wizard.hidePayment()) {
                return jQuery.Deferred().resolve();
            }
            // user's ach
            var paymentmethods = this.paymentmethods;
            // current order payment method
            var orderPaymentMethod = this.model.get('paymentmethods').findWhere({
                type: 'ACH'
            });
            // current order ach
            var orderACH = orderPaymentMethod && orderPaymentMethod.get('ACH');
            // Order is using a ach
            // it is a temporal ach
            // or there is a collection of ACHs
            // and the order's ach is on that collection
            if (orderACH &&
                (orderACH.internalid === '-temporal-' ||
                    (paymentmethods.length &&
                        (paymentmethods.get(orderACH.internalid) ||
                            paymentmethods.get(orderACH.id) ||
                            (SC.ENVIRONMENT.paymentInstrumentEnabled &&
                                paymentmethods.get('-temporal-')))))) {
                return jQuery.Deferred().resolve();
            }
            // if it not set, then lets reject it
            return jQuery.Deferred().reject({
                errorCode: 'ERR_CHK_SELECT_ACH',
                errorMessage: Utils.translate('Please select an ACH')
            });
        };
        PaymentWizardModulePaymentMethodACH.prototype.manageError = function (error) {
            if (error && error.errorCode !== 'ERR_CHK_INCOMPLETE_ACH') {
                if (error.errorCode === 'ERR_WS_INVALID_PAYMENT') {
                    this.unsetACH(null);
                }
                _super.prototype.manageError.call(this, error);
            }
        };
        PaymentWizardModulePaymentMethodACH.prototype.showSecureInfo = function () {
            var view = new BackboneView({ application: this.wizard.application });
            var self = this;
            view.setTitle(Utils.translate('Safe and Secure Shopping'));
            view.render = function () {
                var creditCard = self.wizard.application.getConfig().creditCard;
                this.$el.html(Utils.translate(creditCard.creditCardShowSecureInfo));
                return this;
            };
            view.showInModal();
        };
        // @method getPaymentMethodsToShow returns a copy of the payment methods collection including the new card button available to show
        PaymentWizardModulePaymentMethodACH.prototype.getPaymentMethodsToShow = function () {
            var payment_methods_to_show;
            if (this.paymentmethods && !!this.paymentmethods.length) {
                payment_methods_to_show = paymentinstrument_ach_edit_tpl
                    ? this.paymentmethods.getCollectionForRendering()
                    : this.paymentmethods;
            }
            return payment_methods_to_show ? payment_methods_to_show.models : [];
        };
        PaymentWizardModulePaymentMethodACH.prototype.getDefaultACHId = function () {
            var defaultACH;
            if (this.paymentmethods && !!this.paymentmethods.length) {
                defaultACH = _.findWhere(this.paymentmethods.models, { ccdefault: 'T' });
            }
            return defaultACH ? defaultACH.id : '';
        };
        PaymentWizardModulePaymentMethodACH.prototype.getChildViews = function () {
            var _this = this;
            return {
                'ACH.List': function () {
                    if (_this.paymentMethodSelected) {
                        _this.setACH({
                            id: _this.paymentMethodSelected
                        });
                    }
                    var viewsPerRow = _this.itemsPerRow;
                    if (Utils.isDesktopDevice()) {
                        viewsPerRow = viewsPerRow || 3;
                    }
                    else if (Utils.isTabletDevice()) {
                        viewsPerRow = viewsPerRow || 2;
                    }
                    else {
                        viewsPerRow = viewsPerRow || 1;
                    }
                    return new PaymentInstrumentACH_CollectionView_1.PaymentInstrumentACHCollectionView(_this.getPaymentMethodsToShow() || [], {
                        showSelect: true,
                        hideSelector: false,
                        selectMessage: _this.selectMessage,
                        selectedACHId: _this.paymentMethodSelected || _this.getDefaultACHId(),
                        viewsPerRow: viewsPerRow,
                        showActions: true
                    });
                },
                'ACH.Form': function () {
                    _this.ACHDetailView = new PaymentInstrumentACH_Edit_Form_View_1.PaymentInstrumentACHEditFormView({
                        model: new PaymentInstrumentACH_Model_1.PaymentInstrumentACHModel(),
                        noRedirect: true,
                        collection: _this.paymentmethods,
                        showFooter: false,
                        isSection: true,
                        inModal: false
                    });
                    return _this.ACHDetailView;
                }
            };
        };
        PaymentWizardModulePaymentMethodACH.prototype.getContext = function () {
            var isPaymentMethodsEmpty = !this.paymentmethods.length ||
                (this.paymentmethods.length === 1 &&
                    this.paymentmethods.first().get('internalid') === '-1');
            var showForm = isPaymentMethodsEmpty &&
                (!this.paymentmethod || (this.paymentmethod && this.paymentmethod.isNew()));
            if (!showForm) {
                this.ACHDetailView = null;
            }
            return {
                showForm: showForm,
                showTitle: !!this.getTitle(),
                title: this.getTitle(),
                selectedACH: this.paymentmethod,
                listACH: this.paymentmethods
            };
        };
        return PaymentWizardModulePaymentMethodACH;
    }(Wizard_StepModule_Migrated_1.WizardStepModuleMigrated));
    exports.PaymentWizardModulePaymentMethodACH = PaymentWizardModulePaymentMethodACH;
});

//# sourceMappingURL=PaymentWizard.Module.PaymentMethod.ACH.js.map
