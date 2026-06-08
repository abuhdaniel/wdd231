const deliveryCount = document.querySelector("#deliveryCount");
const totalQuantity = document.querySelector("#totalQuantity");
const silo1Count = document.querySelector("#silo1Count");
const silo2Count = document.querySelector("#silo2Count");
const summaryContainer = document.querySelector("#summaryContainer");
const storedPreference = document.querySelector("#storedPreference");

// Load report data
async function loadReports() {
    try {
        const response = await fetch("data/cement.json");

        if (!response.ok) {
            throw new Error("Failed to load inventory data.");
        }

        const data = await response.json();

        displayReportData(data);
        displayPreference();

    } catch (error) {
        console.error("Error loading reports:", error);

        summaryContainer.innerHTML = `
            <p class="error">
                Unable to load report data.
            </p>
        `;
    }
}

// Display report statistics
function displayReportData(data) {

    // Total deliveries
    deliveryCount.textContent = data.length;

    // Total quantity received
    const totalTons = data.reduce(
        (total, item) => total + item.quantity,
        0
    );

    totalQuantity.textContent = `${totalTons} Tons`;

    // Silo counts
    const silo1Deliveries = data.filter(
        item => item.silo === "Silo 1"
    );

    const silo2Deliveries = data.filter(
        item => item.silo === "Silo 2"
    );

    silo1Count.textContent = silo1Deliveries.length;
    silo2Count.textContent = silo2Deliveries.length;

    // Supplier summary
    const dangoteDeliveries = data.filter(
        item => item.supplier === "Dangote"
    );

    const buaDeliveries = data.filter(
        item => item.supplier === "BUA"
    );

    summaryContainer.innerHTML = `
        <article class="report-card">
            <h3>Dangote Deliveries</h3>
            <p>${dangoteDeliveries.length}</p>
        </article>

        <article class="report-card">
            <h3>BUA Deliveries</h3>
            <p>${buaDeliveries.length}</p>
        </article>

        <article class="report-card">
            <h3>Average Delivery</h3>
            <p>${(totalTons / data.length).toFixed(1)} Tons</p>
        </article>

        <article class="report-card">
            <h3>Total Inventory Records</h3>
            <p>${data.length}</p>
        </article>
    `;
}

// Display Local Storage preference
function displayPreference() {

    const preference =
        localStorage.getItem("viewPreference");

    if (preference) {
        storedPreference.textContent =
            `Saved View Preference: ${preference}`;
    } else {
        storedPreference.textContent =
            "No saved preference found.";
    }
}

// Initialize page
loadReports();