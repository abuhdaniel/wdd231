// Navigation Menu Toggle
const menuButton = document.getElementById("menu");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    menuButton.classList.toggle("open");
});

// Set Current Year
document.getElementById("year").textContent = new Date().getFullYear();

// Last Modified Date
document.getElementById("lastModified").textContent =
    `Last Modification: ${document.lastModified}`;

// Timestamp
document.getElementById("timestamp").value = new Date().toISOString();

// Open Modal Function
function openModal(id) {
    document.getElementById(id).showModal();
}

// Close Modal Function
function closeModal(id) {
    document.getElementById(id).close();
}

// Membership Buttons
document.getElementById("npButton").addEventListener("click", () => {
    openModal("npModal");
});

document.getElementById("bronzeButton").addEventListener("click", () => {
    openModal("bronzeModal");
});

document.getElementById("silverButton").addEventListener("click", () => {
    openModal("silverModal");
});

document.getElementById("goldButton").addEventListener("click", () => {
    openModal("goldModal");
});

// Close Modal Buttons
document.getElementById("closeNp").addEventListener("click", () => {
    closeModal("npModal");
});

document.getElementById("closeBronze").addEventListener("click", () => {
    closeModal("bronzeModal");
});

document.getElementById("closeSilver").addEventListener("click", () => {
    closeModal("silverModal");
});

document.getElementById("closeGold").addEventListener("click", () => {
    closeModal("goldModal");
});
``
