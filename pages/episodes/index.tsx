import React from "react";
import axios from "axios";
import CardItem from "../../components/UI/Card";
import styles from "./styles.module.css";
import { Pagination, Stack } from "@mui/material";
import MainContainer from "../../components/UI/MainContainer";
import PageSwitcher from "../../components/PageSwitcher";

const Episodes: React.FC = ({ data }: any) => {
  console.log(data.results);
  const episodesArray = data.results;

  return (
    <MainContainer>
      <Stack
        display={"flex"}
        flexDirection={"row"}
        flexWrap={"wrap"}
        gap={2}
        justifyContent={"center"}>
        {episodesArray.map((item) => (
          <CardItem
            key={item.id}
            id={item.id}
            path={"episodes"}
            image={item.image}
            name={item.episode}
          />
        ))}
      </Stack>
      <PageSwitcher pages={data.info.pages} />
    </MainContainer>
  );
};

export const getStaticProps = async () => {
  try {
    const result = await axios.get("https://rickandmortyapi.com/api/episode");
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
export default Episodes;
