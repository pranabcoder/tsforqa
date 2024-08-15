// functions in TS:
// void
// return
// take parameters

// named function
function getInfo(){
    console.log("This is a named function");
}
// getInfo();

// function with parameters
function addOfTwo(a: number, b: number){
    console.log(a+b);
}
// addOfTwo(2,3);

// function with return type
function addOfTwoReturn(a: number, b: number): number{
    return a+b;
}
// console.log(addOfTwoReturn(2,3));

// without name function -- store in a variable and call it using the variable name only
let addOfTwoWithoutName = function(a: number, b: number){
    console.log(a+b);
}
addOfTwoWithoutName(2,3);
