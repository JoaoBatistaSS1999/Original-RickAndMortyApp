import { Button } from "@mui/material";
import axios from "axios";
import Link from "next/link";
import React from "react";
import MainContainer from "../../../components/UI/MainContainer";

const Details: React.FC = ({ episode }: any) => {
  return (
    <MainContainer>
      {episode.episode}
      <Link href='/episodes'>
        <Button>Back to menu</Button>
      </Link>
    </MainContainer>
  );
};

export const getStaticPaths = async () => {
  const result = await axios.get("https://rickandmortyapi.com/api/episode");
  const data = result.data.results;

  const paths = data.map((item) => {
    return { params: { id: item.id.toString() } };
  });

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  try {
    const result = await axios.get(
      `https://rickandmortyapi.com/api/episode/${id}`
    );
    const data = result.data;

    return {
      props: {
        episode: data,
      },
    };
  } catch (error) {
    console.log(error);
  }
};

export default Details;
