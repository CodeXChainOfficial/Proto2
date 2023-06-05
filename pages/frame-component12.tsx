import type { NextPage } from "next";
import Link from "next/link";
import styles from "./frame-component12.module.css";
const FrameComponent12: NextPage = () => {
  return (
    <Link className={styles.nftGeneratorParent} href="/token-generation">
      <div className={styles.nftGenerator}>NFT generator</div>
    </Link>
  );
};

export default FrameComponent12;
