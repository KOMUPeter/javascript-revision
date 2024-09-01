// Table of Contents
// What is a JavaScript Function?
// Creating a Basic Function
// Function Parameters and Arguments
// Function Return Values
// Function Expressions and Arrow Functions
// Integrating JavaScript Functions with HTML
// Event Handling in HTML with JavaScript Functions
// Example: Creating an Interactive Web Page
// Best Practices for Using Functions in Client-Side JavaScript

function greet(){
    // alert ("hello world");
    let greeting = "niko salama";
    return greeting;
}

// Function Parameters, Arguments and Return Values

function greetUser(nam){
    // alert("Hello " + nam + '!');
    return "Greeted " + nam;
}
// greetUser("mike");
// nam = 'peter'
console.log(greetUser("mike"));
console.log(greet());

// Function Expressions 

let multiply = function multiply(a, b){
    return a * b;;
}

console.log(multiply(2,6));

// Arrow Functions
let anotherMultiply = (a, b) => a*b;

console.log(anotherMultiply(3,3));

// Event Handling in HTML with JavaScript Functions
    function changeText(){
        let textchange = document.getElementById('textTest');
        // Check the current text and toggle it
        if (textchange.innerHTML === "My test text") {
            textchange.innerHTML = "text has been changed";
        } else if (textchange.innerHTML == "text has been changed")
            {
            textchange.innerHTML = "<h2>My test text in Title form</h2>"
        } else {
            textchange.innerHTML = "My test text";
        }
    }

// Example: Creating an Interactive Web Page

// Best Practices for Using Functions in Client-Side JavaScript