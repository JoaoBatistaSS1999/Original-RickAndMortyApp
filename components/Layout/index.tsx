import { ReactNode } from "react";
import styles from "./styles.module.css";
import Header from "../Header";
import FilterTab from "../FilterTab";

interface Props {
  children: ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Header />
      <FilterTab />
      <main>{children}</main>
    </div>
  );
};
export default Layout;
