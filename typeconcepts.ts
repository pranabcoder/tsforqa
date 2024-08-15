// Typescript is a statically typed language, which means that the type of variable is known at compile time.
// Type Inferencing: Typescript can infer the type of variable based on the value assigned to it.
// Type Annotations: Typescript allows us to explicitly specify the type of variable.

// One way to declare a variable
let fName: string; // Type annotation where we are explicitly specifying the type of variable
fName = "John";
// Another way to declare a variable
let lastName: string = "Doe";
console.log(fName);
console.log(lastName);
// Another way to declare a variable
let test = "Hello"; // Type inferred as string which will be decided at compile time
let billAmount = 100; // Type inferred as number which will be decided at compile time
let isAvailable = true; // Type inferred as boolean which will be decided at compile time

// Number can hold both integer and floating point numbers
// String can hold both single and double quotes
// Boolean can hold true or false

// null and undefined type in Typescript
let cityName: null = null; // null is a valid value for a variable of type string
let countryName: undefined = undefined; // undefined is a valid value for a variable of type string

// any type in Typescript
let anyType: any = "Hello"; // any type can hold any value

// void: function that does not return anything
function greet(): void { // return type is void and it is decided at compile time
    console.log("Hello");
}

function getNumber(): number { // return type is number and it is decided at compile time
    return 10;
}

function getAnyValue(): any { // return type is any and it is decided at compile time
    return "Hello";
}

// Pass function parameters with type annotations
function add(a: any, b: any) {
    return a + b; // CT -- type inference will be applied as number
}
add(10, 20); // 30

// Pass function parameters with type annotations
function addNumbers(a: number, b: number) {
    return a + b;
}
addNumbers(10, 20); // 30