//Функцію для створення, рендеру або видалення розмітки
import { refs } from './refs';
export function renderCategories(categories) {
  const list = document.querySelector('.categories');

  const markup = categories
    .map(
      category => `
        <li class="categories__item">
          <button class="categories__btn" type="button">${category}</button>
        </li>
      `
    )
    .join('');

  list.innerHTML = markup;
}
export function renderProducts(products, append = false) {
  const list = document.querySelector('.categories');

  const markup = products
    .map(
      ({ id, thumbnail, title, brand, category, price }) => `
    <li class="products__item" data-id="${id}">
      <img class="products__image" src="${thumbnail}" alt="${title}" />
      <p class="products__title">${title}</p>
      <p class="products__brand"><span class="products__brand--bold">Brand:</span> ${brand}</p>
      <p class="products__category">Category: ${category}</p>
      <p class="products__price">Price: $${price}</p>
    </li>`
    )
    .join('');

  if (append) {
    list.insertAdjacentHTML('beforeend', markup);
  } else {
    list.innerHTML = markup;
  }
}
export function btnActive() {
  refs.categories.firstElementChild.firstElementChild.classList.add(
    'categories__btn--active'
  );
}
