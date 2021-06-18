export let shuffle = (array) => {
  let currentIndex = array.length, randomIndex
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--

    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
  }

  return array
}

export let setItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value))
}

export let getItem = (key) => {
  let item = JSON.parse(localStorage.getItem(key))
  return item
}

export let getRandomInt = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min)
  //The maximum is exclusive and the minimum is inclusive
}

export let buildTrust = (character) => {
  if (character.trust !== 90) {
    character.trust += 20
  }
  else {
    return false //failed to build Trust
  }
  switch (character.trust) {
    case 70:
      character.hearts = [ "fas fa-heart", "fas fa-heart", "far fa-heart" ]
      break
    case 90:
      character.hearts = [ "fas fa-heart", "fas fa-heart", "fas fa-heart" ]
      break
    default:
      break
  }
  return true //successfully built Trust
}

//For the Ally or Betray phase of the Ambidex Game
//Pass in a character's Trust to determine if the team will Ally or Betray
export let ally = (character, support = character) => {
  let trust = character.trust + support.trust
  trust = trust / 2
  let betray = getRandomInt(1, 101) // 1 to 100
  if (betray <= trust) {
    return true //team chooses to Ally
  }
  else if (betray > trust) {
    return false //team chooses to Betray
  }
}
