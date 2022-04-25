const canvas = document.querySelector('#jsCanvas');
const ctx = canvas.getContext('2d');
const color = document.querySelector('#jsColors');
const lineWidthBar = document.querySelector('#jsRange');

canvas.width = document.querySelector('#jsCanvas').offsetWidth;
canvas.height = document.querySelector('#jsCanvas').offsetHeight;

ctx.strokeStyle = '#2c2c2c';
ctx.lineWidth = 2.5;

let painting = false;

function stopPainting() {
  painting = false;
}

function onMouseMove(event) {
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

function startPainting(event) {
  painting = true;
}

function onMouseUp(event) {
  stopPainting();
}

function onMouseLeave(event) {
  stopPainting();
}

function onColorClick(e) {
  ctx.strokeStyle = e.target.style.backgroundColor;
}

function onChangeWidth(e) {
  const size = e.target.value;
  ctx.lineWidth = size;
}

if (canvas) {
  canvas.addEventListener('mousemove', onMouseMove);
  canvas.addEventListener('mousedown', startPainting);
  canvas.addEventListener('mouseup', onMouseUp);
  canvas.addEventListener('mouseleave', onMouseLeave);
}

if (color) {
  color.addEventListener('click', onColorClick);
}

if (range) {
  lineWidthBar.addEventListener('input', onChangeWidth);
}
