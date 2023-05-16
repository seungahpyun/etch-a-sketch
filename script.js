const div = document.createElement('div');
const grid = document.getElementById('grid');
const gridItem = document.getElementsByClassName('grid-item');

let sizeSlide = document.getElementById('myRange');
const blackBtn = document.getElementById('blackBtn');
const rainbowBtn = document.getElementById('rainbowBtn');
const eraseBtn = document.getElementById('eraseBtn');
const defaultSize = 16;
const resetBtn = document.getElementById('resetBtn');

let blackColor = true;
let rainbow = false;
let eraser = false;

/*size*/
sizeSlide.addEventListener('change', changeGrid);

function getGridSize(){
  sizeSlide = document.getElementById('myRange');
  return sizeSlide.value;
}

function changeGrid() {
  grid.innerHTML = '';
  setGrid(getGridSize());
}

function setGrid(size){
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`
  grid.style.backgroundColor = 'whitesmoke';

  for (let i = 0; i < (size*size); i++) {
    let div = document.createElement('div');
    div.classList.add('grid-item');
    div.addEventListener('mouseover', colorChange);
    grid.appendChild(div);
  }
}

/*color*/
function toRainbow() {
    blackColor = false;
    rainbow = true;
    eraser = false;
}

function toBlack() {
    blackColor = true;
    rainbow = false;
    eraser = false;
}

function erase() {
  blackColor = false;
  rainbow = false;
  eraser = true;
}

blackBtn.addEventListener('click', toBlack);
rainbowBtn.addEventListener('click', toRainbow);
eraseBtn.addEventListener('click', erase);

function getRainbowColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function colorChange(e){
  if (e.type === 'mouseover' && blackColor === true) {
    e.target.style.backgroundColor = 'black';
  }
  if (e.type === 'mouseover' && rainbow === true){
    e.target.style.backgroundColor = getRainbowColor();
  }
  if (e.type === 'mouseover' && eraser === true) {
    e.target.style.backgroundColor = 'whitesmoke';
  }
}

/*reset*/
resetBtn.addEventListener('click',reset)
function reset() {
  toBlack()
  changeGrid()
}

window.onload = () => {
  setGrid(defaultSize)
}
