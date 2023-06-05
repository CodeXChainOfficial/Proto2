import type { NextPage } from "next";
import styles from "./frame-component6.module.css";
const FrameComponent6: NextPage = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.nativeWrapper}>
        <div className={styles.native}>Native</div>
      </div>
      <div className={styles.usdtWrapper}>
        <div className={styles.native}>USDT</div>
      </div>
      <div className={styles.usdtWrapper}>
        <div className={styles.native}>USDC</div>
      </div>
    </div>
  );
};

export default FrameComponent6;
