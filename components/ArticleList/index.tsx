import React from "react";
import ArticleItem from "../ArticleItem";

interface Articles {
  userId: number;
  id: number;
  title: string;
  body: string;
}
interface Props {
  data: Articles[];
}

const ArticleList: React.FC<Props> = ({ data }) => {
  return (
    <ul>
      {data.map((item) => (
        <ArticleItem
          key={item.id}
          title={item.title}
          body={item.body}
          id={item.id}
        />
      ))}
    </ul>
  );
};
export default ArticleList;
