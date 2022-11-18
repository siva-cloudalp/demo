
define(
	'CA.RewardPoints.points'
,   [
		'CA.RewardPoints.points.View'
		,'CA.RewardPoints.pointsApply.View'
		,'CA.RewardPoints.pointsForm.View'
		,'LiveOrder.Model'
	 ,'OrderWizard.Module.CartSummary'
	]
,   function (
		pointsView
		,pointsApplyView
		,pointsFormView
		,LiveOrderModel
		,OrderWizardModuleCartSummary
	)
{
	'use strict';

	return  {
		mountToApp: function mountToApp (container)
		{
			// using the 'Layout' component we add a new child view inside the 'Header' existing view 
			// (there will be a DOM element with the HTML attribute data-view="Header.Logo")
			// more documentation of the Extensibility API in
			// https://system.netsuite.com/help/helpcenter/en_US/APIs/SuiteCommerce/Extensibility/Frontend/index.html
			
			/** @type {LayoutComponent} */
			// /** @type {checkoutComponent} */
			var layout = container.getComponent('Layout');
			var cart = container.getComponent('Cart');
		
		
			var checkout = container.getComponent('Checkout');
			checkout.getCheckoutFlow().then(res => {
			  if(res === 'Billing First'){
					checkout.addModuleToStep({
						step_url:'billing/address',
						module: {
							id: 'summaryCart',
							index:13,
							classname:'CA.RewardPoints.pointsForm.View',
							options:{container:'#wizard-step-content-right'}
							}
						});
					checkout.addModuleToStep({
						step_url:'shipping/address',
						module: {
							id: 'summaryCart',
							index:13,
							classname:'CA.RewardPoints.pointsForm.View',
							options:{container:'#wizard-step-content-right'}
							}
						});
					checkout.addModuleToStep({
						step_url:'shipping/selectAddress',
						module: {
							id: 'summaryCart',
							index:13,
							classname:'CA.RewardPoints.pointsForm.View',
							options:{container:'#wizard-step-content-right'}
							}
						});
					checkout.addModuleToStep({
						step_url:'shipping/addressPackages',
						module: {
							id: 'summaryCart',
							index:13,
							classname:'CA.RewardPoints.pointsForm.View',
							options:{container:'#wizard-step-content-right'}
							}
						});
					checkout.addModuleToStep({
						step_url:'shipping/packages',
						module: {
							id: 'summaryCart',
							index:13,
							classname:'CA.RewardPoints.pointsForm.View',
							options:{container:'#wizard-step-content-right'}
							}
						});
					checkout.addModuleToStep({
						step_url:'billing',
						module: {
							id: 'summaryCart',
							index:13,
							classname:'CA.RewardPoints.pointsForm.View',
							options:{container:'#wizard-step-content-right'}
							}
						});
					checkout.addModuleToStep({
						step_url:'review',
						module: {
							id: 'summaryCart',
							index:13,
							classname:'CA.RewardPoints.pointsForm.View',
							options:{container:'#wizard-step-content-right'}
							}
						});
				}else if(res === 'One Page'){
					checkout.addModuleToStep({
						step_url:'opc',
						module: {
							id: 'summaryCart',
							index:20,
							classname:'CA.RewardPoints.pointsForm.View',
							options:{container:'#wizard-step-content-right'}
							}
						});
					checkout.addModuleToStep({
						step_url:'review',
						module: {
							id: 'summaryCart',
							index:20,
							classname:'CA.RewardPoints.pointsForm.View',
							options:{container:'#wizard-step-content-right'}
							}
						});

				}
			
			
			});

			// _.extend(OrderWizardModuleCartSummary.prototype,{
		// 	childViews: _.extend({}, OrderWizardModuleCartSummary.prototype.childViews, {
		// 		'Applyredeempoints': function() {
		// 			return new pointsApplyView();
		// 		}
		// 		})	
		// });
			if(layout)
			{
			layout.addChildView('apply-earning-point', function() { 
					return new pointsApplyView({ container:container });
				});
			cart.on("afterSubmit",function(res){
				// Reward.points  cancelableOff
				layout.addChildView('Reward.points', function() { 
					return new pointsView({ container: container,Cart:res.confirmation});
				});
			});
		
		}
		}
	};
});
