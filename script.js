"use strict";

// Determing schedule date, 26 days out from current date

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let date = new Date();
console.log(date);

date.setDate(date.getDate() + 26);

let month = months[date.getMonth()];
let day = date.getDate();
let year = date.getFullYear();

console.log(`${month} ${day}, ${year}`);
document.getElementById("discoDate").innerHTML = `${month} ${day}, ${year}`;

//Search within ticketing system

function tmsSearch() {
  var userInput = document.getElementById("tms").value;
  // var lnk = document.getElementById("lnk");
  window.open("https://tms.corp.chartercom.com/Task/DetailRO/" + userInput);
  document.getElementById("tms").value = "";
}
function ucmSearch() {
  var userInput = document.getElementById("ucm").value;
  // var lnk = document.getElementById("lnk2");
  window.open("https://issuetrak.twcable.com/SPA/#/issue/update/" + userInput);
  document.getElementById("ucm").value = "";
}
function jiraSearch() {
  var userInput = document.getElementById("jira").value;
  // var lnk = document.getElementById("lnk3");
  window.open("https://jira.charter.com/browse/" + userInput);
  document.getElementById("jira").value = "";
}
