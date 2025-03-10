const board = document.getElementById('board');

// Cria 81 células para o tabuleiro (9x9)
for (let i = 0; i < 81; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.dataset.row = Math.floor(i / 9);
    cell.dataset.col = i % 9;
    cell.addEventListener('click', () => {
      updateCell(cell);
    });
    board.appendChild(cell);
  }

// Define o elemento selecionado (padrão: Rua Horizontal)
let selectedTile = 'horizontal';

// Atualiza a seleção na paleta
const tiles = document.querySelectorAll('.tile');
tiles.forEach(tile => {
  tile.addEventListener('click', () => {
    selectedTile = tile.dataset.type;
    tiles.forEach(t => t.classList.remove('selected'));
    tile.classList.add('selected');
  });
});
// Seleciona o tile padrão
document.querySelector(`.tile[data-type="${selectedTile}"]`).classList.add('selected');

// Função que atualiza a célula de acordo com o elemento selecionado
function updateCell(cell) {
  cell.dataset.type = selectedTile;
  switch(selectedTile) {
    case 'empty':
      cell.textContent = '';
      break;
    case 'horizontal':
      cell.textContent = '—';
      break;
    case 'vertical':
      cell.textContent = '|';
      break;
    case 'cross':
      cell.textContent = '+';
      break;
    case 'obstaculo':
    cell.textContent = '\u{1F9F1}';
        break;
    case 'artefato':
    cell.textContent = '\u{1F4E6}';
    break;
    case 'start':
      cell.textContent = '\u{1F6A6}';
      break;
    case 'end':
      cell.textContent = '\u{1F3C1}';
      break;
    default:
      cell.textContent = '';
  }
}