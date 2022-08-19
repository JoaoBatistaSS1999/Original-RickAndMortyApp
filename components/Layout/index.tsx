import { ReactNode } from "react";
import styles from "./styles.module.css";
import Header from "../Header";
import FilterTab from "../FilterTab";
import { Divider } from "@mui/material";
import Footer from "../Footer";

interface Props {
  children: ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Header />
      <FilterTab />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
export default Layout;
