import React, { FC } from "react";

import StyledSvgIcon, { IconProps } from "./styledSvgIcon";

const MonitorIcon: FC<IconProps> = (props) => {
  return (
    <StyledSvgIcon {...props}>
      <svg width="136" height="136" viewBox="0 0 136 136" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M68 135.097C105.213 135.097 135.381 104.93 135.381 67.7168C135.381 30.5035 105.213 0.336304 68 0.336304C30.7868 0.336304 0.619507 30.5035 0.619507 67.7168C0.619507 104.93 30.7868 135.097 68 135.097ZM74.8829 95.1097V88.3365H77.3625H97.8829C102.97 88.2937 105.621 85.6359 105.621 80.4916V41.3099C105.621 36.1658 102.97 33.4651 97.8829 33.4651H38.0744C33.1153 33.4651 30.3793 36.1658 30.3793 41.1385V80.7488C30.3793 85.55 33.1153 88.2937 37.9034 88.3794H58.8514H61.0316V95.2811H54.4908V101.969H81.5521V95.1097H74.8829ZM37.3904 40.4526H98.7379V81.3062H37.3904V40.4526Z" fill="white" />
      </svg>
    </StyledSvgIcon>
  );
};

export default MonitorIcon;