export let shuffle = (array) => {
  let currentIndex = array.length, randomIndex
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--

    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
  }

  return array
}

export let styleHearts = (trust) => {
  switch (trust) {
    case 10:
      return [ "fas fa-heart-broken", "fas fa-heart-broken", "fas fa-heart-broken" ]
    case 70:
      return [ "fas fa-heart", "fas fa-heart", "far fa-heart" ]
    case 90:
      return [ "fas fa-heart", "fas fa-heart", "fas fa-heart" ]
    default:
      return [ "fas fa-heart", "far fa-heart", "far fa-heart" ]
  }
}

export let getRandomInt = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min)
  //The maximum is exclusive and the minimum is inclusive
}
