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

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x250/payson-utah-temple-exterior-1416671-wallpaper.jpg",
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
  },
  {
    templeName: "Melbourne Australia Temple",
    location: "Melbourne City, Australia",
    dedicated: "2000, June, 16",
    area: 10700,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/melbourne-australia/400x250/melbourne-austrailia-temple-lds-991373-wallpaper.jpg",
  },
  {
    templeName: "Bern Switzerland Temple",
    location: "Zollikofen, Switzerland",
    dedicated: "1992, October, 23–25",
    area: 35546,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/bern-switzerland/400x250/bern-switzerland-temple-lds-784290-wallpaper.jpg",
  },
  {
    templeName: "Johannesburg South Africa Temple",
    location: "Parktown, Johannesburg",
    dedicated: "1985, August, 24–25",
    area: 19184,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/johannesburg-south-africa/400x250/johannesburg-south-africa-temple-lds-83166-wallpaper.jpg",
  },
];

createTempleCard(temples);

const allTemples = document.querySelector("#active");
const before1900 = document.querySelector("#before1900");
const after2000 = document.querySelector("#after2k");
const largerThan90000 = document.querySelector("#larger90k");
const smallerThan10000 = document.querySelector("#smaller10k");
const getYear = (dedicated) => parseInt(dedicated.split(",")[0]);
const getArea = (area) => Number(area);

allTemples.addEventListener("click", () => {
  createTempleCard(temples);
});
before1900.addEventListener("click", () => {
  createTempleCard(
    temples.filter((temple) => getYear(temple.dedicated) < 1900),
  );
});
after2000.addEventListener("click", () => {
  createTempleCard(
    temples.filter((temple) => getYear(temple.dedicated) > 2000),
  );
});
largerThan90000.addEventListener("click", () => {
  createTempleCard(temples.filter((temple) => getArea(temple.area) > 90000));
});
smallerThan10000.addEventListener("click", () => {
  createTempleCard(temples.filter((temple) => getArea(temple.area) < 10000));
});

createTempleCard(temples);

function createTempleCard(filteredTemples) {
  document.querySelector(".image-temple").innerHTML = "";
  filteredTemples.forEach((temple) => {
    let card = document.createElement("section");
    let name = document.createElement("h3");
    let location = document.createElement("p");
    let dedicated = document.createElement("p");
    let area = document.createElement("p");
    let img = document.createElement("img");

    name.textContent = temple.templeName;
    location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
    dedicated.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
    area.innerHTML = `<span class="label">Area:</span> ${temple.area} sq ft`;
    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", `${temple.templeName} Temple`);
    img.setAttribute("loading", "lazy");

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedicated);
    card.appendChild(area);
    card.appendChild(img);

    document.querySelector(".image-temple").appendChild(card);
  });
}
