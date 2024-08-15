// provide the implementation of the function
function twoValuesSum(a: number, b: number): number;
function twoValuesSum(a: string, b: string): string;
// need to implement this only once
function twoValuesSum(a: any, b: any): any {
    return a + b;
}
console.log(twoValuesSum(10, 20));
console.log(twoValuesSum("10", "20"));

