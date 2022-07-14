import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICart, ICartItem } from 'src/types/redux/cart';
import { getTotalHandler } from './handlers/getTotalHandler';
import { removeFromCartHandler } from './handlers/removeFromCartHandler';

const initialState: ICart = {
  cartItems: [],
  totalPrice: 0,
  totalQuantity: 0
};

const cart = 'cart';

const cartReducer = createSlice({
  name: cart,
  initialState,
  reducers: {
    addToCard: (state: ICart, action: PayloadAction<ICartItem>) => {
      const payloadItem = action.payload;
      const cartItem = state.cartItems.find((item) => item.id == payloadItem.id);
      if (cartItem) {
        cartItem.amount++;
      } else {
        payloadItem.amount = 1;
        state.cartItems.push(payloadItem);
      }
      getTotalHandler(state);
    },
    removeFromCart: (state: ICart, action: PayloadAction<{ id: number }>) => {
      removeFromCartHandler(state, action);
      getTotalHandler(state);
    },
    decreaseItemQuantity: (state: ICart, action: PayloadAction<{ id: number }>) => {
      const payloadId = action.payload.id;
      const cartItem = state.cartItems.find((item) => item.id === payloadId);
      cartItem &&
        (cartItem.amount > 1
          ? cartItem.amount--
          : (state.cartItems = state.cartItems.filter((item) => item.id !== cartItem.id)));
      getTotalHandler(state);
    },
    clearCart: (state: ICart) => {
      state.cartItems = [];
      getTotalHandler(state);
    },
    getTotal: (state: ICart) => getTotalHandler(state)
  }
});

export const { addToCard, removeFromCart, decreaseItemQuantity, clearCart, getTotal } = cartReducer.actions;
export default cartReducer;
