// Enum: Enumeration: data types: hold a set of values
// numeric enum
// string enum
// heterogeneous enum

// numeric enum:
enum BrowserType {
    Firefox,
    Safari,
    Edge = getBrowserVersion('chrome') * 5,
    Chrome = getBrowserVersion('chrome'), // By default, the value of the first element is 0
}

function getBrowserVersion(browserName: string): number {
    if (browserName === 'chrome') {
        return 115;
    }
    return -1;
}

// console.log(BrowserType.Edge);

// String enum:
enum environment {
    DEV = 'development',
    PROD = 'production',
    QA = 'testing',
    STAGE = 'staging',
}

// console.log(environment.DEV);

// Heterogeneous enum:
enum States {
    ACTIVE = 1,
    INACTIVE = 'Inactive',
    PENDING = 2,
}

console.log(States.ACTIVE);
console.log(States.INACTIVE);
console.log(States.PENDING);
