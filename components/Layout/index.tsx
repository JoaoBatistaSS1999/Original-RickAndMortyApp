import { ReactNode } from "react";
import styles from "../../styles/layoutStyles.module.css";
import Header from "../Header";

interface Props {
  children: ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.container}>
      <h2>Im allways on</h2>
      <Header />
      <main className={styles.main}>{children}</main>
    </div>
  );
};
export default Layout;
