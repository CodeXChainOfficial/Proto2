import type { NextPage } from "next";
import Link from "next/link";
import styles from "./token-success-creation.module.css";
const TokenSuccessCreation: NextPage = () => {
  return (
    <div className={styles.tokenSuccessCreation}>
      <div className={styles.createYourTokenParent}>
        <div className={styles.createYourToken}>Create Your Token</div>
        <div className={styles.frameWrapper}>
          <div className={styles.frameParent}>
            <div className={styles.frameGroup}>
              <div className={styles.tokenTypeParent}>
                <div className={styles.createYourToken}>Token Type*</div>
                <div className={styles.standardTokenParent}>
                  <div className={styles.createYourToken}>standard token</div>
                  <img
                    className={styles.bxsupArrowIcon}
                    alt=""
                    src="/bxsuparrow1.svg"
                  />
                </div>
              </div>
              <div className={styles.tokenTypeParent}>
                <div className={styles.createYourToken}>Symbol*</div>
                <div className={styles.exShibaWrapper}>
                  <div className={styles.createYourToken}>ex. shiba</div>
                </div>
              </div>
              <div className={styles.tokenTypeParent}>
                <div className={styles.createYourToken}>Token Supply*</div>
                <div className={styles.exShibaWrapper}>
                  <div className={styles.createYourToken}>token suply</div>
                </div>
              </div>
              <div className={styles.btnSmall}>
                <div className={styles.createYourToken}>connect wallet</div>
              </div>
            </div>
            <div className={styles.frameContainer}>
              <div className={styles.tokenTypeParent}>
                <div className={styles.createYourToken}>Name*</div>
                <div className={styles.exShibaWrapper}>
                  <div className={styles.createYourToken}>ex. shibainu</div>
                </div>
              </div>
              <div className={styles.tokenTypeParent}>
                <div className={styles.createYourToken}>Decimal*</div>
                <div className={styles.standardTokenParent}>
                  <div className={styles.createYourToken}>6</div>
                  <img
                    className={styles.bxsupArrowIcon}
                    alt=""
                    src="/bxsuparrow1.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameDiv}>
        <div className={styles.tokenCreatedSuccesfullyParent}>
          <div className={styles.createYourToken}>
            token created succesfully
          </div>
          <Link className={styles.icroundClose} href="/token-read">
            <img className={styles.vectorIcon} alt="" src="/vector1.svg" />
          </Link>
        </div>
        <div className={styles.frameParent1}>
          <div className={styles.nameGroup}>
            <div className={styles.nameGroup}>
              <div className={styles.createYourToken}>name</div>
              <div className={styles.finance1Wrapper}>
                <div className={styles.createYourToken}>finance 1</div>
              </div>
            </div>
            <div className={styles.nameGroup}>
              <div className={styles.createYourToken}>symbol</div>
              <div className={styles.finance1Wrapper}>
                <div className={styles.createYourToken}>CDXF1</div>
              </div>
            </div>
          </div>
          <div className={styles.nameGroup}>
            <div className={styles.nameGroup}>
              <div className={styles.createYourToken}>total supply</div>
              <div className={styles.wrapper}>
                <div className={styles.createYourToken}>1.000.000</div>
              </div>
            </div>
            <div className={styles.nameGroup}>
              <div className={styles.createYourToken}>addres</div>
              <div className={styles.hfyg686hhhhhkParent}>
                <div className={styles.createYourToken}>hfyg686hhhhhk...</div>
                <img
                  className={styles.bxsupArrowIcon}
                  alt=""
                  src="/akariconscopy.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.btnSmallParent}>
          <div className={styles.btnSmall1}>
            <div className={styles.createYourToken}>view transaction</div>
          </div>
          <Link className={styles.btnSmall2} href="/create-project-page">
            <div className={styles.createYourToken}>create DApp</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TokenSuccessCreation;
