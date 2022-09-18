const container = document.querySelector('.grid-container');

function formGrid() {
    for (let i = 1; i <= 16; i++) {
        const div = document.createElement('div');
        div.classList.add(i.toString());
        div.textContent = `this is the container number ${i}`;
        container.appendChild(div);

    }

}