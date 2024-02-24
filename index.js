const grid = document.getElementById('container');
let rows = [];

const resize = document.getElementById('resize');
const reset = document.getElementById('reset');
let cells = [];

const cleanGrid = ()=>{
    const rows = document.querySelectorAll('.row');
    rows.forEach(element => {
        element.remove();
    });
}
const askForUserInput = () => {

    const input = Number(prompt("Please Enter a Number 1-100"));
    if (input > 100){
        return 100
    }else if (input < 1) {
        return 0;
    }else {
        return input;
    }
}
const resizeGrid = () => {
    const input = askForUserInput();
    makeGrid(input);
    cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.addEventListener('mouseover', e => {
            changeCellColor(e);
        });
    });
}
const makeGrid = (dimension) => {
    let cell;
    cleanGrid();

    for (let i = 0; i< dimension; i++){
        rows[i] = document.createElement('div');
        rows[i].classList.add('row');
        for(let j = 0; j<dimension; j++){
            cell = document.createElement('div');
            cell.classList.add('cell');
            rows[i].append(cell);
        }
        grid.append(rows[i]);
    }
}
const resetGrid = () => {
    cleanGrid();
    makeGrid(10);
    cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.addEventListener('mouseover', e => {
            changeCellColor(e);
        });
    });
}

const changeCellColor = (e) => {
    e.target.classList.add('black');
}

resetGrid();


resize.addEventListener('click', resizeGrid);
reset.addEventListener('click', resetGrid);
