class Drink {
  #temperature;

  constructor(name, size, price, temperature) {
    this.name = name;
    this.size = size;
    this.price = price;
    this.#temperature = temperature;
  }

  getInfo() {
    return {
      name: this.name,
      size: this.size,
      price: this.price,
    };
  }

  getTemperature() {
    return this.#temperature;
  }

  setTemperature(temperature) {
    this.#temperature = temperature;
  }

  #prepare() {
    console.log(`Готовим ${this.name}, размером ${this.size}`);
    this.setTemperature(this.getTemperature() + 10);
  }

  serve() {
    this.#prepare();
    console.log(`Ваш заказ - ${this.name} готов!`);
    return this.getInfo();
  }
}

class Lemonade extends Drink {
  constructor(name, size, price, temperature, lemonadeflavor) {
    super(name, size, price, temperature);
    this.lemonadeflavor = lemonadeflavor;
  }

  getInfo() {
    return {
      ...super.getInfo(),
      вкус: this.lemonadeflavor,
    };
  }
}

class Tea extends Drink {
  constructor(name, size, price, temperature, tasteTea) {
    super(name, size, price, temperature);
    this.tasteTea = tasteTea;
  }

  getInfo() {
    return {
      ...super.getInfo(),
      сорт: this.tasteTea,
    };
  }
}

class Coffee extends Drink {
  constructor(name, size, price, temperature, beanType, milkType) {
    super(name, size, price, temperature);
    this.beanType = beanType;
    this.milkType = milkType;
  }

  getInfo() {
    return {
      ...super.getInfo(),
      зёрна: this.beanType,
      молоко: this.milkType,
    };
  }
}

class Cafe {
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }

  getInfo() {
    return {
      name: this.name,
      location: this.location,
    };
  }

  serve(drink) {
    console.log(`Заказ - ${drink.name}`);
    return drink.serve();
  }
}

const cafe = new Cafe('Центральное кафе', 'ул. Пушкина, д. 10');

console.log(cafe.getInfo());

const coffee = new Coffee('Капучино', 'M', 250, 70, 'Арабика', 'Овсяное');
const tea = new Tea('Зеленый чай', 'L', 180, 80, 'Сенча');
const lemonade = new Lemonade('Лимонад', 'S', 200, 5, 'Клубничный');

console.log(cafe.serve(coffee));
console.log(cafe.serve(tea));
console.log(cafe.serve(lemonade));