
const makeWord = (word) => {
  const grid = [...document.querySelectorAll('[transform="translate(16, 20)"]')[0].children].slice(0,52)
  const letters = word.split('')
  letters.forEach(letter => {
    makeLetter(letter)
  })
}

const makeLetter = (letter) => {

}
