import React, { FC } from "react";

import { CoachTypeKeys, TSeat } from "@/types/models";

import FirstCoachMap from "./coaches-maps/firstCoachMap";
import FourthCoachMap from "./coaches-maps/fourthCoachMap";
import SecondCoachMap from "./coaches-maps/secondCoachMap";
import ThirdCoachMap from "./coaches-maps/thirdCoachMap";

interface Props {
  coachType: CoachTypeKeys;
  coachNumber: string;
  coachId: string;
  seats: TSeat[];
}

const CoachTypeSelector: FC<Props> = ({ coachType, coachNumber, coachId, seats }) => {
  return (
    <>
      {coachType === "first" && <FirstCoachMap coachNumber={coachNumber} coachId={coachId} seats={seats} />}
      {coachType === "second" && <SecondCoachMap coachNumber={coachNumber} coachId={coachId} seats={seats} />}
      {coachType === "third" && <ThirdCoachMap coachNumber={coachNumber} coachId={coachId} seats={seats} />}
      {coachType === "fourth" && <FourthCoachMap coachNumber={coachNumber} coachId={coachId} seats={seats} />}
    </>
  );
};

export default CoachTypeSelector;