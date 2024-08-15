// Tuple
//  vs. array
// in array dynamically more values can be added
// in tuple fixed number of values can be added and order is important

// sample tuple
let person: [string, number, boolean] = ['John', 25, true];
// fetch the values from tuple
// console.log(person[0]); // John

// create a tuple with an array
let employee: [string, number][] = [['John', 25], ['Steve', 30], ['Mary', 28]];
// fetch the values from tuple
// console.log(employee[0]); // ['John', 25]
// console.log(employee[0][0]); // John

// Push the values to tuple
let customerTuple: [string, number, boolean] = ['John', 25, true];
// push a value to tuple
customerTuple.push('Robert', 30, false);
console.log(customerTuple);

