
function service(request, response)
{
	'use strict';
	try 
	{
		require('CloudAlp.Certificates.MyAccountMenu.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('CloudAlp.Certificates.MyAccountMenu.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}