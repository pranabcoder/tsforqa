// Sample array declaration and accessing the array elements
let nameOfArray: string[] = ["John", "Tom", "Harry", "Peter"];
// console.log(nameOfArray[0]);

// using a generic array type
let employeeNames: Array<string> = ["John", "Tom", "Harry", "Peter"];
let employeeIds: Array<number> = [1, 2, 3, 4];
let employeeSalaries: Array<any> = [1000, "Naveen", true, null];
console.log(employeeNames[1]);
console.log(employeeIds[2]);
console.log(employeeSalaries[3]);

// multi type array
let values: (string | number)[] = ["John", 100, "Tom", 200];

// multi type array with generics
let values1: Array<string | number> = ["John", 100, "Tom", 200];

// first array declaration and initialization later
let userNames: Array<string>;
userNames = ["John", "Tom", "Harry", "Peter"];

// iterating an array through for loop
let employeeName: string[] = ["John", "Tom", "Harry", "Peter"];
// index base iteration
for (let i = 0; i < employeeName.length; i++) {
  console.log(employeeName[i]);
}
// for in loop
for (let index in employeeName) {
  console.log(employeeName[index]);
}
