let div = document.createElement('div');
const container = document.getElementById('grid');

for (let i = 0; i < (16*16); i++) {
  let div = document.createElement('div');
  div.classList.add('grid-item');
  div.id = 'gridItem';
  div.addEventListener('mouseover', colorChange);
  container.appendChild(div);
}

function colorChange(e){
  if (e.type === 'mouseover'){
    e.target.style.backgroundColor = 'black';
  }
}
