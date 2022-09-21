const container = document.getElementById("container");
const clearBtn = document.getElementById("clear-button");
const resizeBtn = document.getElementById("resize-button");

window.onload = formGrid(16, 16);

function formGrid(row, col) {
    container.style.setProperty('--grid-row', row);
    container.style.setProperty('--grid-col', col);
    for (let i = 0; i < (row * col); i++) {
        let gridCell = document.createElement('div');
        container.appendChild(gridCell).className = 'grid-item';
        gridCell.addEventListener('mouseover', () => {
            gridCell.style.background = "black";
        });
        clearBtn.addEventListener('click', () => {
            gridCell.style.background = "white";
        });
    };

};


resizeBtn.addEventListener('click', () => {
    let gridSize = prompt("Maximum 100, defines both rows and columns");
    if (gridSize==null) return;
    else if (gridSize > 100){
        gridSize = 100;
    }
    formGrid(gridSize, gridSize);
});
