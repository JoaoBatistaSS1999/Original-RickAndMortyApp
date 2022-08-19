import { Button } from "@mui/material";
import axios from "axios";
import Link from "next/link";
import React from "react";
import MainContainer from "../../../components/UI/MainContainer";

const Details: React.FC = ({ character }: any) => {
  return (
    <MainContainer>
      {character.name}
      <Link href='/characters'>
        <Button>Back to menu</Button>
      </Link>
    </MainContainer>
  );
};

export const getStaticPaths = async () => {
  const result = await axios.get("https://rickandmortyapi.com/api/character");
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
      `https://rickandmortyapi.com/api/character/${id}`
    );
    const data = result.data;

    return {
      props: {
        character: data,
      },
    };
  } catch (error) {
    console.log(error);
  }
};

export default Details;
