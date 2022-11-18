/*
	© 2020 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

// @module CMSadapter
define('CMSadapter.Model.v3', ['SC.Model', 'SiteSettings.Model', 'underscore', 'Utils'], function(
    SCModel,
    SiteSettingsModel,
    _,
    Utils
) {
    // @class CMSadapter.Model Mostly do the job of getting the landing pages of a CMS enabled site so they can be bootstrapped into the application environment.
    // @extends SCModel
    return SCModel.extend({
        name: 'CMSadapterV3',

        // @method getPages @return {data:Array<CMSPages>}
        getPages: function() {
            try {
                Environment = Application.getEnvironment(request);

                const language =
                    (Environment.currentLanguage && Environment.currentLanguage.locale) || '';
                const cmsRequestT0 = new Date().getTime();
                const siteSettings = SiteSettingsModel.get();
                const isMultiLanguage = Utils.isFeatureEnabled('MULTILANGUAGE');

                const data = { pages: {} };
                const settingsRecords = {};

                const filters = [
                    new nlobjSearchFilter('inactive', 'cmspagetype', 'is', 'F'),
                    new nlobjSearchFilter('site', null, 'is', siteSettings.siteid)                    
                ];

                const columns = [
                    new nlobjSearchColumn('internalid'),
                    new nlobjSearchColumn('url'),
                    new nlobjSearchColumn('baseurlpath', 'cmspagetype'),
                    new nlobjSearchColumn('name'),
                    new nlobjSearchColumn('pagetype'),
                    new nlobjSearchColumn('customrecordscriptid', 'cmspagetype'),
                    new nlobjSearchColumn('customrecorddata'),
                    new nlobjSearchColumn('template'),
                    new nlobjSearchColumn('addtohead'),
                    new nlobjSearchColumn('pagetitle'),
                    new nlobjSearchColumn('pageheader'),
                    new nlobjSearchColumn('metadescription'),
                    new nlobjSearchColumn('metakeywords'),
                    new nlobjSearchColumn('name', 'cmspagetype'),
                    new nlobjSearchColumn('cmscreatable', 'cmspagetype')
                ];

                if (isMultiLanguage) {
                    columns.push(
                        new nlobjSearchColumn('locale'),
                        new nlobjSearchColumn('customrecorddatatranslated'),
                        new nlobjSearchColumn('additiontoheadtranslated'),
                        new nlobjSearchColumn('pagetitletranslated'),
                        new nlobjSearchColumn('metadescriptiontranslated'),
                        new nlobjSearchColumn('pageheadertranslated'),
                        new nlobjSearchColumn('metakeywordstranslated')
                    );
                }

                const pages = {};

                const result = nlapiSearchRecord('cmspage', null, filters, columns);

                if (result) {
                    result.forEach(function(cmspage) {
                        const page = {};

                        const baseUrlPath = cmspage.getValue('baseurlpath', 'cmspagetype');

                        const internalid = cmspage.getValue('internalid');
                        const pageLanguage = isMultiLanguage ? cmspage.getValue('locale') : undefined;

                        if (pageLanguage === language || !pages[internalid]) {
                            if (pageLanguage === language) {
                                page.addition_to_head = cmspage.getValue(
                                    'additiontoheadtranslated'
                                );
                                page.page_title = cmspage.getValue('pagetitletranslated');
                                page.page_header = cmspage.getValue('pageheadertranslated');
                                page.meta_description = cmspage.getValue(
                                    'metadescriptiontranslated'
                                );
                                page.meta_keywords = cmspage.getValue('metakeywordstranslated');
                                page.customrecorddata = cmspage.getValue(
                                    'customrecorddatatranslated'
                                );
                            } else {
                                page.addition_to_head = cmspage.getValue('addtohead');
                                page.page_title = cmspage.getValue('pagetitle');
                                page.page_header = cmspage.getValue('pageheader');
                                page.meta_description = cmspage.getValue('metadescription');
                                page.meta_keywords = cmspage.getValue('metakeywords');
                                page.customrecorddata = cmspage.getValue('customrecorddata');
                            }

                        page.name = cmspage.getValue('name');
                        page.urlPath = baseUrlPath
                            ? `${baseUrlPath}/${cmspage.getValue('url')}`
                            : cmspage.getValue('url');
                        page.url = cmspage.getValue('url');
                        page.template = cmspage.getValue('template');

                        page.type = parseInt(cmspage.getValue('pagetype'), 10);
                        page.pageTypeName = cmspage.getValue('name', 'cmspagetype');
                        page.customrecordscriptid = cmspage.getValue(
                            'customrecordscriptid',
                            'cmspagetype'
                        );
                            page.cmscreatable =
                                cmspage.getValue('cmscreatable', 'cmspagetype') === 'T';

                        if (page.customrecordscriptid && page.customrecorddata) {
                            if (!settingsRecords[page.customrecordscriptid]) {
                                settingsRecords[page.customrecordscriptid] = {};
                            }

                            settingsRecords[page.customrecordscriptid][
                                page.customrecorddata
                            ] = page;
                        }

                            pages[internalid] = page;
                        }
                    });

                    _.each(settingsRecords, function(ids, recname) {
                        const cr = nlapiCreateRecord(recname);

                        const crFilters = [
                            new nlobjSearchFilter('internalid', null, 'anyof', _.keys(ids))
                        ];
                        const crColumnsRaw = cr.getAllFields().filter(function(fieldname) {
                            return fieldname.indexOf('custrecord') === 0;
                        });

                        const crColumns = crColumnsRaw.map(function(column) {
                            return new nlobjSearchColumn(column);
                        });

                        const settings = nlapiSearchRecord(recname, null, crFilters, crColumns);

                        settings.forEach(function(setting) {
                            const { id } = setting;

                            settingsRecords[recname][id].fields = {};

                            _.each(crColumnsRaw, function(columnName) {
                                settingsRecords[recname][id].fields[columnName] = setting.getValue(
                                    columnName
                                );
                            });
                        });
                    });
                }

                data.pages.pages = _.values(pages);
                data._debug_requestTime = new Date().getTime() - cmsRequestT0;

                return data;
            } catch (e) {
                return { error: e };
            }
        }
    });
});
