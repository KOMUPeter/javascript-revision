let myArrayFruits = ['banana', 'orange', 'apple'];
console.log(myArrayFruits);

// how to add the list of fruits in the ul of html page
let myUrl = document.getElementById('myUlr');

myArrayFruits.forEach((fruits)=>{
   // create a new li
   let li = document.createElement('li');
   li.textContent = fruits;
   myUrl.appendChild(li);
})


//*************************  OBJECT  ****************** */
// how to add the object into the html
let myObjectPerson = {
    FirstName: 'Peter',
    Age: 34,
    PlaceOfBirth: 'Laikipia',
    City: 'Orange',
};
console.log(myObjectPerson);


let ul = document.getElementById('objectli');

for (let key in myObjectPerson) {
    if (myObjectPerson.hasOwnProperty(key)) {
        // create li
        let li = document.createElement('li');
        // set text content of li
        li.textContent = key + ': ' + myObjectPerson[key];
        ul.appendChild(li);
    }
    
}

// turn object to JSON 
let myNewPersonJSON = JSON.stringify(myObjectPerson);
console.log(myNewPersonJSON);
// use JSON.perse() to turn from string to object

