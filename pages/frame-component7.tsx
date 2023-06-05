import type { NextPage } from "next";
import styles from "./frame-component7.module.css";
const FrameComponent7: NextPage = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.selectionWrapper}>
        <div className={styles.selection}>Selection</div>
      </div>
      <div className={styles.incubationWrapper}>
        <div className={styles.selection}>incubation</div>
      </div>
      <div className={styles.incubationWrapper}>
        <div className={styles.selection}>Launch</div>
      </div>
    </div>
  );
};

export default FrameComponent7;
