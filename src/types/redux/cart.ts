import { IGameCard } from '../gameCard';

export interface ICartItem extends IGameCard {
  amount?: number;
}

export interface ICart {
  cartItems: ICartItem[];
  totalPrice: number;
  totalQuantity: number;
}
