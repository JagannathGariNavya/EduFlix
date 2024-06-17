export const getCartItemsFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem('cartItems')) || [];
  };
  
  export const setCartItemsToLocalStorage = (cartItems) => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  };
  