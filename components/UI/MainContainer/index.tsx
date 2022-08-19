import { Box } from "@mui/material";
import React from "react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const MainContainer: React.FC<Props> = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 10,
        padding: [0, 5],
      }}>
      {children}
    </Box>
  );
};
export default MainContainer;
