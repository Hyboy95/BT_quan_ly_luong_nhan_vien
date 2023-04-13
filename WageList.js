"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WageList = void 0;
var Node_1 = require("./Node");
var WageList = /** @class */ (function () {
    function WageList() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    WageList.prototype.checkMonth = function (month) {
        if (this.size) {
            var currentNode = this.head;
            while (currentNode) {
                if (currentNode.month == month) {
                    return true;
                }
                currentNode = currentNode.next;
            }
        }
        return false;
    };
    WageList.prototype.insertFirst = function (month, money) {
        if (!this.checkMonth(month)) {
            var node = new Node_1.Node(month, money);
            node.next = this.head;
            this.head = node;
            if (!this.tail) {
                this.tail = node;
            }
            this.size++;
        }
        else {
            console.log("Error: Th\u00E1ng ".concat(month, " \u0111\u00E3 c\u00F3 trong danh s\u00E1ch"));
        }
    };
    WageList.prototype.insertLast = function (month, money) {
        if (!this.checkMonth(month)) {
            if (!this.head) {
                this.insertFirst(month, money);
            }
            else {
                var node = new Node_1.Node(month, money);
                this.tail.next = node;
                this.tail = node;
                this.size++;
            }
        }
        else {
            console.log("Error: Th\u00E1ng ".concat(month, " \u0111\u00E3 c\u00F3 trong danh s\u00E1ch"));
        }
    };
    WageList.prototype.showList = function () {
        var wageList = [];
        var currentNode = this.head;
        while (currentNode) {
            wageList.push(currentNode.readData());
            currentNode = currentNode.next;
        }
        return wageList;
    };
    WageList.prototype.getListMoney = function () {
        var listMoney = [];
        var currentNode = this.head;
        while (currentNode) {
            listMoney.push(currentNode.money);
            currentNode = currentNode.next;
        }
        return listMoney;
    };
    WageList.prototype.calculateWageSum = function () {
        var sum = 0;
        this.showList().forEach(function (item) { return sum += item.money; });
        return sum;
    };
    WageList.prototype.findMaxWageMonth = function () {
        var max = Math.max.apply(Math, this.getListMoney());
        var result = 'Tháng có lương cao nhất:\n';
        this.showList().forEach(function (item) {
            if (item.money == max) {
                result += "- Th\u00E1ng ".concat(item.month, ": ").concat(item.money, "\n");
            }
        });
        return result;
    };
    return WageList;
}());
exports.WageList = WageList;
