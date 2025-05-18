import React, { FC } from "react";

import { CoachTypeKeys } from "@/types/models";

import FirstCoachMap from "./coaches-maps/firstCoachMap";
import FourthCoachMap from "./coaches-maps/fourthCoachMap";
import SecondCoachMap from "./coaches-maps/secondCoachMap";
import ThirdCoachMap from "./coaches-maps/thirdCoachMap";

interface Props {
  coachType: CoachTypeKeys;
  coachNumber: string;
}

const CoachTypeSelector: FC<Props> = ({ coachType, coachNumber }) => {
  return (
    <>
      {coachType === "first" && <FirstCoachMap coachNumber={coachNumber} />}
      {coachType === "second" && <SecondCoachMap coachNumber={coachNumber} />}
      {coachType === "third" && <ThirdCoachMap coachNumber={coachNumber} />}
      {coachType === "fourth" && <FourthCoachMap coachNumber={coachNumber} />}
    </>
  );
};

export default CoachTypeSelector;