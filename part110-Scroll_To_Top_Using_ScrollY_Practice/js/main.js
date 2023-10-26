/*
  BOM [Browser Object Model]
  - Practice => Scroll To Top
  - scrollX [Alias => PageXOffset] // gets the horizontal scroll position of the window
  - scrollY [Alias => PageYOffset] // gets the vertical scroll position of the window
*/

// console.log(window.scrollX === window.pageXOffset);

let btn = document.querySelector("button");

window.onscroll = function () {
  console.log("scrollY: " + window.scrollY);
  console.log("scrollX: " + window.scrollX);
  if (window.scrollY >= 600) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

btn.onclick = function () {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth"
  });
};