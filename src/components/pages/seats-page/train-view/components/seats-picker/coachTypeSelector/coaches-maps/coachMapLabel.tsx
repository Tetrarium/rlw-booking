import React, { FC } from "react";

interface Props {
  label: string;
}

const CoachMapLabel: FC<Props> = ({ label }) => {
  return (
    <g>
      <rect
        x="41"
        y="0"
        width="33"
        height="24"
        fill="#000"
        stroke="#999"
        strokeWidth={1}
      />
      <text
        x={57}
        y={14}

        fontSize={18}
        fontWeight="700"

        textAnchor="middle"
        dominantBaseline="middle"
        fill="#FFF"
      >{label}</text>
    </g>
  );
};

export default CoachMapLabel;