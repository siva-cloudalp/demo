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
			var cartsummary = this.options.Cart.summary;
			// console.log(cartsummary,"cartsummary");
			var Total =  cartsummary.total;
			var TaxTotal =  cartsummary.taxtotal;
			var ShippingCost =  cartsummary.shippingcost;
			var cost = Total - (TaxTotal + ShippingCost );
			if(cost >= 1000){
				this.RewardPoints = Math.trunc(cost/1000)*5;
			}
			var obj ={
				Points:this.RewardPoints,
				Total:cost,
				userId:userId.get('internalid'),
				userEmail:userId.get('email')
			};
			console.log("summary",cartsummary);
			this.model = new pointsModel();
			this.model.save(obj).then(
				res =>{
					console.log(res,"save-res");
				}
			)

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
