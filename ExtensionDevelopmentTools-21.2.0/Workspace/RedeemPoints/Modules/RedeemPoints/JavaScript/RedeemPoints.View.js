// @module Acme.RedeemPoints.RedeemPoints
define('Acme.RedeemPoints.RedeemPoints.View'
,	[
	'acme_redeempoints_redeempoints.tpl'
	
	,	'Acme.RedeemPoints.RedeemPoints.Model'
	
	,	'Backbone'
    ]
, function (
	acme_redeempoints_redeempoints_tpl
	
	,	RedeemPointModel
	
	,	Backbone
)
{
    'use strict';

	// @class Acme.RedeemPoints.RedeemPoints.View @extends Backbone.View
	return Backbone.View.extend({

		template: acme_redeempoints_redeempoints_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service
				(you'll need to deploy and activate the extension first)
			*/
		

			this.model = new RedeemPointModel();
			var self = this;
         	this.model.fetch().done(function(result) {
				
						 result.points = parseInt(result.points);
						 result.billCost = parseInt(result.billCost);
						 let date = new Date(result.date);
						let mm =  date.getMonth() + 1 ;
						let  dys =  date.getDate();
						let yy = date.getFullYear();
						let dd = `${mm}/${dys}/${yy}` ;
						result.date = dd;
						self.Redeemdata =result;
						self.render();
      		});
		}

	,	events: {
		}

	,	bindings: {
		}

	, 	childViews: {

		}

		//@method getContext @return Acme.RedeemPoints.RedeemPoints.View.Context
	,	getContext: function getContext()
		{
			var Points; 
			if(this.Redeemdata){
				if(this.Redeemdata.points > 0){
				 this.Redeemdata
				}
				
			}
			//@class Acme.RedeemPoints.RedeemPoints.View.Context
			return {
				isTrue: !!this.Redeemdata,
				Redeemdata : this.Redeemdata
			};
		}
	});
});
