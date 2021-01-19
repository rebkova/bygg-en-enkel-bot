// Här är filen du ska jobba i! En funktion ska svara på
// om det är lördag idag eller inte och en funktion ska
// svara på hur många dagar det är kvar.

// Den här funktionen ska returnera true om det är lördag
// och false om det inte är lördag

var currentDay = new Date().getDay()

const isItSaturdayToday = (date) => {

  if (currentDay === 6) {
    return true
  } else {
    return false
  }

}

// Denna funktion ska returnera hur många dagar det är
// kvar till lördag
const daysUntil = (date) => {

  return Math.abs(6 - currentDay)
}

export {
  isItSaturdayToday,
  daysUntil
}
