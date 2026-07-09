// №3 Создал объект на основе своих данных
const user = {
  name: 'Abubakr',
  shurname: 'Serbiev',
  mail: 'serbievabubakr73@gmail.com',
  job: 'Software Engineer',
  age: 26,
  country: 'Kazahstan',
  city: 'Almaty'
}

// №4 Создал объект с данными об автомобиле, добавил владельца отдельной строкой
const car = {
  brand: 'Toyota',
  model: 'Camry',
  year: 2024,
  color: 'black',
  transmission: 'Automatic'
}

car.owner = user
console.log(car)

// №5 Функция проверяет наличие maxSpeed, если нет - добавляет
function ensureMaxSpeed(objcar) {
  if (!objcar.maxSpeed) {
    objcar.maxSpeed = 260
  }
}
ensureMaxSpeed(car)
console.log(car)

// №6 Функция выводит значение свойства объекта по его названию
function printProperty(obj, propName) {
  console.log(obj[propName])
}
printProperty(user, 'job')

// №7 Массив с названиями продуктов
const fruits = [
  'Apple',
  'Banana',
  'Orange',
  'Strawberry',
  'Grape'
]

// №8 Массив объектов-книг, добавил ещё одну книгу через push
const books = [
  {
    title: 'A Game of Thrones',
    author: 'George R.R. Martin',
    releaseYear: 1996,
    coverColor: 'Black',
    genre: 'Fantasy'
  },

  {
    title: 'A Clash of Kings',
    author: 'George R.R. Martin',
    releaseYear: 1998,
    coverColor: 'Dark Green',
    genre: 'Fantasy'
  },

  {
    title: 'A Storm of Swords',
    author: 'George R.R. Martin',
    releaseYear: 2000,
    coverColor: 'Dark Red',
    genre: 'Fantasy'
  }
]

books.push({
  title: 'A Feast for Crows',
  author: 'George R.R. Martin',
  releaseYear: 2005,
  coverColor: 'White',
  genre: 'Fantasy'
})

// №9 Второй массив той же сущности (комиксы), объединил оба массива через spread
const comics = [
  {
    title: 'The Amazing Spider-Man #1',
    author: 'Stan Lee',
    releaseYear: 1963,
    coverColor: 'Red',
    genre: 'Superhero'
  },

  {
    title: 'X-Men #1',
    author: 'Stan Lee',
    releaseYear: 1963,
    coverColor: 'Blue',
    genre: 'Superhero'
  },

  {
    title: 'Batman: Year One',
    author: 'Frank Miller',
    releaseYear: 1987,
    coverColor: 'Black',
    genre: 'Superhero'
  }
]

const combinedList = [ ...books, ...comics ]
console.log(combinedList)

// №10 Через map добавил свойство isRare в зависимости от года выпуска
const booksWithIsRare = combinedList.map(function(book) {
  if (book.releaseYear > 2000) {
    return {...book, isRare: true}
  } else {
    return {...book, isRare: false}
  }
})

console.log(booksWithIsRare)