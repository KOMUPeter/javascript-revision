let users = [
    { Firstname: "Peter", age: 25, isValid: true },
    { Firstname: "Joe", age: 22, isValid: false },
    { Firstname: "Maina", age: 22, isValid: false },
    { Firstname: "Jane", age: 28, isValid: true },
    { Firstname: "Lucy", age: 24, isValid: true }
];

let tbody = document.getElementById('userTableBody');

// Function to populate the table
function display() {
    tbody.textContent = ""; // Clear previous rows

    users.forEach((user, index) => {
        let row = document.createElement("tr");

        let position = document.createElement("td");
        position.textContent = index + 1;
        row.appendChild(position);

        let name = document.createElement("td");
        name.textContent = user.Firstname || "N/A";
        row.appendChild(name);

        let age = document.createElement("td");
        age.textContent = user.age || "N/A";
        row.appendChild(age);

        let story = document.createElement("td");
        story.textContent = user.isValid ? "Valid" : "Invalid";
        row.appendChild(story);

        tbody.appendChild(row);
    });
}

// Function to toggle table visibility
function toggleTable() {
    if (tbody.style.display === "none" || tbody.style.display === "") {
        tbody.style.display = "table-row-group"; // Show table
        display();
    } else {
        tbody.style.display = "none"; // Hide table
    }
}




// FOR LOOP Example
let numbers = [1, 2, 3, 4, 5, 6, 7, 69, 10];
let count = 0;

for (let index = 0; index < numbers.length; index++) {
    console.log(`Index: ${index}, Number: ${numbers[index]}`);
    if (numbers[index] % 3 === 0) {
        console.log(`Number divisible by 3 found: ${numbers[index]}`);
        count += numbers[index];
    }
}
console.log(`Count of numbers divisible by 3 is: ${count}`);

// WHILE LOOP Example
let situation = false;
while (situation) {
    console.log("This will not run unless `situation` is true.");
    break; // To avoid infinite loop
}
