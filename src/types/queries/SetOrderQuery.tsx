import { IGameCard } from '../GameCard';
export interface SetOrderQueryParams {
  username: string;
  order: IGameCard[];
}
