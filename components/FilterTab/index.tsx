import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Link from "next/link";

const FilterTab: React.FC = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Link href={"/characters"}>
          <Tab label='Characters' />
        </Link>
        <Link href={"/episodes"}>
          <Tab label='episodes' />
        </Link>
        <Link href={"/locations"}>
          <Tab label='locations' />
        </Link>
        {/* <Tab label='Locations' />
        <Tab label='Episodes' /> */}
      </Tabs>
    </Box>
  );
};

export default FilterTab;
