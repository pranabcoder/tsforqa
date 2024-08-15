// void type in variable
// let numberOne: void = 10; // Error: Type '10' is not assignable to type 'void'.
let numberTwo: void = undefined; // OK

// void type in function
function display(): void {
    console.log('Hello World');
}
display(); // Output: Hello World

