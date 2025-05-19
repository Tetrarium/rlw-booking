export interface SeatCoords {
  x: number;
  y: number;
  width: number;
  height: number;
  strokeWidth: number;
}

function getFirstSeatsCoords(): SeatCoords[] {
  const TOTAL_SEATS = 16;
  const INNER_STEP_X = 60;
  const OUTER_STEP_X = 30;

  const WIDTH = 23;
  const HEIGHT = 56;
  const STROKE_WIDTH = 2;
  const START_X = 136;

  const seats: SeatCoords[] = [];
  let currentX = START_X;

  for (let i = 1; i <= TOTAL_SEATS; i++) {
    seats.push({
      x: currentX,
      y: 30,
      width:
        WIDTH,
      height: HEIGHT,
      strokeWidth: STROKE_WIDTH,
    });

    currentX += i % 2 === 0 ? OUTER_STEP_X : INNER_STEP_X;
  }

  return seats;
}

export const firstSeatsCoords = getFirstSeatsCoords();

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

function getThirdSeatsCoords(): SeatCoords[] {
  const sectionSeats = getSecondSeatsCoords();
  const sideSeats: SeatCoords[] = [];

  const SIDE_SEATS_COUNT = 16;
  const WIDTH = 40.5;
  const HEIGHT = 21;
  const STROKE_WIDTH = 2;
  const START_X = 136;
  const Y = 114;
  const BORDER_WIDTH = 5;
  const innerStepX = WIDTH + STROKE_WIDTH;
  const outerStepX = innerStepX + BORDER_WIDTH;

  let currentX = START_X;

  for (let i = 1; i <= SIDE_SEATS_COUNT; i++) {
    sideSeats.push({
      x: currentX,
      y: Y,
      width:
        WIDTH,
      height: HEIGHT,
      strokeWidth: STROKE_WIDTH,
    });

    currentX += i % 2 === 0 ? outerStepX : innerStepX;
  }

  return [...sectionSeats, ...sideSeats];
}

export const thirdSeatsCoords = getThirdSeatsCoords();

function getFourthSeatsCoords(): SeatCoords[] {
  const seatsRow1: SeatCoords[] = [];
  const seatsRow2: SeatCoords[] = [];

  const ROW_1_SEATS_COUNT = 32;
  const ROW_2_SEATS_COUNT = 30;
  const ROW_1_START_X = 136;

  const STROKE_WIDTH = 2;
  const INNER_STEP_X = 60.2;
  const OUTER_STEP_X = 30;

  const WIDTH = 21;
  const HEIGHT = 21;

  const ODD_Y = 53;
  const EVEN_Y = 30;

  const OFFSET_Y = 61;

  let currentX = ROW_1_START_X;

  for (let i = 1; i <= ROW_1_SEATS_COUNT; i++) {
    const y = i % 2 === 1 ? ODD_Y : EVEN_Y;

    seatsRow1.push({
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

  const oddY = ODD_Y + OFFSET_Y;
  const evenY = EVEN_Y + OFFSET_Y;
  currentX = ROW_1_START_X;

  seatsRow2.push({
    x: currentX,
    y: oddY,
    width:
      WIDTH,
    height: HEIGHT,
    strokeWidth: STROKE_WIDTH,
  });

  currentX += INNER_STEP_X;

  for (let i = 1; i < ROW_2_SEATS_COUNT; i++) {
    const y = i % 2 === 1 ? oddY : evenY;

    seatsRow2.push({
      x: currentX,
      y,
      width:
        WIDTH,
      height: HEIGHT,
      strokeWidth: STROKE_WIDTH,
    });

    if (i % 4 === 0) {
      currentX += INNER_STEP_X;
    } else if (i % 2 === 0) {
      currentX += OUTER_STEP_X;
    }
  }

  return [...seatsRow1, ...seatsRow2];
}

export const fourthSeatsCoords = getFourthSeatsCoords();
