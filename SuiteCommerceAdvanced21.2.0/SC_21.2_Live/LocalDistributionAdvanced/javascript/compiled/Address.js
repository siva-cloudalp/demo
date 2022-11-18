/*
    © 2020 NetSuite Inc.
    User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
    provided, however, if you are an authorized user with a NetSuite account or log-in, you
    may use this code subject to the terms that govern your access and use.
*/
define("Address", ["require", "exports", "Utils", "Address.Edit.View", "Address.List.View"], function (require, exports, Utils, AddressEditView, AddressListView) {
    "use strict";
    var Address = {
        mountToApp: function (application) {
            var pageType = application.getComponent('PageType');
            pageType.registerPageType({
                name: 'AddressBook',
                routes: ['addressbook'],
                view: AddressListView,
                defaultTemplate: {
                    name: 'address_list.tpl',
                    displayName: 'Address Book Default',
                    thumbnail: Utils.getThemeAbsoluteUrlOfNonManagedResources('img/default-layout-address-book.png')
                }
            });
            pageType.registerPageType({
                name: 'AddressEdit',
                routes: ['addressbook/:id'],
                view: AddressEditView,
                defaultTemplate: {
                    name: 'address_edit.tpl',
                    displayName: 'Address Edit Default',
                    thumbnail: Utils.getThemeAbsoluteUrlOfNonManagedResources('img/default-layout-address-book-edit.png')
                }
            });
        }
    };
    return Address;
});

//# sourceMappingURL=Address.js.map
