// async must be used with await hence it does not work
// async/await = Async makes a function return a promise
//               await makes an async function wait for a promise
//               async does not have resolve or reject parameters
//               everything after await is placed in an event queue

function walkAdog() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let walked = true;
            if (walked) {
                resolve("dog walked");
            } else {
                reject("dog didn't walk");
            }
        }, 3000);
    });
}

async function test() {
    try {
        const dogwalkResult = await walkAdog();
        console.log(dogwalkResult);
    } catch (error) {
        console.error(error);
    }
}

test();

// let me = 22;
// let myNewPromise = new Promise((resolve, reject)=>{
//     if (me == 22) {
//         resolve('resolved')
//     } else {
//         reject('not resolved')
//     }
// })

// myNewPromise.then()
