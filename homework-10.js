import { products } from "./products.js";

const productTemplate = document.querySelector('#product-template')
const productList = document.querySelector('#product-list')

function renderProducts(productArray) {
  productArray.forEach(card => {
    const productClone = productTemplate.content.cloneNode(true);
    productClone.querySelector('.card__image').src = `images/${card.image}.png`;
    productClone.querySelector('.card__image').alt = card.name;
    productClone.querySelector('.card__category').textContent = card.category;
    productClone.querySelector('.card__name').textContent = card.name;
    productClone.querySelector('.card__description').textContent = card.description;
    productClone.querySelector('.card__value').textContent = `${card.price.toLocaleString('ru-RU')} ₽`;

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

const productDescriptions = products.reduce((array, product) => {
  array.push({ [product.name]: product.description });
  return array;
}, []);

console.log(productDescriptions);

function getCardsCount() {
  const countString = prompt('Сколько карточек отобразить? От 1 до 5');
  let count = Number(countString);

  while (!count || count < 1 || count > 5) {
    count = Number(prompt('Введите число от 1 до 5'));
  }

  return count;
}


const cardsCount = getCardsCount();
const productsToShow = products.slice(0, cardsCount);
renderProducts(productsToShow);