import React from "react";

import { selectCountActiveRequests } from "@/API/API";
import { useAppSelector } from "@/lib/hooks";
import { LinearProgress } from "@mui/material";

import s from "./progressBar.module.sass";

const ProgressBar = () => {
  const countActiveRequests = useAppSelector(selectCountActiveRequests);

  const isLoading = countActiveRequests > 0;

  return (
    <div className={s.progress}>
      {isLoading && <LinearProgress
        color="inherit"
        sx={{
          height: '100%',
          maxHeight: '20px',
        }}
      />}
    </div>
  );
};

export default ProgressBar;