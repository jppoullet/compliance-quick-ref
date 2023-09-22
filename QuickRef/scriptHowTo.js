"use strict";

// Triiggering dropdown menu when clicked, Closes menu when clicking anywhere else on page
document.addEventListener("click", dropDown);

function dropDown(event) {
  const dropDown = document.querySelector(".tools-dropdown");

  if (event.target.classList.contains("tools")) {
    dropDown.classList.toggle("show");
  } else {
    dropDown.classList.remove("show");
  }
}
