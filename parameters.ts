// default parameters:
function setDetails(givenName: string, ageOfPerson: number = 30) {
    return givenName + " is " + ageOfPerson + " years old";
}
console.log(setDetails("John")); // John is 30 years old
console.log(setDetails("John", 40)); // John is 40 years old
