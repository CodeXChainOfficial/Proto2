import type { NextPage } from "next";
import Link from "next/link";
import styles from "./frame-component10.module.css";
const FrameComponent10: NextPage = () => {
  return (
    <Link className={styles.daoCreatorParent} href="/dao-select">
      <Link className={styles.daoCreator} href="/dao-select">
        DAO Creator
      </Link>
    </Link>
  );
};

export default FrameComponent10;
