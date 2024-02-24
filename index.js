const grid = document.getElementById('container');
let rows = [];
let cell;
const resize = document.getElementById('resize');

const cleanGrid = ()=>{
    const rows = document.querySelectorAll('.row');
    rows.forEach(element => {
        element.remove();
    });
}
const makeGrid = ()=> {
    cleanGrid();
    const dimension = Number(prompt("Please Enter a Number 1-100"));

    for (let i = 0; i< dimension; i++){
        rows[i] = document.createElement('div');
        rows[i].classList.add('row');
        for(let j = 0; j<dimension; j++){
            cell = document.createElement('div');
            cell.classList.add('cell');
            cell.setAttribute('width', `${500/dimension}px`);
            cell.setAttribute('height', `${500/dimension}px`)
            rows[i].append(cell);
        }
        grid.append(rows[i]);
    }
}

resize.addEventListener('click', makeGrid);