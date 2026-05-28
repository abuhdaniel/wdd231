```javascript id="t7m4r2"
window.addEventListener("DOMContentLoaded", () => {

const timestampField = document.getElementById("timestamp");

if (timestampField) {
timestampField.value = new Date().toISOString();
}

});

function openModal(id) {

const modal = document.getElementById(id);

if (modal) {
modal.showModal();
}

}

function closeModal(id) {

const modal = document.getElementById(id);

if (modal) {
modal.close();
}

}
```
