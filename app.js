const canvas = document.querySelector('#jsCanvas');
const ctx = canvas.getContext('2d');
const color = document.querySelector('#jsColors');
const lineWidthBar = document.querySelector('#jsRange');
const fillBtn = document.querySelector('#jsFill');
const clearBtn = document.querySelector('#jsClear');
const saveBtn = document.querySelector('#jsSave');

const INITIAL_WIDTH = document.querySelector('#jsCanvas').offsetWidth;
const INITIAL_HEIGHT = document.querySelector('#jsCanvas').offsetHeight;

canvas.width = INITIAL_WIDTH;
canvas.height = INITIAL_HEIGHT;

ctx.strokeStyle = '#2c2c2c';
ctx.lineWidth = 2.5;
ctx.fillStyle = 'white';
ctx.fillRect(0, 0, INITIAL_WIDTH, INITIAL_HEIGHT);

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
  console.log(event.which);
}

function onMouseUp(event) {
  stopPainting();
}

function onMouseLeave(event) {
  stopPainting();
}

function onColorClick(event) {
  ctx.strokeStyle = event.target.style.backgroundColor;
  ctx.fillStyle = event.target.style.backgroundColor;
}

function onChangeWidth(event) {
  const size = event.target.value;
  ctx.lineWidth = size;
}

function onFillBtnClick() {
  ctx.fillRect(0, 0, INITIAL_WIDTH, INITIAL_HEIGHT);
}
function onClearBtnClick() {
  ctx.clearRect(0, 0, INITIAL_WIDTH, INITIAL_HEIGHT);
}
function handleCommandMenu(event) {
  event.preventDefault();
}
function onSaveBtnClick() {
  const image = canvas.toDataURL('image/png');
  const link = document.createElement('a');
  link.href = image;
  link.download = 'PaintJS[Export🔥]';
  link.click();
}

if (canvas) {
  canvas.addEventListener('mousemove', onMouseMove);
  canvas.addEventListener('mousedown', startPainting);
  canvas.addEventListener('mouseup', onMouseUp);
  canvas.addEventListener('mouseleave', onMouseLeave);
  canvas.addEventListener('contextmenu', handleCommandMenu);
}

if (color) {
  color.addEventListener('click', onColorClick);
}

lineWidthBar.addEventListener('input', onChangeWidth);

if (fillBtn) {
  fillBtn.addEventListener('click', onFillBtnClick);
}
if (clearBtn) {
  clearBtn.addEventListener('click', onClearBtnClick);
}
if (saveBtn) {
  saveBtn.addEventListener('click', onSaveBtnClick);
}
