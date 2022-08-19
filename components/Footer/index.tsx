import * as React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import GrainIcon from "@mui/icons-material/Grain";
import { Box } from "@mui/system";
import { Divider } from "@mui/material";

const Footer: React.FC = () => {
  return (
    <React.Fragment>
      <Divider light />
      <Box
        sx={{
          width: "100%",
          height: 60,
          backgroundColor: "#2d3035",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          }}>
          <WhatshotIcon sx={{ mr: 0.5, color: "#ccc" }} fontSize='inherit' />
          <Typography color='#fff' variant='body2'>
            Thanks for your attention
          </Typography>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Footer;
