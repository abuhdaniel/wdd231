// URL Parameters
const params = new URLSearchParams(window.location.search);

// Current Year
document.addEventListener("DOMContentLoaded", () => {

    document.getElementById("year").textContent =
        new Date().getFullYear();

    // Display Form Results
    document.getElementById("results").innerHTML = `
        <p><strong>First Name:</strong> ${params.get("fname")}</p>

        <p><strong>Last Name:</strong> ${params.get("lname")}</p>

        <p><strong>Email Address:</strong> ${params.get("email")}</p>

        <p><strong>Mobile Phone:</strong> ${params.get("phone")}</p>

        <p><strong>Business Name:</strong> ${params.get("business")}</p>

        <p><strong>Date Submitted:</strong> ${params.get("timestamp")}</p>
    `;
});
