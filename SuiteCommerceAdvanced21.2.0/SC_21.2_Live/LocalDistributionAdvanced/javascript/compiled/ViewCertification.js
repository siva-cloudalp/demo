//----------------------------------------------------------------------------------------------------
/*
    © 2022 NetSuite Inc.
    User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
    provided, however, if you are an authorized user with a NetSuite account or log-in, you
    may use this code subject to the terms that govern your access and use.
*/
define("ViewCertification", ["require", "exports", "ViewCertification.View", "MyAccountMenu"], function (require, exports, ViewCertificationView, MyAccountMenu_1) {
    "use strict";
    var ViewCertification = {
        mountToApp: function (application) {
            var myAccountMenu = MyAccountMenu_1.MyAccountMenu.getInstance();
            var pageType = application.getComponent('PageType');
            // myAccountMenu.addEntry({
            //     id:'ViewCertification',
            //     name: Utils.translate('View Certification'),
            //     url:'viewcertification',
            //     index:7
            // }); 
            pageType.registerPageType({
                name: 'ViewCertification',
                routes: ['viewcertification'],
                view: ViewCertificationView,
                defaultTemplate: {
                    name: 'View_Certification.tpl',
                    displayName: 'ViewCertification'
                }
            });
        }
    };
    return ViewCertification;
});

//# sourceMappingURL=ViewCertification.js.map
