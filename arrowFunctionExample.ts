// Sample arrow function example
let info = () => {
    console.log("Hello, Arrow Function!");
};
// info();

// arrow function with parameters
let addOfThree = (a: number, b: number, c: number): number => {
    return a + b + c;
};
// console.log(addOfThree(10, 20, 30));

let sumOfThree = (a: number, b: number, c: number): number => a + b + c;
// console.log(sumOfThree(10, 20, 30));

class Person {
    public name: string;
    public age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    // arrow function in class
    printInfo = () => {
        console.log(`Name: ${this.name} and Age: ${this.age}`);
    };
}
let personObject = new Person("John", 30);
personObject.printInfo();

