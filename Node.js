"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Node = exports.Month = void 0;
var Month;
(function (Month) {
    Month[Month["Jan"] = 1] = "Jan";
    Month[Month["Feb"] = 2] = "Feb";
    Month[Month["Mar"] = 3] = "Mar";
    Month[Month["Apr"] = 4] = "Apr";
    Month[Month["May"] = 5] = "May";
    Month[Month["Jun"] = 6] = "Jun";
    Month[Month["Jul"] = 7] = "Jul";
    Month[Month["Aug"] = 8] = "Aug";
    Month[Month["Sep"] = 9] = "Sep";
    Month[Month["Oct"] = 10] = "Oct";
    Month[Month["Nov"] = 11] = "Nov";
    Month[Month["Dec"] = 12] = "Dec";
})(Month = exports.Month || (exports.Month = {}));
var Node = /** @class */ (function () {
    function Node(month, money) {
        this.next = null;
        this.month = month;
        this.money = money;
    }
    Node.prototype.getMonth = function () {
        return this.month;
    };
    Node.prototype.setMonth = function (value) {
        this.month = value;
    };
    Node.prototype.getMoney = function () {
        return this.money;
    };
    Node.prototype.setMoney = function (value) {
        this.money = value;
    };
    Node.prototype.readData = function () {
        return { month: this.month, money: this.money };
    };
    return Node;
}());
exports.Node = Node;
