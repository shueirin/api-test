fetch('https://jsonplaceholder.typicode.com/users/', {

    method: 'GET',
    headers: {
        'Content-Type' : 'application/json'
    },
    body: JSON.stringify({
            name: 'Sample User'
        })
    })
    .then( res => {
        
        return res.json()
    })
    .then( data => console.log(data))
    .catch( error => console.log('ERROR'))
