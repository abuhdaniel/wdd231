const url = "data/members.json";

const cards = document.querySelector("#members");

/* FETCH MEMBER DATA */

async function getMembers() {

    try {

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Failed to fetch member data");
        }

        const data = await response.json();

        displayMembers(data.members);

    } catch (error) {

        console.error(error);

    }
}

getMembers();

/* DISPLAY MEMBERS */

function displayMembers(members) {

    cards.innerHTML = "";

    members.forEach((member) => {

        const card = document.createElement("section");

        card.classList.add("card");

        card.innerHTML = `
            <h2>${member.name}</h2>

            <img 
                src="images/${member.image}" 
                alt="${member.name}" 
                loading="lazy"
                width="300"
                height="200"
            >

            <p>${member.address}</p>

            <p>${member.phone}</p>

            <p>${member.membership} Member</p>

            <a 
                href="${member.website}" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit ${member.name} website"
            >
                Visit Website
            </a>
        `;

        cards.appendChild(card);
    });
}

/* GRID AND LIST VIEW */

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