const container = document.querySelector('.grid-container');

function formGrid(row,col) {
    container.style.setProperty('--grid-row',row);
    container.style.setProperty('--grid-col',col);
    for (let i = 0;i <(row * col);i++){
        let gridCell = document.createElement('div');
        container.appendChild(gridCell).className = 'grid-item';
    };
};

window.onload = formGrid(16,16);


