export function shuffle(array) {
  let currentIndex = array.length, randomIndex
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--

    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
  }

  return array
}

export function setItem(key, value) {
  localStorage.setItem(key, JSON.stringify(value))
}

export function getItem(key) {
  let item = JSON.parse(localStorage.getItem(key))
  return item
}
