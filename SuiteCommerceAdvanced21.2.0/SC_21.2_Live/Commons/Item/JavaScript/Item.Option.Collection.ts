/*
	© 2020 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

/// <amd-module name="Item.Option.Collection"/>
import ItemOptionModel = require('./Item.Option.Model');
import ProductLineOptionCollection = require('../../ProductLine/JavaScript/ProductLine.Option.Collection');

// @class Item.Option.Collection @extend ProductLine.Option.Collection
const ItemOptionCollection: any = ProductLineOptionCollection.extend({
    // @property {Item.Option.Model} model
    model: ItemOptionModel
});
export = ItemOptionCollection;
