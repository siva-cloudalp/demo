// // @module CA.RewardPoints.RewardPoints
// define('CA.RewardPoints.RewardPoints.View'
// ,	[
// 	'ca_rewardpoints_rewardpoints.tpl'
// 	,	'CA.RewardPoints.RewardPoints.Model'
// 	,	'Backbone'
// 	,  'jQuery',
//     ]
// , function (
// 	ca_rewardpoints_rewardpoints_tpl
// 	,	RewardPointsModel
// 	,	Backbone
// 	,jQuery
// )
// {
//     'use strict';

// 	// @class CA.RewardPoints.RewardPoints.View @extends Backbone.View
// 	return Backbone.View.extend({

// 		template:	ca_rewardpoints_rewardpoints_tpl

// 	,	initialize: function (options) {
// 		// {ca_rewardpoints_rewardpoints_tpl,
// 			/*  Uncomment to test backend communication with an example service
// 				(you'll need to deploy and activate the extension first)
// 			*/
// 			var self = this;
// 			this.model = new RewardPointsModel();
			
//         //  	this.model.fetch().done(function(result) {
// 				// self.message = result.message;
// 				// self.render();
//       	// 	});
				
// 		}
// 	,	events: {
// 		}

// 	,	bindings: {
// 		}

// 	, 	childViews: {

// 		}
// 	,   beforeShowContent: function () {
// 		var promise = jQuery.Deferred();

// 		console.log(this.options,"before");
// 		this.model.save({data:"hellow"}).then(function (res) {
// 				promise.resolve();
// 		    console.log(res, "backbone");
			
// 		})
// 		return promise
// },
// 		//@method getContext @return CA.RewardPoints.RewardPoints.View.Context
// 	getContext: function getContext()
// 		{
// 			var cartsummary = this.options.Cart.summary;
// 			var Total =  cartsummary.total;
// 			var TaxTotal =  cartsummary.taxtotal;
// 			var ShippingCost =  cartsummary.shippingcost;
// 			var cost = Total - (TaxTotal + ShippingCost );
// 			var RewardPoints;

// 			if(cost >= 1000){
// 				var calPoints = cost/1000;
// 				RewardPoints =  Math.ceil(calPoints * 5 );
// 			}

// 			//@class CA.RewardPoints.RewardPoints.View.Context
// 			this.message = this.message || 'Hello World!!'
// 			return {
// 				RewardPoints:RewardPoints,
// 			};
// 		}
// 	});
// });


/*---------------------------------------------------------------------------------------------*/
// @module CA.RewardPoints.points
define('CA.RewardPoints.points.View'
,	[
	'ca_rewardpoints_points.tpl'
	,	'CA.RewardPoints.points.Model'
	,	'Backbone'
	,'jQuery'
	,'Profile.Model'
    ]
, function (
	ca_rewardpoints_points_tpl
	,	pointsModel
	,	Backbone
	,jQuery
	,profileModel
)
{
    'use strict';

	// @class CA.RewardPoints.points.View @extends Backbone.View
	return Backbone.View.extend({

		template: ca_rewardpoints_points_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service
				(you'll need to deploy and activate the extension first)
			*/
			let userId = profileModel.getInstance();
			console.log(userId,"userId")
			var cartsummary = this.options.Cart.summary;
			var Total =  cartsummary.total;
			var TaxTotal =  cartsummary.taxtotal;
			var ShippingCost =  cartsummary.shippingcost;
			var cost = Total - (TaxTotal + ShippingCost );
			if(cost >= 1000){
				var calPoints = cost/1000;
				this.RewardPoints =  Math.trunc(calPoints * 5 );
			}
			this.model = new pointsModel();
			this.model.save({data:{Points:this.RewardPoints,Total:Total,user:userId}}).then(function (res) {
						console.log(res, "backbone");
				});
			// var self = this;
         	// this.model.fetch().done(function(result) {
			// 	self.message = result.message;
			// 	self.render();
      		// });
		}

	,	events: {
		}

	,	bindings: {
		}

	, 	childViews: {

		}
// ,	 beforeShowContent: function () {
// 	var promise = jQuery.Deferred();

// 	console.log(this.options,"before");
// 	// this.model.save({data:"hellow"}).then(function (res) {
// 	// 		promise.resolve();
// 	// 		console.log(res, "backbone");
		
// 	// });
// 	// promise.resolve();
// 	return true
// }
		//@method getContext @return CA.RewardPoints.points.View.Context
	,	getContext: function getContext()
		{
			//@class CA.RewardPoints.points.View.Context
			this.message = this.message || 'Hello World!!'
			return {
				message: this.message,
				RewardPoints:this.RewardPoints
			};
		}
	});
});
