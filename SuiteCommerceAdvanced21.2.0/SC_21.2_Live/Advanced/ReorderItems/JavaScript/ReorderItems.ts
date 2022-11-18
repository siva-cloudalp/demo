/*
	© 2020 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

/// <amd-module name="ReorderItems"/>

import * as Utils from '../../../Commons/Utilities/JavaScript/Utils';
import { Configuration } from '../../SCA/JavaScript/Configuration';

import ReorderItemsListView = require('./ReorderItems.List.View');

const ReorderItems: any = {
    excludeFromMyAccount:
        SC.ENVIRONMENT.standalone && !Configuration.get('myAccountPreferences.reorderEnabled'),
    mountToApp: function(application) {
        const pageType = application.getComponent('PageType');
        pageType.registerPageType({
            name: 'ReorderHistory',
            routes: ['reorderItems', 'reorderItems?:options'],
            view: ReorderItemsListView,
            defaultTemplate: {
                name: 'reorder_items_list.tpl',
                displayName: 'Reorder history default',
                thumbnail: Utils.getThemeAbsoluteUrlOfNonManagedResources(
                    'img/default-layout-transaction-list.png'
                )
            }
        });
    }
};

export = ReorderItems;
