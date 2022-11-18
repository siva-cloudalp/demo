var extensions = {};

extensions['CloudAlp.Certificates.1.0.0'] = function(){

function getExtensionAssetsPath(asset){
	return 'extensions/CloudAlp/Certificates/1.0.0/' + asset;
}

// @module CloudAlp.Certificates.Certificates
define('CloudAlp.Certificates.Certificates.View'
	, [
		'cloudalp_certificates_certificates.tpl'
		, 'underscore'
		, 'jQuery'
		, 'Profile.Model'
		, 'CloudAlp.Certificates.Certificates.Model'

		, 'Backbone'
	]
	, function (
		cloudalp_certificates_certificates_tpl
		, _
		, $
		, ProfileModel
		, CertificatesModel
		, Backbone
	) {
		'use strict';

		// @class CloudAlp.Certificates.Certificates.View @extends Backbone.View
		return Backbone.View.extend({

			template: cloudalp_certificates_certificates_tpl

			, initialize: function (options) {
				/*  Uncomment to test backend communication with an example service
					(you'll need to deploy and activate the extension first)
				*/
			}

			, events: {
			}

			, bindings: {
			}

			, childViews: {

			}
			//@method getContext @return CloudAlp.Certificates.Certificates.View.Context
			, getContext: function getContext() {
				var container = this.options.container;	
				// var Model = this.model.get('record');
				var Model =  container.Rec;
				var profileModel = ProfileModel.getInstance();
				var NoDataFound = false;
				var CustViewCertificates = [];
				var Record;
				var getRoleBasedPdf;
				if (_.isNull(Model)) {
					NoDataFound = true;
				} else {
					getRoleBasedPdf = Model.map(rec => {
						let email1 = rec.columns.email;
						let email2 = profileModel.get('email');
						if (email1 === email2) {
							return rec;
						}
					});
				}
				let MatchRolesPdf = _.compact(getRoleBasedPdf);
				if (_.isEmpty(MatchRolesPdf)) {
					Record = Model;
				} else {
					Record = MatchRolesPdf;
				}	
				_.each(Record, (doc) => {
					if (doc.columns.custrecord_pdf_doc_1){
						let File = 	doc.columns.custrecord_pdf_doc_1.name;
						let removePdfext =	File.split('.pdf').join('');
						CustViewCertificates.push({
							pdf: doc.columns.custrecord_pdf_doc_1.name,
							id: doc.columns.custrecord_pdf_doc_1.internalid,
							file:removePdfext
						});
					}
						
					if (doc.columns.custrecord_pdf_doc_2){
						let File = 	doc.columns.custrecord_pdf_doc_2.name;
						let removePdfext =	File.split('.pdf').join('');
						CustViewCertificates.push({
							pdf: doc.columns.custrecord_pdf_doc_2.name,
							id: doc.columns.custrecord_pdf_doc_2.internalid,
							file:removePdfext
						});
					}
						
					if (doc.columns.custrecord_pdf_doc_3){
						let File = 	doc.columns.custrecord_pdf_doc_3.name;
						let removePdfext =	File.split('.pdf').join('');
						CustViewCertificates.push({
							pdf: doc.columns.custrecord_pdf_doc_3.name,
							id: doc.columns.custrecord_pdf_doc_3.internalid,
							file:removePdfext
						});
					}
						
					if (doc.columns.custrecord_pdf_doc_4){
						let File = 	doc.columns.custrecord_pdf_doc_4.name;
						let removePdfext =	File.split('.pdf').join('');
						CustViewCertificates.push({
							pdf: doc.columns.custrecord_pdf_doc_4.name,
							id: doc.columns.custrecord_pdf_doc_4.internalid,
							file:removePdfext
						});
					}
					
				});
				//@class CloudAlp.Certificates.Certificates.View.Context
				return {
					//@property {Array}
					records: CustViewCertificates,
					NoDataFound: NoDataFound
				}
			}
		});
	});


// Model.js
// -----------------------
// @module Case
define("CloudAlp.Certificates.Certificates.Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({

        
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "services/Certificates.Service.ss"
            )
        ),
        validation: {
            // email: { required: true, pattern: 'email', msg: Utils.translate('Valid email is required')},
            // firstname: {required: true, msg: Utils.translate('First name is required') },
            // lastname: {required: true, msg: Utils.translate('Last name is required') },
            phone: {required: false,fn: Utils.validatePhone}
            
        }
});
});


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



define(
	'CloudAlp.Certificates.Certificates'
	, [
		'CloudAlp.Certificates.Certificates.View'
		,'CloudAlp.Certificates.ResetPassword.View'
		, 'Header.Menu.MyAccount.View'
		, 'MyAccountMenu'
		, 'MenuTree.View'
		, 'Backbone.View'
		, 'Utils'
		, 'underscore'
		, 'Configuration'
	]
	, function (
		CertificatesView
		, CertificatesResetPasswordView
		, HeaderMenuMyAccountView
		, myaccount
		, MenuTreeView
		, BackboneView
		, Utils
		, _
		, Configuration
	) {
		'use strict';

		return {
			mountToApp: function mountToApp(container) {
				// 	,'Overview.Home.View' using the 'Layout' component we add a new child view inside the 'Header' existing view 
				// (there will be a DOM element with the HTML attribute data-view="Header.Logo")
				// more documentation of the Extensibility API in
				// https://system.netsuite.com/help/helpcenter/en_US/APIs/SuiteCommerce/Extensibility/Frontend/index.html

				/** @type {LayoutComponent} */
				// var layout = container.getComponent('Layout');
				var self = this;
				const myaccountmenu = container.getComponent("MyAccountMenu");
				const pageType = container.getComponent('PageType');
				let menu = myaccount.getInstance();
				var url = Utils.getAbsoluteUrl(
					getExtensionAssetsPath(
						"services/Certificates.Service.ss"
					)
				)
				let ConfigRoleId = parseInt(Configuration.get('Certificates.roleId'));
				var promise = $.get(url);
				promise.then(function (res) {
					{
						container.Rec = res.record;
						container.role = res.role;
					}
				})
				myaccountmenu.addGroup({
					id: 'Certificates',
					name: Utils.translate('Certificates'),
					url: 'certificates',
					index: 7
				});
				// menu.addSubEntry({
				// 	entryId: 'settings',
				// 	id: 'resetpassword',
				// 	name: Utils.translate('Reset Your Password'),
				// 	url: 'resetpassword',
				// 	index: 6
				// });
				pageType.registerPageType({
					name: 'Certificates',
					routes: ['certificates'],
					view: CertificatesView,
					defaultTemplate: {
						name: 'cloudalp_certificates_certificates.tpl',
						displayName: 'Certificates'
					}
				});
				// pageType.registerPageType({
				// 	name: 'ResetPassword',
				// 	routes: ['resetpassword'],
				// 	view: CertificatesResetPasswordView,
				// 	defaultTemplate: {
				// 		name: 'cloudalp_certificates_reset_password.tpl',
				// 		displayName: 'resetpassword'
				// 	}
				// });

				_.extend(HeaderMenuMyAccountView.prototype, {
					getContext: _.wrap(HeaderMenuMyAccountView.prototype.getContext, function getContext(fn) {
						var context = fn.apply(this, _.toArray(arguments).slice(1));
						let role = container.role;
						MenuTreeView.prototype.render = _.wrap(MenuTreeView.prototype.render, function (...args) {
							this.modifiedentries = this.backwardCompatibilitySanitize(
								myaccount.getInstance().getEntries()
							);
							var removedsubentrie = (role == ConfigRoleId) ? ["addressbook", "paymentmethods", "updateyourpassword"] : "updateyourpassword";
							var menuitemchildren = [];
							var ShowMenu = [];
							for (let i in this.modifiedentries) {
								if (this.modifiedentries[i].id == "settings") {
									_.each(this.modifiedentries[i].children, function (child) {
										if (removedsubentrie.includes(child.id)) {
										} else {
											menuitemchildren.push(child)
										}
									})
									this.modifiedentries[i].children = menuitemchildren;
								}
						}
						if (role == ConfigRoleId) {	
							var showitem = ["Certificates", "settings", "cases"];
							_.each(this.modifiedentries,function (item) {
								if (showitem.includes(item.id)) {
									ShowMenu.push(item)	
								}
							})
							this.modifiedentries =ShowMenu
						} 
							this.fixedMenuItems = this.modifiedentries
							BackboneView.prototype.render.apply(this, args);

						})
						var MenuItem = myaccount.getInstance().getEntries();
						var removedsubentrie = (role == ConfigRoleId) ? ["addressbook", "paymentmethods", "updateyourpassword"] : "updateyourpassword";
						var menuitemchildren = [];
						var ShowMenu = [];
						for (let i in MenuItem) {
							if (MenuItem[i].id == "settings") {
								_.each(MenuItem[i].children, function (child) {
									if (removedsubentrie.includes(child.id)) {
									} else {
										menuitemchildren.push(child)
									}
								})
								MenuItem[i].children = menuitemchildren;
							}

						}
						if (role == ConfigRoleId) {
							var showitem = ["Certificates", "settings", "cases"];
							_.each(MenuItem, function (item) {
								if (showitem.includes(item.id)) {
									ShowMenu.push(item)
								}
							})
							context.entries = ShowMenu;
						} else {
							context.entries = MenuItem;
						}
						return context
					})

				});
			}
		};
	});


};

extensions['STAXS.Password.1.0.0'] = function(){

function getExtensionAssetsPath(asset){
	return 'extensions/STAXS/Password/1.0.0/' + asset;
}

// @module STAXS.Password.ResetAndUpdatePassword
define('STAXS.Password.ResetAndUpdatePassword.View'
,	[
	'staxs_password_resetandupdatepassword.tpl'
	,'STAXS.Password.ResetAndUpdatePassword.Model'
	, 'Backbone'
	, 'underscore'
	, 'Utils'
	, 'jQuery'
	, 'Profile.Model'
	,  'SC.Configuration'
    ]
, function (
	staxs_password_resetandupdatepassword_tpl
	,	ResetAndUpdatePasswordModel
	,	Backbone
	, _
	, Utils
	, $
	, ProfileModel
	,SCConfiguration
)
{
    'use strict';

	// @class STAXS.Password.ResetAndUpdatePassword.View @extends Backbone.View
	return Backbone.View.extend({

		template: staxs_password_resetandupdatepassword_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service
				(you'll need to deploy and activate the extension first)
			*/
			var self = this;
			self.Profile = ProfileModel.getInstance();
			// this.model = new ResetAndUpdatePasswordModel();
			// var self = this;
         	// this.model.fetch().done(function(result) {
			// 	self.message = result.message;
			// 	self.render();
      		// });
		}

	,	events: {
				'click [data-action="submit-reset-password"]': 'submit',
				'click [data-action="submit-reset-password-myaccount"]': 'submitmyaccount',
				'blur [data-action="enteremail"]': "emailid",
				'blur [data-action="firstname"]': "firstname",
				'blur [data-action="lastname"]': "lastname",
				'blur [data-action="phone"]': "phone"
		}

	,	bindings: {
		}

	, 	childViews: {

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
			// let config = self.options.application.Configuration;
			data.author = SCConfiguration.get('RequestShippingAddressModule').eAuthor;
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
				var model =  new ResetAndUpdatePasswordModel();
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
		,submitmyaccount:function(e, prop, model){
			e.preventDefault();
			var self = this;
			var data = $(e.target).closest('form').serializeObject();
			// let config = self.options.application.Configuration;
			console.log(data);
			data.author = SCConfiguration.get('RequestShippingAddressModule').eAuthor;
			data.recipient = self.Profile.email;
			data.body = `<div class="">Hi Team,</div>`
			+ `<p>Please allow me to reset my password and below are the details:</p>`
			+ `<br>`
			+ `<p><span style="font-size:1.1rem ;font-weight:bold">Name</span> : ${data.Fname} ${data.Lname}</p>`
			+ `<br>`
			+ `<p><span style="font-size:1.1rem ;font-weight:bold">Email</span>: ${data.Email}</p>`
			+ `<br>`
			+ `<p><span style="font-size:1.1rem ;font-weight:bold">Phone</span>: ${data.Phone}</p>`
			+ `<br>`
			+ `<p><span style="font-size:1.1rem ;font-weight:bold">Notes</span>: ${data.comments}</p>`
			+ `<br>`
			+ `<div class="">Regards,</div>`
			+ `<br>`
			+ `<h4>${data.Firstname} ${data.Lastname}</h4>`;
			console.log(data);
		
			var model =  new ResetAndUpdatePasswordModel();
				model.save(data, {
					success: function (model, response) {
						var frm = $('[name="contact-form"]')[0];
						frm.reset();
						$('.status-email-msg').html('<div class="alert alert-success">We have received your email and would like to thank you for writing to us,you will receive reset password link soon.</div>').css('color', 'green');

					},
					error: function (model, response) {
						$('.status-email-msg').html('<div class="alert alert-danger"> Please Enter  Details</div>').css('color', 'red');
					}
				});
		}
		//@method getContext @return STAXS.Password.ResetAndUpdatePassword.View.Context
	,	getContext: function getContext()
		{
			//@class STAXS.Password.ResetAndUpdatePassword.View.Context
			let islogin =  Utils.getParameterByName(window.location.href, 'is') === 'login' ? true :false;
			return {
					emailTo : SCConfiguration.get('quote').defaultEmail,
					islogin :islogin,
					profile:this.Profile
			}
		}
	});
});


// Model.js
// -----------------------
// @module Case
define("STAXS.Password.ResetAndUpdatePassword.Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({

        
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "services/ResetAndUpdatePassword.Service.ss"
            )
        )
        
});
});



define(
	'STAXS.Password.ResetAndUpdatePassword'
,   [
		'STAXS.Password.ResetAndUpdatePassword.View'
		, 'MyAccountMenu'
		,'Header.Menu.MyAccount.View'
		, 'MenuTree.View'
		, 'Utils'
		, 'Backbone.View'
	]
,   function (
		ResetAndUpdatePasswordView
		,myaccount
		, HeaderMenuMyAccountView
		, MenuTreeView
		,Utils
		, BackboneView
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
			const pageType = container.getComponent('PageType');
			const menu = myaccount.getInstance();
			menu.addSubEntry({
				entryId: 'settings',
				id: 'resetpassword',
				name: Utils.translate('Reset Password'),
				url: 'resetpassword',
				index: 6
			});
			
			if(layout)
			{
				// layout.addChildView('Header.Logo', function() { 
				// 	return new ResetAndUpdatePasswordView({ container: container });
				// });
				pageType.registerPageType({
					name: 'ResetPassword',
					routes: ['resetpassword'],
					view:ResetAndUpdatePasswordView,
					defaultTemplate: {
						name:'staxs_password_resetandupdatepassword.tpl',
						displayName: 'resetpassword'
					}
				})

				_.extend(HeaderMenuMyAccountView.prototype, {
					getContext: _.wrap(HeaderMenuMyAccountView.prototype.getContext, function getContext(fn) {
						var context = fn.apply(this, _.toArray(arguments).slice(1));
						MenuTreeView.prototype.render = _.wrap(MenuTreeView.prototype.render, function (...args) {
							this.modifiedentries = this.backwardCompatibilitySanitize(
								myaccount.getInstance().getEntries()
							);
							var removedsubentrie = "updateyourpassword";
							var menuitemchildren = [];
							var ShowMenu = [];
							for (let i in this.modifiedentries) {
								if (this.modifiedentries[i].id == "settings") {
									_.each(this.modifiedentries[i].children, function (child) {
										if (removedsubentrie.includes(child.id)) {
										} else {
											menuitemchildren.push(child)
										}
									})
									this.modifiedentries[i].children = menuitemchildren;
								}
						}
		
							this.fixedMenuItems = this.modifiedentries
							BackboneView.prototype.render.apply(this, args);

						})
						var MenuItem = myaccount.getInstance().getEntries();
						var removedsubentrie = "updateyourpassword";
						var menuitemchildren = [];
						var ShowMenu = [];
						for (let i in MenuItem) {
							if (MenuItem[i].id == "settings") {
								_.each(MenuItem[i].children, function (child) {
									if (removedsubentrie.includes(child.id)) {
									} else {
										menuitemchildren.push(child)
									}
								})
								MenuItem[i].children = menuitemchildren;
							}

						}
						
						context.entries = MenuItem;
						
						return context
					})

				})
			}

		}
	};
});


};

extensions['CloudAlp.PreferredDeliveryDate.1.0.0'] = function(){

function getExtensionAssetsPath(asset){
	return 'extensions/CloudAlp/PreferredDeliveryDate/1.0.0/' + asset;
}

define('PreferredDelivery.PreferredDelivery.View'
, [
    'Wizard.Module'

  , 'cloudalp_preferreddeliverydate_preferreddeliverydate.tpl'
  ]
, function (
    WizardModule

  ,cloudalp_preferreddeliverydate_preferreddeliverydate_tpl
  )
{
  'use strict';

  // We have to use the Wizard.Module class because it is special for the checkout
  return WizardModule.extend({

    template:cloudalp_preferreddeliverydate_preferreddeliverydate_tpl
	 
  , getContext: function getContext()
    {	

$(document).ready(function() {
  var dateInput = $('input[name="date"]'); // Our date input has the name "date"
  var container = $('.preferreddelivery-container').length > 0 ? $('.preferreddelivery-container').parent() : 'body';
  dateInput.datepicker({
    container:container,
    autoclose:true,
    startDate:truncateDate(new Date())
  });

  $('#date').datepicker('setStartDate', truncateDate(new Date()));
	function truncateDate(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}
});
 
      return {
        // We're going to use this to determine whether the shopper is either inputting details or reviewing them. This means we can reuse the template, showing an input for the main checkout step, and a paragraph tag for when they're reviewing before placing an order.
        isReview: this.step.step_url == 'review'
      };
    }
  });
});

define('CloudAlp.PreferredDeliveryDate.PreferredDeliveryDate'
, [
    'PreferredDelivery.PreferredDelivery.View'
  ]
, function
  (
    PreferredDeliveryDateView
  )
{
  'use strict';

  return  {
    mountToApp: function mountToApp (container)
    {
      var checkout = container.getComponent('Checkout');

      checkout.addModuleToStep(
      {
        step_url: 'opc' // the place you want to add it to, think of this like an ID. You can log the step or group info to the console to find the one you're looking for
      , module: {
          id: 'PreferredDeliveryView' // the ID you want to give it
        , index:7 // its place in the order of modules (if it matches an existing one, it is pushed down)
        , classname: 'PreferredDelivery.PreferredDelivery.View' // the name of the thing you want to render (ie the value in the view's define statement)

        }
      });

      checkout.addModuleToStep(
      {
        step_url: 'review'
      , module: {
          id: 'PreferredDeliveryView'
        , index:5
        , classname: 'PreferredDelivery.PreferredDelivery.View'
        }
      });
    }
  };
});

};

extensions['Acme.RedeemPoints.1.0.0'] = function(){

function getExtensionAssetsPath(asset){
	return 'extensions/Acme/RedeemPoints/1.0.0/' + asset;
}

// @module Acme.RedeemPoints.RedeemPoints
define('Acme.RedeemPoints.RedeemPoints.View'
,	[
	'acme_redeempoints_redeempoints.tpl'
	
	,	'Acme.RedeemPoints.RedeemPoints.Model'
	
	,	'Backbone'
    ]
, function (
	acme_redeempoints_redeempoints_tpl
	
	,	RedeemPointModel
	
	,	Backbone
)
{
    'use strict';

	// @class Acme.RedeemPoints.RedeemPoints.View @extends Backbone.View
	return Backbone.View.extend({

		template: acme_redeempoints_redeempoints_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service
				(you'll need to deploy and activate the extension first)
			*/
		

			this.model = new RedeemPointModel();
			var self = this;
         	this.model.fetch().done(function(result) {
				
						 result.points = parseInt(result.points);
						 result.billCost = parseInt(result.billCost);
						 let date = new Date(result.date);
						let mm =  date.getMonth() + 1 ;
						let  dys =  date.getDate();
						let yy = date.getFullYear();
						let dd = `${mm}/${dys}/${yy}` ;
						result.date = dd;
						self.Redeemdata =result;
						self.render();
      		});
		}

	,	events: {
		}

	,	bindings: {
		}

	, 	childViews: {

		}

		//@method getContext @return Acme.RedeemPoints.RedeemPoints.View.Context
	,	getContext: function getContext()
		{
			var Points; 
			if(this.Redeemdata){
				if(this.Redeemdata.points > 0){
				 this.Redeemdata
				}
				
			}
			//@class Acme.RedeemPoints.RedeemPoints.View.Context
			return {
				isTrue: !!this.Redeemdata,
				Redeemdata : this.Redeemdata
			};
		}
	});
});


// Model.js
// -----------------------
// @module Case
define("Acme.RedeemPoints.RedeemPoints.Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({

        
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "services/RedeemPoints.Service.ss"
            )
        )
        
});
});



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


};

extensions['CA.RewardPoints.1.0.0'] = function(){

function getExtensionAssetsPath(asset){
	return 'extensions/CA/RewardPoints/1.0.0/' + asset;
}

// @module CA.RewardPoints.points
define('CA.RewardPoints.points.View'
,	[
	'ca_rewardpoints_points.tpl'
	,	'CA.RewardPoints.points.Model'
	,	'Backbone'
	,'jQuery'
	,'Profile.Model'
    ]
, function (
	ca_rewardpoints_points_tpl
	,	pointsModel
	,	Backbone
	,jQuery
	,profileModel
)
{
    'use strict';

	// @class CA.RewardPoints.points.View @extends Backbone.View
	return Backbone.View.extend({

		template: ca_rewardpoints_points_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service
				(you'll need to deploy and activate the extension first)
			*/
			let userId = profileModel.getInstance();
			var cartsummary = this.options.Cart.summary;
			var Total =  cartsummary.total;
			var TaxTotal =  cartsummary.taxtotal;
			var ShippingCost =  cartsummary.shippingcost;
			var cost = Total - (TaxTotal + ShippingCost );
			if(cost >= 1000){
				this.RewardPoints = Math.trunc(cost/1000)*5;
			}
			var obj ={
				Points:this.RewardPoints,
				Total:cost,
				userId:userId.get('internalid'),
				userEmail:userId.get('email')
			};
			console.log("summary",cartsummary);
			this.model = new pointsModel();
		 console.log( self.Redeemdata," self.Redeemdata");
			this.model.save(obj).then(
				res =>{
					console.log(res,"save-res");
				}
			)

		}

	,	events: {
		}

	,	bindings: {
		}

	, 	childViews: {

		}
// ,	 beforeShowContent: function () {
// 	var promise = jQuery.Deferred();

// 	console.log(this.options,"before");
// 	// this.model.save({data:"hellow"}).then(function (res) {
// 	// 		promise.resolve();
// 	// 		console.log(res, "backbone");
		
// 	// });
// 	// promise.resolve();
// 	return true
// }
		//@method getContext @return CA.RewardPoints.points.View.Context
	,	getContext: function getContext()
		{
			//@class CA.RewardPoints.points.View.Context
			this.message = this.message || 'Hello World!!'
			return {
				message: this.message,
				RewardPoints:this.RewardPoints
			};
		}
	});
});


// Model.js
// -----------------------
// @module Case
define("CA.RewardPoints.points.Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({

        
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "services/points.Service.ss"
            )
        )
        
});
});


// @module Acme.RedeemPoints.RedeemPoints
define('CA.RewardPoints.pointsApply.View'
,	[
  'ca_rewardpoints_pointsapply.tpl'
	,	'CA.RewardPoints.points.Model'
	,	'Backbone'
	,'jQuery'
	,'Profile.Model'
	,'LiveOrder.Model'
	,'Wizard.Module'
    ]
, function (
	ca_rewardpoints_pointsapply_tpl
	,	pointsModel
	,	Backbone
	,jQuery
	,profileModel
	,LiveOrderModel
	,WizardModule
)
{
    'use strict';

	// @class Acme.RedeemPoints.RedeemPoints.View @extends Backbone.View
	return WizardModule.extend({

		template:ca_rewardpoints_pointsapply_tpl

	,	initialize: function (options) {
		// WizardModule.prototype.initialize.apply(this, arguments);	
			/*  Uncomment to test backend communication with an example service
				(you'll need to deploy and activate the extension first)
			*/
			// this.model = new	pointsModel();
			// console.log(this.model);
			// var self = this;
      //    	this.model.fetch().done(function(result) {
				
			// 			 result.points = parseInt(result.points);
			// 			 result.billCost = parseInt(result.billCost);
			// 			 let date = new Date(result.date);
			// 			let mm =  date.getMonth() + 1 ;
			// 			let  dys =  date.getDate();
			// 			let yy = date.getFullYear();
			// 			let dd = `${mm}/${dys}/${yy}` ;
			// 			result.date = dd;
			// 			self.Redeemdata =result;
			// 			self.render();
      // 		});
				
				this.model=LiveOrderModel.getInstance();
				// console.log(cart,"Cart");
		}

	,	events: {
		'click [data-action="remove-redeem-points"]' :'RemoveRedeemPoints'
		}

	,	bindings: {
		}
  
	, 	childViews: {

		}
		,RemoveRedeemPoints:function(){
			this.cart =  	this.model.get('options');
			this.cart.custbody_redeempoints ='';
			this.model.save().then(function(){
				$('.points-form').show();
			})
		
		}
	,	getContext: function getContext()
		{
			var custbody_redeempoints = this.model.get('options').custbody_redeempoints;
			var showPoints ;
			if( parseInt(custbody_redeempoints) > 0){
				showPoints = true;
			}
			// console.log(this.model,'model');
			return {
				cartSummary:this.model.get('options'),
				showPoints :showPoints 
			};
		}
	});
});


	// @module Acme.RedeemPoints.RedeemPoints
	define('CA.RewardPoints.pointsForm.View'
	,	[
		'ca_rewardpoints_pointsform.tpl'
		,'CA.RewardPoints.pointsApply.View'
		,	'CA.RewardPoints.points.Model'
		,'Utils'
		,	'Backbone'
		,'jQuery'
		,'Profile.Model'
		,'LiveOrder.Model'
		,'GlobalViews.Message.View'
		,'Wizard.Module'
			]
	, function (
		ca_rewardpoints_pointsform_tpl
		,pointsApplyView
		,	pointsModel
		,Utils
		,	Backbone
		,jQuery
		,profileModel
		,LiveOrderModel
		,GlobalViewsMessageView
		,WizardModule
	)
	{
			'use strict';

		// @class Acme.RedeemPoints.RedeemPoints.View @extends Backbone.View
		return WizardModule.extend({

			template:	ca_rewardpoints_pointsform_tpl
			
		,	initialize: function (options) {
			WizardModule.prototype.initialize.apply(this, arguments);
					this.options  =  options;
				/*  Uncomment to test backend communication with an example service
					(you'll need to deploy and activate the extension first)
				*/

				this.model = new	pointsModel();
				var self = this;
						this.model.fetch().done(function(result) {
							result.points = parseInt(result.points);
							result.billCost = parseInt(result.billCost);
							self.Redeemdata =result;
							self.render();
						});
			}

		,	events: {
			'click [ data-action="applyForm-points"]': 'PointsFormApply'
			}
		
		,	bindings: {
			}
		,PointsFormApply:function(e){
			var cart=LiveOrderModel.getInstance();
			e.preventDefault();
			const placeholder = jQuery('[data-type="pointsform-error-placeholder"]');
			var inputVal = $('#pointsform').val();
			var  layout = this.options.wizard.application.layout;
			var errorMessage = Utils.translate('Enter Below Redeem Points Range');
			if ( inputVal >  this.Redeemdata.points ) {
				layout.showMessage(placeholder ,errorMessage, 'error', true);
		}else{
			const clearInput = document.getElementById('pointsform')
			placeholder.html('');
			$('#points-form').collapse('hide')
			var custsummary = cart.get('summary');
			custsummary.RedeemPoints = inputVal;
			var obj = cart.get('options');
			obj.custbody_redeempoints = inputVal ;
			cart.set('options',obj);
			// {summary:custsummary}
			cart.save({options:obj}).then(function(res){
				console.log(res,"save");
			});
			clearInput.value = '';
			this.hidePoints = true;
			$('.points-form').hide();		
		}			
		}
		,childViews: {
		

			}
			//@method getContext @return Acme.RedeemPoints.RedeemPoints.View.Context
		,	getContext: function getContext()
			{
					var self = this;
					var cart=LiveOrderModel.getInstance();
					var Total =	cart.get('summary').total;
					var point ;
					var isPoints = false ;
					if(self.Redeemdata ){
						self.Redeemdata.points > 0 ? point =  self.Redeemdata.points : point = "";
					}
					if(Total >= 1000){
						isPoints = true;
					}
				var option =	cart.get('options');
				var hideForm = true;
			
				
				//@class Acme.RedeemPoints.RedeemPoints.View.Context
				return {
					availablePoints:point,
					isPoints:	isPoints
				};
			}
		});
	});



define(
	'CA.RewardPoints.points'
,   [
		'CA.RewardPoints.points.View'
		,'CA.RewardPoints.pointsApply.View'
		,'CA.RewardPoints.pointsForm.View'
		,'LiveOrder.Model'
	 ,'OrderWizard.Module.CartSummary'
	]
,   function (
		pointsView
		,pointsApplyView
		,pointsFormView
		,LiveOrderModel
		,OrderWizardModuleCartSummary
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
			// /** @type {checkoutComponent} */
			var layout = container.getComponent('Layout');
			var cart = container.getComponent('Cart');
		
		
			var checkout = container.getComponent('Checkout');
			checkout.getCheckoutFlow().then(res => {
			  if(res === 'Billing First'){
					checkout.addModuleToStep({
						step_url:'billing/address',
						module: {
							id: 'summaryCart',
							index:13,
							classname:'CA.RewardPoints.pointsForm.View',
							options:{container:'#wizard-step-content-right'}
							}
						});
					checkout.addModuleToStep({
						step_url:'shipping/address',
						module: {
							id: 'summaryCart',
							index:13,
							classname:'CA.RewardPoints.pointsForm.View',
							options:{container:'#wizard-step-content-right'}
							}
						});
					checkout.addModuleToStep({
						step_url:'shipping/selectAddress',
						module: {
							id: 'summaryCart',
							index:13,
							classname:'CA.RewardPoints.pointsForm.View',
							options:{container:'#wizard-step-content-right'}
							}
						});
					checkout.addModuleToStep({
						step_url:'shipping/addressPackages',
						module: {
							id: 'summaryCart',
							index:13,
							classname:'CA.RewardPoints.pointsForm.View',
							options:{container:'#wizard-step-content-right'}
							}
						});
					checkout.addModuleToStep({
						step_url:'shipping/packages',
						module: {
							id: 'summaryCart',
							index:13,
							classname:'CA.RewardPoints.pointsForm.View',
							options:{container:'#wizard-step-content-right'}
							}
						});
					checkout.addModuleToStep({
						step_url:'billing',
						module: {
							id: 'summaryCart',
							index:13,
							classname:'CA.RewardPoints.pointsForm.View',
							options:{container:'#wizard-step-content-right'}
							}
						});
					checkout.addModuleToStep({
						step_url:'review',
						module: {
							id: 'summaryCart',
							index:13,
							classname:'CA.RewardPoints.pointsForm.View',
							options:{container:'#wizard-step-content-right'}
							}
						});
				}else if(res === 'One Page'){
					checkout.addModuleToStep({
						step_url:'opc',
						module: {
							id: 'summaryCart',
							index:20,
							classname:'CA.RewardPoints.pointsForm.View',
							options:{container:'#wizard-step-content-right'}
							}
						});
					checkout.addModuleToStep({
						step_url:'review',
						module: {
							id: 'summaryCart',
							index:20,
							classname:'CA.RewardPoints.pointsForm.View',
							options:{container:'#wizard-step-content-right'}
							}
						});

				}
			
			
			});
			if(layout)
			{
			layout.addChildView('apply-earning-point', function() { 
					return new pointsApplyView({ container:container });
				});
			cart.on("afterSubmit",function(res){
				// Reward.points  cancelableOff
				layout.addChildView('Reward.points', function() { 
					return new pointsView({ container: container,Cart:res.confirmation});
				});
			});
		
		}
		}
	};
});


};

SC.ENVIRONMENT.EXTENSIONS_JS_MODULE_NAMES = ["CloudAlp.Certificates.Certificates.View","CloudAlp.Certificates.Certificates.Model","CloudAlp.Certificates.ResetPassword.View","STAXS.Password.ResetAndUpdatePassword.View","STAXS.Password.ResetAndUpdatePassword.Model","PreferredDelivery.PreferredDelivery.View","Acme.RedeemPoints.RedeemPoints.View","Acme.RedeemPoints.RedeemPoints.Model","CA.RewardPoints.points.View","CA.RewardPoints.points.Model","CA.RewardPoints.pointsApply.View","CA.RewardPoints.pointsForm.View"];
try{
	extensions['CloudAlp.Certificates.1.0.0']();
	SC.addExtensionModule('CloudAlp.Certificates.Certificates');
}
catch(error)
{
	console.error(error);
}


try{
	extensions['STAXS.Password.1.0.0']();
	SC.addExtensionModule('STAXS.Password.ResetAndUpdatePassword');
}
catch(error)
{
	console.error(error);
}


try{
	extensions['CloudAlp.PreferredDeliveryDate.1.0.0']();
	SC.addExtensionModule('CloudAlp.PreferredDeliveryDate.PreferredDeliveryDate');
}
catch(error)
{
	console.error(error);
}


try{
	extensions['Acme.RedeemPoints.1.0.0']();
	SC.addExtensionModule('Acme.RedeemPoints.RedeemPoints');
}
catch(error)
{
	console.error(error);
}


try{
	extensions['CA.RewardPoints.1.0.0']();
	SC.addExtensionModule('CA.RewardPoints.points');
}
catch(error)
{
	console.error(error);
}

