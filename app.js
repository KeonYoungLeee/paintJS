const canvas = document.getElementById('jsCanvas');
const ctx = canvas.getContext('2d');

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
        ctx.beginPath();
        ctx.moveTo(x, y);
    } else {
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