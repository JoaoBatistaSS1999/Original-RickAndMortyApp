import Link from "next/link";
import React from "react";
import { Article } from "../../../types";

type Props = {
  article: Article;
};

const ArticleId: React.FC<Props> = ({ article }) => {
  return (
    <div>
      <h2>{article.title}</h2>
      <p>{article.body}</p>
      <Link href='/'>Go back</Link>
    </div>
  );
};

// export const getServerSideProps = async (context: any) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   );
//   const article = await res.json();
//   return {
//     props: {
//       article,
//     },
//   };
// };

export const getStaticProps = async (context: any) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );
  const article = await res.json();

  return {
    props: {
      article,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const articles = await res.json();
  const ids = articles.map((article: any) => article.id);
  const paths = ids.map((id: any) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};

export default ArticleId;
