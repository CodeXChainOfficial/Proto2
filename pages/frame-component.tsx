import type { NextPage } from "next";
import styles from "./frame-component.module.css";
const FrameComponent: NextPage = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.groupWrapper}>
        <div className={styles.rectangleParent}>
          <div className={styles.groupChild} />
          <img className={styles.codex11Icon} alt="" src="/codex1-1@2x.png" />
        </div>
      </div>
      <div className={styles.codex}>codex</div>
    </div>
  );
};

export default FrameComponent;
