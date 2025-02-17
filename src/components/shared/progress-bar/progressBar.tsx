import React from "react";

import { LinearProgress } from "@mui/material";

import { useLoading } from "./loadingContext";
import s from "./progressBar.module.sass";

const ProgressBar = () => {
  const { isLoading } = useLoading();

  return (
    <div className={s.progress}>
      {isLoading && <LinearProgress
        color="inherit"
        sx={{
          height: '100%',
        }}
      />}
    </div>
  );
};

export default ProgressBar;