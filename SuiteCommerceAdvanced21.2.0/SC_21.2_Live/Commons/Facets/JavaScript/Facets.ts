/*
	© 2020 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

/// <amd-module name="Facets"/>

import * as _ from 'underscore';
import 'facets_item_cell_grid.tpl';
import 'facets_item_cell_table.tpl';
import 'facets_item_cell_list.tpl';
import 'facets_faceted_navigation_item.tpl';
import 'facets_faceted_navigation_item_color.tpl';
import 'facets_faceted_navigation_item_range.tpl';
import * as Utils from '../../Utilities/JavaScript/Utils';

import { Configuration } from '../../Utilities/JavaScript/Configuration';
import { ProductListPageComponent } from './ProductListPage.Component';

import Translator = require('./Facets.Translator');
import Model = require('./Facets.Model');
import Router = require('./Facets.Router');

import Categories = require('../../../Commons/Categories/JavaScript/Categories');

// @module Facets AKA Item List.

function prepareRouter(application, router) {
    // we are constructing this regexp like:
    // /^\b(toplevelcategory1|toplevelcategory2|facetname1|facetname2|defaulturl)\b\/(.*?)$/
    // and adding it as a route

    const facets_to_include = new Translator().getFacetsToInclude();

    // Here we generate an array with:
    // * The default url
    // * The Names of the facets that are in the siteSettings.facetfield config
    // * And the url of the top level categories
    const components = _.compact(
        _.union([application.translatorConfig.fallbackUrl], facets_to_include || [])
    );

    router.addUrl(components, 'facetLoading');

    const categories_promise = Categories.getCategoriesPromise();

    categories_promise.then(() => {
        const categoriesTopLevelUrl = Categories.getTopLevelCategoriesUrlComponent();
        router.addUrl(categoriesTopLevelUrl, 'categoryLoading');
    });
}

function setTranslatorConfig(application) {
    const {
        defaultSearchUrl,
        resultsPerPage,
        sortOptions,
        itemsDisplayOptions,
        facets,
        facetsAsUrlParameters,
        facetDelimiters,
        facetsSeoLimits
    } = application.getConfig();

    // Formats a configuration object in the way the translator is expecting it
    application.translatorConfig = {
        fallbackUrl: defaultSearchUrl,
        defaultShow: _.result(
            _.find(resultsPerPage, function(show) {
                return show.isDefault;
            }) || resultsPerPage[0],
            'items'
        ),
        defaultOrder: _.result(
            _.find(sortOptions, function(sort) {
                return sort.isDefault;
            }) || sortOptions[0],
            'id'
        ),
        defaultDisplay: _.result(
            _.find(itemsDisplayOptions, function(display) {
                return display.isDefault;
            }) || itemsDisplayOptions[0],
            'id'
        ),
        facets: facets,
        facetsAsUrlParameters: facetsAsUrlParameters,
        facetDelimiters: facetDelimiters,
        facetsSeoLimits: facetsSeoLimits
    };
}

function prepareItemDisplayOptions() {
    /* ---------------------------
	itemsDisplayOptions is set when the user loads the page with the current width of the screen device, NOT the width of the browser.
	This option is NOT responsive, so if the user loads the page with the desktop resolution, even if he resize the browser, he will still see the view of the desktop.

	Display type and columns supported by screen resolution:

	Mobile
	Display types -> List, Table
		List -> columns  [1, 2]
		Table -> columns [1, 2]

	Tablet
	Display types  -> List, Table
		List -> columns [1, 2, 3, 4, 6, 12]
		Table -> columns [1, 2, 3, 4, 6, 12]

	Desktop
	Display types	->
		List -> columns [1, 2, 3, 4, 6, 12]
		Table -> columns [1, 2, 3, 4, 6, 12]
		Grid -> columns [1, 2, 3, 4, 6, 12]
	--------------------------*/

    if (!Utils.isPageGenerator()) {
        const screenType = Utils.getDeviceType();

        // Phone Specific
        if (screenType === 'phone') {
            _.extend(Configuration.itemsDisplayOptions, Configuration.itemsDisplayOptionsPhone);
            _.extend(Configuration.sortOptions, Configuration.sortOptionsPhone);
            _.extend(
                Configuration.defaultPaginationSettings,
                Configuration.defaultPaginationSettingsPhone
            );
        }
        // Tablet Specific
        else if (screenType === 'tablet') {
            _.extend(Configuration.itemsDisplayOptions, Configuration.itemsDisplayOptionsTablet);
            _.extend(Configuration.sortOptions, Configuration.sortOptionsTablet);
            _.extend(
                Configuration.defaultPaginationSettings,
                Configuration.defaultPaginationSettingsTablet
            );
        }
    }
}

const facetConfigParsers = {
        currency: function(value) {
            return Utils.formatCurrency(value);
        },
        quantity: function(value) {
            return Utils.formatQuantity(value);
        },
        default: function(value) {
            return value;
        }
};

function mountToApp(application) {
        // Post-process the configuration
        prepareItemDisplayOptions();

        let facets = application.getConfig().facets || [];

        facets = _.sortBy(facets, function(facet1: any, facet2: any) {
            return facet1.priority > facet2.priority ? 0 : 1;
        });

        _.each(facets, function(facet: any) {
            facet.colors = application.getLayout().getColorPalette(facet.colors);
        });

        setTranslatorConfig(application);

        const routerInstance = new Router(application);

        prepareRouter(application, routerInstance);

        // set up facet configuration parsers
        const self = this;

        _.each(facets, function(facet: any) {
            if (facet.parser) {
                facet.parser = self.facetConfigParsers[facet.parser];
            }

            if (!facet.parser) {
                facet.parser = self.facetConfigParsers.default;
            }
        });

        return ProductListPageComponent(application);
    }

const  excludeFromMyAccount = true;

export {
    // @property {Class<FacetsTranslator>} Translator the facets translator class
    Translator,
    Model,
    Router,
    setTranslatorConfig,
    // @method prepareRouter
    prepareRouter,
    // @property {Object} facetConfigParsers configuration facet parsers available in
    // the configuration: facets->parser properties. Third party modules could add new here.
    facetConfigParsers,
    mountToApp,
	excludeFromMyAccount
};
