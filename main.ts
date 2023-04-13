import {WageList} from "./WageList";

let wageListOfEmp = new WageList();
wageListOfEmp.insertFirst(1, 10000000);
wageListOfEmp.insertFirst(2, 18000000);
wageListOfEmp.insertFirst(2, 15000000);
wageListOfEmp.insertFirst(5, 12000000);
wageListOfEmp.insertLast(5, 22000000);
wageListOfEmp.insertLast(8, 19000000);
wageListOfEmp.insertLast(7, 19000000);
console.table(wageListOfEmp.showList());
console.log(wageListOfEmp.calculateWageSum());
console.log(wageListOfEmp.findMaxWageMonth());