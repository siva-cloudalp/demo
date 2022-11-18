
function service(request, response)
{
	'use strict';
	try 
	{
		require('CA.RewardPoints.points.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('CA.RewardPoints.points.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}