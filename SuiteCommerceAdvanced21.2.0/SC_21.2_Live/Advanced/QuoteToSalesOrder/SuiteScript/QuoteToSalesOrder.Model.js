/*
	© 2020 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

// @module QuoteToSalesOrder
define('QuoteToSalesOrder.Model', [
    'Transaction.Model',
    'QuoteToSalesOrderValidator.Model',
    'SC.Models.Init',
    'Utils',
    'ExternalPayment.Model',
    'underscore',
    'Configuration'
], function (
    TransactionModel,
    QuoteToSalesOrderValidatorModel,
    ModelsInit,
    Utils,
    ExternalPayment,
    _,
    Configuration
) {
    // @class RequireQuoteError
    const requireQuoteIdError = {
        // @property {Number} status
        status: 500,
        // @property {String} code
        code: 'ERR_MISSING_QUOTEID_PARAMETER',
        // @property {String} message
        message: 'Sorry, the quoteid parameter is require to use this operation.'
    };

    // @class QuoteToSalesOrder.Model Defines the model used by the Quote.Service.ss service
    // @extends Transaction.Model
    return TransactionModel.extend({
        // @property {String} name
        name: 'QuoteToSalesOrder',

        // @method getTransactionRecord Override default method to read record id from local property quoteId
        // @return {nlobjRecord}
        getTransactionRecord: function () {
            if (this.record) {
                return this.record;
            }

            if (
                this.salesorderId &&
                this.salesorderId !== 'null' &&
                this.salesorderId !== 'undefined'
            ) {
                return nlapiLoadRecord('salesorder', this.salesorderId);
            }

            let payment_method_list = [];
            let invoice_payment_method = {};

            if (this.data && this.data.paymentmethods) {
                payment_method_list = this.data.paymentmethods;
            }

            invoice_payment_method = _.findWhere(payment_method_list, {
                primary: true,
                type: 'invoice'
            });
            if (invoice_payment_method) {
                return nlapiTransformRecord('estimate', this.quoteId, 'salesorder', {
                    recordmode: 'dynamic',
                    customform: this.getInvoiceCustomFormId()
                });
            }

            return nlapiTransformRecord('estimate', this.quoteId, 'salesorder', {
                recordmode: 'dynamic'
            });
        },

        // @method getInvoiceCustomFormId Returns the id of the form used to generate sales order that are begin pay using invoices (terms)
        // @return {String}
        getInvoiceCustomFormId: function () {
            return Configuration.get('quoteToSalesorderWizard.invoiceFormId');
        },

        // @method getExtraRecordFields Override empty base method to add extra values in the estimate & sales order
        // @return {Void} This method does not return anything as it works with the value of this.result and this.record
        getExtraRecordFields: function () {
            // @class QuoteToSalesOrder.Model.Attributes

            // @property {QuoteToSalesOrder.Model.Attributes.QuoteDetails} quoteDetails
            this.result.quoteDetails = this.getQuoteDetailsForValidation(this.quoteId);

            if (!this.skipQuoteValidation) {
                const quote_validation = QuoteToSalesOrderValidatorModel.getQuoteToSalesOrderValidation(
                    _.extend({}, this.result, this.result.quoteDetails)
                );

                if (!quote_validation.isPurchasable) {
                    throw QuoteToSalesOrderValidatorModel.invalidQuoteError;
                }
            }

            if (
                this.record.getFieldValue('paymentmethod') &&
                this.record.getFieldValue('paymenteventholdreason') !== 'FORWARD_REQUESTED'
            ) {
                this.result.confirmation = {
                    internalid: this.salesorderId
                };
                this.postSubmitRecord(this.result.confirmation, this.record);
            }

            // @class QuoteToSalesOrder.Model
        },

        // @method getQuoteDetailsForValidation Returns all the extra quote information we return in the sales order.
        // It is used for two purposes, to validate that the quote you are transforming is valid to be transformed and to return
        // quote related information on the sales order
        // @param {String} quote_id
        // @return {QuoteToSalesOrder.Model.Attributes.QuoteDetails}
        getQuoteDetailsForValidation: function (quote_id) {
            const basic_quote_values =
                nlapiLookupField('estimate', quote_id, [
                    'entitystatus',
                    'status',
                    'statusRef',
                    'tranid'
                ]) || {};

            // @class QuoteToSalesOrder.Model.Attributes.QuoteDetails
            return {
                // @property {QuoteToSalesOrder.Model.Attributes.QuoteDetails.EntityStatus} entitystatus
                // @class QuoteToSalesOrder.Model.Attributes.QuoteDetails.EntityStatus
                entitystatus: {
                    // @property {String} id
                    id: basic_quote_values.entitystatus
                },
                // @class QuoteToSalesOrder.Model.Attributes.QuoteDetails
                // @property {String} statusRef
                statusRef: basic_quote_values.statusRef,
                // @property {String} internalid
                internalid: quote_id,
                // @property {QuoteToSalesOrder.Model.Get.SalesRepresentative} salesrep
                salesrep: this.getSalesRep(quote_id),
                // @property {String} tranid
                tranid: basic_quote_values.tranid
            };

            // @class QuoteToSalesOrder.Model
        },

        // @method getSalesRep Override base method to NOT depend on this.record and this.result
        // @param {String} quote_id
        // @return {QuoteToSalesOrder.Model.Get.SalesRepresentative}
        getSalesRep: function (quote_id) {
            const salesrep = {};
            const search_result = nlapiLookupField('estimate', quote_id, [
                'salesrep.phone',
                'salesrep.email',
                'salesrep.entityid',
                'salesrep.mobilephone',
                'salesrep.fax',
                'salesrep'
            ]);

            if (search_result) {
                // @class QuoteToSalesOrder.Model.Get.SalesRepresentative
                // @property {String?} phone
                salesrep.phone = search_result['salesrep.phone'];
                // @property {String} email
                salesrep.email = search_result['salesrep.email'];
                // @property {String} fullname
                salesrep.fullname = search_result['salesrep.entityid'];
                // @property {String} name
                salesrep.name = search_result['salesrep.entityid'];
                // @property {String?} mobilephone
                salesrep.mobilephone = search_result['salesrep.mobilephone'];
                // @property {String} fax
                salesrep.fax = search_result['salesrep.fax'];
                // @property {String} internalid
                salesrep.internalid = search_result.salesrep;
            }

            return salesrep;

            // @class QuoteToSalesOrder.Model
        },

        // @method get Override default method to specify quote id from which the sales order is loaded
        // @param {String} salesorder_id
        // @param {String} quote_id
        // @param {Boolean} skip_quote_validation
        // @return {QuoteToSalesOrder.Model.Attributes}
        get: function (salesorder_id, quote_id, skip_quote_validation) {
            if (!quote_id) {
                throw requireQuoteIdError;
            }

            this.salesorderId = salesorder_id;
            this.skipQuoteValidation = skip_quote_validation || true;
            this.quoteId = quote_id;

            // @class QuoteToSalesOrder.Model.Attributes @extend Transaction.Model.Get.Result
            return TransactionModel.get.call(this, 'salesorder', 'tempid');

            // @class QuoteToSalesOrder.Model
        },

        // @method getCreatedFrom Override default method to specify quote id from which the sales order is loaded
        // @return {QuoteToSalesOrder.Model.Attributes}
        getCreatedFrom: function () {
            const created_from_internalid = nlapiLookupField(
                this.result.recordtype,
                this.salesorderId,
                'createdfrom'
            );
            const recordtype = created_from_internalid ?
                Utils.getTransactionType(created_from_internalid) :
                '';
            const tranid = recordtype ?
                nlapiLookupField(recordtype, created_from_internalid, 'tranid') :
                '';

            this.result.createdfrom = {
                internalid: created_from_internalid,
                name: nlapiLookupField(
                    this.result.recordtype,
                    this.salesorderId,
                    'createdfrom',
                    true
                ) || '',
                recordtype: recordtype,
                tranid: tranid
            };
        },

        // @method update Override default method to specify the quote id from which the transformation is done
        // @param {String} salesorder_id
        // @param {String} quote_id
        // @param {Transaction.Model.UpdateAttributes} data
        // @return {Void}
        update: function (salesorder_id, quote_id, data) {
            this.quoteId = quote_id;
            this.salesorderId = salesorder_id;

            if (quote_id) {
                this.recordId = quote_id;
                this.data = data;

                this.record = this.getTransactionRecord('salesorder', quote_id);
                // @property {Transaction.Model.Get.Result} currentRecord This property is used so when performing any update
                // operation you can know what is the current state
                // This property is only present when performing an update operation
                this.currentRecord = this.get('salesorder', quote_id);

                var same_shipping_address =
                    this.currentRecord.shipaddress === this.data.shipaddress;

                this.setPaymentMethod();

                // The setAddress method of the Transaction.Model clean the shipping cost.
                // To avoid that we back it up before the call and reasing again after the call.
                var backupShippingCost = this.record.getFieldValue('shippingcost');

                var shipOrBillError = 'shipping';

                try {
                    this.setAddress('ship', this.data.shipaddress, 'billaddress');
                    shipOrBillError = 'billing';
                    this.setAddress('bill', this.data.billaddress, 'shipaddress');
                } catch (e) {
                    if (_.isObject(e) && _.isObject(e.message)) {
                        // Translatable message
                        e.message = 'Please select a valid ' + shipOrBillError + ' address';
                    }
                    throw e;
                }

                this.record.setFieldValue('shippingcost', backupShippingCost);

                this.setLines();
                this.setMemo();
                this.setTransactionBodyCustomFields();

                // The setAddress method of the Transaction.Model resets the shipping cost to 0.00.
                // By calling this function afterwards we force a recalculation so it remains constant.
                if (!same_shipping_address) {
                    this.record.localCall('Shipping.calculateRates();');
                }
            }

            return;
        },

        // @method setPaymentMethodCREDITCARD Internal method to set a credit card payment method into the current record.
        // Used to update the current record
        // @param {Transaction.Model.Get.PaymentMethod} payment_method
        // @return {Void}
        setPaymentMethodCREDITCARD: function (payment_method) {
            const credit_card = payment_method.creditcard;
            if (this.paymentInstrumentsEnabled) {
                this.record.setFieldValue('paymentoption', credit_card.internalid);
            } else {

                if (credit_card.internalid === '-temporal-') {
                    this.record.setFieldValue('creditcard', null);
                    this.record.setFieldValue('ccsave', 'F');
                    this.record.setFieldValue('ccnumber', credit_card.ccnumber);
                    this.record.setFieldValue('ccsecuritycode', credit_card.ccsecuritycode);
                    this.record.setFieldValue('ccname', credit_card.ccname);
                    this.record.setFieldValue('ccdefault', 'F');
                    this.record.setFieldValue('ccexpiredate', credit_card.ccexpiredate);
                } else {
                    this.record.setFieldValue('creditcard', credit_card.internalid);
                }

                this.record.setFieldValue('paymentmethod', credit_card.paymentmethod.internalid);
                this.record.setFieldValue(
                    'creditcardprocessor',
                    credit_card.paymentmethod.merchantid
                );
            }

            if (credit_card.ccsecuritycode) {
                this.record.setFieldValue('ccsecuritycode', credit_card.ccsecuritycode);
            }
        },

        // @method setLines Override default method so not lines are set. As those cannot be touched when creating a sales order
        // @return {Void}
        setLines: function () {},

        // @method getRecordAddresses Override parent method to load address using real internal id
        // @return {Void} This method does not return anything as it works with the value of this.result and this.record
        getRecordAddresses: function () {
            // @class Transaction.Model.Get.Result
            // @property {Array<Address.Model.Attributes>} addresses
            this.result.addresses = {};
            this.result.listAddresseByIdTmp = {};

            for (let i = 1; i <= this.record.getLineItemCount('iladdrbook'); i++) {
                // Adds all the addresses in the address book
                this.result.listAddresseByIdTmp[
                    this.record.getLineItemValue('iladdrbook', 'iladdrinternalid', i)
                ] = this.addAddress({
                    internalid: this.record.getLineItemValue('iladdrbook', 'iladdrinternalid', i),
                    country: this.record.getLineItemValue('iladdrbook', 'iladdrshipcountry', i),
                    state: this.record.getLineItemValue('iladdrbook', 'iladdrshipstate', i),
                    city: this.record.getLineItemValue('iladdrbook', 'iladdrshipcity', i),
                    zip: this.record.getLineItemValue('iladdrbook', 'iladdrshipzip', i),
                    addr1: this.record.getLineItemValue('iladdrbook', 'iladdrshipaddr1', i),
                    addr2: this.record.getLineItemValue('iladdrbook', 'iladdrshipaddr2', i),
                    attention: this.record.getLineItemValue('iladdrbook', 'iladdrshipattention', i),
                    addressee: this.record.getLineItemValue('iladdrbook', 'iladdrshipaddressee', i),
                    phone: this.record.getLineItemValue('iladdrbook', 'iladdrshipphone', i)
                });
            }

            // Adds Shipping Address
            // @property {String} shipaddress Id of the shipping address
            this.result.shipaddress = this.addAddress({
                internalid: this.record.getFieldValue('shipaddresslist'),
                country: this.record.getFieldValue('shipcountry'),
                state: this.record.getFieldValue('shipstate'),
                city: this.record.getFieldValue('shipcity'),
                zip: this.record.getFieldValue('shipzip'),
                addr1: this.record.getFieldValue('shipaddr1'),
                addr2: this.record.getFieldValue('shipaddr2'),
                attention: this.record.getFieldValue('shipattention'),
                addressee: this.record.getFieldValue('shipaddressee'),
                phone: this.record.getFieldValue('shipphone')
            });

            // Adds Bill Address
            // @property {String} billaddress Id of the billing address
            this.result.billaddress = this.addAddress({
                internalid: this.record.getFieldValue('billaddresslist'),
                country: this.record.getFieldValue('billcountry'),
                state: this.record.getFieldValue('billstate'),
                city: this.record.getFieldValue('billcity'),
                zip: this.record.getFieldValue('billzip'),
                addr1: this.record.getFieldValue('billaddr1'),
                addr2: this.record.getFieldValue('billaddr2'),
                attention: this.record.getFieldValue('billattention'),
                addressee: this.record.getFieldValue('billaddressee'),
                phone: this.record.getFieldValue('billphone')
            });

            // @class Quote.Model
        },

        // @method getAddressInternalId Internal method used to generate the internal id of an address
        // @param {Address.Model.Attributes} address
        // @return  {String}
        getAddressInternalId: function (address) {
            if (_.isNaN(parseInt(address.internalid, 10))) {
                return TransactionModel.getAddressInternalId.apply(this, arguments);
            }

            return address.internalid;
        },

        // @method postSubmitRecord Overwritten method used to extend the confirmation submission result
        // @param {Transaction.Model.Confirmation} confirmation_result
        // @param {Transaction.Model} record
        // @return {QuoteToSalesOrder.Model.Confirmation}
        postSubmitRecord: function (confirmation_result, record) {
            const created_salesorder = !_.isUndefined(record) ?
                record :
                nlapiLoadRecord('salesorder', confirmation_result.internalid);
            confirmation_result.tranid = created_salesorder.getFieldValue('tranid');
            confirmation_result.confirmationnumber = created_salesorder.getFieldValue('tranid');

            if (confirmation_result.isexternal) {
                confirmation_result.redirecturl = ExternalPayment.generateUrl(
                    confirmation_result.internalid,
                    'salesorder'
                );
                confirmation_result.statuscode =
                    created_salesorder.getFieldValue('paymenteventholdreason') ===
                    'FORWARD_REQUESTED' ?
                    'redirect' :
                    '';
                confirmation_result.paymenteventholdreason = created_salesorder.getFieldValue(
                    'paymenteventholdreason'
                );
            }

            // @class QuoteToSalesOrder.Model.Confirmation @extend Transaction.Model.Confirmation
            confirmation_result.tranid = created_salesorder.tranid;
            confirmation_result.confirmationnumber = created_salesorder.tranid;
            // @class QuoteToSalesOrder.Model

            return confirmation_result;
        },

        // @method submit Saves the current record
        // @return {Transaction.Model.Confirmation}
        submit: function () {
            if (!this.record) {
                throw new Error(
                    'Please load a record before calling QuoteToSalesOrder.Model.Submit method.'
                );
            }

            this.preSubmitRecord();

            let new_record_id;
            const is_payment_method_external = _.findWhere(this.data.paymentmethods, {
                isexternal: 'T'
            });
            if (is_payment_method_external) {
                // ignore Mandatory fields
                new_record_id = nlapiSubmitRecord(this.record, false, true);
            } else {
                new_record_id = nlapiSubmitRecord(this.record);
            }

            // @class Transaction.Model.Confirmation
            const result = {
                // @property {String} internalid
                internalid: new_record_id,
                // @property {Boolean} isexternal
                isexternal: is_payment_method_external
            };

            return this.postSubmitRecord(result);
            // @class Transaction.Model
        }
    });
});
