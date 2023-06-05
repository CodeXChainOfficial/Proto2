import type { NextPage } from "next";
import Link from "next/link";
import styles from "./token-write.module.css";
const TokenWrite: NextPage = () => {
  return (
    <div className={styles.tokenWrite}>
      <div className={styles.frameParent}>
        <div className={styles.tokenSettingWrapper}>
          <div className={styles.tokenSetting}>token Setting</div>
        </div>
        <div className={styles.groupWrapper}>
          <div className={styles.frameWrapper}>
            <div className={styles.frameContainer}>
              <div className={styles.frameDiv}>
                <div className={styles.frameGroup}>
                  <Link className={styles.createTokenWrapper} href="/">
                    <div className={styles.createToken}>create token</div>
                  </Link>
                  <div className={styles.myTokenWrapper}>
                    <div className={styles.createToken}>my token</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameParent1}>
        <div className={styles.frameGroup}>
          <Link className={styles.readContractWrapper} href="/token-read">
            <div className={styles.createToken}>read contract</div>
          </Link>
          <div className={styles.writeContractWrapper}>
            <div className={styles.createToken}>write contract</div>
          </div>
        </div>
        <div className={styles.allowenceParent}>
          <div className={styles.allowence}>
            <div className={styles.createToken}>approve</div>
            <div className={styles.checkDetailWrapper}>
              <div className={styles.createToken}>check detail</div>
            </div>
          </div>
          <div className={styles.allowence}>
            <div className={styles.createToken}>burn</div>
            <div className={styles.checkDetailWrapper}>
              <div className={styles.createToken}>check detail</div>
            </div>
          </div>
          <div className={styles.allowence4}>
            <div className={styles.allowence}>
              <div className={styles.createToken}>allowence</div>
              <div className={styles.checkDetailWrapper}>
                <div className={styles.createToken}>check detail</div>
              </div>
            </div>
            <div className={styles.ammountParent}>
              <div className={styles.ammount}>ammount</div>
              <div className={styles.ammountWrapper}>
                <div className={styles.ammount1}>1.600.000</div>
              </div>
              <div className={styles.btnSmall}>
                <div className={styles.createToken}>write</div>
              </div>
            </div>
          </div>
          <div className={styles.allowence}>
            <div className={styles.createToken}>decress allowance</div>
            <div className={styles.checkDetailWrapper}>
              <div className={styles.createToken}>check detail</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameParent3}>
        <div className={styles.cdxExplorerParent}>
          <div className={styles.createToken}>cDX explorer</div>
          <div className={styles.frameParent4}>
            <div className={styles.frameWrapper1}>
              <div className={styles.frameWrapper2}>
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
            <div className={styles.btnSmall1}>
              <div className={styles.createToken}>search</div>
            </div>
          </div>
        </div>
        <div className={styles.tokenInfoParent}>
          <div className={styles.createToken}>token info</div>
          <div className={styles.frameParent5}>
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

export default TokenWrite;
