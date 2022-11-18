/**

    © 2020 NetSuite Inc.
    User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
    provided, however, if you are an authorized user with a NetSuite account or log-in, you
    may use this code subject to the terms that govern your access and use.


 * @NApiVersion 2.x
 * @NModuleScope TargetAccount
 */
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SchemaField = void 0;
    var SchemaField = /** @class */ (function () {
        function SchemaField(fieldId) {
            this.fieldId = fieldId;
        }
        return SchemaField;
    }());
    exports.SchemaField = SchemaField;
});
