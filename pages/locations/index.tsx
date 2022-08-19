import React from "react";
import axios from "axios";
import CardItem from "../../components/UI/Card";
import styles from "./styles.module.css";
import { Pagination, Stack } from "@mui/material";
import MainContainer from "../../components/UI/MainContainer";
import PageSwitcher from "../../components/PageSwitcher";

const Places: React.FC = ({ data }: any) => {
  console.log(data.results);
  const locationsArray = data.results;

  return (
    <MainContainer>
      <Stack
        display={"flex"}
        flexDirection={"row"}
        flexWrap={"wrap"}
        gap={2}
        justifyContent={"center"}>
        {locationsArray.map((item) => (
          <CardItem
            key={item.id}
            id={item.id}
            path={"locations"}
            image={item.image}
            name={item.name}
          />
        ))}
      </Stack>
      <PageSwitcher pages={data.info.pages} />
    </MainContainer>
  );
};

export const getStaticProps = async () => {
  try {
    const result = await axios.get("https://rickandmortyapi.com/api/location");
    const data = result.data;

    return {
      props: {
        data: data,
      },
    };
  } catch (error) {
    console.log(error);
  }
};

export default Places;
