/*
	© 2020 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

/// <amd-module name="Product.Option.Collection"/>

import ProductOptionModel = require('./Product.Option.Model');
import ProductLineOptionCollection = require('../../ProductLine/JavaScript/ProductLine.Option.Collection');

// @class Product.Option.Collection @extend ProductLine.Option.Collection
export = ProductLineOptionCollection.extend({
    // @property {Product.Options.Model} model
    model: ProductOptionModel
});
