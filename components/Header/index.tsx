import Link from "next/link";
import React from "react";
import styles from "../../styles/headerStyles.module.css";

const Header: React.FC = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.ulj}>
        <li>
          <Link href='/bikes'>Bikes</Link>
        </li>
        <li>
          <Link href='/cars'> Cars</Link>
        </li>
        <li>
          <Link href='/houses'>Houses</Link>
        </li>
      </ul>
    </div>
  );
};
export default Header;
