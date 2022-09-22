const container = document.getElementById("container");
const clearBtn = document.getElementById("clear-button");
const resizeBtn = document.getElementById("resize-button");
const rgbBtn = document.getElementById("rgb-button");
const eraserBtn = document.getElementById("eraser-button");
const bwBtn = document.getElementById("bw-button");

window.onload = formGrid(16, 16);

function formGrid(row, col) {
    container.style.setProperty('--grid-row', row);
    container.style.setProperty('--grid-col', col);
    for (let i = 0; i < (row * col); i++) {
        let gridCell = document.createElement('div');
        container.appendChild(gridCell).className = 'grid-item';
        gridCell.addEventListener('mouseover', () => {
            gridCell.style.background = "black";
            if (gridCell.classList.contains('rgb') == true) {
                const randomColor = Math.floor(Math.random() * 16777215).toString(16);
                gridCell.style.background = "#" + randomColor;
            }
            else if (gridCell.classList.contains("eraser")){
                gridCell.style.background = "white";
            }
        });
        clearBtn.addEventListener('click', () => {
            gridCell.style.background = "white";
        });
        rgbBtn.addEventListener('click', () => {
            gridCell.classList.toggle("rgb");
            gridCell.classList.remove("eraser");
            rgbBtn.classList.add("clicked");
            eraserBtn.classList.remove("clicked");
        });
        eraserBtn.addEventListener('click',()=>{
            gridCell.classList.toggle("eraser");
            gridCell.classList.remove("rgb");
            eraserBtn.classList.add("clicked");
            rgbBtn.classList.remove("clicked");
        });

    };

};

resizeBtn.addEventListener('click', () => {
    let gridSize = prompt("Maximum 100, defines both rows and columns");
    //typeof prompt is always string
    if (gridSize == null) return;
    else if (gridSize > 100) {
        gridSize = 100;
    }
    formGrid(gridSize, gridSize);
});
