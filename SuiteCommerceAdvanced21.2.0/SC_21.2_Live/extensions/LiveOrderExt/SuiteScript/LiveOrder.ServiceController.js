/*
	© 2020 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

// LiveOrder.ServiceController.js
// ----------------
// Service to manage cart items requests
define('LiveOrder.ServiceController', [
    'ServiceController',
    'LiveOrder.Model',
    'SiteSettings.Model',
    'SC.Models.Init',
    'Utils'
], function (ServiceController, LiveOrderModel, SiteSettings, ModelsInit,Utils) {
    // @class LiveOrder.ServiceController Manage cart items requests
    // @extend ServiceController
    return ServiceController.extend({
        // @property {String} name Mandatory for all ssp-libraries model
        name: 'LiveOrder.ServiceController',

        // @property {Service.ValidationOptions} options. All the required validation, permissions, etc.
        // The values in this object are the validation needed for the current service.
        // Can have values for all the request methods ('common' values) and specific for each one.
        options: {
            put: {
                checkLoggedInCheckout: true
            },
            post: {
                checkLoggedInCheckout: true
            }
        },

        // @method get The call to LiveOrder.Service.ss with http method 'get' is managed by this function
        // @return {LiveOrder.Model.Data}
        get: function () {
            this.setShopperCurrency();

            return LiveOrderModel.get();
        },

        // @method post The call to LiveOrder.Service.ss with http method 'post' is managed by this function
        // @return {LiveOrder.Model.Data}
        post: function () {
            this.setShopperCurrency();

            LiveOrderModel.checkItemsAvailability();

            // Updates the order with the passed in data
            LiveOrderModel.update(this.data);
            // console.warn("post options",JSON.stringify(this.data.options));
            // Submit the order
            const confirmation = LiveOrderModel.submit(this.data);
            // console.warn("post confirmation",JSON.stringify(confirmation));
            // submit Redeem points 
            // {salesId:confirmation.internalid,points:this.data.summary.redeemPoints}
            LiveOrderModel.RedeemPoints();
            // Get the new order
            const order_info = LiveOrderModel.get();
            // console.warn("post order_info",JSON.stringify(order_info));

            // Set the confirmation
            order_info.confirmation = confirmation;

            // Update touchpoints after submit order
            order_info.touchpoints = SiteSettings.getTouchPoints();

            return order_info;
        },

        // @method put The call to LiveOrder.Service.ss with http method 'put' is managed by this function
        // @return {LiveOrder.Model.Data}
        put: function () {
            this.setShopperCurrency();
            LiveOrderModel.update(this.data);
             var getLiveOrder = LiveOrderModel.get();
            //  console.warn("put getLiveOrder",JSON.stringify(getLiveOrder));
            var  cust_points = this.data.options.custbody_redeempoints;
            if(parseInt(cust_points) > 0){
                return LiveOrderModel.get({custbody_redeempoints:cust_points});
            }
            else{
                return LiveOrderModel.get();
            }
            
        },

        // @method setShopperCurrency
        // @return {Void}
        setShopperCurrency: function () {
            const currency = this.request.getParameter('cur');
            if (currency) ModelsInit.session.setShopperCurrency(currency);
        }
    });
});
