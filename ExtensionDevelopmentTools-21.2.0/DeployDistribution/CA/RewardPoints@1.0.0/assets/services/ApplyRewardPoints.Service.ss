
function service(request, response)
{
	'use strict';
	try 
	{
		require('CA.RewardPoints.ApplyRewardPoints.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('CA.RewardPoints.ApplyRewardPoints.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}