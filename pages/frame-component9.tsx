import type { NextPage } from "next";
import Link from "next/link";
import styles from "./frame-component9.module.css";
const FrameComponent9: NextPage = () => {
  return (
    <Link className={styles.launchpadParent} href="/token-generation">
      <div className={styles.launchpad}>LaunchPad</div>
    </Link>
  );
};

export default FrameComponent9;
