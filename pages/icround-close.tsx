import type { NextPage } from "next";
import styles from "./icround-close.module.css";
const IcroundClose: NextPage = () => {
  return (
    <div className={styles.icroundClose}>
      <img className={styles.vectorIcon} alt="" src="/vector.svg" />
    </div>
  );
};

export default IcroundClose;
