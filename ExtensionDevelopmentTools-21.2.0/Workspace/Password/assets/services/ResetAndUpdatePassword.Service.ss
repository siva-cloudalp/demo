
function service(request, response)
{
	'use strict';
	try 
	{
		require('STAXS.Password.ResetAndUpdatePassword.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('STAXS.Password.ResetAndUpdatePassword.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}