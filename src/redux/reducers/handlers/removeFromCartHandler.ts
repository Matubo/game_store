import { PayloadAction } from '@reduxjs/toolkit';
import { ICart } from 'src/types/redux/cart';

export const removeFromCartHandler = (state: ICart, action: PayloadAction<{ id: number }>) => {
  const payloadId = action.payload.id;
  state.cartItems = state.cartItems.filter((item) => item.id !== payloadId);
};
