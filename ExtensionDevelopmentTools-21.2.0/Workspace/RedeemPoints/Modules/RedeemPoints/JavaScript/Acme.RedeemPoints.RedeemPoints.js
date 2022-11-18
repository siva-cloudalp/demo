
define(
	'Acme.RedeemPoints.RedeemPoints'
,   [
		'Acme.RedeemPoints.RedeemPoints.View'
	]
,   function (
		RedeemPointsView
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
			var cart = container.getComponent("Cart");

      // if (cart) {
      // 	cart.addPromotion({
      // 		promocode: "5OFF"
      // 	}).then(function(promotion) {
      // 		alert("Promotion added.");
      // 		console.log(promotion);
      // 	}, function() {
      // 		console.log("Could not add promotion.");
      // 	});
      // }
			
			if(layout)
			{
				// layout.addChildView('apply-earning-point', function() { 
				// 	return new RedeemPointsView({ container: container });
				// });
			}

		}
	};
});
