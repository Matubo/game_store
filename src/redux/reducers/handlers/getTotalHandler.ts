import { ICart } from 'src/types/redux/cart';

export const getTotalHandler = (state: ICart) => {
  const { totalPrice, totalQuantity } = state.cartItems.reduce(
    (cartTotal, cartItem) => {
      const { price, amount } = cartItem;
      cartTotal.totalPrice += price * amount;
      cartTotal.totalPrice = parseFloat(cartTotal.totalPrice.toFixed(2));
      cartTotal.totalQuantity += amount;
      return cartTotal;
    },
    { totalPrice: 0, totalQuantity: 0 }
  );
  state.totalPrice = totalPrice;
  state.totalQuantity = totalQuantity;
};
