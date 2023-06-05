import type { NextPage } from "next";
import { Button } from "@mui/material";
import styles from "./token-deatils.module.css";
const TokenDeatils: NextPage = () => {
  return (
    <div className={styles.tokenDeatils}>
      <div className={styles.frameParent}>
        <div className={styles.createYourTokenParent}>
          <div className={styles.createYourToken}>Create Your Token</div>
          <div className={styles.frameGroup}>
            <div className={styles.frameContainer}>
              <div className={styles.createYourTokenParent}>
                <div className={styles.createYourToken}>Token Type*</div>
                <div className={styles.liquidGeneratorTokenParent}>
                  <div className={styles.createYourToken}>
                    liquid generator token
                  </div>
                  <img
                    className={styles.bxsupArrowIcon}
                    alt=""
                    src="/bxsuparrow1.svg"
                  />
                </div>
              </div>
              <div className={styles.createYourTokenParent}>
                <div className={styles.createYourToken}>Symbol*</div>
                <div className={styles.exShibaWrapper}>
                  <div className={styles.createYourToken}>ex. shiba</div>
                </div>
              </div>
              <div className={styles.createYourTokenParent}>
                <div className={styles.createYourToken}>Token Supply*</div>
                <div className={styles.exShibaWrapper}>
                  <div className={styles.createYourToken}>token suply</div>
                </div>
              </div>
              <div className={styles.createYourTokenParent}>
                <div className={styles.createYourToken}>
                  Transaction Fee to Generate Yield (%)*
                </div>
                <div className={styles.exShibaWrapper}>
                  <div className={styles.transactionFeeTo1}>
                    Transaction Fee to Generate Yield (%)*
                  </div>
                </div>
              </div>
              <div className={styles.createYourTokenParent}>
                <div className={styles.createYourToken}>Charity Address*</div>
                <div className={styles.exShibaWrapper}>
                  <div className={styles.createYourToken}>Charity Address*</div>
                </div>
              </div>
              <div className={styles.createYourTokenParent}>
                <div className={styles.createYourToken}>Marketing Address*</div>
                <div className={styles.exShibaWrapper}>
                  <div className={styles.createYourToken}>
                    Marketing Address*
                  </div>
                </div>
              </div>
              <div className={styles.createYourTokenParent}>
                <div className={styles.createYourToken}>
                  Liquidity Fee to Sell*
                </div>
                <div className={styles.exShibaWrapper}>
                  <div className={styles.createYourToken}>
                    Liquidity Fee to Sell*
                  </div>
                </div>
              </div>
              <div className={styles.createYourTokenParent}>
                <div className={styles.createYourToken}>
                  Charity Fee to Sell*
                </div>
                <div className={styles.exShibaWrapper}>
                  <div className={styles.createYourToken}>
                    Charity Fee to Sell*
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameContainer}>
              <div className={styles.createYourTokenParent}>
                <div className={styles.createYourToken}>Name*</div>
                <div className={styles.exShibaWrapper}>
                  <div className={styles.createYourToken}>ex. shibainu</div>
                </div>
              </div>
              <div className={styles.createYourTokenParent}>
                <div className={styles.createYourToken}>Decimal*</div>
                <div className={styles.liquidGeneratorTokenParent}>
                  <div className={styles.createYourToken}>6</div>
                  <img
                    className={styles.bxsupArrowIcon}
                    alt=""
                    src="/bxsuparrow1.svg"
                  />
                </div>
              </div>
              <div className={styles.createYourTokenParent}>
                <div className={styles.createYourToken}>Router*</div>
                <div className={styles.liquidGeneratorTokenParent}>
                  <div className={styles.createYourToken}>select Router</div>
                  <img
                    className={styles.bxsupArrowIcon}
                    alt=""
                    src="/bxsuparrow.svg"
                  />
                </div>
              </div>
              <div className={styles.createYourTokenParent}>
                <div className={styles.createYourToken}>
                  Transaction Fee to Generate Liquidity (%)*
                </div>
                <div className={styles.exShibaWrapper}>
                  <div className={styles.createYourToken}>
                    Transaction Fee to Generate Liquidity (%)*
                  </div>
                </div>
              </div>
              <div className={styles.createYourTokenParent}>
                <div className={styles.createYourToken}>
                  Charity Percent (%)*
                </div>
                <div className={styles.exShibaWrapper}>
                  <div className={styles.createYourToken}>
                    Charity Percent (%)*
                  </div>
                </div>
              </div>
              <div className={styles.createYourTokenParent}>
                <div className={styles.createYourToken}>
                  Marketing Percent (%)*
                </div>
                <div className={styles.exShibaWrapper}>
                  <div className={styles.createYourToken}>
                    Marketing Percent (%)*
                  </div>
                </div>
              </div>
              <div className={styles.createYourTokenParent}>
                <div className={styles.createYourToken}>
                  Marketing Fee to Sell*
                </div>
                <div className={styles.exShibaWrapper}>
                  <div className={styles.createYourToken}>
                    Marketing Fee to Sell*
                  </div>
                </div>
              </div>
              <div className={styles.createYourTokenParent}>
                <div className={styles.createYourToken}>
                  Transaction Limit(%)*
                </div>
                <div className={styles.exShibaWrapper}>
                  <div className={styles.createYourToken}>
                    Transaction Limit(%)*
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.noteFeeGivenAs0WillBeCWrapper}>
            <div className={styles.createYourToken}>
              Note: Fee given as 0 will be considered as no fee. Transaction
              limit given as 100% will be considered as no limit
            </div>
          </div>
        </div>
        <Button
          variant="contained"
          color="primary"
          href="/token-success-creation"
        >
          Apply
        </Button>
      </div>
      <div className={styles.frameParent1}>
        <div className={styles.tokenWrapper}>
          <div className={styles.token}>token</div>
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.frameWrapper1}>
            <div className={styles.frameParent2}>
              <Button variant="contained" color="primary">
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
  );
};

export default TokenDeatils;
