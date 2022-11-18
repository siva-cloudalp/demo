
define(
	'CA.RewardPoints.RewardPoints'
,   [
		'CA.RewardPoints.RewardPoints.View',
		'OrderWizard.Module.Confirmation',
		'OrderWizard.Module.CartSummary',
		'underscore',
		'Utils',
		'Backbone'
	]
,   function (
		RewardPointsView,
		OrderWizardModuleConfirmation,
		OrderWizardModuleCartSummary,
		_,
		Utils,
		Backbone
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
			var layout = container.getComponent('Checkout');
			var cart = container.getComponent('Cart');
			cart.on("afterSubmit",function(res){
				if(layout)
			{
				layout.addChildView('Reward.points', function() { 
					return new RewardPointsView({ container: container,Cart:res.confirmation});
				});
			}
				
			})
			
			// _.extend(OrderWizardModuleConfirmation.prototype,{
			// 	initialize: _.wrap(OrderWizardModuleConfirmation.prototype.initialize, function initialize(fn) {
			// 		fn.apply(this, _.toArray(arguments).slice(1));
			// 		var self = this;
			// 		var summary = self.model.get('summary');
			// 		var TaxTotal = summary.taxtotal ;
			// 		var ShippingCost =  summary.shippingcost;
			// 		var  Total = summary.total;
			// 		var RewardPoints =   Total - (TaxTotal+ShippingCost) ;
				
			// 	})
			// })
			
			// if(layout)
			// {
			// 	layout.addChildView('Reward.points', function() { 
			// 		return new RewardPointsView({ container: container });
			// 	});
			// }

		}
	};
});
