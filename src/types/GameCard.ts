export interface IGameCard {
  id: number;
  name: string;
  image: string;
  description?: string;
  rating?: number;
  ageLimit: number;
  price: number;
  platform: {
    pc: boolean;
    xbox: boolean;
    playstation: boolean;
  };
}
