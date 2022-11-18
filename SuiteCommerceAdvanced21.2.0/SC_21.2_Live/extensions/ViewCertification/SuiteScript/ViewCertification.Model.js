/*
	© 2020 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

/* jshint -W053 */
// We HAVE to use "new String"
// So we (disable the warning)[https://groups.google.com/forum/#!msg/jshint/O-vDyhVJgq4/hgttl3ozZscJ]
// @module LiveOrder

define('ViewCertification.Model', [
    'SC.Model',
    'Application',
    'Profile.Model',
    'StoreItem.Model',
    'SC.Models.Init',
    'SiteSettings.Model',
    'Utils',
    'underscore'
], function (
    SCModel,
    Application,
    Profile,
    StoreItem,
    ModelsInit,
    SiteSettings,
    Utils,
    _
    
) {
    // @extends SCModel
    return SCModel.extend({
        name: 'ViewCertification',
        // @method get
        // @returns {ViewCertification.Model.Data}
        getCustCertification:function(){
            const result = {};
            try {
                var column = [];
                column.push(new nlobjSearchColumn('custrecord_pdf_doc_1'));
                column.push(new nlobjSearchColumn('custrecord_pdf_doc_2'));
                column.push(new nlobjSearchColumn('custrecord_pdf_doc_3'));
                column.push(new nlobjSearchColumn('custrecord_pdf_doc_4'));
                column.push(new nlobjSearchColumn('custrecord_customer_list'));
                column.push(new nlobjSearchColumn('email','custrecord_contact_web'));
                column.push(new nlobjSearchColumn('custrecord_contact_web'));
                var SearchRecord = nlapiSearchRecord('customrecord_view_certification',null, [new nlobjSearchFilter('custrecord_customer_list',null,'is',nlapiGetUser())],column);
                // var Customer = nlapiLoadRecord('customer',nlapiGetUser(),null,[new nlobjSearchColumn('contact')]);  
                result.record =  SearchRecord;
                // result.roles =  Customer;
            } catch (e) {
                
                throw e;
            }
            // @class ViewCertification.Model
            return result;
        },

        // @method update will update the customViewCertification object with given data.
        // @param {ViewCertification.Model.Data} data
        update: function update(data) {
             
        }

})
})
