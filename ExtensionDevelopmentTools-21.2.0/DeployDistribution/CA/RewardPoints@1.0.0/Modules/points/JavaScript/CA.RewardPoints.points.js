
define(
	'CA.RewardPoints.points'
,   [
		'CA.RewardPoints.points.View'
		,'CA.RewardPoints.pointsApply.View'
	]
,   function (
		pointsView
		pointsApplyView
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
			var layout = container.getComponent('Layout');
			var cart = container.getComponent('Cart');
			if(layout)
			{
			layout.addChildView('apply-earning-point', function() { 
					return new pointsApplyView({ container: container });
				});
			cart.on("afterSubmit",function(res){
				// Reward.points  ancelableOff
				layout.addChildView('Reward.points', function() { 
					return new pointsView({ container: container,Cart:res.confirmation});
				});
			});
		
		}
		}
	};
});
