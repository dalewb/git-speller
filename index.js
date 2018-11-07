const grid = [...document.querySelectorAll('[transform="translate(16, 20)"]')[0].children].slice(0,52)

const getBoxes = (row) => {
  console.log(row)
}

const makeRow = (grid) => {
  for (i=0; i<grid.length; i++) {
    getBoxes(grid[i])
  }
}

makeRow(grid)
