/*------- Get the select element ---------------*/
const contactSelect = document.getElementById("contact");

/*------ create options by name ------*/
contacts.forEach((product) => {
  const option = document.createElement("option");

  option.value = contact.name; // Value attribute name
  option.textContent = `${contact.name}`; //Display name

  contactSelect.appendChild(option); // Add option to the selector.
});

/*----- Keeping track of the number of contacts received ------*/

const form = document.getElementById("contact-us-form");

if (form) {
  form.addEventListener("submit", () => {
    // Get the current count
    let contactCount = localStorage.getItem("contactCount");

    // Initialize if not set
    if (!contactCount) {
      contactCount = 0;
    } else {
      contactCount = parseInt(contactCount);
    }
    // Add 1 to the count
    contactCount++;

    // Save it back to localStorage
    localStorage.setItem("contactCount", contactCount);
  });
}
