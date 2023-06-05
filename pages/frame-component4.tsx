import type { NextPage } from "next";
import styles from "./frame-component4.module.css";
const FrameComponent4: NextPage = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.tokenGeneratorWrapper}>
        <div className={styles.tokenGenerator}>Token Generator</div>
      </div>
      <div className={styles.tokenGeneratorWrapper}>
        <div className={styles.tokenGenerator}>NFT generator</div>
      </div>
      <div className={styles.dappWrapper}>
        <div className={styles.tokenGenerator}>DApp</div>
      </div>
    </div>
  );
};

export default FrameComponent4;
