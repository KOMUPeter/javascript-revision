let myNam = document.getElementById('inputVerif');
let s = document.getElementById('sub');
let form = document.getElementById('verificationForm');
let answer = document.getElementById('answer'); // <p></p>

function newTest(){
    form.addEventListener('submit', (event)=> {
        event.preventDefault(); // Prevent form submission
    
        let p = new Promise((resolve, reject) => {
            if (myNam.value === 'peter') {
                resolve('You are in');
            } else {
                reject('Try another name');
            }
        });
    
        p.then((message) => {
            answer.textContent = message; // Display message in <p> element
            answer.style.color = 'green';
        }).catch((message) => {
            answer.textContent = message; // Display error message in <p> element
            answer.style.color = 'red';
        });
    });
}
newTest();



// let MyName = 2;

// let myPromise = new Promise((resolve, reject) => {
//     if (MyName == 2) {
//         resolve(2 + MyName);
//     } else {
//         reject(2 + 6);
//     }
// });

// myPromise.then((message) => {
//     message++;
//     console.log(message);
// }).catch((message) => {
//     message--;
//     console.log(message);
// });
