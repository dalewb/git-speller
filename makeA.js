const grid = [...document.querySelectorAll('[transform="translate(16, 20)"]')[0].children].slice(0,52)

const getBoxes = (column, letter) => {
  let boxes = column.children
  for (j=0; j<boxes.length; j++) {
    makeLetter(boxes[j], letter)
  }
}

const makeRow = (grid, letter) => {
  for (i=0; i<grid.length; i++) {
    getBoxes(grid[i], letter)
  }
}

const makeLetter = (box, letter) => {
  switch (letter.toLowerCase()) {
    case "a":
      makeA(box, letter)
      break
    case "b":
      makeB(box, letter)
      break
  }
}

const makeA = (box, letter) => {
  const x = box.attributes[3].value
  const y = box.attributes[4].value
  if (y === "0" && (x === "13" || x === "12" || x === "11")) {
    box.setAttribute("fill", "#FF69B4")
  } else if (y === "12" && (x === "13" || x === "11")) {
    box.setAttribute("fill", "#FF69B4")
  } else if (y === "24" && (x === "13" || x === "11")) {
    box.setAttribute("fill", "#FF69B4")
  } else if (y === "36" && (x === "13" || x === "11")) {
    box.setAttribute("fill", "#FF69B4")
  } else if (y === "48" && (x === "13" || x === "12" || x === "11")) {
    box.setAttribute("fill", "#FF69B4")
  } else if (y === "60" && (x === "13" || x === "11")) {
    box.setAttribute("fill", "#FF69B4")
  } else if (y === "72" && (x === "13" || x === "11")) {
    box.setAttribute("fill", "#FF69B4")
  }
  else {
    box.setAttribute("fill", "#ebedf0")
  }
}

const makeB = (box, letter) => {
  const x = box.attributes[3].value
  const y = box.attributes[4].value
  if (y === "0" && (x === "13" || x === "12")) {
    box.setAttribute("fill", "#FF69B4")
  } else if (y === "12" && (x === "13" || x === "11")) {
    box.setAttribute("fill", "#FF69B4")
  } else if (y === "24" && (x === "13" || x === "11")) {
    box.setAttribute("fill", "#FF69B4")
  } else if (y === "36" && (x === "13" || x === "12")) {
    box.setAttribute("fill", "#FF69B4")
  } else if (y === "48" && (x === "13" || x === "11")) {
    box.setAttribute("fill", "#FF69B4")
  } else if (y === "60" && (x === "13" || x === "11")) {
    box.setAttribute("fill", "#FF69B4")
  } else if (y === "72" && (x === "13" || x === "12")) {
    box.setAttribute("fill", "#FF69B4")
  }
  else {
    box.setAttribute("fill", "#ebedf0")
  }
}


let letter = "A"

makeRow(grid, letter)
