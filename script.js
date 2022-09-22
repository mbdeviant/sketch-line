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
            if (gridCell.classList.contains('rgb')) {
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
        bwBtn.addEventListener('click',()=>{
            bwBtn.classList.add("clicked");
            gridCell.classList.remove("rgb");
            gridCell.classList.remove("eraser");
            rgbBtn.classList.remove("clicked");
            eraserBtn.classList.remove("clicked");
        })
        rgbBtn.addEventListener('click', () => {
            gridCell.classList.add("rgb");
            rgbBtn.classList.add("clicked");
            gridCell.classList.remove("eraser");
            eraserBtn.classList.remove("clicked");
            bwBtn.classList.remove("clicked");
        });
        eraserBtn.addEventListener('click',()=>{
            gridCell.classList.add("eraser");
            eraserBtn.classList.add("clicked");
            gridCell.classList.remove("rgb");
            rgbBtn.classList.remove("clicked");
            bwBtn.classList.remove("clicked");
        });
        resizeBtn.addEventListener('click', ()=>{
            gridCell.style.background = "white"; 
        });

    };

};

resizeBtn.addEventListener('click', () => {
    let promptGridSize = prompt("Maximum 100, defines both rows and columns");
    let gridSize = parseInt(promptGridSize);
    if (promptGridSize == null) return;
    else if (isNaN(gridSize)){
        window.alert("a number between 1 and 100 please");
        return;
    }
    else if (gridSize < 0 || gridSize > 100 ) {
        window.alert("a number between 1 and 100 please");
        return;
    }
    formGrid(gridSize, gridSize);
});








//ps: doing everthing in a for loop probably is a bad practice, do this again 