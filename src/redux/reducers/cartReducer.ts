import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IGameCard } from 'src/types/GameCard';

interface ICartItem extends IGameCard {
  amount?: number;
}

interface ICart {
  cartItems: ICartItem[];
  totalPrice: number;
  totalQuantity: number;
}

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
    },
    removeFromCart: (state: ICart, action: PayloadAction<{ id: number }>) => {
      const payloadId = action.payload.id;
      state.cartItems = state.cartItems.filter((item) => item.id !== payloadId);
    },
    decreaseItemQuantity: (state: ICart, action: PayloadAction<{ id: number }>) => {
      const payloadId = action.payload.id;
      const cartItem = state.cartItems.find((item) => item.id === payloadId);
      cartItem && cartItem.amount--;
    },
    clearCart: (state: ICart) => {
      state.cartItems = [];
    },
    getTotals: (state: ICart) => {
      const { totalPrice, totalQuantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, amount } = cartItem;
          cartTotal.totalPrice += price * amount;
          cartTotal.totalQuantity += amount;
          return cartTotal;
        },
        { totalPrice: 0, totalQuantity: 0 }
      );
      state.totalPrice = totalPrice;
      state.totalQuantity = totalQuantity;
    }
  }
});

export default cartReducer;
