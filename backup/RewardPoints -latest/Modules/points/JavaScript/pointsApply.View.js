// @module Acme.RedeemPoints.RedeemPoints
define('CA.RewardPoints.pointsApply.View'
,	[
  'ca_rewardpoints_pointsapply.tpl'
	,	'CA.RewardPoints.points.Model'
	,	'Backbone'
	,'jQuery'
	,'Profile.Model'
	,'LiveOrder.Model'
	,'Wizard.Module'
    ]
, function (
	ca_rewardpoints_pointsapply_tpl
	,	pointsModel
	,	Backbone
	,jQuery
	,profileModel
	,LiveOrderModel
	,WizardModule
)
{
    'use strict';

	// @class Acme.RedeemPoints.RedeemPoints.View @extends Backbone.View
	return WizardModule.extend({

		template:ca_rewardpoints_pointsapply_tpl

	,	initialize: function (options) {
		WizardModule.prototype.initialize.apply(this, arguments);
			/*  Uncomment to test backend communication with an example service
				(you'll need to deploy and activate the extension first)
			*/
			// this.model = new	pointsModel();
			// console.log(this.model);
			// var self = this;
      //    	this.model.fetch().done(function(result) {
				
			// 			 result.points = parseInt(result.points);
			// 			 result.billCost = parseInt(result.billCost);
			// 			 let date = new Date(result.date);
			// 			let mm =  date.getMonth() + 1 ;
			// 			let  dys =  date.getDate();
			// 			let yy = date.getFullYear();
			// 			let dd = `${mm}/${dys}/${yy}` ;
			// 			result.date = dd;
			// 			self.Redeemdata =result;
			// 			self.render();
      // 		});
				
				this.model=LiveOrderModel.getInstance();
				// console.log(cart,"Cart");
		}

	,	events: {
		'click [data-action="remove-redeem-points"]' :'RemoveRedeemPoints'
		}

	,	bindings: {
		}
  
	, 	childViews: {

		}
		,RemoveRedeemPoints:function(){
			this.cart =  	this.model.get('options');
			this.cart.custbody_redeempoints ='';
			this.model.save().then(function(){
				$('.points-form').show();
			})
		
		}
	,	getContext: function getContext()
		{
			var custbody_redeempoints = this.model.get('options').custbody_redeempoints;
			var showPoints ;
			if( parseInt(custbody_redeempoints) > 0){
				showPoints = true;
			}
			// console.log(this.model,'model');
			return {
				cartSummary:this.model.get('options'),
				showPoints :showPoints 
			};
		}
	});
});
