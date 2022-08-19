import React from "react";
import axios from "axios";
import CardItem from "../../components/UI/Card";
import styles from "./styles.module.css";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Box } from "@mui/material";
import MainContainer from "../../components/UI/MainContainer";
import PageSwitcher from "../../components/PageSwitcher";

const Characters: React.FC = ({ data }: any) => {
  console.log(data);
  const charactersArray = data.results;

  return (
    <MainContainer>
      <Stack
        display={"flex"}
        flexDirection={"row"}
        flexWrap={"wrap"}
        gap={2}
        justifyContent={"center"}>
        {charactersArray.map((item) => (
          <CardItem
            key={item.id}
            id={item.id}
            path={"characters"}
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
    const result = await axios.get("https://rickandmortyapi.com/api/character");
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

export default Characters;
