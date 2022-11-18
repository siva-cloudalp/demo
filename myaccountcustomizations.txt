// @module CA.MyAccountCustomization.RoleBasedMyAccount
define('CA.MyAccountCustomization.RoleBasedMyAccount.View'
,	[
	'ca_myaccountcustomization_rolebasedmyaccount.tpl'
	
	,	'CA.MyAccountCustomization.RoleBasedMyAccount.SS2Model'
	
	,	'Backbone'
	
	,'Header.Menu.MyAccount.View'

	,"MyAccountMenu"

	,"MenuTree.View"

	, "Backbone.View"

	,"Header.View"

	, "ProductDetails.Base.View"

	,"Profile.Model"

	, "Cart.Detailed.View"

	, "Utils"
	
    , "ProductList.Lists.View"
	
    ,"Backbone.Model"
	
    , "ProductList.ListDetails.View"
    ]
, function (
	ca_myaccountcustomization_rolebasedmyaccount_tpl
	
	,	RoleBasedMyAccountSS2Model
	
	,	Backbone
	
	,  HeaderMenuMyAccountView

	, myaccount

	, MenuTreeView

	, BackboneView

	, HeaderView

	, ProductDetailsBaseView

	, ProfileModel

	, CartDetailedView

	, Utils

    , ProductListListsView

    , BackboneModel

    , ProductListListDetailsView
)
{
    'use strict';

	_.extend(HeaderMenuMyAccountView.prototype, {

     getContext: _.wrap(HeaderMenuMyAccountView.prototype.getContext, function getContext(fn){
		var context = fn.apply(this, _.toArray(arguments).slice(1));
		    var role = this.options.application.role;
			MenuTreeView.prototype.render = _.wrap(MenuTreeView.prototype.render, function(...args){

			this.modifiedentries = this.backwardCompatibilitySanitize(
                 myaccount.MyAccountMenu.getInstance().getEntries() 
            );
			if(role == "purchasing"){
				   var menuitems = [];
				   var removeditem = ["home","billing","settings"];
				  _.each(this.modifiedentries, function(item){
					if(removeditem.includes(item.id)){

					}else{
						menuitems.push(item)
					}
				  })
			}
			else if(role == "sales"){	   
			   var menuitems = [];
                var removeditem = ["home","billing","settings"];
               _.each(this.modifiedentries, function(item){
                 if(removeditem.includes(item.id)){

                 }else{
                    menuitems.push(item)   
                 }
               })
               var removedsubentries = ["purchases","returns","reorderitems"];
               for(var i=0;i<menuitems.length;i++)
			   {
					if(menuitems[i].id == "orders"){
						console.log("test treee here", menuitems)
						var menuitemschildren = [];
						_.each(menuitems[i].children, function(child){
							if(removedsubentries.includes(child.id)){
		   
							}else{
								menuitemschildren.push(child)   
							}
						  })
						  menuitems[i].children = menuitemschildren;
					}
				}
			   
			}
			else {
				var menuitems = this.modifiedentries
			}

			this.fixedMenuItems = menuitems

			BackboneView.prototype.render.apply(this, args);
		
			})
			if(role !="fullaccess"){
				context.isToShow = false;
				context.isToShowpurchase = true;
				context.showCases = false;
				if(role == "sales"){
					context.isToShowpurchase = false;
				}
			}else{
				context.isToShow = true;
				context.isToShowpurchase = true;
				context.showCases = true;
			}
			return context;
        })
    }); 
	HeaderView.prototype.getContext = _.wrap(HeaderView.prototype.getContext, function (fn) {
		
        const profile = ProfileModel.getInstance();

        const is_loading = (!Utils.getPathFromObject(SC.CONFIGURATION, 'performance.waitForUserProfile', true) && (ProfileModel.getPromise().state() !== 'resolved'));

        const is_logged_in = (profile.get('isLoggedIn') === 'T' || (profile.get('isRecognized') === 'T' && SC.CONFIGURATION.get('header.showRecognizedShopper', true))) && profile.get('isGuest') === 'F';
            
		var context = fn.apply(this, _.toArray(arguments).slice(1));        
            
		context.islogin = !is_loading && is_logged_in;

        if(this.application.role == "sales")
		{

           context.showCart = false;

        }
        else{

           context.showCart = true;

        }

        return context;

	    });


	ProductDetailsBaseView.prototype.getContext = _.wrap(ProductDetailsBaseView.prototype.getContext, function (fn) {	

	var context = fn.apply(this, _.toArray(arguments).slice(1));		

	const item_model = this.model.get('item');
// @class ProductDetails.Base.View.Context
		return {
			// @property {Transaction.Line.Model} model
			model: this.model,
			// @property {String} pageHeader
			pageHeader: this.page_header,
			// @property {String} itemUrl
			itemUrl: item_model.get('_url') + this.model.getQuery(),
			// @property {Boolean} isItemProperlyConfigured
			isItemProperlyConfigured: item_model.isProperlyConfigured(),
			// @property {Boolean} isPriceEnabled
			isPriceEnabled: !ProfileModel.getInstance().hidePrices(),

			Toshowcart: (this.application.role == "sales")?false:true
		};

		return context;
	})
	CartDetailedView.prototype.getContext = _.wrap(CartDetailedView.prototype.getContext, function (fn) {	

		var context = fn.apply(this, _.toArray(arguments).slice(1));
		
		if(this.application.role == "sales"){
			context.toshowcart = false;
		}else{
			context.toshowcart = true;
		}
		return context;
	})	
	
	ProductListListDetailsView.prototype.getContext = _.wrap(ProductListListDetailsView.prototype.getContext, function(fn){
		
            var context = fn.apply(this, _.toArray(arguments).slice(1));
			
            if(this.parentView.parentView.application.role == "sales"){
                context.toshow = false;
            }else{
                context.toshow = true;
            }
            return context;
    });
		
});
