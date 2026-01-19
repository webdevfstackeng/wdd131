// Elements and ids accessing
const menuButton = document.querySelector("#menu-button");
const navMenu = document.querySelector("nav");
const last = document.querySelector("#lastModified");
const short = document.querySelector("#short");

//Navigation menu toggle
menuButton.addEventListener("click", () => {
  navMenu.classList.toggle("open");
  menuButton.classList.toggle("open");
});

//Current date capturing
const today = new Date();

// Last modified
last.innerHTML = ` Last Modified: <span class="date-format">${new Intl.DateTimeFormat(
  "en-US",
  {
    dateStyle: "short",
  },
).format(today)}</span>`;

short.textContent = today.getFullYear();

 