export interface City {
  _id: string;
  name: string;
}

export interface Train {
  _id: string;
  name: string;
}

export interface SeatPriceInfo {
  price: number;
  top_price: number;
  bottom_price: number;
  side_price: number;
  linens_price: number;
  wifi_price: number;
}

export type SeatsInfo = {
  first?: number;
  second?: number;
  third?: number;
  fourth?: number;
};

export interface PriceInfo {
  first?: SeatPriceInfo;
  second?: SeatPriceInfo;
  third?: SeatPriceInfo;
  fourth?: SeatPriceInfo;
}

export interface StationDetails {
  railway_station_name: string;
  city: City;
  datetime: number;
}

export interface TrainDetails {
  _id: string;
  have_first_class: boolean;
  have_second_class: boolean;
  have_third_class: boolean;
  have_fourth_class: boolean;
  have_wifi: boolean;
  have_air_conditioning: boolean;
  train: Train;
  from: StationDetails;
  to: StationDetails;
  min_price: number;
  duration: number;
  price_info: PriceInfo;
  seats_info: SeatsInfo;
}

export interface TrainItem {
  have_first_class: boolean;
  have_second_class: boolean;
  have_third_class: boolean;
  have_fourth_class: boolean;
  have_wifi: boolean;
  have_air_conditioning: boolean;
  is_express: boolean;
  min_price: boolean;
  arrival?: TrainDetails;
  departure: TrainDetails;
  // total_avaliable_seats: number;
  available_seats: number;
  available_seats_info: SeatsInfo;
}

export interface ResponseError {
  error: string;
}

export type RoutesSummary = {
  total_count: number;
  items: TrainItem[];
};

export type RoutesResponse = RoutesSummary | ResponseError;

export type CitiesResponse = City[] | ResponseError;

export type TCoach = {
  _id: string;
  name: string;
  train: string;
  class_type: keyof SeatsInfo;
  have_wifi: boolean;
  have_air_conditioning: boolean;
  is_linens_included: boolean;
  linens_price: number;
  price: number;
  side_price: number;
  top_price: number;
  wifi_price: number;
};

export type TSeat = {
  index: number;
  available: boolean;
};

export type CoachInfo = {
  coach: TCoach;
  seats: TSeat[];
};

export type CoachesResponse = CoachInfo[] | ResponseError;

