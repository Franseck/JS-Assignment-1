const header = document.querySelector(".header");
header.style.backgroundColor = "#5F9EA0";
header.style.color = "#043927";
header.style.padding = "1.5rem";
header.style.fontFamily = "VT323, monospace";

const title = document.getElementById("title");
title.textContent = "JavaScript DOM Assignment 1";
title.style.textAlign = "center";

const navItem = document.querySelector(".nav-item");
navItem.style.listStyleType = "none";
navItem.style.display = "flex";
navItem.style.justifyContent = "center";
navItem.style.gap = "1.2rem";
navItem.style.marginTop = "1rem";

const username = document.querySelector("#username");
username.style.padding = "0.5rem";
username.style.borderRadius = "0.5rem";
username.placeholder = "Seckin";
username.disabled = true;

const password = document.querySelector("#password");
password.style.padding = "0.5rem";
password.style.borderRadius = "0.5rem";
password.placeholder = "R2105";
password.disabled = true;

const btn = document.querySelector(".btn");
btn.style.backgroundColor = "#5F9EA0";
btn.style.color = "#043927";
btn.style.padding = "0.5rem";
btn.style.borderRadius = "0.5rem";
btn.style.cursor = "pointer";
btn.textContent = "LOGIN";
btn.style.width = "5rem";
btn.style.border = "none";

const main = (document.getElementById(
  "projects"
).style.fontFamily = "VT323, monospace");

const h3 = document
  .getElementById("projects")
  .querySelector("h3");
h3.textContent = "JS DOM Projects";
h3.style.marginBottom = "5rem";

const myProjects = [
  "Hello World!",
  "Guess Number",
  "Checkout Page",
  "Income-Outcome Project",
  "Api Projects",
];

const ul = document
  .getElementById("projects")
  .querySelector("ul");
myProjects.map((projects) => {
  ul.innerHTML += `<li>${projects}</li>`;
});
