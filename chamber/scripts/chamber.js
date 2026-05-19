const apiKey = "6353e8bc642a3fcb1cab4f18c7a72500";

const weatherURL =
`https://api.openweathermap.org/data/2.5/forecast?lat=4.8156&lon=7.0498&appid=${apiKey}&units=imperial`;

/* WEATHER */

async function getWeather() {

    try {

        const response = await fetch(weatherURL);

        if (!response.ok) {
            throw new Error("Weather data failed");
        }

        const data = await response.json();

        document.querySelector("#current-temp").textContent =
            `${Math.round(data.list[0].main.temp)}°F`;

        document.querySelector("#weather-desc").textContent =
            data.list[0].weather[0].description;

        const forecast = document.querySelector("#forecast");

        forecast.innerHTML = "";

        for (let i = 8; i < 32; i += 8) {

            const item = document.createElement("p");

            item.textContent =
                `${data.list[i].dt_txt.split(" ")[0]}: ${Math.round(data.list[i].main.temp)}°F`;

            forecast.appendChild(item);
        }

    } catch (error) {

        console.error(error);

    }
}

getWeather();

/* COMPANY SPOTLIGHTS */

const spotlightURL = "data/members.json";

async function getSpotlights() {

    try {

        const response = await fetch(spotlightURL);

        if (!response.ok) {
            throw new Error("Spotlight data failed");
        }

        const data = await response.json();

        displaySpotlights(data.members);

    } catch (error) {

        console.error(error);

    }
}

function displaySpotlights(members) {

    const container =
        document.querySelector("#spotlight-container");

    const filteredMembers = members.filter((member) =>

        member.membership === "Gold" ||
        member.membership === "Silver"
    );

    const randomMembers =
        filteredMembers.sort(() => 0.5 - Math.random());

    const selectedMembers =
        randomMembers.slice(0, 3);

    selectedMembers.forEach((member) => {

        const card = document.createElement("section");

        card.classList.add("spotlight-card");

        card.innerHTML = `
            <h3>${member.name}</h3>

            <img
                src="images/${member.image}"
                alt="${member.name}"
                loading="lazy"
                width="200"
                height="120"
            >

            <p>${member.phone}</p>

            <p>${member.address}</p>

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

        container.appendChild(card);
    });
}

getSpotlights();