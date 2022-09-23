const container = document.getElementById("container");
const clearBtn = document.getElementById("clear-button");
const resizeBtn = document.getElementById("resize-button");
const rgbBtn = document.getElementById("rgb-button");
const eraserBtn = document.getElementById("eraser-button");
const bwBtn = document.getElementById("bw-button");

window.onload = formGrid(16);

function formGrid(gridSize) {
    let gridArea = gridSize * gridSize;
    for (let i = 1; i <= gridArea; i++) {
        let gridCell = document.createElement('div');
        container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
        container.appendChild(gridCell);
    };
    var gridCells = container.querySelectorAll('div');
    gridCells.forEach(gridCells => gridCells.addEventListener('mouseover', () => gridCells.style.background = "black"));
};
bwBtn.addEventListener('click',()=>{
    bwBtn.classList.add("clicked");
    rgbBtn.classList.remove("clicked");
    eraserBtn.classList.remove("clicked");
    var gridCells = container.querySelectorAll('div');
    gridCells.forEach(gridCells => gridCells.addEventListener('mouseover', ()=>{
        gridCells.style.background = "black";
    }))
});
rgbBtn.addEventListener('click', () => {
    rgbBtn.classList.add("clicked");
    bwBtn.classList.remove("clicked");
    eraserBtn.classList.remove("clicked");
    var gridCells = container.querySelectorAll('div');
    gridCells.forEach(gridCells => gridCells.addEventListener('mouseover', () => {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        gridCells.style.background = "#" + randomColor;
    }));
});
eraserBtn.addEventListener('click', ()=>{
    eraserBtn.classList.add("clicked");
    bwBtn.classList.remove("clicked");
    rgbBtn.classList.remove("clicked");
    var gridCells = container.querySelectorAll('div');
    gridCells.forEach(gridCells => gridCells.addEventListener('mouseover',()=>{
        gridCells.style.background = "white";
    }))
})


resizeBtn.addEventListener('click', () => {
    let promptGridSize = prompt("Maximum 100, defines rows and columns");
    let gridSize = parseInt(promptGridSize);
    if (promptGridSize == null) return;
    else if (isNaN(gridSize)) {
        window.alert("a number between 1 and 100 please");
        return;
    }
    else if (gridSize < 0 || gridSize > 100) {
        window.alert("a number between 1 and 100 please");
        return;
    }
    var gridCells = container.querySelectorAll('div');
    gridCells.forEach(gridCells => gridCells.style.background = "white");
    formGrid(gridSize);
});
clearBtn.addEventListener('click', () => {
    var gridCells = container.querySelectorAll('div');
    gridCells.forEach(gridCells => gridCells.style.background = "white");
});








//ps: doing everthing in a for loop probably is a bad practice, do this again 