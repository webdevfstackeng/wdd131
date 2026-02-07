// DOM element for short date format
const last = document.querySelector("#lastModified");
const short = document.querySelector("#short");

//Date object
const today = new Date();

{
  datestyle: "Short";
}
last.innerHTML = `Last Modified: <span class="date-format">${new Intl.DateTimeFormat(
  "en-US",
  {
    dateStyle: "short",
  },
).format(today)}</span>`;

short.innerHTML = `<span class="date-format">${today.getFullYear()}</span>`;

/*------------ array of product objects ----------*/
const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5,
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7,
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5,
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9,
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0,
  },
];
/*------- Get the select element ---------------*/
const productSelect = document.getElementById("product");

/*------ create options by name ------*/
products.forEach((product) => {
  const option = document.createElement("option");

  option.value = product.name; // value attribute name
  option.textContent = `${product.name}`; //Display name

  productSelect.appendChild(option); // Add option to the selector.
});

/*----- Keeping track of the number of reviews completed ------*/

const form = document.getElementById("prf");

if (form) {
  form.addEventListener("submit", () => {
    // Get the current count
    let reviewCount = localStorage.getItem("reviewCount");

    // Initialize if not set
    if (!reviewCount) {
      reviewCount = 0;
    } else {
      reviewCount = parseInt(reviewCount);
    }
    // Add 1 to the count
    reviewCount++;

    // Save it back to localStorage
    localStorage.setItem("reviewCount", reviewCount);
  });
}
