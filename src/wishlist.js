import { getWishlist, isInWishlist, toggleWishlist } from './js/storage.js';
import { getProductById } from './js/products-api.js';
import { createMarkupProduct } from './home.js';

const wishlist = getWishlist();
const productList = document.querySelector('ul.products');

async function renderWishlist() {
  try {
    const productPromises = wishlist.map(id => getProductById(id));
    const products = await Promise.all(productPromises);
    productList.innerHTML = createMarkupProduct(products);
  } catch (error) {
    console.log('Failed to load wishlist products:', error);
  }
}

productList.addEventListener('click', async event => {
  const card = event.target.closest('.product-card');

  if (!card) return;

  const productId = card.dataset.id;
  const modal = document.querySelector('.modal');
  const modalContent = modal.querySelector('.modal-product');
  const wishlistBtn = modal.querySelector('.modal-product__btn--wishlist');
  console.log(productId);
  try {
    const product = await getProductById(productId);
    modalContent.innerHTML = createMarkupProduct([product]);

    if (isInWishlist(productId)) {
      wishlistBtn.textContent = 'Remove from Wishlist';
    } else {
      wishlistBtn.textContent = 'Add to Wishlist';
    }

    wishlistBtn.onclick = () => {
      toggleWishlist(productId);
      wishlistBtn.textContent = isInWishlist(productId)
        ? 'Remove from Wishlist'
        : 'Add to Wishlist';
    };

    modal.classList.add('modal--is-open');
  } catch (error) {
    console.error('Error loading product for modal:', error);
  }
});

renderWishlist();
