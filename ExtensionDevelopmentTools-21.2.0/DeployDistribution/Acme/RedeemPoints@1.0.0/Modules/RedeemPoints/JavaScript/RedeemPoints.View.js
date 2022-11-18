// @module Acme.RedeemPoints.RedeemPoints
define('Acme.RedeemPoints.RedeemPoints.View'
,	[
	'acme_redeempoints_redeempoints.tpl'
	
	,	'Acme.RedeemPoints.RedeemPoints.Model'
	
	,	'Backbone'
    ]
, function (
	acme_redeempoints_redeempoints_tpl
	
	,	RedeemPointsSS2Model
	
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

			// this.model = new RedeemPointsModel();
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

		//@method getContext @return Acme.RedeemPoints.RedeemPoints.View.Context
	,	getContext: function getContext()
		{
			console.log("getContext");
			//@class Acme.RedeemPoints.RedeemPoints.View.Context
			this.message = this.message || 'Hello World!!'
			return {
				message: this.message
			};
		}
	});
});
