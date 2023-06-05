import type { NextPage } from "next";
import Link from "next/link";
import styles from "./token-read.module.css";
const TokenRead: NextPage = () => {
  return (
    <div className={styles.tokenRead}>
      <div className={styles.titleParent}>
        <div className={styles.title}>
          <div className={styles.tokenSetting}>token Setting</div>
        </div>
        <div className={styles.groupWrapper}>
          <div className={styles.buttonOptionWrapper}>
            <div className={styles.buttonOption}>
              <div className={styles.buttonOptionInner}>
                <div className={styles.createTokenButtonParent}>
                  <Link className={styles.createTokenButton} href="/">
                    <div className={styles.createToken}>create token</div>
                  </Link>
                  <div className={styles.myTokenButton}>
                    <div className={styles.createToken}>my token</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.buttonSmartContractParent}>
        <div className={styles.createTokenButtonParent}>
          <a className={styles.buttonReadContract}>
            <div className={styles.createToken}>read contract</div>
          </a>
          <Link className={styles.buttonWriteContract} href="/token-write">
            <div className={styles.createToken}>write contract</div>
          </Link>
        </div>
        <div className={styles.allowenceParent}>
          <div className={styles.allowence}>
            <div className={styles.createToken}>allowence</div>
            <div className={styles.checkDetailWrapper}>
              <div className={styles.createToken}>check detail</div>
            </div>
          </div>
          <div className={styles.allowence}>
            <div className={styles.createToken}>balance of</div>
            <div className={styles.checkDetailWrapper}>
              <div className={styles.createToken}>check detail</div>
            </div>
          </div>
          <div className={styles.allowence}>
            <div className={styles.createToken}>decimals</div>
            <div className={styles.checkDetailWrapper}>
              <div className={styles.createToken}>check detail</div>
            </div>
          </div>
          <div className={styles.allowence}>
            <div className={styles.createToken}>from CDX</div>
            <div className={styles.checkDetailWrapper}>
              <div className={styles.createToken}>check detail</div>
            </div>
          </div>
          <div className={styles.allowence}>
            <div className={styles.createToken}>name</div>
            <div className={styles.checkDetailWrapper}>
              <div className={styles.createToken}>check detail</div>
            </div>
          </div>
          <div className={styles.allowence}>
            <div className={styles.createToken}>owner</div>
            <div className={styles.checkDetailWrapper}>
              <div className={styles.createToken}>check detail</div>
            </div>
          </div>
          <div className={styles.allowence}>
            <div className={styles.createToken}>pause</div>
            <div className={styles.checkDetailWrapper}>
              <div className={styles.createToken}>check detail</div>
            </div>
          </div>
          <div className={styles.allowence}>
            <div className={styles.createToken}>renounce ownership</div>
            <div className={styles.checkDetailWrapper}>
              <div className={styles.createToken}>check detail</div>
            </div>
          </div>
          <div className={styles.allowence}>
            <div className={styles.createToken}>transfer</div>
            <div className={styles.checkDetailWrapper}>
              <div className={styles.createToken}>check detail</div>
            </div>
          </div>
          <div className={styles.allowence}>
            <div className={styles.createToken}>transfer from</div>
            <div className={styles.checkDetailWrapper}>
              <div className={styles.createToken}>check detail</div>
            </div>
          </div>
          <div className={styles.allowence}>
            <div className={styles.createToken}>transfer ownership</div>
            <div className={styles.checkDetailWrapper}>
              <div className={styles.createToken}>check detail</div>
            </div>
          </div>
          <div className={styles.allowence}>
            <div className={styles.createToken}>unpause</div>
            <div className={styles.checkDetailWrapper}>
              <div className={styles.createToken}>check detail</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.cdxExplorerParent}>
          <div className={styles.createToken}>cDX explorer</div>
          <div className={styles.frameGroup}>
            <div className={styles.frameWrapper}>
              <div className={styles.frameContainer}>
                <div className={styles.enterTokenAddressParent}>
                  <div className={styles.createToken}>enter token address</div>
                  <div className={styles.enterTokenAddressWrapper}>
                    <div className={styles.createToken}>
                      enter token address
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.btnSmall}>
              <div className={styles.createToken}>search</div>
            </div>
          </div>
        </div>
        <div className={styles.tokenInfoParent}>
          <div className={styles.createToken}>token info</div>
          <div className={styles.frameParent1}>
            <div className={styles.tokenNameParent}>
              <div className={styles.createToken}>token name</div>
              <div className={styles.div}>jilly77</div>
            </div>
            <div className={styles.tokenNameParent}>
              <div className={styles.createToken}>token symbol</div>
              <div className={styles.div}>jilly77</div>
            </div>
            <div className={styles.tokenNameParent}>
              <div className={styles.createToken}>token decimal</div>
              <div className={styles.div}>77</div>
            </div>
            <div className={styles.tokenNameParent}>
              <div className={styles.createToken}>token supply</div>
              <div className={styles.div}>1.000.000</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenRead;
