// Sample union type
let userId: string | number;
userId = 123;
userId = "123";
// userId = true; // Error: Type 'true' is not assignable to type 'string | number'.

// use a union type in function parameter
function getUserInformation(customerId: string | number) {
    if (typeof customerId === "string") {
        console.log(`Customer Id is ${customerId} which is a string`);
    }
    if (typeof customerId === "number") {
        console.log(`Customer Id is ${customerId} which is a number`);
    }
}
getUserInformation(123);