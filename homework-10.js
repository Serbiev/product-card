import { products } from "./products.js";

const productTemplate = document.querySelector('#product-template')
const productList = document.querySelector('#product-list')

function renderProducts(productsArray) {
  productsArray.forEach(card => {
    const productClone = productTemplate.content.cloneNode(true);
    productClone.querySelector('.card__image').src = card.image;
    productClone.querySelector('.card__image').alt = card.name;
    productClone.querySelector('.card__category').textContent = card.category;
    productClone.querySelector('.card__name').textContent = card.name;
    productClone.querySelector('.card__description').textContent = card.description;
    productClone.querySelector('.card__value').textContent = card.price;

    const compoundList = productClone.querySelector('.compound__list');
    compoundList.innerHTML = '';
    card.compound.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      compoundList.appendChild(li);
    });

    productList.appendChild(productClone);
  });
}

const productDescriptions = products.reduce((acc, product) => {
  acc[product.name] = product.description;
  return acc;
}, {});

console.log(productDescriptions);

function getCardsCount() {
  let count = prompt('Сколько карточек отобразить? От 1 до 5');

  while (count < 1 || count > 5 || isNaN(count) || count === null) {
    count = prompt('Введите число от 1 до 5');
  }

  return Number(count);
}

const cardsCount = getCardsCount();
const productsToShow = products.slice(0, cardsCount);
renderProducts(productsToShow);