 let MyName = 2;
 
 let myPromise = new Promise((resolve, reject)=>{
    if (MyName == 2) {
        resolve("good");
    } else {
        reject("bad")
    }

    myPromise.then((message)=>{
        message++;
        console.log(message);
    }).catch((message)=>{
        message--;
        console.log(message);
    })
 })


