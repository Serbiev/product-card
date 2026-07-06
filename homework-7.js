function showWeather(city, temperature) {
  console.log(`Сейчас в ${city} температура — ${temperature} градусов по Цельсию`)
}

showWeather('New York', 23)

const LIGHT_SPEED = 299792458

function checkSpeed(speed) {
  if (speed > LIGHT_SPEED) {
    console.log('Сверхсветовая скорость')
  } else if (speed < LIGHT_SPEED) {
    console.log('Субсветовая скорость')
  } else {
    console.log('Скорость света')
  }
}

checkSpeed(300792458)
checkSpeed(299792457)
checkSpeed(299792458)


let macBook = 'MacBook Pro'
let priceMacBook = 3090

function checkBudget(budget) {
  if (budget >= priceMacBook) {
    console.log(`${macBook} приобретён. Спасибо за покупку!`)
  } else {
    console.log(`Вам не хватает ${priceMacBook - budget}$, пополните баланс`)
  }
}

checkBudget(4000)
checkBudget(2790)


function greetBrother() {
  console.log('Hello my brother')
}

greetBrother()


const GOLDEN_RATIO = 1.61803
let shareNividia = 194.83
let cheetahSpeed = 120
