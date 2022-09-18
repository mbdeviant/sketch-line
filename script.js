const container = document.querySelector('.grid-container');

function formGrid() {
    for (let i = 1; i <= 16; i++) {
        const div = document.createElement('div');
        div.classList.add("grid-item");
        div.textContent = `${i}`
        container.appendChild(div);
    }
}