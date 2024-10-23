import React, { FC } from "react";

import s from "./howItWork.module.sass";
import BuildingIcon from "./icons/building";
import GlobusIcon from "./icons/globus";
import MonitorIcon from "./icons/monitorIcon";

const HowItWork: FC = () => {
  return (
    <div className={s.container}>
      <div className="wrapper">
        <div className={s.inner}>
          <div className={s.header}>
            <h2 className={s.title}>Как это работает</h2>
            <button>Узнать больше</button>
          </div>
          <div className={s.content}>
            <div className={s.item}>
              <div className={s.item__icon}>
                <MonitorIcon />
              </div>
              <div className={s.item__text}>Удобный заказ на сайте</div>
            </div>
            <div className={s.item}>
              {/* <div className={s.item__icon}> */}
              <BuildingIcon />
              {/* </div> */}
              <div className={s.item__text}>Нет необходимости ехать в офис</div>
            </div>
            <div className={s.item}>
              <div className={s.item__icon}>
                <GlobusIcon />
              </div>
              <div className={s.item__text}>Огромный выбор направлений</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWork;