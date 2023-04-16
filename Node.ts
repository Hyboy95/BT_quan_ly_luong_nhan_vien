
export enum Month {
    Jan = 1,
    Feb,
    Mar,
    Apr,
    May,
    Jun,
    Jul,
    Aug,
    Sep,
    Oct,
    Nov,
    Dec
}
export class Node {
    month: Month;
    money: number;
    next: Node | null = null;
    constructor(month: Month, money: number) {
        this.month = month;
        this.money = money;
    }

    getMonth(): Month {
        return this.month;
    }

    setMonth(value: Month) {
        this.month = value;
    }

    getMoney(): number {
        return this.money;
    }

    setMoney(value: number) {
        this.money = value;
    }
    readData(): {month: Month, money: number} {
        return {month: this.month, money: this.money};
    }
}