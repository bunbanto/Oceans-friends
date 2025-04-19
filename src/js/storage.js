//Робота з loacalStorage

const LS_KEY = 'wishlist';

export function getWishlist() {
  return JSON.parse(localStorage.getItem(LS_KEY)) || [];
}

export function saveWishlist(arr) {
  localStorage.setItem(LS_KEY, JSON.stringify(arr));
}

export function toggleWishlist(id) {
  const wishlist = getWishlist();
  const index = wishlist.indexOf(id);

  if (index === -1) {
    wishlist.push(id);
  } else {
    wishlist.splice(index, 1);
  }

  saveWishlist(wishlist);
  updateWishlistCount();
}

export function isInWishlist(id) {
  return getWishlist().includes(id);
}

export function updateWishlistCount() {
  const countEl = document.querySelector('.nav__count');
  if (countEl) {
    countEl.textContent = getWishlist().length;
  }
}
