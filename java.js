const container = document.getElementById('grid')
let rows = document.getElementsByClassName('gridRow')
let cells = document.getElementsByClassName('box')
allCells = Array.from(cells)
let rowNum = ''

function defaultGrid() {
  clearGrid()
  dimensions()
  makeRows(axisLength)
  makeColumns(axisLength)
}

function makeRows(rowNum) {
  for (r=0; r<rowNum; r++) {
    let row = document.createElement('div')
    container.appendChild(row).className = 'gridRow'
  }
}

function makeColumns(rowNum) {
  for (i = 0; i < rows.length; i++) {
    for (j = 0; j < rowNum; j++) {
      let newCell = document.createElement('div')
      rows[j].appendChild(newCell).className = 'box'
      newCell.addEventListener('mouseover', function(e) {
        e.target.style.background = 'black'
      })
    }
  }
}

function clearGrid() {
  while(container.firstChild) {
    container.firstChild.remove()
  }
}

function dimensions() {
  axisLength = prompt('What should the dimensions of the pad be? Whole integers only!', '16')
}