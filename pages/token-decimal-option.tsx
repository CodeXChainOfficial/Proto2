import type { NextPage } from "next";
import styles from "./token-decimal-option.module.css";
const TokenDecimalOption: NextPage = () => {
  return (
    <div className={styles.tokenDecimalOption}>
      <div className={styles.wrapper}>
        <div className={styles.div}>6</div>
      </div>
      <div className={styles.container}>
        <div className={styles.div}>9</div>
      </div>
      <div className={styles.container}>
        <div className={styles.div}>18</div>
      </div>
    </div>
  );
};

export default TokenDecimalOption;
