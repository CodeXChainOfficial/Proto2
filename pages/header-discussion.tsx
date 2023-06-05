import type { NextPage } from "next";
import styles from "./header-discussion.module.css";
const HeaderDiscussion: NextPage = () => {
  return (
    <div className={styles.headerDiscussion}>
      <div className={styles.isolationModeWrapper}>
        <img
          className={styles.isolationModeIcon}
          alt=""
          src="/isolation-mode.svg"
        />
      </div>
      <div className={styles.frameParent}>
        <div className={styles.tokenParent}>
          <div className={styles.token}>token</div>
          <div className={styles.launchpad}>launchpad</div>
          <div className={styles.launchpad}>no-code</div>
          <div className={styles.launchpad}>dAO</div>
          <div className={styles.launchpad}>doc</div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <img className={styles.frameChild} alt="" src="/frame-371059.svg" />
            <div className={styles.launchpad}>polygon mainnet</div>
          </div>
          <div className={styles.frameContainer}>
            <img
              className={styles.frameChild}
              alt=""
              src="/mingcutewalletfill.svg"
            />
            <div className={styles.launchpad}>hjih....9y7f32</div>
            <div className={styles.matic}>0.000 matic</div>
          </div>
          <div className={styles.cilogOutParent}>
            <img className={styles.frameChild} alt="" src="/cilogout.svg" />
            <div className={styles.launchpad}>log out</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderDiscussion;
