import type { NextPage } from "next";
import styles from "./frame-component2.module.css";
const FrameComponent2: NextPage = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <img className={styles.frameChild} alt="" src="/frame-3710591.svg" />
        <div className={styles.polygonMainnet}>polygon mainnet</div>
      </div>
      <div className={styles.frameGroup}>
        <img
          className={styles.frameChild}
          alt=""
          src="/mingcutewalletfill.svg"
        />
        <div className={styles.polygonMainnet}>hjih....9y7f32</div>
        <div className={styles.matic}>0.000 matic</div>
      </div>
      <div className={styles.frameGroup}>
        <img className={styles.frameChild} alt="" src="/cilogout.svg" />
        <div className={styles.polygonMainnet}>log out</div>
      </div>
    </div>
  );
};

export default FrameComponent2;
