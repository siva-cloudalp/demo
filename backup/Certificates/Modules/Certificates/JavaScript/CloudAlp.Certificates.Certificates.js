
define(
	'CloudAlp.Certificates.Certificates'
,   [
		'CloudAlp.Certificates.Certificates.View'
		,'Header.Menu.MyAccount.View'
		,'MyAccountMenu'
		,'MenuTree.View'
		, 'Profile.Information.View'
		, 'Address.Details.View'
		,'Backbone.View'
		,'Utils'
		,'underscore'
		,'Configuration'
	]
,   function (
		CertificatesView
		,HeaderMenuMyAccountView
		,myaccount
		,MenuTreeView
		, ProfileInformationView
		, AddressDetailsView
		,BackboneView
		,Utils
	,	_
	,Configuration
	)
{
	'use strict';

	return  {
		mountToApp: function mountToApp (container)
		{
			// 	,'Overview.Home.View' using the 'Layout' component we add a new child view inside the 'Header' existing view 
			// (there will be a DOM element with the HTML attribute data-view="Header.Logo")
			// more documentation of the Extensibility API in
			// https://system.netsuite.com/help/helpcenter/en_US/APIs/SuiteCommerce/Extensibility/Frontend/index.html
			
			/** @type {LayoutComponent} */
			// var layout = container.getComponent('Layout');
			var self = this;
			const myaccountmenu = container.getComponent("MyAccountMenu");
			const pageType = container.getComponent('PageType');
			var url = Utils.getAbsoluteUrl(
				getExtensionAssetsPath(
					"services/Certificates.Service.ss"
				)
			)
			let ConfigRoleId = parseInt(Configuration.get('Certificates.roleId'));
			var promise = $.get(url);
			 promise.then(function(res){
			{
				container.Rec = res.record;
				container.role = res.role;
			}
			 })

			myaccountmenu.addGroup({
				id:'Certificates',
				name: Utils.translate('Certificates'),
				url:'certificates',
				index:6
			});
			pageType.registerPageType({
				name: 'Certificates',
				routes: ['certificates'],
				 view:CertificatesView,
				 defaultTemplate: {
						name: 'cloudalp_certificates_certificates.tpl',
						displayName:'Certificates'
				}
		});
		// _.extend(OverviewHomeView.prototype,{
		// 	getContext: _.wrap(OverviewHomeView.prototype.getContext, function getContext(fn){
		// 		var context = fn.apply(this, _.toArray(arguments).slice(1));
		// 		let role =  container.role;
		// 			if(role == ConfigRoleId){
		// 				$(document).ready(function(){
		// 					$('.overview-home').hide()
		// 					$('.overview-home-mysettings-shipping').hide()
		// 					$('.overview-home-mysettings-payment').hide()
		// 				})
		// 			}
				
		// 	 })
		// })
	
			_.extend(HeaderMenuMyAccountView.prototype,{
				getContext: _.wrap(HeaderMenuMyAccountView.prototype.getContext, function getContext(fn){
			 var context = fn.apply(this, _.toArray(arguments).slice(1)); 
			 let role =  container.role;
				 MenuTreeView.prototype.render = _.wrap(MenuTreeView.prototype.render, function(...args){
					this.modifiedentries =	this.backwardCompatibilitySanitize(
											myaccount.getInstance().getEntries() 
							 );
					if(role == ConfigRoleId){
						var menuitems = [];
						var showitem = ["Certificates","settings","cases"];
						_.each(this.modifiedentries, function(item){
								if(showitem.includes(item.id)){
									menuitems.push(item)
								}
							})
	
					}else {
						var menuitems = this.modifiedentries
					}
				 
				 this.fixedMenuItems = menuitems
	 
				 BackboneView.prototype.render.apply(this, args);
			 
				 })
				 if(role == ConfigRoleId){
					var menu = [];
					var showitem = ["Certificates","settings","cases"];
					_.each(myaccount.getInstance().getEntries(), function(item){
							if(showitem.includes(item.id)){
								menu.push(item)
							}
						})
					context.entries =  menu
				 }
				 return context
				}) 
			
			})
	
				// _.extend(ProfileInformationView.prototype, {
				// 	getContext:_.wrap(ProfileInformationView.prototype.getContext, function getContext(fn) {
				// 	let context = 	fn.apply(this, _.toArray(arguments).slice(1));
				// 		$(function () {
				// 		let $companyname = $('#companyname');
				// 		let $phone = $('#phone');
				// 		let submit = $('.profile-information-form-actions');
				// 		let inputEmail = $('.profile-information-input-email');
				// 		let splitWord = inputEmail.text().split('| Change Address').join('')
				// 		$companyname.attr('readonly', true);
				// 		$phone.attr('readonly', true);
				// 		inputEmail.html(splitWord)
				// 		submit.hide();

				// 	})
				// 	return  context
				// 	})
				// })

				// _.extend(AddressDetailsView.prototype, {
				// 	getContext: _.wrap(AddressDetailsView.prototype.getContext, function getContext(fn) {
				// 		console.log("starter getcontext this")
				// 		var ret = fn.apply(this, _.toArray(arguments).slice(1));
				// 		ret.showActionButtons =false;
				// 		ret.showRemoveButton = false;
				// 		return ret;
				// 	})
				// })

		
		}
	};
});
