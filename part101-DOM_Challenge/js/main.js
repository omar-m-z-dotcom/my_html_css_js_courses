"use strict";

function addDefaultStyles() {
  return `text-transform: capitalize;box-sizing: border-box;`;
}

//to cover the whole page with the main page as a flex do it like this
//very important to either (set the height of the body to 100vh and set the height of the main page to 100%) or set the height of the main page to 100vh

// also when using the flexbox try to always put DomString inside an html element
//it's important to set the height of the flexbox elements so that their child elements respect the height of the flexbox element and their given height and width so that they don't overflow the flexbox element

document.body.style.cssText = `margin: 0;height: 100vh;`;


// Create main page
let mainpage = document.createElement("main");
mainpage.style.cssText = `display: flex;flex-direction: column;height: 100%;${addDefaultStyles()}`;

//add the main page to the body
document.body.appendChild(mainpage);


// create the header
let header = document.createElement("header");
header.style.cssText = `
    width: 100%;
    height: 10%;
    display: flex;
    row-gap: 62%;
    justify-content: space-between;${addDefaultStyles()}`;

// add the header to the main page
mainpage.appendChild(header);

// create the logo
let logo = document.createElement("div");
logo.style.cssText = `
    width: 10%;
    font-size: 2em;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    color: green;${addDefaultStyles()}`;

logo.innerHTML = "elzero";

// add the logo to the header
header.appendChild(logo);

// create the nav
let nav = document.createElement("nav");
nav.style.cssText = `
    width: calc(7% * 4);
    display: flex;${addDefaultStyles()}`;

// add the nav to the header
header.appendChild(nav);

// create the link divs
let homeDiv = document.createElement("div");
let aboutDiv = document.createElement("div");
let serviceDiv = document.createElement("div");
let contactDiv = document.createElement("div");
homeDiv.style.cssText = `
    width: 25%;
    display: flex;
    justify-content: center;
    align-items: center;${addDefaultStyles()}`;
aboutDiv.style.cssText = `
    width: 25%;
    display: flex;
    justify-content: center;
    align-items: center;${addDefaultStyles()}`;
serviceDiv.style.cssText = `
    width: 25%;
    display: flex;
    justify-content: center;
    align-items: center;${addDefaultStyles()}`;
contactDiv.style.cssText = `
    width: 25%;
    display: flex;
    justify-content: center;
    align-items: center;${addDefaultStyles()}`;
homeDiv.innerHTML = "home";
aboutDiv.innerHTML = "about";
serviceDiv.innerHTML = "service";
contactDiv.innerHTML = "contact";

// add the link divs to the nav
nav.appendChild(homeDiv);
nav.appendChild(aboutDiv);
nav.appendChild(serviceDiv);
nav.appendChild(contactDiv);

// create the content
let content = document.createElement("div");
content.className = "content";
content.style.cssText = `
    width: 100%;
    height: 80%;
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: space-between;
    align-content: space-between;
    background-color: lightgray;${addDefaultStyles()}`;

// add the content to the main page
mainpage.appendChild(content);

// create the products and add them to the content

/* very important note: when try to always specify the hight and width of elements in flexbox when possible*/
for (let i = 0; i < 15; i++) {
  let product = document.createElement("div");
  product.className = "product";
  product.style.cssText = `
    padding: 20px;
    border: 1px solid rgb(221, 221, 221);
    width: calc((100% - 40px) / 3);
    height: calc((100% - 80px) / 5);
    color: lightgray;
    border-radius: 6px;
    display: flex;
    flex-wrap: wrap;
    column-gap: 10px;
    justify-content: center;
    align-content: space-evenly;
    background-color: white;${addDefaultStyles()}`;
  content.appendChild(product);
}

// create a span for each product containing the product number and add it to the product then inside the product div put the text "product"

for (let i = 0; i < document.getElementsByClassName("product").length; i++) {
  let productNumber = document.createElement("span");
  productNumber.className = "product-number";
  productNumber.style.cssText = `
    font-size: 40px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;${addDefaultStyles()}`;
  productNumber.innerHTML = `${i + 1}`;
  document.getElementsByClassName("product")[i].appendChild(productNumber);
  document.getElementsByClassName("product")[i].innerHTML += "product";
}

// create the footer
let footer = document.createElement("footer");
footer.style.cssText = `
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: green;
    color: white;${addDefaultStyles()}`;
footer.innerHTML = "copyright&copy; 2021";

// add the footer to the main page
mainpage.appendChild(footer);