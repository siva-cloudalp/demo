/*
	© 2020 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

/// <amd-module name="CMSadapter.Impl.CustomContentType"/>

import * as _ from 'underscore';

/*
@module CMSadapter
@class CMSadapterImpl.CustomContentType the class that has the core integration using the CMS API.
*/

function AdapterCustomContentType(application, CMS) {
    this.CMS = CMS;
    this.application = application;
    this.CMSadapterComponent = application.getComponent('CMS');

    this.listenForCMS();
}

_.extend(AdapterCustomContentType.prototype, {
    listenForCMS: function listenForCMS() {
        // CMS listeners - CMS tells us to do something, could fire anytime.
        const self = this;

        self.CMS.on('page:content:set', function(promise, ccts, contentContext) {
            const pageType = self.application.getComponent('PageType');

            if (pageType._validateCurrentContext(contentContext)) {
                self.CMSadapterComponent.setRawCCTs(
                    _.map(ccts, function(cct: any) {
                        return {
                            id: cct.type,
                            instance_id: cct.instance_id,
                            selector: { 'data-cms-area': cct.context.area },
                            settings: cct.settings,
                            render_settings: {
                                position: cct.context.sequence,
                                classes: cct.classes
                            }
                        };
                    })
                );
            }

            promise.resolve();
        });

        self.CMS.on('content:types:get', function(promise) {
            const content_types = _.map(self.CMSadapterComponent.getContentIds(), function(cct_id) {
                return { type: cct_id };
            });

            promise.resolve(content_types);
        });

        self.CMS.on('content:add', function(promise, cct) {
            const content = {
                id: cct.type,
                instance_id: cct.instance_id,
                selector: { 'data-cms-area': cct.context.area },
                settings: cct.settings,
                render_settings: {
                    position: cct.context.sequence,
                    classes: cct.classes
                }
            };

            self.CMSadapterComponent.addContent(
                content.id,
                content.instance_id,
                content.selector,
                content.settings,
                content.render_settings
            ).then(promise.resolve, promise.reject);
        });

        self.CMS.on('content:update', function(promise, cct) {
            const content = {
                id: cct.type,
                instance_id: cct.instance_id,
                selector: { 'data-cms-area': cct.context.area },
                settings: cct.settings,
                render_settings: {
                    position: cct.context.sequence,
                    classes: cct.classes
                }
            };

            self.CMSadapterComponent.updateContent(
                content.id,
                content.instance_id,
                content.selector,
                content.settings,
                content.render_settings
            ).then(promise.resolve, promise.reject);
        });

        self.CMS.on('content:remove', function(promise, cct) {
            self.CMSadapterComponent.removeContent(cct.instance_id, true).then(
                promise.resolve,
                promise.reject
            );
        });
    }
});

export = AdapterCustomContentType;
