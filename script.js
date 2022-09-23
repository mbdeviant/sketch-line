const container = document.getElementById("container");
const clearBtn = document.getElementById("clear-button");
const resizeBtn = document.getElementById("resize-button");
const rgbBtn = document.getElementById("rgb-button");
const eraserBtn = document.getElementById("eraser-button");
const bwBtn = document.getElementById("bw-button");

window.onload = formGrid(16);

function formGrid(gridSize) {
    let gridArea = gridSize * gridSize;
    for (let i = 1; i <= gridArea ; i++) {
        let gridCell = document.createElement('div');
        container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
        container.appendChild(gridCell);
    };
    var gridCells = container.querySelectorAll('div');
    gridCells.forEach(gridCells => gridCells.addEventListener('mouseover', ()=> gridCells.style.background ="black") );

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
    var gridCells = container.querySelectorAll('div');
    gridCells.forEach(gridCells  => gridCells.style.background = "white");
    formGrid(gridSize);
});








//ps: doing everthing in a for loop probably is a bad practice, do this again 