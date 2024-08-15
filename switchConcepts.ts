let myDay: string = "Thursday";
switch (myDay) {
    case "Monday":
        console.log("Today is Monday");
        break;
    case "Tuesday":
        console.log("Today is Tuesday");
        break;
    case "Wednesday":
        console.log("Today is Wednesday");
        break;
    case "Thursday":
        console.log("Today is Thursday");
        break;
    case "Friday":
        console.log("Today is Friday");
        break;
    case "Saturday":
        console.log("Today is Saturday");
        break;
    case "Sunday":
        console.log("Today is Sunday");
        break;
    default:
        console.log("Invalid day");
        break;
}

let marks: number = 90;
switch (marks) {
    case 90:
        console.log("Grade A");
        break;
    case 80:
        console.log("Grade B");
        break;
    case 70:
        console.log("Grade C");
        break;
    case 60:
        console.log("Grade D");
        break;
    default:
        console.log("Grade E");
        break;
}

let activeUser: boolean = true;
switch (activeUser) {
    case true:
        console.log("User is active");
        break;
    default:
        console.log("Invalid user");
        break;
}

// switch case with enum
enum Day {
    Monday = "Monday",
    Tuesday = "Tuesday",
    Wednesday = "Wednesday",
    Thursday = "Thursday",
    Friday = "Friday",
    Saturday = "Saturday",
    Sunday = "Sunday"
}
let today: string = Day.Friday;
switch (today) {
    case Day.Monday:
        console.log("Today is Monday");
        break;
    case Day.Tuesday:
        console.log("Today is Tuesday");
        break;
    case Day.Wednesday:
        console.log("Today is Wednesday");
        break;
    case Day.Thursday:
        console.log("Today is Thursday");
        break;
    case Day.Friday:
        console.log("Today is Friday");
        break;
    case Day.Saturday:
        console.log("Today is Saturday");
        break;
    case Day.Sunday:
        console.log("Today is Sunday");
        break;
    default:
        console.log("Invalid day");
        break;
}

// use cases:
// 1. RBAC: Role-Based Access Control, based on a user role, we can provide access to the user