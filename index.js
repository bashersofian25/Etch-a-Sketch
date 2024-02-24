const grid = document.getElementById('container');
let rows = [];
let colorChoice;


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
            cell.style.backgroundColor = `rgb(255,255,255)`;
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
const getRndInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

const darkenRGB = (RGB) => {
    let color = RGB.substring(4, RGB.length-1);
    const splitRGB = color.split(',');
    let Red = Number(splitRGB[0]);
    let Green = Number(splitRGB[1]);
    let Blue = Number(splitRGB[2]);
    if(Red == Green && Green == Blue){
    
        if(Red-25 < 0){
            Red = 0;
            Green = 0;
            Blue = 0;
        }else {
            Red -= 25;
            Green -= 25;
            Blue -= 25;
        }
      
    } else{
        Red = 0;
        Green = 0;
        Blue = 0;

    }
    return `rgb(${Red},${Green},${Blue})`;
}

const changeCellColor = (e) => {
    colorChoice = document.getElementsByName('choice-color');
    if(colorChoice[0].checked){
        e.target.style.backgroundColor = `rgb(${getRndInteger(0,255)},${getRndInteger(0,255)},${getRndInteger(0,255)})`;
    }else if (colorChoice[1].checked){
        e.target.style.backgroundColor = `rgb(0,0,0)`;
    }else{
        const newRGB = darkenRGB(e.target.style.backgroundColor);
        e.target.style.backgroundColor = newRGB;
    }
    
    
}

resetGrid();


resize.addEventListener('click', resizeGrid);
reset.addEventListener('click', resetGrid);
