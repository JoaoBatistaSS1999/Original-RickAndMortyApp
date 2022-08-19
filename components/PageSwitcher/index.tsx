import { Pagination, Stack } from "@mui/material";
import React from "react";

interface Props {
  pages: number;
}

const PageSwitcher: React.FC<Props> = ({ pages }) => {
  const clickHandler = (event: React.ChangeEvent, value: number) => {
    console.log(value);
  };

  return (
    <Stack spacing={2}>
      <Pagination
        count={pages}
        color={"secondary"}
        variant='outlined'
        shape='rounded'
      />
    </Stack>
  );
};
export default PageSwitcher;
