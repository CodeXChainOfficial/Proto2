import type { NextPage } from "next";
import { Button } from "@mui/material";
import Link from "next/link";
import styles from "./index.module.css";
const CreateToken: NextPage = () => {
  return (
    <div className={styles.createToken}>
      <div className={styles.frameParent}>
        <div className={styles.createYourTokenParent}>
          <div className={styles.createYourToken}>Create Your Token</div>
          <div className={styles.frameWrapper}>
            <div className={styles.frameGroup}>
              <div className={styles.frameContainer}>
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
                <Link
                  className={styles.btnSmall}
                  href="/create-token-wallet-selection"
                >
                  <div className={styles.createYourToken}>connect wallet</div>
                </Link>
              </div>
              <div className={styles.frameDiv}>
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
        <div className={styles.frameParent1}>
          <div className={styles.tokenWrapper}>
            <div className={styles.token}>token</div>
          </div>
          <div className={styles.frameWrapper1}>
            <div className={styles.frameWrapper2}>
              <div className={styles.privacyParent}>
                <Button
                  variant="contained"
                  color="primary"
                  href="/create-project-page"
                >
                  create token
                </Button>
                <Button variant="contained" color="primary" href="/token-read">
                  my tokens
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className={styles.vectorIcon} alt="" src="/vector2.svg" />
      <img className={styles.vectorIcon1} alt="" src="/vector3.svg" />
      <div className={styles.footerexplorer}>
        <div className={styles.frameParent3}>
          <div className={styles.frameParent4}>
            <div className={styles.logoNewParent}>
              <div className={styles.logoNew}>
                <img
                  className={styles.image12Icon}
                  alt=""
                  src="/image-12@2x.png"
                />
              </div>
              <div className={styles.codex}>© 2023 codex</div>
            </div>
            <div className={styles.frameWrapper3}>
              <div className={styles.privacyParent}>
                <div className={styles.createYourToken}>privacy</div>
                <div className={styles.createYourToken}>term</div>
              </div>
            </div>
          </div>
          <div className={styles.findUsParent}>
            <div className={styles.createYourToken}>find us</div>
            <div className={styles.mditwitterParent}>
              <img
                className={styles.bxsupArrowIcon}
                alt=""
                src="/mditwitter.svg"
              />
              <img
                className={styles.bxsupArrowIcon}
                alt=""
                src="/icoutlinediscord1.svg"
              />
              <img
                className={styles.bxsupArrowIcon}
                alt=""
                src="/mdigithub.svg"
              />
              <img
                className={styles.bxsupArrowIcon}
                alt=""
                src="/icoutlinetelegram.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateToken;
