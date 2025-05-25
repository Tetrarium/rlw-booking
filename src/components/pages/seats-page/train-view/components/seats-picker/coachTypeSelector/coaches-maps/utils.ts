import { TSeat } from "@/types/models";

import { SeatCoords } from "./seatsCoordsMaps";

export function concatSeatWithCoords(seats: TSeat[], seatsCoords: SeatCoords[]) {
  return seatsCoords.map((coords, index) => {
    return {
      ...seats[index],
      coords,
    };
  });
}