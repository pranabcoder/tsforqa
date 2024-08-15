// TSC
// 1. using <>
// 2. using as keyword

let totalBill: any = 10;
let discount: number = <number>totalBill;
console.log(discount);

let someValueAnyType: any = "this is a string";
let strLength: number = (someValueAnyType as string).length;
console.log(strLength);

let flag: any = true;
if (flag as boolean) {
    console.log("flag is a boolean");
}