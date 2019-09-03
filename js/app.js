const canvas = document.getElementById('jsCanvas');
const ctx = canvas.getContext('2d');
const colors = document.getElementsByClassName('jsColors');
const range = document.getElementById('jsRange');
const mode = document.getElementById('jsMode');
const svaeBtn = document.getElementById('jsSave');

const INITIAL_COLOR = '#2c2c2c';
const CANVAS_SIZE = 500;

canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;

ctx.fillStyle = 'white';
ctx.fillRect(0,0, CANVAS_SIZE, CANVAS_SIZE);
ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;
ctx.lineWidth = 2.5;

let painting = false;
let filling = false;

const stopPainting = () => painting = false;

const StartPainting = () => {
    painting = true;
}

const onMouseMove = (event) => {
    const x = event.offsetX;
    const y = event.offsetY;
    if (!painting) {
        ctx.beginPath();
        ctx.moveTo(x, y);
    } else {
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}

const handlerColorClick = (event) => {
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
}

const handlerRangeChange = (event) => {
    const size = event.target.value;
    ctx.lineWidth = size;
}

const handlerModeClick = (event) => {
    if (filling === true) {
        filling = false;
        mode.innerText = 'Fill';
    } else {
        filling = true;
        mode.innerText = 'Paint'
        ctx.fillStyle = ctx.strokeStyle;
    }
}

const handlerCanvasClick = (event) => {
    if (filling) {
        ctx.fillRect(0,0, CANVAS_SIZE, CANVAS_SIZE);
    } 
}

const handlerCM = (event) => {
    event.preventDefault();
}

//save
const handlerSaveClick = () => {
    const image = canvas.toDataURL();
    const link = document.createElement('a');
    link.href = image;
    link.download = "PaintJS[^^]";
    link.click();
}

if (canvas) {
    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mousedown', StartPainting);
    canvas.addEventListener('mouseup', stopPainting);
    canvas.addEventListener('mouseleave', stopPainting);
    canvas.addEventListener('click', handlerCanvasClick);
    canvas.addEventListener('contextmenu', handlerCM);
}

Array.from(colors).forEach( (color) => {
    color.addEventListener('click', handlerColorClick)
});

if (range) {
    range.addEventListener('input', handlerRangeChange)
}

if(mode) {
    mode.addEventListener('click', handlerModeClick)
}

if(svaeBtn) {
    svaeBtn.addEventListener('click', handlerSaveClick)
}
