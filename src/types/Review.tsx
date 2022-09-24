type IPlatform = { pc: boolean; playstation: boolean; xbox: boolean };

export type IReview = {
  id: number;
  name: string;
  rating: 4;
  genre: string;
  platform: IPlatform;
  image: string;
  description: string;
  alt: string;
};
