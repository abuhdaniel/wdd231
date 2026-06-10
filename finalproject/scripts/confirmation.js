const params = new URLSearchParams(window.location.search);

document.querySelector("#fullname").textContent =
    params.get("fullname") || "";

document.querySelector("#department").textContent =
    params.get("department") || "";

document.querySelector("#email").textContent =
    params.get("email") || "";

document.querySelector("#quantity").textContent =
    params.get("quantity") || "";

document.querySelector("#grade").textContent =
    params.get("grade") || "";

document.querySelector("#purpose").textContent =
    params.get("purpose") || "";