export interface QueryPlatforms {
  xbox?: boolean;
  playstation?: boolean;
  pc?: boolean;
}

export interface QueryParams {
  genres?: string;
  ageLimit?: string;
  platform?: QueryPlatforms;
  name?: string;
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

export enum Types {
  Ascending = 'ascending',
  Descending = 'descending'
}
