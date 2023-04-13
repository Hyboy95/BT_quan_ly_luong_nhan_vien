import {Month, Node} from "./Node";

export class WageList {
    head: Node | null;
    tail: Node | null;
    size: number;
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    checkMonth(month: Month): boolean {
        if (this.size) {
            let currentNode = this.head;
            while (currentNode) {
                if (currentNode.month == month) {
                    return true;
                }
                currentNode = currentNode.next;
            }
        }
        return false;
    }
    insertFirst(month: Month, money: number) {
        if (!this.checkMonth(month)) {
            let node = new Node(month, money);
            node.next = this.head;
            this.head = node;
            if (!this.tail) {
                this.tail = node;
            }
            this.size ++;
        } else {
            console.log(`Error: Tháng ${month} đã có trong danh sách`);
        }
    }
    insertLast(month: Month, money: number) {
        if (!this.checkMonth(month)) {
            if (!this.head) {
                this.insertFirst(month, money);
            } else {
                let node = new Node(month, money);
                this.tail.next = node;
                this.tail = node;
                this.size ++;
            }
        } else {
            console.log(`Error: Tháng ${month} đã có trong danh sách`);
        }
    }
    showList(): Node[] {
        let wageList= [];
        let currentNode: Node = this.head;
        while (currentNode) {
            wageList.push(currentNode.readData())
            currentNode = currentNode.next;
        }
        return wageList;
    }
    getListMoney(): number[] {
        let listMoney = [];
        let currentNode = this.head;
        while (currentNode) {
            listMoney.push(currentNode.money);
            currentNode = currentNode.next;
        }
        return listMoney;
    }
    calculateWageSum(): number {
        let sum: number = 0;
        this.showList().forEach(item => sum += item.money);
        return sum;
    }
    findMaxWageMonth(): string {
        let max = Math.max(...this.getListMoney());
        let result = 'Tháng có lương cao nhất:\n';
        this.showList().forEach(item => {
            if (item.money == max) {
                result += `- Tháng ${item.month}: ${item.money}\n`
            }
        })
        return result;
    }
}