
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
