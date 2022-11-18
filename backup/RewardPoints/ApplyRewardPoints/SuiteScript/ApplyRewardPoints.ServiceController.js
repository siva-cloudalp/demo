define("CA.RewardPoints.ApplyRewardPoints.ServiceController", ["ServiceController","ApplyRewardPoints.model"], function(
  ServiceController,
  ApplyRewardPointmodel
) {
  "use strict";

  return ServiceController.extend({
    name: "CA.RewardPoints.ApplyRewardPoints.ServiceController",

    // The values in this object are the validation needed for the current service.
    options: {
      common: {}
    },

    get: function get() {
      return    new ApplyRewardPointmodel.getPointsList();
    },

    post: function post() {
      return    new ApplyRewardPointmodel.updateRewardPoints(this.data);
    },

    put: function put() {
      // not implemented
    },

    delete: function() {
      // not implemented
    }
  });
});
