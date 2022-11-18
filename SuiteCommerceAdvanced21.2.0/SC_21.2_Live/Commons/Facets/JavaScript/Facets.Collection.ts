/*
	© 2020 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

/// <amd-module name="Facets.Collection"/>

import { ProfileModel } from '../../Profile/JavaScript/Profile.Model';

import FacetsModel = require('./Facets.Model');

import BackboneCachedCollection = require('../../../Commons/BackboneExtras/JavaScript/Backbone.CachedCollection');

// @module Facets
export = BackboneCachedCollection.extend({
    url: function(): string {
        return ProfileModel.getInstance().getSearchApiUrl();
    },

    model: FacetsModel,

    parse: function(response) {
        return [response];
    }
});
