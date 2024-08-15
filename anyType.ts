let number: any = "test";

let someValue: any;
someValue = 5;
someValue = "hello";
someValue = true;

let language: any[] = ["Java", "Python", "JavaScript"];
language.push(100);
language.push(true);
console.log(language);

function addTwoNumber(a: any, b: any): any {
    return a + b;
}
let result = addTwoNumber(10, 20);
console.log(result); // 30
