/*
    © 2020 NetSuite Inc.
    User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
    provided, however, if you are an authorized user with a NetSuite account or log-in, you
    may use this code subject to the terms that govern your access and use.
*/
define("Product.Collection", ["require", "exports", "Product.Model", "Backbone"], function (require, exports, ProductModel, Backbone) {
    "use strict";
    return Backbone.Collection.extend({
        // @property {Product.Model} model
        model: ProductModel
    });
});

//# sourceMappingURL=Product.Collection.js.map
