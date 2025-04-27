import React from "react";

import NextButton from "@/UI/buttons/nextButton";

import s from "./seatsPage.module.sass";
import TrainView from "./train-view/trainView";

const SeatsPage = () => {
  return (
    <div className={s.seats}>
      <h3 className={s.seats__title}>Выбор мест</h3>
      <div className={s.seats__content}>
        <TrainView />
      </div>
      <div className={s.seats__controls}>
        <NextButton />
      </div>
    </div>
  );
};

export default SeatsPage;