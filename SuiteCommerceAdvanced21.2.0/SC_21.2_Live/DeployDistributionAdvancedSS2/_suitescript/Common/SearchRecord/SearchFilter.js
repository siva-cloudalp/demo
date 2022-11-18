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
    exports.SearchFilter = void 0;
    var SearchFilter = /** @class */ (function () {
        function SearchFilter(filter, 
        // operator type is validated based on filter type:
        operator, fstValue, sndValue) {
            this.filter = filter;
            this.operator = operator;
            this.fstValue =
                Array.isArray(fstValue) && !fstValue.length ? (this.fstValue = [0]) : fstValue;
            this.sndValue = sndValue;
        }
        SearchFilter.prototype.get = function () {
            return this.sndValue
                ? [this.filter.columnName, this.operator, this.fstValue, this.sndValue]
                : [this.filter.columnName, this.operator, this.fstValue];
        };
        return SearchFilter;
    }());
    exports.SearchFilter = SearchFilter;
});
