/**

    © 2020 NetSuite Inc.
    User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
    provided, however, if you are an authorized user with a NetSuite account or log-in, you
    may use this code subject to the terms that govern your access and use.


 * @NApiVersion 2.x
 * @NModuleScope TargetAccount
 */
define(["require", "exports", "N/runtime"], function (require, exports, Nruntime) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Session = /** @class */ (function () {
        function Session() {
            this.session = Nruntime.getCurrentSession();
        }
        Session.getInstance = function () {
            if (!Session.instance) {
                Session.instance = new Session();
            }
            return Session.instance;
        };
        Session.prototype.get = function (name) {
            return this.session.get({
                name: name
            });
        };
        Session.prototype.set = function (name, value) {
            this.session.set({
                name: name,
                value: value
            });
        };
        Session.instance = null;
        return Session;
    }());
    exports.default = Session;
});
