define("CA.RewardPoints.points.ServiceController", ["ServiceController","points.model"], function(
  ServiceController,
  pointsModel
) {
  "use strict";

  return ServiceController.extend({
    name: "CA.RewardPoints.points.ServiceController",

    // The values in this object are the validation needed for the current service.
    options: {
      common: {}
    },

    get: function get() {
      return new  pointsModel.getRewardPointsList();
    },

    post: function post() {
      return new   pointsModel.CreateRewardPointsList(this.data)
    },
    
    put: function put() {
      return new   pointsModel.updateRewardPoints(this.data);
    },

    delete: function() {
      // not implemented
    }
  });
});
