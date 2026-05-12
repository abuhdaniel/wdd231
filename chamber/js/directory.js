const url = "data/members.json";
const cards = document.querySelector("#members");

/* Fetch Member Data */

async function getMembers() {
    const response = await fetch(url);
    const data = await response.json();

    displayMembers(data.members);
}

getMembers();

/* Display Members */

const displayMembers = (members) => {
    members.forEach((member) => {

        const card = document.createElement("section");
        card.classList.add("card");

        const name = document.createElement("h3");
        const image = document.createElement("img");
        const address = document.createElement("p");
        const phone = document.createElement("p");
        const website = document.createElement("a");
        const level = document.createElement("p");

        name.textContent = member.name;

        image.setAttribute("src", `images/${member.image}`);
        image.setAttribute("alt", member.name);
        image.setAttribute("loading", "lazy");
        image.setAttribute("width", "300");
        image.setAttribute("height", "200");

        address.textContent = member.address;
        phone.textContent = member.phone;

        website.textContent = "Visit Website";
        website.setAttribute("href", member.website);
        website.setAttribute("target", "_blank");

        level.textContent = `Membership Level: ${member.membership}`;

        card.appendChild(name);
        card.appendChild(image);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
        card.appendChild(level);

        cards.appendChild(card);
    });
};

/* Grid and List View */

const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");

gridButton.addEventListener("click", () => {
    cards.classList.add("grid");
    cards.classList.remove("list");
});

listButton.addEventListener("click", () => {
    cards.classList.add("list");
    cards.classList.remove("grid");
});

/* Hamburger Menu */

const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    menuButton.classList.toggle("open");
});

/* Footer */

document.querySelector("#year").textContent =
    new Date().getFullYear();

document.querySelector("#lastModified").textContent =
    `Last Modified: ${document.lastModified}`;