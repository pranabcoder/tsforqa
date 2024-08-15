// create variable of a type never
// let neverType: never = null; // Error: Type 'null' is not assignable to type 'never'.
// let neverType2: never = undefined; // Error: Type 'undefined' is not assignable to type 'never'.
// Can't add any value to never type variable

// create a function with never return type
function throwError(message: string): never {
    throw new Error(message);
}
// throwError('This is an error message');
// a Function throwError return type is never, so it will never return a value. It will throw an error message.

// create infinite loop function with never return type
function infiniteLoop(): never {
    while (true) {
        console.log('Hello');
    }
}
infiniteLoop();