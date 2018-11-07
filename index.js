const grid = [...document.querySelectorAll('[transform="translate(16, 20)"]')[0].children].slice(0,52)

const colorBoxes = (box) => {
  console.log(box)
  const x = box.attributes[3].value
  const y = box.attributes[4].value
  if (y === "0" && (x === "13" || x === "12" || x === "11" || x === "8" || x === "7" || x === "6" || x === "4" || x === "0" || x === "-4" || x === "-6")) {
    box.setAttribute("fill", "#FF69B4")
  } else if (y === "12" && (x === "13" || x === "10" || x === "7" || x === "4" || x === "0" || x === "-4" || x === "-6")) {
    box.setAttribute("fill", "#FF69B4")
  } else if (y === "24" && (x === "13" || x === "10" || x === "7" || x === "4" || x === "0" || x === "-4" || x === "-6")) {
    box.setAttribute("fill", "#FF69B4")
  } else if (y === "36" && (x === "13" || x === "12" || x === "11" || x === "7" || x === "4" || x === "0" || x === "-5")) {
    box.setAttribute("fill", "#FF69B4")
  } else if (y === "48" && (x === "13" || x === "10" || x === "7" || x === "4" || x === "0" || x === "-5")) {
    box.setAttribute("fill", "#FF69B4")
  } else if (y === "60" && (x === "13" || x === "10" || x === "7" || x === "4" || x === "0" || x === "-5")) {
    box.setAttribute("fill", "#FF69B4")
  } else if (y === "72" && (x === "13" || x === "12" || x === "11" || x === "8" || x === "7" || x === "6" || x === "4" || x === "3" || x === "2" || x === "0")) {
    box.setAttribute("fill", "#FF69B4")
  } else if (y === "72" && (x === "-1" || x === "-2" || x === "-5")) {
    box.setAttribute("fill", "#FF69B4")
  } else {
    box.setAttribute("fill", "#ebedf0")
  }
}

const getBoxes = (column) => {
  let boxes = column.children
  for (j=0; j<boxes.length; j++) {
    colorBoxes(boxes[j])
  }
}

const makeRow = (grid) => {
  for (i=0; i<grid.length; i++) {
    getBoxes(grid[i])
  }
}

makeRow(grid)
