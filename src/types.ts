export interface City {
  id: number;
  name: string;
  country: string;
  coord: Coord
}

export interface Coord {
  lon: number;
  lat: number;
}

export interface Weather {
  weather: BriefWeather[];
  main: MainWeather;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
}

export interface BriefWeather {
  id: number;
  main: string;
  description: string;
  icon: string
}

export interface MainWeather {
  temp: number;
  pressure: number;
  humidity: number;
}

export interface Wind {
  speed: number;
  deg: number;
}

export interface Clouds {
  all: number
}