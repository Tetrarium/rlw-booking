import classNames from "classnames";
import React, { FC } from "react";

import s from "./orderSteps.module.sass";

interface OrderStepsProps {
  currentStep: number;
}

const steps = ['Билеты', 'Пассажиры', 'Оплата', 'Проверка'];

const OrderSteps: FC<OrderStepsProps> = ({ currentStep }) => {
  return (
    <div className={s.container}>
      <div className={s.steps}>
        {steps.map((step, index) => (
          <div
            key={step}
            className={
              classNames(
                s.step,
                {
                  [s.active]: index + 1 === currentStep,
                  [s.completed]: index + 1 < currentStep,
                }
              )
            }
          >
            <div className={s.stepNumber}>{index + 1}</div>
            <span className={s.label}>{step}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderSteps;