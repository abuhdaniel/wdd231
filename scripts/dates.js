// dates.js

// Current Year
const year = document.querySelector("#year");

year.textContent = new Date().getFullYear();


// Last Modified Date
const lastModified = document.querySelector("#lastModified");

lastModified.textContent =
    `Last Modified: ${document.lastModified}`;