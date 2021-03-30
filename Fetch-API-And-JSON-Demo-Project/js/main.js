function alertT() {
    alert("This simulates adding to a JSON File. You'll need to view the console.log to see your result; as you cannot add to the contents of this particular hosted JSON file on the server located here: https://jsonplaceholder.typicode.com/posts");
}

document.getElementById('getText').addEventListener('click', getText); // event listener for button click: getText
document.getElementById('getUsers').addEventListener('click', getUsers); // event listener for button click: getUsers
document.getElementById('getPosts').addEventListener('click', getPosts); // event listener for button click: getPosts
document.getElementById('addPost').addEventListener('submit', addPost); // event listener for button click: addPost
document.getElementById('message').addEventListener('click', alertT); // event listener for button click: message

// Fetch data from a text file Asynchronously
function getText() {
    // XHR Method
    // fetch('sample.txt')
    // .then(function(res){
    // return res.text();
    // })
    // .then(function(data){
    //     console.log(data);
    // })
    // ES6 Arrow function method
    fetch('sample.txt') // url or filename
        .then((res) => res.text(console.log(res)))
        .then((data) => {
            document.getElementById('getTextOutput').innerHTML = data;
        })
        // Catch error
        .catch((err) => console.log(err))
}



function getUsers() {
    fetch('users.json')
        .then((res) => res.json())
        .then((data) => {
            let output = '<h2 class="mb-4 m-2">Users</h2>';
            data.forEach(function(user) {
                output += `
                <ul class="list-group mb-3 m-2">
                    <li class="list-group-item">ID: ${user.id}</li>
                    <li class="list-group-item">Name: ${user.name}</li>
                    <li class="list-group-item">Email: ${user.email}</li>
                </ul>
                `;
            })
            document.getElementById('getJSONoutput').innerHTML = output;
        })
}


function getPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => res.json())
        .then((data) => {
            let output = '<h2 class="m-3">Posts</h2>';
            data.forEach(function(post) {
                output += `
                <div class="card card-body mb-3 m-3">
                    <h3 class="mb-4">${post.title}</h3>
                    <p>$${post.body}</p>
                </div>
                `;
            })
            document.getElementById('getJSONaPIoutput').innerHTML = output;
        })
}

function addPost(e) {
    e.preventDefault();

    let title = document.getElementById('title').value;
    let body = document.getElementById('body').value;

    fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                title: title,
                body: body
            })
        })
        .then((res) => res.json())
        .then((data) => console.log(data))
}