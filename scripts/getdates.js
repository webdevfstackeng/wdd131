// DOM element for short date format
const last = document.querySelector("#lastModified");
const short = document.querySelector("#short");

//Date object
const today = new Date();

{
  datestyle: "Short";
}
last.innerHTML = ` Last Modified: <span class="date-format">${new Intl.DateTimeFormat(
  "en-US",
  {
    dateStyle: "short",
  },
).format(today)}</span>`;

short.innerHTML = `<span class="date-format">${today.getFullYear()}</span>`;
