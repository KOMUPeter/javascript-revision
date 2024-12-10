let fruits = ["oranges", "bananas", "apples"];

fruits.push("kiwi"); 


let table1 = document.getElementById("table1");
let table2 = document.getElementById("table2");


fruits.forEach(fruit => {
    let p = document.createElement("p");
    p.textContent = fruit;
    table1.appendChild(p);
});


let p = document.createElement("p");
p.textContent = `Number of fruits: ${fruits.length}`;
table2.appendChild(p);
