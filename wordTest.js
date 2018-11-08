
const makeWord = (word) => {
  const grid = [...document.querySelectorAll('[transform="translate(16, 20)"]')[0].children].slice(0,52)
  const letters = word.split('')
  if (letters.length > 13) {
    return "Input size too large."
  } else {
    while (letters.length <= 13) {
      letters.push(" ")
    }
  }
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
  if (column) {
    let boxes = column.children
    console.log(boxes);
    for (j = 0; j < boxes.length; j++) {
      makeLetter(boxes[j], letter, startingX)
    }
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
    case "g":
      makeG(box, letter, startingX)
      break
    case "h":
      makeH(box, letter, startingX)
      break
    case "i":
      makeI(box, letter, startingX)
      break
    case "j":
      makeJ(box, letter, startingX)
      break
    case "k":
      makeK(box, letter, startingX)
      break
    case "l":
      makeL(box, letter, startingX)
      break
    case "m":
      makeM(box, letter, startingX)
      break
    case "n":
      makeN(box, letter, startingX)
      break
    case "o":
      makeO(box, letter, startingX)
      break
    case "!":
      makeEx(box, letter, startingX)
      break
  }
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
  } else if (y === "36" && (x === startingX.toString() || x === (startingX - 1).toString() || x === (startingX - 2).toString())) {
    box.setAttribute("fill", "#FF69B4")
  } else if (y === "48" && (x === startingX.toString() || x === (startingX - 2).toString())) {
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
  } else if (y === "12" && (x === startingX.toString())) {
    box.setAttribute("fill", "#FF69B4")
  } else if (y === "24" && x === startingX.toString()) {
    box.setAttribute("fill", "#FF69B4")
  } else if (y === "36" && x === startingX.toString()) {
    box.setAttribute("fill", "#FF69B4")
  } else if (y === "48" && x === startingX.toString()) {
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

const makeG = (box, letter, startingX) => {
  const x = box.attributes[3].value
  const y = box.attributes[4].value
  if (y === "0" && (x === startingX.toString() || x === (startingX - 1).toString() || x === (startingX - 2).toString())) {
    box.setAttribute("fill", "#FF69B4")
  } else if (y === "12" && (x === startingX.toString() || x === (startingX - 2).toString())) {
    box.setAttribute("fill", "#FF69B4")
  } else if (y === "24" && x === startingX.toString()) {
    box.setAttribute("fill", "#FF69B4")
  } else if (y === "36" && (x === startingX.toString() || x === (startingX - 1).toString() || x === (startingX - 2).toString())) {
    box.setAttribute("fill", "#FF69B4")
  } else if (y === "48" && (x === startingX.toString() || x === (startingX - 2).toString())) {
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

const makeH = (box, letter, startingX) => {
  const x = box.attributes[3].value
  const y = box.attributes[4].value
  if (y === "0" && (x === startingX.toString() || x === (startingX - 2).toString())) {
    box.setAttribute("fill", "#FF69B4")
  } else if (y === "12" && (x === startingX.toString() || x === (startingX - 2).toString())) {
    box.setAttribute("fill", "#FF69B4")
  } else if (y === "24" && (x === startingX.toString() || x === (startingX - 2).toString())) {
    box.setAttribute("fill", "#FF69B4")
  } else if (y === "36" && (x === startingX.toString() || x === (startingX - 1).toString() || x === (startingX - 2).toString())) {
    box.setAttribute("fill", "#FF69B4")
  } else if (y === "48" && (x === startingX.toString() || x === (startingX - 2).toString())) {
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

const makeI = (box, letter, startingX) => {
  const x = box.attributes[3].value
  const y = box.attributes[4].value
  if (y === "0" && (x === startingX.toString() || x === (startingX - 1).toString() || x === (startingX - 2).toString())) {
    box.setAttribute("fill", "#FF69B4")
  } else if (y === "12" && (x === (startingX - 1).toString())) {
    box.setAttribute("fill", "#FF69B4")
  } else if (y === "24" && (x === (startingX - 1).toString())) {
    box.setAttribute("fill", "#FF69B4")
  } else if (y === "36" && (x === (startingX - 1).toString())) {
    box.setAttribute("fill", "#FF69B4")
  } else if (y === "48" && (x === (startingX - 1).toString())) {
    box.setAttribute("fill", "#FF69B4")
  } else if (y === "60" && (x === (startingX - 1).toString())) {
    box.setAttribute("fill", "#FF69B4")
  } else if (y === "72" && (x === startingX.toString() || x === (startingX - 1).toString() || x === (startingX - 2).toString())) {
    box.setAttribute("fill", "#FF69B4")
  }
  else {
    box.setAttribute("fill", "#ebedf0")
  }
}

const makeJ = (box, letter, startingX) => {
  const x = box.attributes[3].value
  const y = box.attributes[4].value
  if (y === "0" && (x === (startingX - 2).toString())) {
    box.setAttribute("fill", "#FF69B4")
  } else if (y === "12" && (x === (startingX - 2).toString())) {
    box.setAttribute("fill", "#FF69B4")
  } else if (y === "24" && (x === (startingX - 2).toString())) {
    box.setAttribute("fill", "#FF69B4")
  } else if (y === "36" && (x === (startingX - 2).toString())) {
    box.setAttribute("fill", "#FF69B4")
  } else if (y === "48" && (x === startingX.toString() || x === (startingX - 2).toString())) {
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

const makeK = (box, letter, startingX) => {
  const x = box.attributes[3].value
  const y = box.attributes[4].value
  if (y === "0" && (x === startingX.toString() || x === (startingX - 2).toString())) {
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
  } else if (y === "72" && (x === startingX.toString() || x === (startingX - 2).toString())) {
    box.setAttribute("fill", "#FF69B4")
  }
  else {
    box.setAttribute("fill", "#ebedf0")
  }
}

const makeL = (box, letter, startingX) => {
  const x = box.attributes[3].value
  const y = box.attributes[4].value
  if (y === "0" && (x === startingX.toString())) {
    box.setAttribute("fill", "#FF69B4")
  } else if (y === "12" && (x === startingX.toString())) {
    box.setAttribute("fill", "#FF69B4")
  } else if (y === "24" && x === startingX.toString()) {
    box.setAttribute("fill", "#FF69B4")
  } else if (y === "36" && x === startingX.toString()) {
    box.setAttribute("fill", "#FF69B4")
  } else if (y === "48" && x === startingX.toString()) {
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

const makeM = (box, letter, startingX) => {
  const x = box.attributes[3].value
  const y = box.attributes[4].value
  if (y === "0" && (x === startingX.toString() || x === (startingX - 2).toString())) {
    box.setAttribute("fill", "#FF69B4")
  } else if (y === "12" && (x === startingX.toString() || x === (startingX - 1).toString() || x === (startingX - 2).toString())) {
    box.setAttribute("fill", "#FF69B4")
  } else if (y === "24" && (x === startingX.toString() || x === (startingX - 1).toString() || x === (startingX - 2).toString())) {
    box.setAttribute("fill", "#FF69B4")
  } else if (y === "36" && (x === startingX.toString() || x === (startingX - 1).toString() || x === (startingX - 2).toString())) {
    box.setAttribute("fill", "#FF69B4")
  } else if (y === "48" && (x === startingX.toString() || x === (startingX - 2).toString())) {
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

const makeN = (box, letter, startingX) => {
  const x = box.attributes[3].value
  const y = box.attributes[4].value
  if (y === "0" && (x === startingX.toString() || x === (startingX - 2).toString())) {
    box.setAttribute("fill", "#FF69B4")
  } else if (y === "12" && (x === startingX.toString() || x === (startingX - 1).toString() || x === (startingX - 2).toString())) {
    box.setAttribute("fill", "#FF69B4")
  } else if (y === "24" && (x === startingX.toString() || x === (startingX - 1).toString() || x === (startingX - 2).toString())) {
    box.setAttribute("fill", "#FF69B4")
  } else if (y === "36" && (x === startingX.toString() || x === (startingX - 1).toString() || x === (startingX - 2).toString())) {
    box.setAttribute("fill", "#FF69B4")
  } else if (y === "48" && (x === startingX.toString() || x === (startingX - 1).toString() || x === (startingX - 2).toString())) {
    box.setAttribute("fill", "#FF69B4")
  } else if (y === "60" && (x === startingX.toString() || x === (startingX - 1).toString() || x === (startingX - 2).toString())) {
    box.setAttribute("fill", "#FF69B4")
  } else if (y === "72" && (x === startingX.toString() || x === (startingX - 2).toString())) {
    box.setAttribute("fill", "#FF69B4")
  }
  else {
    box.setAttribute("fill", "#ebedf0")
  }
}

const makeO = (box, letter, startingX) => {
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
  } else if (y === "48" && (x === startingX.toString() || x === (startingX - 2).toString())) {
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

const makeEx = (box, letter, startingX) => {
  const x = box.attributes[3].value
  const y = box.attributes[4].value
  if (y === "0" && (x === startingX.toString())) {
    box.setAttribute("fill", "#FF69B4")
  } else if (y === "12" && (x === startingX.toString())) {
    box.setAttribute("fill", "#FF69B4")
  } else if (y === "24" && (x === startingX.toString())) {
    box.setAttribute("fill", "#FF69B4")
  } else if (y === "36" && (x === startingX.toString())) {
    box.setAttribute("fill", "#FF69B4")
  } else if (y === "48" && (x === startingX.toString())) {
    box.setAttribute("fill", "#FF69B4")
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

makeWord("ooo")
