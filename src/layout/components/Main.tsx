import { Box } from "@mui/material";
import React, { ReactNode } from "react";

const Main = ({ children }: { children: ReactNode }) => {
  return <Box flexGrow={1}>{children}</Box>;
};

export default Main;
