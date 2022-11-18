/*
    © 2020 NetSuite Inc.
    User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
    provided, however, if you are an authorized user with a NetSuite account or log-in, you
    may use this code subject to the terms that govern your access and use.
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define("CaseListItemsCollectionView", ["require", "exports", "CollectionView", "RecordViews.View"], function (require, exports, CollectionView_1, RecordViews_View_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CaseListItemsCollectionView = void 0;
    var CaseListItemsCollectionView = /** @class */ (function (_super) {
        __extends(CaseListItemsCollectionView, _super);
        function CaseListItemsCollectionView(collection) {
            return _super.call(this, collection) || this;
        }
        CaseListItemsCollectionView.prototype.getCellViewsPerRow = function () {
            return 1;
        };
        CaseListItemsCollectionView.prototype.getCellViewInstance = function (element) {
            return new RecordViews_View_1.RecordViewsView({
                record: element
            });
        };
        CaseListItemsCollectionView.prototype.getContext = function () {
            return {};
        };
        return CaseListItemsCollectionView;
    }(CollectionView_1.CollectionView));
    exports.CaseListItemsCollectionView = CaseListItemsCollectionView;
});

//# sourceMappingURL=CaseListItemsCollectionView.js.map
