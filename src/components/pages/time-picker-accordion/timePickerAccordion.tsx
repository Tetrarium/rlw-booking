import React, { FC, ReactNode, useState } from "react";

import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";

import CollapseIcon from "./icons/collapseIcon";
import ExpandIcon from "./icons/expandIcon";
import s from "./timePickerAccordion.module.sass";

interface TimePickerAccordionProps {
  icon: ReactNode;
  title: string;
}
const TimePickerAccordion: FC<TimePickerAccordionProps> = ({ icon, title }) => {
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
            minHeight: 'auto'
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
      <AccordionDetails>
        Content
      </AccordionDetails>
    </Accordion>
  );
};

export default TimePickerAccordion;