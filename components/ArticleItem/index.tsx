import Link from "next/link";

interface Props {
  title: string;
  body: string;
  id: number;
}

const ArticleItem: React.FC<Props> = ({ title, body, id }) => {
  const dynamicUrl = `/articles/${id}`;
  return (
    <Link href={dynamicUrl}>
      <li>
        <h3>{title}</h3>
        <p>{body}</p>
      </li>
    </Link>
  );
};
export default ArticleItem;
