let div = document.createElement('div');
const container = document.getElementById('grid');

for (let i = 0; i < (16*16); i++) {
  let div = document.createElement('div');
  div.classList.add('grid-item');
  div.id = 'gridItem';
  container.appendChild(div);
}
