// Elements and ids accessing
const last = document.querySelector("#lastModified");
const short = document.querySelector("#short");

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

/*************************** Wind chill Factor is computation ********************************/

// Wind chill is only defined for temperatures <= 10°C and wind speeds > 4.8 km/h
document.addEventListener("DOMContentLoaded", () => {
  // Testing figures
  const currentTemperature = 9; // in °C
  const currentWindSpeed = 10; // in km/h
  let computedWindChill = "N/A";

  if (currentTemperature <= 10 && currentWindSpeed > 4.8) {
    computedWindChill = (
      13.12 +
      0.6215 * currentTemperature -
      11.37 * Math.pow(currentWindSpeed, 0.16) +
      0.3965 * currentTemperature * Math.pow(currentWindSpeed, 0.16)
    ).toFixed();
  }
  const windChillDisplay = document.getElementById("windChillDisplay");
  if (windChillDisplay) {
    windChillDisplay.textContent = `${computedWindChill}°C`;
  }
});
