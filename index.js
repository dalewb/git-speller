document.querySelectorAll('[transform="translate(16, 20)"]')[0].children[0].children[0].setAttribute("fill", "black")

const grid = [...document.querySelectorAll('[transform="translate(16, 20)"]')[0].children].slice(0,52)


const getBoxes = (row) => {
  
}

const makeRow = (grid) => {
  grid.forEach((row) => {
    console.log(row.children)
  })
}
