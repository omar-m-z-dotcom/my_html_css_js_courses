"use strict";

// using promises with XMLHttpRequest Ajax
// let dataPromise = new Promise((resolve, reject) => {
//     let request = new XMLHttpRequest();
//     request.open("GET", "js/articles.json");
//     request.send();
//     request.onload = () => {
//         if (request.status === 200) {
//             let data = JSON.parse(request.responseText);
//             data.length = 5;
//             resolve(data);
//         } else {
//             reject(Error(request.statusText));
//         }
//     };
//     request.onerror = () => {
//         reject(Error(request.statusText));
//     };
// }).then((data) => {
//     data.forEach((article) => {
//         let articleDiv = document.createElement("div");
//         document.body.appendChild(articleDiv);
//         let html = `<h3>${article.title}</h3><p>${article.description}</p>`;
//         articleDiv.innerHTML = html;
//     });
// }).catch((error) => {
//     console.log(error);
// });

// using async await with XMLHttpRequest Ajax
//** very important note: when one or more of the return statements of an async function is itself in an event async function, then you must wrap all the async function's return statements in a Promise object just like the getData function below because the onload and the onerror events of the XMLHttpRequest object are async functions

// async function getData() {
//     let request = new XMLHttpRequest();
//     request.open("GET", "js/articles.json");
//     request.send();
//     return new Promise((resolve, reject) => {
//         request.onload = () => {
//             if (request.status === 200) {
//                 let data = JSON.parse(request.responseText);
//                 data.length = 5;
//                 resolve(data);
//             } else {
//                 reject(Error(request.statusText));
//             }
//         };
//         request.onerror = () => {
//             reject(Error(request.statusText));
//         };
//     });
// }


// async function getArticle() {
//     let data = await getData().catch((error) => error);
//     if (data instanceof Error) {
//         console.log(data);
//     } else {
//         data.forEach((article) => {
//             let articleDiv = document.createElement("div");
//             document.body.appendChild(articleDiv);
//             let html = `<h3>${article.title}</h3><p>${article.description}</p>`;
//             articleDiv.innerHTML = html;
//         });
//     }
// }

// getArticle();

// using async await with fetch API
//** note: the response object returned by the fetch API is a promise object, so you can use the then() method to handle the response object or you can use the await keyword to wait for the response object to be resolved and then use the await keyword again to wait for the response object's json() method to be resolved as the json() method is also async function

// async function getArticle() {
//     let data = await fetch("js/articles.json").then((response) => response.json());
//     data.length = 5;
//     return data;
// }

async function getArticle() {
    let response = await fetch("js/articles.json");
    console.log(response);
    let data = await response.json();
    data.length = 5;
    console.log(data);
    return data;
}

async function showArticle() {
    let data = await getArticle();
    data.forEach((article) => {
        let articleDiv = document.createElement("div");
        document.body.appendChild(articleDiv);
        let html = `<h3>${article.title}</h3><p>${article.description}</p>`;
        articleDiv.innerHTML = html;
    });
}

showArticle();