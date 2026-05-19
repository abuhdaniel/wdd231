const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    menuButton.classList.toggle("open");
});

const year = document.querySelector("#year");

if (year) {
    year.textContent = new Date().getFullYear();
}

const modified = document.querySelector("#lastModified");

if (modified) {
    modified.textContent = `Last Modified: ${document.lastModified}`;
}