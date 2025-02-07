import React, { FC, ReactNode, useState } from "react";

import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";

import HoursPickerSlider, { HoursRange } from "../hours-picker-slider.tsx/hoursPickerSlider";
import s from "./hoursPickerAccordion.module.sass";
import CollapseIcon from "./icons/collapseIcon";
import ExpandIcon from "./icons/expandIcon";

interface HoursPickerAccordionProps {
  icon: ReactNode;
  title: string;
  departureHoursRange?: HoursRange;
  arrivalHoursRange?: HoursRange;
  onChangeDepartureHoursRange?: (values: HoursRange) => void;
  onChangeArrivalHoursRange?: (values: HoursRange) => void;
}
const HoursPickerAccordion: FC<HoursPickerAccordionProps> = ({
  icon,
  title,
  departureHoursRange,
  onChangeDepartureHoursRange,
  arrivalHoursRange,
  onChangeArrivalHoursRange,
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Accordion
      expanded={expanded}
      onChange={() => setExpanded(!expanded)}
      sx={{
        backgroundColor: 'transparent',
        boxShadow: 'none',
        margin: 0
      }}
    >
      <AccordionSummary
        expandIcon={expanded ? <ExpandIcon /> : <CollapseIcon />}
        sx={{
          padding: 0,
          margin: 0,
          minHeight: 'auto',
          '&.Mui-expanded': {
            minHeight: 'auto',
            margin: 0,
          },
          '& .MuiAccordionSummary-content': {
            margin: 0,
            padding: 0,
          }
        }}
      >
        <div className={s.header}>
          <div>{icon}</div>
          <div className={s.title}>{title}</div>
        </div>
      </AccordionSummary>
      <AccordionDetails
        sx={{
          padding: 0,
        }}
      >
        <div className={s.sliders}>
          <HoursPickerSlider
            title="Время отбытия"
            values={departureHoursRange}
            onChange={onChangeDepartureHoursRange}
          />
          <HoursPickerSlider
            title="Время прибытия"
            arrival
            values={arrivalHoursRange}
            onChange={onChangeArrivalHoursRange}
          />
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

export default HoursPickerAccordion;