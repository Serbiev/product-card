import './comments.js';
import './homework-7.js';
import './homework-8.js';
import './homework-9.js';
import './homework-10.js';
import './homework-11.js';
import './homework-13.js'
import './modal.js';
import './form.js';


class Country {
  constructor(country, city, landmark) {
    this.country = country;
    this.city = city;
    this.landmark = landmark;
  }

  showInfo() {
    console.log(`I live in '${this.country}', in '${this.city}', and a landmark of the city is '${this.landmark}'.`);
  }
}

class CountryDetails extends Country {
  constructor(country, city, landmark, currency, population) {
    super(country, city, landmark);
    this.currency = currency;
    this.population = population;
  }

  showPopulation() {
    console.log(`Population ${this.city} - ${this.population}`);
  }

  showInfo() {
    super.showInfo();
    console.log(`National currency '${this.currency}'`);
  }
}

const italy = new Country('Italy', 'Rome', 'the Colosseum');
italy.showInfo();

const peru = new CountryDetails('Peru', 'Cusco', 'Machu Picchu', 'Peruvian Sol', 428450);
peru.showInfo();
peru.showPopulation();