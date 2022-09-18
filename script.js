const container = document.querySelector('.grid-container');

function formGrid() {
    for (let i = 1; i <= 256; i++) {
        div = document.createElement('div');
        div.classList.add("grid-item");
        div.textContent = ``;
        container.appendChild(div);
    }
}
window.onload = formGrid();