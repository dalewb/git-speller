
const makeWord = (word) => {
  const grid = [...document.querySelectorAll('[transform="translate(16, 20)"]')[0].children].slice(0,52)
  const letters = word.split('')
  for (k = 0; k < letters.length; k++) {
    // conditional for having too long of a string to fit in boxes
    let startingX = (13 - (k * 4))
    let xIndex = (k * 4)
    for (i = xIndex; i < (xIndex + 4); i++) {
      getBoxes(grid[i], letters[k].toLowerCase(), startingX)
    }
  }
}

const getBoxes = (column, letter, startingX) => {
  let boxes = column.children
  for (j = 0; j < boxes.length; j++) {
    makeLetter(boxes[j], letter, startingX)
  }
}

const makeLetter = (box, letter, startingX) => {
  switch (letter) {
    case " ":
      makeSpace(box, letter, startingX)
      break
    case "a":
      makeA(box, letter, startingX)
      break
    case "b":
      makeB(box, letter, startingX)
      break
    case "c":
      makeC(box, letter, startingX)
      break
    case "d":
      makeD(box, letter, startingX)
      break
    case "e":
      makeE(box, letter, startingX)
      break
    case "f":
      makeF(box, letter, startingX)
      break
}

const makeA = (box, letter, startingX) => {
  const x = box.attributes[3].value
  const y = box.attributes[4].value
  if (y === "0" && (x === startingX.toString() || x === (startingX - 1).toString() || x === (startingX - 2).toString())) {
    box.setAttribute("fill", "#FF69B4")
  } else if (y === "12" && (x === startingX.toString() || x === (startingX - 2).toString())) {
    box.setAttribute("fill", "#FF69B4")
  } else if (y === "24" && (x === startingX.toString() || x === (startingX - 2).toString())) {
    box.setAttribute("fill", "#FF69B4")
  } else if (y === "36" && (x === startingX.toString() || x === (startingX - 2).toString())) {
    box.setAttribute("fill", "#FF69B4")
  } else if (y === "48" && (x === startingX.toString() || x === (startingX - 1).toString() || x === (startingX - 2).toString())) {
    box.setAttribute("fill", "#FF69B4")
  } else if (y === "60" && (x === startingX.toString() || x === (startingX - 2).toString())) {
    box.setAttribute("fill", "#FF69B4")
  } else if (y === "72" && (x === startingX.toString() || x === (startingX - 2).toString())) {
    box.setAttribute("fill", "#FF69B4")
  }
  else {
    box.setAttribute("fill", "#ebedf0")
  }
}

const makeB = (box, letter, startingX) => {
  const x = box.attributes[3].value
  const y = box.attributes[4].value
  if (y === "0" && (x === startingX.toString() || x === (startingX - 1).toString())) {
    box.setAttribute("fill", "#FF69B4")
  } else if (y === "12" && (x === startingX.toString() || x === (startingX - 2).toString())) {
    box.setAttribute("fill", "#FF69B4")
  } else if (y === "24" && (x === startingX.toString() || x === (startingX - 2).toString())) {
    box.setAttribute("fill", "#FF69B4")
  } else if (y === "36" && (x === startingX.toString() || x === (startingX - 1).toString())) {
    box.setAttribute("fill", "#FF69B4")
  } else if (y === "48" && (x === startingX.toString() || x === (startingX - 2).toString())) {
    box.setAttribute("fill", "#FF69B4")
  } else if (y === "60" && (x === startingX.toString() || x === (startingX - 2).toString())) {
    box.setAttribute("fill", "#FF69B4")
  } else if (y === "72" && (x === startingX.toString() || x === (startingX - 1).toString())) {
    box.setAttribute("fill", "#FF69B4")
  }
  else {
    box.setAttribute("fill", "#ebedf0")
  }
}

const makeC = (box, letter, startingX) => {
  const x = box.attributes[3].value
  const y = box.attributes[4].value
  if (y === "0" && (x === startingX.toString() || x === (startingX - 1).toString() || x === (startingX - 2).toString())) {
    box.setAttribute("fill", "#FF69B4")
  } else if (y === "12" && (x === startingX.toString() || x === (startingX - 2).toString())) {
    box.setAttribute("fill", "#FF69B4")
  } else if (y === "24" && x === startingX.toString()) {
    box.setAttribute("fill", "#FF69B4")
  } else if (y === "36" && x === startingX.toString()) {
    box.setAttribute("fill", "#FF69B4")
  } else if (y === "48" && x === startingX.toString()) {
    box.setAttribute("fill", "#FF69B4")
  } else if (y === "60" && (x === startingX.toString() || x === (startingX - 2).toString())) {
    box.setAttribute("fill", "#FF69B4")
  } else if (y === "72" && (x === startingX.toString() || x === (startingX - 1).toString() || x === (startingX - 2).toString())) {
    box.setAttribute("fill", "#FF69B4")
  }
  else {
    box.setAttribute("fill", "#ebedf0")
  }
}

const makeD = (box, letter, startingX) => {
  const x = box.attributes[3].value
  const y = box.attributes[4].value
  if (y === "0" && (x === startingX.toString() || x === (startingX - 1).toString())) {
    box.setAttribute("fill", "#FF69B4")
  } else if (y === "12" && (x === startingX.toString() || x === (startingX - 2).toString())) {
    box.setAttribute("fill", "#FF69B4")
  } else if (y === "24" && (x === startingX.toString() || x === (startingX - 2).toString())) {
    box.setAttribute("fill", "#FF69B4")
  } else if (y === "36" && (x === startingX.toString() || x === (startingX - 2).toString())) {
    box.setAttribute("fill", "#FF69B4")
  } else if (y === "48" && (x === startingX.toString() || x === (startingX - 2).toString())) {
    box.setAttribute("fill", "#FF69B4")
  } else if (y === "60" && (x === startingX.toString() || x === (startingX - 2).toString())) {
    box.setAttribute("fill", "#FF69B4")
  } else if (y === "72" && (x === startingX.toString() || x === (startingX - 1).toString())) {
    box.setAttribute("fill", "#FF69B4")
  }
  else {
    box.setAttribute("fill", "#ebedf0")
  }
}

const makeE = (box, letter, startingX) => {
  const x = box.attributes[3].value
  const y = box.attributes[4].value
  if (y === "0" && (x === startingX.toString() || x === (startingX - 1).toString() || x === (startingX - 2).toString())) {
    box.setAttribute("fill", "#FF69B4")
  } else if (y === "12" && (x === startingX.toString())) {
    box.setAttribute("fill", "#FF69B4")
  } else if (y === "24" && (x === startingX.toString())) {
    box.setAttribute("fill", "#FF69B4")
  } else if (y === "36" && (x === startingX.toString() || x === (startingX - 1).toString())) {
    box.setAttribute("fill", "#FF69B4")
  } else if (y === "48" && (x === startingX.toString())) {
    box.setAttribute("fill", "#FF69B4")
  } else if (y === "60" && (x === startingX.toString())) {
    box.setAttribute("fill", "#FF69B4")
  } else if (y === "72" && (x === startingX.toString() || x === (startingX - 1).toString() || x === (startingX - 2).toString())) {
    box.setAttribute("fill", "#FF69B4")
  }
  else {
    box.setAttribute("fill", "#ebedf0")
  }
}

const makeF = (box, letter, startingX) => {
  const x = box.attributes[3].value
  const y = box.attributes[4].value
  if (y === "0" && (x === startingX.toString() || x === (startingX - 1).toString() || x === (startingX - 2).toString())) {
    box.setAttribute("fill", "#FF69B4")
  } else if (y === "12" && (x === startingX.toString())) {
    box.setAttribute("fill", "#FF69B4")
  } else if (y === "24" && (x === startingX.toString())) {
    box.setAttribute("fill", "#FF69B4")
  } else if (y === "36" && (x === startingX.toString() || x === (startingX - 1).toString())) {
    box.setAttribute("fill", "#FF69B4")
  } else if (y === "48" && (x === startingX.toString())) {
    box.setAttribute("fill", "#FF69B4")
  } else if (y === "60" && (x === startingX.toString())) {
    box.setAttribute("fill", "#FF69B4")
  } else if (y === "72" && (x === startingX.toString())) {
    box.setAttribute("fill", "#FF69B4")
  }
  else {
    box.setAttribute("fill", "#ebedf0")
  }
}


const makeSpace = (box, letter, startingX) => {
  box.setAttribute("fill", "#ebedf0")
}

makeWord("a")
