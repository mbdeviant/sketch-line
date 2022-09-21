const container = document.getElementById("container");
const clearBtn = document.getElementById("clear-button");

function formGrid(row, col) {
    container.style.setProperty('--grid-row', row);
    container.style.setProperty('--grid-col', col);
    for (let i = 0; i < (row * col); i++) {
        let gridCell = document.createElement('div');
        container.appendChild(gridCell).className = 'grid-item';
        gridCell.addEventListener('mouseover', () => {
            gridCell.style.background = "black";
        });
        clearBtn.addEventListener('click',()=>{
            gridCell.style.background = "white";
        });
    };

};
window.onload = formGrid(75, 75);
