// @module CloudAlp.Certificates.Certificates
define('CloudAlp.Certificates.ResetPassword.View'
	, [
		'cloudalp_certificates_reset_password.tpl'
		, 'underscore'
		, 'jQuery'
		, 'Profile.Model'
		, 'CloudAlp.Certificates.Certificates.Model'
		, 'Backbone'
	]
	, function (
		cloudalp_certificates_rest_password_tpl
		, _
		, $
		, ProfileModel
		, CertificatesModel
		, Backbone
	) {
		'use strict';

		// @class CloudAlp.Certificates.Certificates.View @extends Backbone.View
		return Backbone.View.extend({

			template:cloudalp_certificates_rest_password_tpl
			, initialize: function (options) {
				/*  Uncomment to test backend communication with an example service
					(you'll need to deploy and activate the extension first)
				*/
			}

			, events: {
        'click [data-action="submit-reset-password"]':'submit'
			}

			, bindings: {
        '[name="text"]': 'text'
			}

			, childViews: {

			}
      ,submit:function(e,prop,model){
				e.preventDefault();
        var self = this;
        var data = $(e.target).closest('form').serializeObject();
				let config = self.options.application.Configuration;
        data.author =config.get('RequestShippingAddressModule').eAuthor;
		    data.recipient = config.get('RequestShippingAddressModule').eRecipient;
				data.body =  `<div class="">Hi,</div>`
				+`<br>`
        +`<div class="">Comment : ${data.text}</div>`
				+`<br>`
        + `<div class=""><p>This Email has been generated for update a password  for customer</p></div>`
				+`<br>`
        +  `<div class="">Regards,</div>`;
        var model = new CertificatesModel();
        model.save(data,{
          success: function (model, response) {
						var frm = $('[name="contact-form"]')[0];
						frm.reset();
            $('.status-email-msg').html('<div class="alert alert-success">Comments Submitted successfully</div>').css('color', 'green');

          },
          error: function (model, response) {
            console.log(" Error model",model);
            console.log(" Error response",response);
            $('.status-email-msg').html('<div class="alert alert-danger"> Please Enter Comments Details</div>').css('color', 'red');
          }
        });
				
      }
      
			//@method getContext @return CloudAlp.Certificates.Certificates.View.Context
			, getContext: function getContext() {
				
				
				//@class CloudAlp.Certificates.ResetPassword.View.Context
				return {
					
				}
			}
		});
	});
