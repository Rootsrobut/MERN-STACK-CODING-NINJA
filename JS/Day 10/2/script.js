// lecture 1

// const divEle = document.querySelector('.card-container');

// function getDetails(id){
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://dummyjson.com/users/${id}`);
//   request.send();
//   request.addEventListener('load', function () {
//     console.log(this.responseText);
//     console.log(JSON.parse(this.responseText));
//     const data = JSON.parse(this.responseText);
//     console.log(data);
//     const card = `<div class="user-card">
//     <img src=${data.image} alt="Profile Image" />
//         <h3>${data.firstName}</h3>
//         <h3>${data.lastName}</h3>
//         <p class="email">${data.email}</p>
//         <button class="btn">View Profile</button>
//         </div>`;
//         divEle.insertAdjacentHTML('beforeend', card);
//   });
// }

// getDetails(4);
// getDetails(2);
// getDetails(10);






// Lecture 2


const divEle = document.querySelector('.card-container');
function getDetails(id) {
  fetchUser(id);
  fetchUser(id - 1, "afterend");
  fetchUser(id + 1, "beforeend");
}

function displayUser(data,pos,className=''){
    const card = `<div class="user-card ${className}">
    <img src=${data.image} alt="Profile Image" />
        <h3>${data.firstName}</h3>
        <h3>${data.lastName}</h3>
        <p class="email">${data.email}</p>
        <button class="btn">View Profile</button>
        </div>`;
      divEle.insertAdjacentHTML(pos, card);
}

function fetchUser(id, position) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://dummyjson.com/users/${id}`);
  request.send();
  request.addEventListener('load', function () {
    if (request.status === 404) return;
    const data = JSON.parse(this.responseText);
    console.log(data);
    displayUser(data, position);
  });
}

getDetails(4);
getDetails(2);
getDetails(10);





// lecture 3

// const divEle = document.querySelector('.card-container');
// function getDetails(id) {
//   fetch(`https://dummyjson.com/users/${id}`)
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error('Id does not match any data');
//     }
//     return response.json();
//   })
//     .then((user) => {
//       displayUser(user, 'beforeend');
//       return fetch(`https://dummyjson.com/users/${id - 1}`);
//     })
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error('No previous ID exist');
//         }
//       return response.json();
//     })
//     .then((user) => {
//       displayUser(user, 'afterbegin', 'other');
//     })
//     .catch((err) => {
//       console.error(err);
//     });
// }
// function displayUser(data, pos, className = '') {
//   const card = `<div class="user-card ${className}">
//         <img src=${data.image} alt="Profile Image" />
//         <h3>${data.firstName} </h3>
//         <h3>${data.lastName}</h3>
//         <p class="email">${data.email}</p>
//         <button class="btn">View Profile</button>
//         </div>`;

//   divEle.insertAdjacentHTML(pos, card);
// }
// getDetails(4);




//lecture 4

// const divEle = document.querySelector('.card-container');
// function getUser(url) {
//   return fetch(url).then((response) => {
//     if (!response.ok) {
//       throw new Error('Id does not match any data');
//     }
//     return response.json();
//   });
// }
// function getDetails(id) {
//   getUser(`https://dummyjson.com/users/${id}`)
//     .then((user) => {
//       displayUser(user, 'beforeend');
//       return getUser(`https://dummyjson.com/users/${id - 1}`);
//     })
//     .then((user) => {
//       displayUser(user, 'afterbegin', 'other');
//       return getUser(`https://dummyjson.com/users/${id - 2}`);
//     })
//     .then((user) => {
//       displayUser(user, 'afterbegin', 'back');
//     })
//     .catch((err) => {
//       console.error(err);
//     });
// }

// function displayUser(data, pos, className = '') {
//   const card = `<div class="user-card ${className}">
//         <img src=${data.image} alt="Profile Image" />
//         <h3>${data.firstName} </h3>
//         <h3>${data.lastName}</h3>
//         <p class="email">${data.email}</p>
//         <button class="btn">View Profile</button>
//         </div>`;

//   divEle.insertAdjacentHTML(pos, card);
// }
// getDetails(4);




