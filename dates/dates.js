// Creating Dates
// You can create a Date object in several ways:

let now = new Date();
console.log(now);

let dateOfBirth = new Date('1990-07-03');
console.log(dateOfBirth);

const timestampDate = new Date(16931223200000); // Timestamp in milliseconds
console.log(timestampDate);


// calculate difference in between years

const date1 = new Date('2024-01-01');
const date2 = new Date('2024-08-27');

const diffTime = date2 - date1; // Difference in milliseconds
const diffDays = diffTime / (1000 * 60 * 60 * 24); // Convert to days

console.log(diffDays + " days"); // Outputs the difference in days
