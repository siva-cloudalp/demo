 
//----------------------------------------------------------------------------------------------------
/*
	© 2022 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

/// <amd-module name="ViewCertification"/>
import * as _ from 'underscore';
import * as Utils from '../../../Commons/Utilities/JavaScript/Utils';
import ViewCertificationView  = require('./ViewCertification.View');
import { MyAccountMenu } from '../../../Advanced/Header/JavaScript/MyAccountMenu';

const ViewCertification:any = {
    mountToApp: function(application) {
        
    let myAccountMenu = MyAccountMenu.getInstance();
    
        const pageType = application.getComponent('PageType');
        // myAccountMenu.addEntry({
        //     id:'ViewCertification',
        //     name: Utils.translate('View Certification'),
        //     url:'viewcertification',
        //     index:7
        // }); 
        pageType.registerPageType({
            name: 'ViewCertification',
            routes: ['viewcertification'],
             view:ViewCertificationView,
             defaultTemplate: {
                name: 'View_Certification.tpl',
                displayName:'ViewCertification'
            }
        });    

    }
        

    
};
export=ViewCertification;