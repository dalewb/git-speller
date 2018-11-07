const grid = [...document.querySelectorAll('[transform="translate(16, 20)"]')[0].children].slice(0,52)

const getBoxes = (column) => {
  let boxes = column.children
  for (j=0; j<boxes.length; j++) {
    console.log(boxes[j].setAttribute("fill", "#196127"))
  }
}

const makeRow = (grid) => {
  for (i=0; i<grid.length; i++) {
    getBoxes(grid[i])
  }
}

makeRow(grid)


for (j=0; j<8; j++) {
  console.log(row[i])
}

grid[0].children[0].attributes[3].value
