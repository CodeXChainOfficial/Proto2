import type { NextPage } from "next";
import styles from "./token-generation9.module.css";
const TokenGeneration9: NextPage = () => {
  return (
    <div className={styles.tokenGeneration}>
      <div className={styles.dao}>dAO</div>
      <div className={styles.deployYourDaoParent}>
        <div className={styles.deployYourDao}>Deploy your DAO</div>
        <div className={styles.doubleCheckThatEverythingIWrapper}>
          <div className={styles.doubleCheckThatEverything}>
            Double-check that everything is correct before launching your
            organization.
          </div>
        </div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.frameContainer}>
            <div className={styles.frameDiv}>
              <div className={styles.frameGroup}>
                <div className={styles.networkParent}>
                  <div className={styles.frameParent2}>
                    <div className={styles.blockchainParent}>
                      <div className={styles.blockchain}>Blockchain</div>
                      <div className={styles.notChangeableWrapper}>
                        <div className={styles.blockchain}>Not changeable</div>
                      </div>
                    </div>
                    <div className={styles.frameParent3}>
                      <div className={styles.networkParent}>
                        <div className={styles.network}>Network</div>
                        <div className={styles.network}>Blockchain</div>
                      </div>
                      <div className={styles.networkParent}>
                        <div className={styles.network}>Testnet</div>
                        <div className={styles.network}>Mumbai</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.theseValuesAreCorrectWrapper}>
                    <div className={styles.theseValuesAre}>
                      These values are correct
                    </div>
                  </div>
                </div>
                <div className={styles.editWrapper}>
                  <div className={styles.theseValuesAre}>edit</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.frameContainer}>
            <div className={styles.frameDiv}>
              <div className={styles.frameGroup}>
                <div className={styles.networkParent}>
                  <div className={styles.frameParent2}>
                    <div className={styles.blockchainParent}>
                      <div className={styles.blockchain}>DAO details</div>
                      <div className={styles.notChangeableWrapper}>
                        <div className={styles.blockchain}>
                          Change with a vote
                        </div>
                      </div>
                    </div>
                    <div className={styles.frameParent3}>
                      <div className={styles.networkParent}>
                        <div className={styles.network}>Logo</div>
                        <div className={styles.network}>DAD name</div>
                        <div className={styles.network}>ENS Subdomain</div>
                        <div className={styles.network}>Summary</div>
                      </div>
                      <div className={styles.networkParent}>
                        <div className={styles.logopngWrapper}>
                          <div className={styles.blockchain}>logo.png</div>
                        </div>
                        <div className={styles.network}>xxxx</div>
                        <div className={styles.network}>{`xxxx.dao.ath `}</div>
                        <div className={styles.network}>xxxx</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.theseValuesAreCorrectWrapper}>
                    <div className={styles.theseValuesAre}>
                      These values are correct
                    </div>
                  </div>
                </div>
                <div className={styles.editWrapper}>
                  <div className={styles.theseValuesAre}>edit</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.frameContainer}>
            <div className={styles.frameDiv}>
              <div className={styles.frameGroup}>
                <div className={styles.networkParent}>
                  <div className={styles.frameParent2}>
                    <div className={styles.blockchainParent}>
                      <div className={styles.blockchain}>Voters</div>
                      <div className={styles.notChangeableWrapper}>
                        <div className={styles.blockchain}>
                          Changeable with a vote
                        </div>
                      </div>
                    </div>
                    <div className={styles.frameParent3}>
                      <div className={styles.networkParent}>
                        <div className={styles.network}>Eligible voters</div>
                        <div className={styles.network}>Distribution</div>
                        <div className={styles.network}>Proposal creation</div>
                      </div>
                      <div className={styles.networkParent}>
                        <div className={styles.network}>Multisig members</div>
                        <div className={styles.network}>See 1 addresses</div>
                        <div className={styles.network}>Multisig members</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.theseValuesAreCorrectWrapper}>
                    <div className={styles.theseValuesAre}>
                      These values are correct
                    </div>
                  </div>
                </div>
                <div className={styles.editWrapper}>
                  <div className={styles.theseValuesAre}>edit</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.frameContainer}>
            <div className={styles.frameDiv}>
              <div className={styles.frameGroup}>
                <div className={styles.networkParent}>
                  <div className={styles.frameParent2}>
                    <div className={styles.blockchainParent}>
                      <div className={styles.blockchain}>Voting parameters</div>
                      <div className={styles.notChangeableWrapper}>
                        <div className={styles.blockchain}>
                          Changeable with a vote
                        </div>
                      </div>
                    </div>
                    <div className={styles.frameParent3}>
                      <div className={styles.minimumApprovalWrapper}>
                        <div className={styles.network}>Minimum approval</div>
                      </div>
                      <div className={styles.minimumApprovalWrapper}>
                        <div className={styles.network}>1of1authorized add</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.theseValuesAreCorrectWrapper}>
                    <div className={styles.theseValuesAre}>
                      These values are correct
                    </div>
                  </div>
                </div>
                <div className={styles.editWrapper}>
                  <div className={styles.theseValuesAre}>edit</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.exceptForTheChainYouChoosWrapper}>
        <div className={styles.theseValuesAre}>
          Except for the chain you choose and the token you mint, you can change
          all these values later with a vote in your DAO.
        </div>
      </div>
      <div className={styles.btnSmallWrapper}>
        <div className={styles.btnSmall}>
          <div className={styles.blockchain}>Deploy your DAO ›</div>
        </div>
      </div>
    </div>
  );
};

export default TokenGeneration9;
