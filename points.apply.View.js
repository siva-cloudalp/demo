// @module CA.RewardPoints.points
define('CA.RewardPoints.points.apply.View'
,	[
	'ca_rewardpoints_points_apply.tpl'
	,	'CA.RewardPoints.points.Model'
	,	'Backbone'
	,'jQuery'
	,'Profile.Model'
  ,'LiveOrder.Model'
    ]
, function (
	ca_rewardpoints_points_apply_tpl
	,	pointsModel
	,	Backbone
	,jQuery
	,profileModel
  ,LiveOrder
)
{
    'use strict';

	// @class CA.RewardPoints.points.View @extends Backbone.View
	return Backbone.View.extend({

		template:	ca_rewardpoints_points_apply_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service
				(you'll need to deploy and activate the extension first)
			*/
		
			// var cartsummary = this.options.Cart.summary;
			// // console.log(cartsummary,"cartsummary");
			// var Total =  cartsummary.total;
			// var TaxTotal =  cartsummary.taxtotal;
			// var ShippingCost =  cartsummary.shippingcost;
			// var cost = Total - (TaxTotal + ShippingCost );
			// if(cost >= 1000){
			// 	// var calPoints = cost/1000;
			
			// 	// console.log(calPoints,"calPoints");
			// 	// this.RewardPoints =  Math.trunc(calPoints * 5 );
			// 	this.RewardPoints = Math.trunc(cost/1000)*5;
			// }
			// var obj ={
			// 	Points:this.RewardPoints,
			// 	Total:cost,
			// 	userId:userId.get('internalid'),
			// 	userEmail:userId.get('email')
			// };
			// console.log("summary",options);
			this.model = new pointsModel();
			this.model.fetch().then(res =>{
				console.log(res ,"res");
			})
	
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
				message: this.message
			};
		}
	});
});
