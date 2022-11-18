// @module CA.RewardPoints.ApplyRewardPoints
define('CA.RewardPoints.ApplyRewardPoints.View'
,	[
	'ca_rewardpoints_applyrewardpoints.tpl'
	
	,	'CA.RewardPoints.ApplyRewardPoints.Model'
	
	,	'Backbone'
    ]
, function (
	ca_rewardpoints_applyrewardpoints_tpl
	
	,	ApplyRewardPointsModel
	
	,	Backbone
)
{
    'use strict';

	// @class CA.RewardPoints.ApplyRewardPoints.View @extends Backbone.View
	return Backbone.View.extend({

		template: ca_rewardpoints_applyrewardpoints_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service
				(you'll need to deploy and activate the extension first)
			*/

			// this.model = new ApplyRewardPointsModel();
			// var self = this;
         	// this.model.fetch().done(function(result) {
			// 	self.message = result.message;
			// 	self.render();
      		// });
					console.log("apply");
		}

	,	events: {
		}

	,	bindings: {
		}

	, 	childViews: {

		}

		//@method getContext @return CA.RewardPoints.ApplyRewardPoints.View.Context
	,	getContext: function getContext()
		{
			//@class CA.RewardPoints.ApplyRewardPoints.View.Context
			this.message = this.message || 'Hello World!!'
			return {
				message: this.message
			};
		}
	});
});
