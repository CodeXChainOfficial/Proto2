import type { NextPage } from "next";
import "antd/dist/antd.min.css";
import { Button } from "antd";
import styles from "./menu.module.css";
const Menu: NextPage = () => {
  return (
    <div className={styles.menu}>
      <div className={styles.menu1}>
        <div className={styles.isolationModeWrapper}>
          <img
            className={styles.isolationModeIcon}
            alt=""
            src="/isolation-mode.svg"
          />
        </div>
        <div className={styles.navLinkParent}>
          <div className={styles.navLink}>
            <a className={styles.menuWrappedProducts}>Products</a>
            <div className={styles.project}>Project</div>
            <div className={styles.project}>Ecosystem</div>
            <div className={styles.project}>Explorer</div>
            <div className={styles.project}>doc</div>
          </div>
          <div className={styles.connectWalletButton}>
            <div className={styles.project}>connect wallet</div>
          </div>
        </div>
      </div>
      <Button
        className={styles.buttonprimaryText}
        type="primary"
        size="middle"
        shape="default"
        href="/creat-token-wallet-connection-modal"
      >
        Button
      </Button>
      <a className={styles.dappDropOption}>
        <div className={styles.project}>Token Generator</div>
      </a>
    </div>
  );
};

export default Menu;
