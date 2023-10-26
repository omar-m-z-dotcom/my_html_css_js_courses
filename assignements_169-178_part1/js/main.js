"use strict";

let request = new XMLHttpRequest();
request.open("GET", "js/articles.json");
request.send();
request.onload = () => {
    if (request.status === 200) {
        // console.log(request.responseText);
        let mainData = JSON.parse(request.responseText);
        // for (let index = 0; index < mainData.length; index++) {
        //     mainData[index].category = "All";
        // }
        // console.log(mainData);
        // let updatedData = JSON.stringify(mainData);
        // console.log(updatedData);
        // console.log("Data loaded");
        let dataDiv = document.createElement("div");
        dataDiv.id = "data";
        document.body.appendChild(dataDiv);
        for (let index = 0; index < mainData.length; index++) {
            let article = mainData[index];
            let articleDiv = document.createElement("div");
            dataDiv.appendChild(articleDiv);
            let title = document.createElement("h2");
            title.innerHTML = article.title;
            articleDiv.appendChild(title);
            let content = document.createElement("p");
            content.innerHTML = article.content;
            articleDiv.appendChild(content);
            let author = document.createElement("p");
            author.innerHTML = `Author: ${article.author}`;
            articleDiv.appendChild(author);
            let category = document.createElement("p");
            category.innerHTML = `Category: ${article.category}`;
            articleDiv.appendChild(category);
        }
    } else {
        console.log(`error ${request.status} ${request.statusText}`);
    }
}