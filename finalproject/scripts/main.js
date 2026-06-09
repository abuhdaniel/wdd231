import {
    savePreference,
    getPreference
} from "./storage.js";

// Navigation Elements
const menuButton = document.querySelector("#menu-btn");
const navigation = document.querySelector("#navigation");

// Preference Elements
const saveButton = document.querySelector("#save-view");
const savedMessage = document.querySelector("#saved-message");

// Summary Elements
const deliveriesCount = document.querySelector("#deliveries-count");
const totalStock = document.querySelector("#total-stock");

/* ==========================
   HAMBURGER MENU
========================== */

if (menuButton && navigation) {

    menuButton.addEventListener("click", () => {

        navigation.classList.toggle("open");

        menuButton.textContent =
            navigation.classList.contains("open")
                ? "✖"
                : "☰";
    });
}

/* ==========================
   LOCAL STORAGE
========================== */

if (saveButton) {

    saveButton.addEventListener("click", () => {

        savePreference("Grid View");

        savedMessage.textContent =
            "Preference saved successfully.";

        setTimeout(() => {
            savedMessage.textContent = "";
        }, 3000);
    });
}

/* ==========================
   DISPLAY SAVED PREFERENCE
========================== */

document.addEventListener("DOMContentLoaded", () => {

    const preference = getPreference();

    if (savedMessage && preference) {

        savedMessage.textContent =
            `Current Preference: ${preference}`;
    }
});

/* ==========================
   LOAD HOME PAGE DATA
========================== */

async function loadSummary() {

    try {

        const response =
            await fetch("data/cement.json");

        if (!response.ok) {

            throw new Error(
                "Unable to load inventory data."
            );
        }

        const data =
            await response.json();

        displaySummary(data);

    } catch (error) {

        console.error(error);

        if (deliveriesCount) {
            deliveriesCount.textContent = "Error";
        }

        if (totalStock) {
            totalStock.textContent = "Error";
        }
    }
}

/* ==========================
   DISPLAY SUMMARY
========================== */

function displaySummary(data) {

    if (!deliveriesCount || !totalStock) {
        return;
    }

    // Total Deliveries
    deliveriesCount.textContent =
        data.length;

    // Total Cement Quantity

    const totalQuantity =
        data.reduce(
            (sum, item) => sum + item.quantity,
            0
        );

    totalStock.textContent =
        `${totalQuantity} Tons`;
}

/* ==========================
   INITIALIZE
========================== */

loadSummary();