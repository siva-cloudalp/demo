/*
	© 2020 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

/// <amd-module name="ProductDetails"/>

// Implements the full experience of the Product Details Page (PDP)
// Consists on a router, a model and the DetailsView with an image
// gallery view to show the product images

import * as Utils from '../../../Commons/Utilities/JavaScript/Utils';
import { Configuration } from '../../../Commons/Utilities/JavaScript/Configuration';
import { ProductDetailsComponent } from './ProductDetails.Component';

import ProductDetailsFullView = require('./ProductDetails.Full.View');
import ProductDetailsQuickView = require('./ProductDetails.QuickView.View');

// @class ProductDetails instantiate the router and publicly
// expose the PDP Component @extends ApplicationModule
const ProductDetails: any = {
    excludeFromMyAccount: true,
    // @method mountToApp
    // @return {ProductDetails.Component}
    mountToApp: function(application) {
        if (Configuration.get('modulesConfig.ProductDetails.startRouter', false)) {
            const pageType = application.getComponent('PageType');

            pageType.registerPageType({
                name: 'ProductDetails.Full.View',
                routes: [':url', /^(.*?)$/, 'product/:id', 'product/:id?:options'],
                view: ProductDetailsFullView,
                defaultTemplate: {
                    name: 'product_details_full.tpl',
                    displayName: 'Product Details Full Default',
                    thumbnail: Utils.getThemeAbsoluteUrlOfNonManagedResources(
                        'img/default-layout-PDP.png'
                    )
                }
            });
            pageType.registerPageType({
                name: 'ProductDetails.QuickView.View',
                routes: [
                    ':url&showinmodal=T',
                    ':url?showinmodal=T',
                    /^(.*?)(\?|\&)showinmodal=T$/,
                    'product/:id?showinmodal=T',
                    'product/:id?:options&showinmodal=T'
                ],
                view: ProductDetailsQuickView,
                defaultTemplate: {
                    name: 'product_details_quickview.tpl',
                    displayName: 'Product Details QuickView Default',
                    thumbnail: Utils.getThemeAbsoluteUrlOfNonManagedResources(
                        'img/default-layout-PDP-quick-view.png'
                    )
                }
            });
        }

        return ProductDetailsComponent(application);
    }
};

export = ProductDetails;
