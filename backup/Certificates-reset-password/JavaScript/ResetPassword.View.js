// @module CloudAlp.Certificates.Certificates
define('CloudAlp.Certificates.ResetPassword.View'
	, [
			'Backbone.FormView'
		,'cloudalp_certificates_reset_password.tpl'
		, 'Backbone'
		, 'underscore'
		, 'Utils'
		, 'jQuery'
		, 'Profile.Model'
		, 'CloudAlp.Certificates.Certificates.Model'
		
		
	]
	, function (
		BackboneFormView
		,cloudalp_certificates_rest_password_tpl
		, Backbone
		, _
		, Utils
		, $
		, ProfileModel
		, CertificatesModel
		
	

	) {
		'use strict';

		// @class CloudAlp.Certificates.Certificates.View @extends Backbone.View
		return Backbone.View.extend({

			template:cloudalp_certificates_rest_password_tpl
			, events: {
				'click [data-action="submit-reset-password"]': 'submit',
				'blur [data-action="enteremail"]': "emailid",
				'blur [data-action="firstname"]': "firstname",
				'blur [data-action="lastname"]': "lastname",
				'blur [data-action="phone"]': "phone"
			}
			, bindings: {
			
			}
			
			, initialize: function (options) {
				/*  Uncomment to test backend communication with an example service
					(you'll need to deploy and activate the extension first)
				*/
					let model = ProfileModel.getInstance();
			
			}
			, childViews: {

			}
			,	validateEmails: function(email) {
				var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
         if(!regex.test(email)) {
           return false;
         }else{
           return true;
         }
			}
			,emailid:function(e){
				var self = this;
				let $email  = $(e.target).val();
				let msg = self.validateEmails($email);
				if(!msg){
					$('.error-msg-email').addClass("message-error").html(`	Please enter a valid email address`)
				}else{
					$('.error-msg-email').removeClass("message-error").html('')
				}

			}
			,firstname:function(e){
				let $fname  = $(e.target).val();
				let msg = $fname;
				if(_.isEmpty(msg)){
					$('.error-msg-fname').addClass("message-error").html(`Please enter firstname`)
				}else{
					$('.error-msg-fname').removeClass("message-error").html('')
				}
			}
			,lastname:function(e){
				let $lname  = $(e.target).val();
				let msg = $lname;
				if(_.isEmpty(msg)){
					$('.error-msg-lname').addClass("message-error").html(`Please enter lastname`)
				}else{
					$('.error-msg-lname').removeClass("message-error").html('')
				}
			}
			,phone:function(e){
				let $phone  = $(e.target).val();
				let msg = Utils.validatePhone($phone);
				if(!msg){
					$('.error-msg-ph').removeClass("message-error").html('')
				}else{
					$('.error-msg-ph').addClass("message-error").html(`${msg}`)
			
				}
			}
			, submit: function (e, prop, model) {
				e.preventDefault();
				var self = this;
				self.phone = this.$('[name="phone"]').val();
				var data = $(e.target).closest('form').serializeObject();
				let config = self.options.application.Configuration;
				data.author = config.get('RequestShippingAddressModule').eAuthor;
				data.recipient = data.email;
				data.body = `<div class="">Hi Team,</div>`
					+ `<p>Please allow me to reset my password and below are the details:</p>`
					+ `<br>`
					+ `<p><span style="font-size:1.1rem ;font-weight:bold">Name</span> : ${data.firstname} ${data.lastname}</p>`
					+ `<br>`
					+ `<p><span style="font-size:1.1rem ;font-weight:bold">Email</span>: ${data.email}</p>`
					+ `<br>`
					+ `<p><span style="font-size:1.1rem ;font-weight:bold">Phone</span>: ${data.phone}</p>`
					+ `<br>`
					+ `<p><span style="font-size:1.1rem ;font-weight:bold">Notes</span>: ${data.comments}</p>`
					+ `<br>`
					+ `<div class="">Regards,</div>`
					+ `<br>`
					+ `<h4>${data.firstname} ${data.lastname}</h4>`;
					if(data.firstname.length == 0 || data.lastname.length == 0 || data.email.length == 0 || data.phone.length ==0){
						let msg = Utils.validatePhone(data.phone);
							if(data.firstname.length == 0)
							$('.error-msg-fname').addClass("message-error").html(`Please enter firstname`)
							if(data.lastname.length == 0)
							$('.error-msg-lname').addClass("message-error").html(`Please enter lastname`)
							if(data.email.length == 0)
							$('.error-msg-email').addClass("message-error").html(`	Please enter a valid email address`)
							if(data.phone.length == 0)
							$('.error-msg-ph').addClass("message-error").html(`${msg}`)
					}

				let err_fname = 	$('.error-msg-fname').text();
				let err_lname = 	$('.error-msg-lname').text();
				let err_email = 	$('.error-msg-email').text();
				let err_phone = 	$('.error-msg-phone').text();
				if( _.isEmpty(err_fname) &&  _.isEmpty(err_fname)  &&  _.isEmpty(err_email) && _.isEmpty(err_phone) ){
					var model = new CertificatesModel();
					model.save(data, {
						success: function (model, response) {
							var frm = $('[name="contact-form"]')[0];
							frm.reset();
							$('.status-email-msg').html('<div class="alert alert-success">We have received your email and would like to thank you for writing to us,you will receive reset password link soon.</div>').css('color', 'green');
	
						},
						error: function (model, response) {
							$('.status-email-msg').html('<div class="alert alert-danger"> Please Enter Comments Details</div>').css('color', 'red');
						}
					});
				}
						
				 
			

			}

			//@method getContext @return CloudAlp.Certificates.Certificates.View.Context
			, getContext: function getContext() {
					var self= this;
				let config = self.options.application.Configuration;
				let islogin =  Utils.getParameterByName(window.location.href, 'is') === 'login' ? true :false;
		
				//@class CloudAlp.Certificates.ResetPassword.View.Context
				return {
						emailTo : config.get('quote').defaultEmail,
						islogin :islogin 
				}
			}
		});
	});
