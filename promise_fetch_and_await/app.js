document.getElementById('connectButton').addEventListener('click', async () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        // 1. Get initial data (e.g., list of users from a URL)
        const getDataUrl = 'https://jsonplaceholder.typicode.com/users';
        const response = await fetch(getDataUrl);

        if (!response.ok) {
            throw new Error(`Error fetching data: ${response.status}`);
        }

        const users = await response.json();
        
        // Log the fetched users data
        console.log('Fetched Users:', users);

        // 2. Perform a POST request to authenticate the user
        const postDataUrl = 'https://jsonplaceholder.typicode.com/posts'; // Using a different endpoint for POST
        const postBody = {
            username: username,
            password: password,
            // You can send additional data here if needed
            // For example, user data from the GET request
            name: users[0]?.name || 'Default Name',
            email: users[0]?.email || 'default@example.com'
        };

        // Log the data that will be sent in the POST request
        console.log('Data to be sent in POST request:', postBody);

        const postResponse = await fetch(postDataUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postBody)
        });

        if (!postResponse.ok) {
            throw new Error(`Error posting data: ${postResponse.status}`);
        }

        // 3. Display the result to the user
        const resultData = await postResponse.json();
        
        // Log the result from the POST request
        console.log('Result from POST request:', resultData);

        document.getElementById('result').innerText = `Connection successful: ${JSON.stringify(resultData)}`;

    } catch (error) {
        console.error('Error:', error);
        document.getElementById('result').innerText = `Failed to connect: ${error.message}`;
    }
});
