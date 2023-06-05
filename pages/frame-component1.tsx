import type { NextPage } from "next";
import styles from "./frame-component1.module.css";
const FrameComponent1: NextPage = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.image400Wrapper}>
        <img className={styles.image400Icon} alt="" src="/image-400@2x.png" />
      </div>
      <div className={styles.tron}>tron</div>
    </div>
  );
};

export default FrameComponent1;
