// Summary of loops in javascript
// 1 for loop: Ideal for when you know the number of iterations.
// 2 while loop: Use when the number of iterations is unknown and depends on a condition.
// 3 do...while loop: Similar to while, but ensures the loop runs at least once.
// 4 for...in loop: Used for iterating over object properties.
// 5 for...of loop: Used for iterating over values of iterable objects like arrays.

// 1 for loop example

let p = document.getElementById("p");
let b = document.getElementById("b");
let tree = '';
// console.log(p.innerHTML)
p.innerHTML = "<p>test for innerhtml</p>" // output => test for inner html
b.innerText = "<p>test for innertext</p>" // output => <p>test for inner text</p>


for (let i = 0; i < 5; i++) {
    console.log(i + "a")
}

const height = 6; // You can adjust the height of the tree

for (let i = 1; i <= height; i++) {
    // Print spaces
    let spaces = ' '.repeat(height - i);

    // Print stars
    let stars = '*'.repeat(2 * i - 1);
    // '\n' IS TO CREATE A NEW LINE IN JAVASCRIPT
    tree += spaces + stars + '\n';

    console.log(spaces + stars);
}

// Print the trunk of the tree
let trunkSpaces = ' '.repeat(height - 1);
console.log(trunkSpaces + '*');
console.log(trunkSpaces + '*');

document.getElementById('tree').textContent = tree;


// while loop
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
console.log('*********************');


//  do while loop
let n = 0;
do {
  console.log(i);
  n++;
} while (n < 5);
console.log('*********************');


// forEach loop
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((number, index) => {
  console.log(`Index ${index}: ${number}`);
});
console.log('*********************');


// for in loop
const person = { name: 'John', age: 30, city: 'New York' };
for (let key in person) {
  if (person.hasOwnProperty(key)) {
    console.log(`${key}: ${person[key]}`);
  }
}
