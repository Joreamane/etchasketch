const grid = document.getElementById('grid')
const setup = document.getElementById('setup')
const eraser = document.getElementById('eraser')
const color = document.getElementById('colorMode')
let colorChoice = document.getElementById('colorPicker')
let size = document.getElementById('inputNum').value

let currentMode = 'color'
let currentColor = 'black'

// This allows us to tell the page to register holding mousedown as a constant thing, instead just a single mousedown event
let mousedown = false
document.body.onmousedown = () => (mousedown = true)
document.body.onmouseup = () => (mousedown = false)

function clearGrid() {
  while(grid.firstChild) {
    grid.firstChild.remove()
  }
}
function reset() {
  clearGrid()
  setupGrid(inputNum.value)
}
function setupGrid(size) {
  clearGrid()
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`
  for(let i=0; i<Math.pow(size, 2); i++) {
    const gridElement = document.createElement('div')
    gridElement.classList.add('box')
    gridElement.addEventListener('mouseover', changeColor)
    gridElement.addEventListener('mousedown', changeColor)
    grid.appendChild(gridElement)
  }
}

function changeColor(e) {
  if(e.type === 'mouseover' && !mousedown) return
  if(currentMode === 'color') {
    e.target.style.backgroundColor = currentColor
  } else if (currentMode === 'erase') {
    e.target.style.backgroundColor = 'white'
  }
}
color.addEventListener('click', function() {
  currentMode = 'color'
})

eraser.addEventListener('click', function(){
  currentMode = 'erase'
})
color.addEventListener('click', function(){
  currentMode = 'color'
})
function setColor(newColor) {
  currentColor = newColor
}
colorChoice.onchange = (e) => setColor(e.target.value)

document.getElementById('reset').addEventListener('click', function() {
  reset(size)
})