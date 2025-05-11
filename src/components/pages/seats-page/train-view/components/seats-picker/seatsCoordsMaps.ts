export interface SeatCoords {
  x: number;
  y: number;
  width: number;
  height: number;
  strokeWidth: number;
}

function getSecondSeatsCoords(): SeatCoords[] {
  const TOTAL_SEATS = 32;
  const INNER_STEP_X = 60;
  const OUTER_STEP_X = 30;

  const ODD_Y = 59;
  const EVEN_Y = 30;

  const WIDTH = 23;
  const HEIGHT = 27;
  const STROKE_WIDTH = 2;
  const START_X = 136;

  const seats: SeatCoords[] = [];
  let currentX = START_X;

  for (let i = 1; i <= TOTAL_SEATS; i++) {
    const y = i % 2 === 1 ? ODD_Y : EVEN_Y;

    seats.push({
      x: currentX,
      y,
      width:
        WIDTH,
      height: HEIGHT,
      strokeWidth: STROKE_WIDTH,
    });

    if (i % 4 === 0) {
      currentX += OUTER_STEP_X;
    } else if (i % 2 === 0) {
      currentX += INNER_STEP_X;
    }
  }

  return seats;
}

export const secondSeatsCoords = getSecondSeatsCoords();

