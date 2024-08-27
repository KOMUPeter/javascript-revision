// FETCH IS USED TO GET THE INFORMATIONS FROM A URL SOURCE LIKE API IN SYMFONY
// Fetch function has two properties 
// 1, url
// 2, optional eg post, get e.t.c

// fetch("https://jsonplaceholder.typicode.com/users/4")
// // note you have a 404 error because if you add the id of the user because fetch always succed so make sure to check if res is ok....!! so do if...
//     .then(res => {
//         if (res.ok) {
//             console.log('sucess')
//         } else {
//             console.log('failled')
//         }
//         res.json
//     })
//     .then(data =>console.log(data))


// *************************************************************************************************************
// IN THIS WE JUST FETCH A LIST OF USERS IN THE URL

    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
        if (res.ok) {
            return res.json(); // Return the JSON parsed response
        } else {
            console.log('Request failed with status:', res.status);
            throw new Error('Request failed');
        }
    })
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));  // Add a catch block to handle errors

// *************************************************************************************************************
// THEN HERE WE ADD A USER DIRECTLY

    fetch("https://jsonplaceholder.typicode.com/users", {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        // Add the data you want to send in the request body
        // For example:
        name: 'Peter Jimes',
        username: 'johndoe',
        email: 'johndoe@example.com',
        // Add any other properties as needed
    })
})
.then((res) => {
    if (res.ok) {
        return res.json(); // Return the JSON parsed response
    } else {
        console.log('Request failed with status:', res.status);
        throw new Error('Request failed');
    }
})
.then(data => console.log(data))
.catch(error => console.error('Error:', error));  // Add a catch block to handle errors
