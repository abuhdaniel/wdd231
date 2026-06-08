// inventory.js

const inventoryContainer =
    document.querySelector("#inventory-container");

const supplierFilter =
    document.querySelector("#supplierFilter");

const modal =
    document.querySelector("#cementModal");

const modalContent =
    document.querySelector("#modalContent");

const closeModal =
    document.querySelector("#closeModal");

let inventoryData = [];

/* ===========================
   FETCH INVENTORY DATA
=========================== */

async function loadInventory() {
    try {
        const response =
            await fetch("data/cement.json");

        if (!response.ok) {
            throw new Error(
                "Failed to load inventory data."
            );
        }

        const data = await response.json();

        inventoryData = data;

        displayInventory(data);

    } catch (error) {

        inventoryContainer.innerHTML = `
            <p class="error">
                Unable to load inventory records.
            </p>
        `;

        console.error(error);
    }
}

/* ===========================
   DISPLAY INVENTORY CARDS
=========================== */

function displayInventory(data) {

    inventoryContainer.innerHTML = "";

    data.forEach(item => {

        const card =
            document.createElement("article");

        card.classList.add("inventory-card");

        card.innerHTML = `
            <h3>${item.supplier}</h3>

            <p>
                <strong>Date:</strong>
                ${item.date}
            </p>

            <p>
                <strong>Grade:</strong>
                ${item.grade}
            </p>

            <p>
                <strong>Quantity:</strong>
                ${item.quantity} Tons
            </p>

            <p>
                <strong>Silo:</strong>
                ${item.silo}
            </p>
        `;

        card.addEventListener("click", () => {
            openModal(item);
        });

        inventoryContainer.appendChild(card);
    });
}

/* ===========================
   MODAL DIALOG
=========================== */

function openModal(item) {

    modalContent.innerHTML = `
        <h2>${item.supplier}</h2>

        <p>
            <strong>Date:</strong>
            ${item.date}
        </p>

        <p>
            <strong>Grade:</strong>
            ${item.grade}
        </p>

        <p>
            <strong>Quantity:</strong>
            ${item.quantity} Tons
        </p>

        <p>
            <strong>Silo:</strong>
            ${item.silo}
        </p>

        <p>
            <strong>Delivery ID:</strong>
            ${item.id}
        </p>
    `;

    modal.showModal();
}

/* ===========================
   CLOSE MODAL
=========================== */

closeModal.addEventListener(
    "click",
    () => modal.close()
);

/* ===========================
   FILTER INVENTORY
=========================== */

supplierFilter.addEventListener(
    "change",
    () => {

        const selectedSupplier =
            supplierFilter.value;

        if (selectedSupplier === "all") {

            displayInventory(
                inventoryData
            );

            return;
        }

        const filteredData =
            inventoryData.filter(item =>
                item.supplier === selectedSupplier
            );

        displayInventory(filteredData);
    }
);

/* ===========================
   LOAD DATA
=========================== */

loadInventory();