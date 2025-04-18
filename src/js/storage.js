//Робота з loacalStorage
// export { addDataToLocalStorage, getDataFromLocalStorage };

// const LS_KEY = 'wishlist';
// function addDataToLocalStorage(arr) {
//   const normalData = JSON.stringify(arr);

//   try {
//     localStorage.setItem(LS_KEY, normalData);
//   } catch (error) {
//     console.error(error);
//   }
// }
// function getDataFromLocalStorage() {
//   return JSON.parse(localStorage.getItem(LS_KEY)) || [];
// }

// export function toggleWishlist(id) {
//   let wishlist = getDataFromLocalStorage();

//   if (wishlist.includes(id)) {
//     wishlist = wishlist.filter(item => item !== id);
//   } else {
//     wishlist.push(id);
//   }

//   addDataToLocalStorage(wishlist);
//   updateWishlistCount();
// }
