/*
  DOM [Events Simulation]
  - click
  - focus
  - blur
*/

let one = document.querySelector(".one");
let two = document.querySelector(".two");

window.onload = function () {
  two.focus();
};/*
document.images[0].onblur when the image loses focus, the link is clicked
document.images[0].onfocus when the image gains focus, the link is clicked
 */
one.onblur = function () {
  document.links[0].click();
};