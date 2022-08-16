export interface QueryPlatforms {
  xbox?: string;
  playstation?: string;
  pc?: string;
}

export interface IQueryParams {
  genre?: Genres;
  ageLimit?: Ages;
  platforms?: string[];
  name?: string;
  rating?: Rating;
  discount?: number;
}

export enum Genres {
  All = '',
  Shooter = 'Shooter',
  Sandbox = 'Sandbox',
  RPG = 'RPG',
  Action = 'Action-adventure',
  Simulator = 'Simulator'
}

export enum Ages {
  All = '',
  Three = '3',
  Six = '6',
  Twelve = '12',
  Sixteen = '16',
  Eighteen = '18'
}

export enum Platforms {
  xbox = 'xbox',
  playstation = 'playstation',
  pc = 'pc'
}

export enum Criteria {
  Name = 'name',
  Rating = 'rating',
  Price = 'price'
}

export enum Rating {
  All = '1',
  Two = '2',
  Three = '3',
  Four = '4',
  Five = '5'
}

export enum Types {
  Ascending = 'ascending',
  Descending = 'descending'
}
