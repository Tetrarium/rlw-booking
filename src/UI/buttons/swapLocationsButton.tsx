import React from "react";

import { reverseLocations } from "@/lib/features/routes/locationsSlice";
import { useAppDispatch } from "@/lib/hooks";
import { Cached } from "@mui/icons-material";
import { IconButton } from "@mui/material";

const SwapLocationsButton = () => {
  const dispatch = useAppDispatch();

  return (
    <IconButton color="inherit" onClick={() => dispatch(reverseLocations())}>
      <Cached />
    </IconButton>
  );
};

export default SwapLocationsButton;