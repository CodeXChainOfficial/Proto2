import type { NextPage } from "next";
import styles from "./token-generation10.module.css";
const TokenGeneration10: NextPage = () => {
  return (
    <div className={styles.tokenGeneration}>
      <div className={styles.procesDao}>
        <div className={styles.frameParent}>
          <img className={styles.frameChild} alt="" src="/frame-371091.svg" />
          <img className={styles.frameItem} alt="" src="/line-74.svg" />
          <img className={styles.frameChild} alt="" src="/frame-371091.svg" />
          <img className={styles.frameItem} alt="" src="/line-74.svg" />
          <img className={styles.frameChild} alt="" src="/frame-371091.svg" />
          <img className={styles.frameItem} alt="" src="/line-74.svg" />
          <img className={styles.frameChild2} alt="" src="/frame-371122.svg" />
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.frameWrapper}>
            <div className={styles.frameContainer}>
              <div className={styles.selectBlockchainWrapper}>
                <div className={styles.selectBlockchain}>Select blockchain</div>
              </div>
            </div>
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.frameContainer}>
              <div className={styles.describeYourDaoWrapper}>
                <div className={styles.selectBlockchain}>Describe your DAO</div>
              </div>
            </div>
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.frameContainer}>
              <div className={styles.describeYourDaoWrapper}>
                <div className={styles.selectBlockchain}>Define membership</div>
              </div>
            </div>
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.frameContainer}>
              <div className={styles.describeYourDaoWrapper}>
                <div className={styles.selectBlockchain}>
                  Select governance settings
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.dao}>dAO</div>
      <div className={styles.selectGovernanceSettingsParent}>
        <div className={styles.selectGovernanceSettings1}>
          Select governance settings
        </div>
        <div className={styles.theseSettingsDetermineHowVWrapper}>
          <div className={styles.theseSettingsDetermine}>
            These settings determine how voting works in your DAO. Read best
            practices for governance settings in this guide.
          </div>
        </div>
      </div>
      <div className={styles.btnSmallParent}>
        <div className={styles.btnSmall}>
          <div className={styles.back}>back</div>
        </div>
        <div className={styles.btnSmall1}>
          <div className={styles.back}>reset</div>
        </div>
      </div>
      <div className={styles.tokenGenerationInner}>
        <div className={styles.frameWrapper6}>
          <div className={styles.frameWrapper7}>
            <div className={styles.frameParent1}>
              <div className={styles.minimumApprovalParent}>
                <div className={styles.back}>Minimum approval</div>
                <div className={styles.minimumApprovalIs}>
                  Minimum approval is the amount of addresses in the authorized
                  list that must approve a proposal for it to pass.
                </div>
              </div>
              <div className={styles.frameParent2}>
                <div className={styles.frameWrapper8}>
                  <div className={styles.frameParent3}>
                    <img
                      className={styles.frameChild3}
                      alt=""
                      src="/frame-371156.svg"
                    />
                    <div className={styles.back}>1</div>
                    <img
                      className={styles.frameChild4}
                      alt=""
                      src="/frame-371155.svg"
                    />
                  </div>
                </div>
                <div className={styles.of1AddressesParent}>
                  <div className={styles.back}>1 of 1 addresses</div>
                  <div className={styles.frameParent4}>
                    <div className={styles.yesWrapper}>
                      <div className={styles.back}>yes</div>
                    </div>
                    <div className={styles.groupWrapper}>
                      <div className={styles.rectangleParent}>
                        <div className={styles.groupChild} />
                        <div className={styles.groupItem} />
                      </div>
                    </div>
                    <div className={styles.noWrapper}>
                      <div className={styles.back}>no</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.thisApprovalThresholdMightWrapper}>
                <div className={styles.thisApprovalThreshold}>
                  This approval threshold might be too high to reach regularly.
                  Consider setting something lower.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenGeneration10;
