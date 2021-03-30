// Event listener for the JSON Placeholder: 'Posts' resource

document.getElementById('getPosts').addEventListener('click', getPosts);
document.getElementById('getComments').addEventListener('click', getComments);
document.getElementById('getAlbums').addEventListener('click', getAlbums);
document.getElementById('getPhotos').addEventListener('click', getPhotos);
document.getElementById('getTodos').addEventListener('click', getTodos);
document.getElementById('getUsers').addEventListener('click', getUsers);

// Fetches 100 Posts from:https://jsonplaceholder.typicode.com/posts
// Promise based fetch
function getPosts(e) {
    // Prevent button submission page reload
    e.preventDefault();
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => res.json())
        .then((data) => {
            let output = '';
            data.forEach(function(post) {
                //Backticks only
                output += `
                    <div class="col">
                    <div class="card mb-4 rounded-3 shadow-sm border-primary">
                        <div class="card-header py-3 text-white bg-primary border-primary">
                                <h4 class="my-0 fw-normal">Post ${post.id}</h4>
                            </div>
                            <div class="card-body text-start">
                                <h1 class="card-title pricing-card-title fs-3">userId:<small class="text-muted fw-light">${post.userId}</small></h1>
                                <h1 class="card-title pricing-card-title fs-3">id:<small class="text-muted fw-light">${post.id}</small></h1>
                                <h1 class="card-title pricing-card-title fs-3">title:<small class="text-muted fw-light">${post.title}</small></h1>
                                <ul class="list-unstyled mt-3 mb-4">
                                    <li>${post.body}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                `;
            })
            document.getElementById('postsOutput').innerHTML = output;
        })
        .catch((err) => console.log(err));
}

// Fetches 500 Comments from:https://jsonplaceholder.typicode.com/comments
// Promise based fetch
function getComments(e) {
    e.preventDefault();
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then((res) => res.json())
        .then((data) => {
            let output = '';
            data.forEach(function(post) {
                output += `
            <div class="col">
            <div class="card mb-4 rounded-3 shadow-sm border-primary">
                <div class="card-header py-3 text-white bg-primary border-primary">
                        <h4 class="my-0 fw-normal">Comment ${post.id}</h4>
                    </div>
                    <div class="card-body text-start">
                        <h1 class="card-title pricing-card-title fs-3">userId:<small class="text-muted fw-light">${post.postId}</small></h1>
                        <h1 class="card-title pricing-card-title fs-3">id:<small class="text-muted fw-light">${post.id}</small></h1>
                        <h1 class="card-title pricing-card-title fs-3">email:<small class="text-muted fw-light">${post.email}</small></h1>
                        <h1 class="card-title pricing-card-title fs-3">body:</small></h1>
                        <ul class="list-unstyled mt-3 mb-4">
                            <li>${post.body}</li>
                        </ul>
                        <a href="posts.html"><button type="button" class="w-100 btn btn-lg btn-outline-primary">Open</button></a>
                    </div>
                </div>
            </div>
            `
            })
            document.getElementById('commentsOutput').innerHTML = output;
        })
        .catch((err) => console.log(err));

}

function getAlbums(e) {
    e.preventDefault();
    fetch('https://jsonplaceholder.typicode.com/albums')
        .then((res) => res.json())
        .then((data) => {
            let output = '';
            data.forEach(function(post) {
                output +=
                    `
                    <div class="col">
                    <div class="card mb-4 rounded-3 shadow-sm border-primary">
                        <div class="card-header py-3 text-white bg-primary border-primary">
                                <h4 class="my-0 fw-normal">Album ${post.id}</h4>
                            </div>
                            <div class="card-body text-start">
                                <h1 class="card-title pricing-card-title fs-3">userId:<small class="text-muted fw-light">${post.userId}</small></h1>
                                <h1 class="card-title pricing-card-title fs-3">title:<small class="text-muted fw-light">${post.title}</small></h1>
                            </div>
                        </div>
                    </div>
            `
            })
            document.getElementById('albumsOutput').innerHTML = output;
        })
        .catch((err) => console.log(err));
}

function getPhotos(e) {
    e.preventDefault();
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then((res) => res.json())
        .then((data) => {
            let output = '';
            data.forEach(function(post) {
                output += `
                <div class="col">
                    <div class="card h-100">
                        <img src="${post.url}" class="card-img-top" alt="...">
                        <div class="card-body text-start">
                        <h1 class="card-title pricing-card-title fs-3">userId: <small class="text-muted fw-light">${post.id}</small></h1>
                        <h1 class="card-title pricing-card-title fs-3">title: <small class="text-muted fw-light">${post.title}</small></h1>
                        <h1 class="card-title pricing-card-title fs-3">thumbnailUrl: <small class="text-muted fw-light">${post.thumbnailUrl}</small></h1>
                        <h1 class="card-title pricing-card-title fs-3">albumId: <small class="text-muted fw-light">${post.albumId}</small></h1>
                    </div>
                    </div>
                </div>
        `
            })
            document.getElementById('photosOutput').innerHTML = output;
        })
        .catch((err) => console.log(err));
}

function getTodos(e) {
    e.preventDefault();
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then((res) => res.json())
        .then((data) => {
            let output = '';
            data.forEach(function(post) {
                output += `
            <div class="col">
            <div class="card mb-4 rounded-3 shadow-sm border-primary">
                <div class="card-header py-3 text-white bg-primary border-primary">
                        <h4 class="my-0 fw-normal">To Do's: #${post.id}</h4>
                    </div>
                    <div class="card-body text-start">
                        <h1 class="card-title pricing-card-title fs-3">userId: <small class="text-muted fw-light">${post.userId}</small></h1>
                        <h1 class="card-title pricing-card-title fs-3">id: <small class="text-muted fw-light">${post.id}</small></h1>
                        <h1 class="card-title pricing-card-title fs-3">completed: <small class="text-muted fw-light">${post.completed}</small></h1>
                    </div>
                </div>
            </div>
            `
            })
            document.getElementById('toDosoutput').innerHTML = output;
        })
        .catch((err) => console.log(err));
}

function getUsers(e) {
    e.preventDefault();
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((data) => {
            let output = '';
            data.forEach(function(post) {
                output += `
                <tr>
                <th scope="row">${post.id}</th>
                <td>${post.name}</td>
                <td>${post.username}</td>
                <td>${post.email}</td>
                <td></td>
                <td>${post.address.street}</td>
                <td>${post.address.suite}</td>
                <td>${post.address.city}</td>
                <td>${post.address.zipcode}</td>
                <td>${post.address.geo.lat}</td>
                <td>${post.address.geo.lng}</td>
            </tr>
            `
            })
            document.getElementById('usersOutput').innerHTML = output;
        })
        .catch((err) => console.log(err));
}