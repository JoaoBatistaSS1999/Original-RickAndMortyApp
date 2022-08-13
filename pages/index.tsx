import Head from "next/head";
import React from "react";
import ArticleList from "../components/ArticleList";
import { Article } from "../types";

interface Props {
  articles: Article[];
}

const HomePage: React.FC<Props> = ({ articles }) => {
  return (
    <div>
      <Head>
        <title>Next Page</title>
      </Head>
      <ArticleList data={articles} />
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=6`
  );
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};

export default HomePage;
