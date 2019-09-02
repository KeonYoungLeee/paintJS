const canvas = document.getElementById('jsCanvas');
const ctx = canvas.getContext('2d');

canvas.width = 500;
canvas.height = 500;

ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;

let painting = false;

const stopPainting = () => painting = false;

const StartPainting = () => {
    painting = true;
}

const onMouseMove = (event) => {
    const x = event.offsetX;
    const y = event.offsetY;
    if (!painting) {
        console.log('Createing in', x, y)
        ctx.beginPath();
        ctx.moveTo(x, y);
    } else {
        console.log('Createing', x, y)
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}

const onMouseDown = (event) => {
    painting = true;
}


if (canvas) {
    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mousedown', StartPainting);
    canvas.addEventListener('mouseup', stopPainting);
    canvas.addEventListener('mouseleave', stopPainting);
}