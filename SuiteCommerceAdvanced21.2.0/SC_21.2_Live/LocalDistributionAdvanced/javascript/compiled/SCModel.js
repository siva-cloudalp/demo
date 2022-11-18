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
define("SCModel", ["require", "exports", "Model"], function (require, exports, Model_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SCModel = void 0;
    var SCModel = /** @class */ (function (_super) {
        __extends(SCModel, _super);
        function SCModel() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return SCModel;
    }(Model_1.Model));
    exports.SCModel = SCModel;
});

//# sourceMappingURL=SCModel.js.map
