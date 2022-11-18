define("Acme.RedeemPoints.RedeemPoints.ServiceController", ["ServiceController","Acme.RedeemPoints.RedeemPoints.model"], function(
  ServiceController,
  RedeemPointsmodel
) {
  "use strict";

  return ServiceController.extend({
    name: "Acme.RedeemPoints.RedeemPoints.ServiceController",

    // The values in this object are the validation needed for the current service.
    options: {
      common: {}
    },

    get: function get() {
      return new   RedeemPointsmodel.getPointsList();
    },

    post: function post() {
      // not implemented
    },

    put: function put(data) {
      return new   RedeemPointsmodel.updateRewardPoints();
    },

    delete: function() {
      // not implemented
    }
  });
});
