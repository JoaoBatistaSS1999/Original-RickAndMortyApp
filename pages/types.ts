interface Info {
  count: number;
  next: string;
  pages: number;
  prev: boolean;
}

export interface Data {
  info: Info;
  results: Character[];
}

export interface Character {
  created: string;
  episode: string[];
  gender: string;
  id: number;
  image: string;
  location: Location;
  name: string;
  origin: Location;
  species: string;
  status: string;
  type: string;
  url: string;
}

export interface Location {
  name: string;
  url: string;
}
