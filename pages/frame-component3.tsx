import type { NextPage } from "next";
import styles from "./frame-component3.module.css";
const FrameComponent3: NextPage = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.aboutCodexWrapper}>
        <div className={styles.aboutCodex}>About CodeX</div>
      </div>
      <div className={styles.aboutCodexWrapper}>
        <div className={styles.aboutCodex}>Career</div>
      </div>
      <div className={styles.codexDaoWrapper}>
        <div className={styles.aboutCodex}>CodeX DAO</div>
      </div>
    </div>
  );
};

export default FrameComponent3;
