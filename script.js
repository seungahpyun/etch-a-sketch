const div = document.createElement('div');
const grid = document.getElementById('grid');
const defaultSize = 16;
let currentSize = 0;


function colorChange(e){
  if (e.type === 'mouseover'){
    e.target.style.backgroundColor = 'black';
  }
}

function setNewsize(newSize) {
  currentSize = newSize
}


function setGrid(size){
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`

  for (let i = 0; i < (size*size); i++) {
    let div = document.createElement('div');
    div.classList.add('grid-item');
    div.addEventListener('mouseover', colorChange);
    div.addEventListener('mousedown', colorChange);
    grid.appendChild(div);
  }
}

window.onload = () => {
  setGrid(defaultSize)
}
