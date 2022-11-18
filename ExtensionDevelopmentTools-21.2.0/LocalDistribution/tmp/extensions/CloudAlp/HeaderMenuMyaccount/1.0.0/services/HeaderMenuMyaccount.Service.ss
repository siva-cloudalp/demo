
function service(request, response)
{
	'use strict';
	try 
	{
		require('CloudAlp.HeaderMenuMyaccount.HeaderMenuMyaccount.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('CloudAlp.HeaderMenuMyaccount.HeaderMenuMyaccount.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}