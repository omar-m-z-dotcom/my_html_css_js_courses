/*
  Loop Challenge
*/

let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia", "Anwar"];

if (myAdmins.indexOf("Stop") == 0) {
  document.write("<div>we have no admins</div>");
} else if (myAdmins.indexOf("Stop") == -1) {
  document.write(`<div>we have ${myAdmins.length} admins</div>`);
  let stopIndex = myAdmins.length;
  document.write("<hr>");
  for (let i = 0; i < stopIndex; i++) {
    document.write("<div>")
    document.write(`the admin for team ${i + 1} is ${myAdmins[i]}<br>`);
    document.write("<h3>team members:</h3>");
    for (let j = 0; j < myEmployees.length; j++) {
      if (myAdmins[i][0].toLowerCase() == myEmployees[j][0].toLowerCase()) {
        document.write(`<p>- ${j + 1} ${myEmployees[j]}</p>`);
      }
    }
    document.write("</div>");
    if (i < stopIndex - 1) {
      document.write("<hr>");
    }
  }
} else {
  stopIndex = myAdmins.indexOf("Stop");
  document.write(`<div>we have ${stopIndex} admins</div>`);
  document.write("<hr>");
  for (let i = 0; i < stopIndex; i++) {
    document.write("<div>")
    document.write(`the admin for team ${i + 1} is ${myAdmins[i]}<br>`);
    document.write("<h3>team members:</h3>");
    for (let j = 0; j < myEmployees.length; j++) {
      if (myAdmins[i][0].toLowerCase() == myEmployees[j][0].toLowerCase()) {
        document.write(`<p>- ${j + 1} ${myEmployees[j]}</p>`);
      }
    }
    document.write("</div>");
    if (i < stopIndex - 1) {
      document.write("<hr>");
    }
  }
}