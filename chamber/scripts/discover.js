import { places } from "../data/places.mjs";

const cards = document.querySelector("#discover-cards");

places.forEach((place, index) => {

    const card = document.createElement("section");

    card.classList.add("card");
    card.style.gridArea = `card${index + 1}`;

    card.innerHTML = `
        <h2>${place.name}</h2>

        <figure>
            <img src="${place.image}"
                 alt="${place.name}"
                 loading="lazy"
                 width="300"
                 height="200">
        </figure>

        <address>${place.address}</address>

        <p>${place.description}</p>

        <button>Learn More</button>
    `;

    cards.appendChild(card);
});

const visitMessage =
    document.querySelector("#visit-message");

const lastVisit =
    localStorage.getItem("lastVisit");

const currentVisit = Date.now();

if (!lastVisit) {

    visitMessage.textContent =
        "Welcome! Let us know if you have any questions.";

} else {

    const days =
        Math.floor((currentVisit - lastVisit) / 86400000);

    if (days < 1) {

        visitMessage.textContent =
            "Back so soon! Awesome!";

    } else {

        visitMessage.textContent =
            `You last visited ${days} ${days === 1 ? "day" : "days"} ago.`;
    }
}

localStorage.setItem("lastVisit", currentVisit);

document.querySelector("#year").textContent =
    new Date().getFullYear();

document.querySelector("#lastModified").textContent =
    `Last Modified: ${document.lastModified}`;