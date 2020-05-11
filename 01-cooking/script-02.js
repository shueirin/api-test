
const getTextBtn = document.getElementById('getText');
const getJSONBtn = document.getElementById('getJSON');
const getAPIBtn = document.getElementById('getAPI');
const addPostForm = document.getElementById('addPost');


let output = document.getElementById('output');

getTextBtn.addEventListener('click', getText);
getJSONBtn.addEventListener('click', getJSON);
getAPIBtn.addEventListener('click', getAPI);
addPostForm.addEventListener('submit', addPost);

function getText(){

   output.innerHTML = '';

  //fetch('sample.txt')
  //.then( function( res ) {
  //     return res.text();
  //})
  //.then( function( data) {
  //    console.log(data);
  //})

  // Below here is the ES6

  fetch('sample.txt')
  .then((res) => res.text())
  .then((data) => {

    output.innerHTML = data;

  })
  .catch((err) => console.log(err))

}

function getJSON(){

    output.innerHTML = '';

    fetch('users.json')
    .then((res) => res.json())
    .then((data) => {

        let result = '<h2>Users</h2>';
        
        data.forEach( function(user) {

            result += `
                <ul class="card">
                    <li>ID: ${user.id}</li>
                    <li>Name: ${user.name}</li>
                    <li>Email: ${user.email}</li>
                </ul>
            `;
        });

        output.innerHTML += result;

    })
}

function getAPI(){

    output.innerHTML = '';

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((data) => {

        let result = '<h2>Post</h2>';
        
        data.forEach( function(post) {

            result += `
                <div>
                    <h3>${post.title}</h3>
                    <p>${post.body}</p>
                </div>
            `;
        });

        output.innerHTML += result;

    })
}

function addPost(e){
    e.preventDefault();

    let title = document.getElementById('title').value;
    let body = document.getElementById('body').value;

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Accept' : 'application/json, text/plain, */*',
            'Content-type' : 'application/json'
        },
        body: JSON.stringify({ title: title, body: body })
        })
        .then((res)  => res.json())
        .then((data) => console.log(data))
}