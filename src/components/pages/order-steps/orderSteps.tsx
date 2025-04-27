import classNames from "classnames";
import { useRouter } from "next/router";
import React from "react";

import s from "./orderSteps.module.sass";

interface Step {
  id: number;
  path: string;
  label: string;
}

const steps: Step[] = [
  { id: 1, path: '/routes', label: 'Билеты' },
  { id: 2, path: '/passengers', label: 'Пассажиры' },
  { id: 3, path: '/payment', label: 'Оплата' },
  { id: 4, path: '/check', label: 'Проверка' },
];

const OrderSteps = () => {
  const router = useRouter();

  const currentStep = steps.findIndex(step => router.pathname.includes(step.path)) + 1;

  return (
    <div className={s.container}>
      <div className={s.steps}>
        {steps.map(({ id, label: step }) => (
          <div
            key={id}
            className={
              classNames(
                s.step,
                {
                  [s.active]: id === currentStep,
                  [s.completed]: id < currentStep,
                }
              )
            }
          >
            <div className={s.stepContent}>
              <div className={s.stepNumber}>{id}</div>
              <span className={s.label}>{step}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderSteps;