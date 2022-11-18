	// @module Acme.RedeemPoints.RedeemPoints
	define('CA.RewardPoints.pointsForm.View'
	,	[
		'ca_rewardpoints_pointsform.tpl'
		,'CA.RewardPoints.pointsApply.View'
		,	'CA.RewardPoints.points.Model'
		,'Utils'
		,	'Backbone'
		,'jQuery'
		,'Profile.Model'
		,'LiveOrder.Model'
		,'GlobalViews.Message.View'
		,'Wizard.Module'
			]
	, function (
		ca_rewardpoints_pointsform_tpl
		,pointsApplyView
		,	pointsModel
		,Utils
		,	Backbone
		,jQuery
		,profileModel
		,LiveOrderModel
		,GlobalViewsMessageView
		,WizardModule
	)
	{
			'use strict';

		// @class Acme.RedeemPoints.RedeemPoints.View @extends Backbone.View
		return WizardModule.extend({

			template:	ca_rewardpoints_pointsform_tpl
			
		,	initialize: function (options) {
			WizardModule.prototype.initialize.apply(this, arguments);
					this.options  =  options;
				/*  Uncomment to test backend communication with an example service
					(you'll need to deploy and activate the extension first)
				*/

				this.model = new	pointsModel();
				var self = this;
						this.model.fetch().done(function(result) {
							result.points = parseInt(result.points);
							result.billCost = parseInt(result.billCost);
							self.Redeemdata =result;
							self.render();
						});
			}

		,	events: {
			'click [ data-action="applyForm-points"]': 'PointsFormApply'
			}
		
		,	bindings: {
			}
		,PointsFormApply:function(e){
			var cart=LiveOrderModel.getInstance();
			e.preventDefault();
			// 6905
			//5386
			// cart.addLine({
			// 		quantity: 1,
			// 		item:{
			// 			internalid:6905
			// 		}
			// }).then(function() {
			// 	alert(Utils.translate('Item added.'))
			// });
			const placeholder = jQuery('[data-type="pointsform-error-placeholder"]');
			var inputVal = $('#pointsform').val();
			var  layout = this.options.wizard.application.layout;
			var errorMessage = Utils.translate('Enter Below Redeem Points Range');
			if ( inputVal >  this.Redeemdata.points ) {
				layout.showMessage(placeholder ,errorMessage, 'error', true);
		}else{
			const clearInput = document.getElementById('pointsform')
			placeholder.html('');
			$('#points-form').collapse('hide')
			var custsummary = cart.get('summary');
			custsummary.RedeemPoints = inputVal;
			var obj = cart.get('options');
			obj.custbody_redeempoints = inputVal ;
			cart.set('options',obj);
			// {summary:custsummary}
			cart.save({options:obj}).then(function(res){
				console.log(res,"save");
			});
			clearInput.value = '';
			this.hidePoints = true;
			// $('.points-form').hide();		
		}			
		}
		,childViews: {
		

			}
			//@method getContext @return Acme.RedeemPoints.RedeemPoints.View.Context
		,	getContext: function getContext()
			{
					var self = this;
					var cart=LiveOrderModel.getInstance();
					var Total =	cart.get('summary').total;
					var point ;
					var isPoints = false ;
					if(self.Redeemdata ){
						self.Redeemdata.points > 0 ? point =  self.Redeemdata.points : point = "";
					}
					if(Total >= 1000){
						isPoints = true;
					}
				var option =	cart.get('options');
				var hideForm = true;
			
				
				//@class Acme.RedeemPoints.RedeemPoints.View.Context
				return {
					availablePoints:point,
					isPoints:	isPoints
				};
			}
		});
	});
