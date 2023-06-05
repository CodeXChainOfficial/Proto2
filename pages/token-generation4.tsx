import type { NextPage } from "next";
import styles from "./token-generation4.module.css";
const TokenGeneration4: NextPage = () => {
  return (
    <div className={styles.tokenGeneration}>
      <div className={styles.mintNftProcessed}>
        <div className={styles.frameParent}>
          <img className={styles.frameChild} alt="" src="/frame-371091.svg" />
          <img className={styles.frameItem} alt="" src="/line-691.svg" />
          <img className={styles.frameChild} alt="" src="/frame-371092.svg" />
          <img className={styles.frameItem} alt="" src="/line-691.svg" />
          <img className={styles.frameChild} alt="" src="/frame-371092.svg" />
          <img className={styles.frameItem} alt="" src="/line-691.svg" />
          <img className={styles.frameChild2} alt="" src="/frame-3710881.svg" />
          <img className={styles.frameItem} alt="" src="/line-69.svg" />
          <img className={styles.frameChild2} alt="" src="/frame-3710892.svg" />
          <img className={styles.frameItem} alt="" src="/line-69.svg" />
          <img className={styles.frameChild2} alt="" src="/frame-3710903.svg" />
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.frameWrapper}>
            <div className={styles.contractTypeParent}>
              <div className={styles.contractType}>Contract Type</div>
              <div className={styles.erc721Erc721aEtc}>
                ERC721, ERC721A, etc
              </div>
            </div>
          </div>
          <div className={styles.frameWrapper}>
            <div className={styles.blockchainParent}>
              <div className={styles.contractType}>Blockchain</div>
              <div className={styles.blockchainToDeploy}>
                Blockchain to deploy smart contract to
              </div>
            </div>
          </div>
          <div className={styles.frameWrapper}>
            <div className={styles.blockchainParent}>
              <div className={styles.contractType}>General Info</div>
              <div className={styles.blockchainToDeploy}>
                Smart contract name, symbol, etc.
              </div>
            </div>
          </div>
          <div className={styles.frameWrapper}>
            <div className={styles.blockchainParent}>
              <div className={styles.contractType}>Features</div>
              <div className={styles.blockchainToDeploy}>
                Delayed reveal, whitelist, etc.
              </div>
            </div>
          </div>
          <div className={styles.frameWrapper}>
            <div className={styles.blockchainParent}>
              <div className={styles.contractType}>Marketplace</div>
              <div className={styles.blockchainToDeploy}>
                Collection name, royalties, etc.
              </div>
            </div>
          </div>
          <div className={styles.frameWrapper}>
            <div className={styles.blockchainParent}>
              <div className={styles.contractType}>Deploy</div>
              <div className={styles.blockchainToDeploy}>
                Verify and publish the smart contract
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.features1}>features</div>
      <div className={styles.frameParent1}>
        <div className={styles.frameParent2}>
          <div className={styles.switcParent}>
            <div className={styles.switc}>
              <div className={styles.switcChild} />
              <div className={styles.switcItem} />
            </div>
            <div className={styles.contractType}>delayed reveal</div>
          </div>
          <div className={styles.erc721Erc721aEtc}>
            your costumers will see a placeholder image on all NFTs until the
            reveal date
          </div>
        </div>
        <div className={styles.frameParent2}>
          <div className={styles.switcParent}>
            <div className={styles.switc}>
              <div className={styles.switcInner} />
              <div className={styles.ellipseDiv} />
            </div>
            <div className={styles.contractType}>whistlist</div>
          </div>
          <div className={styles.erc721Erc721aEtc}>
            Give specific group of people (team, early supporters, etc.) access
            to mint before others
          </div>
        </div>
        <div className={styles.frameParent2}>
          <div className={styles.switcParent}>
            <div className={styles.switc}>
              <div className={styles.switcInner} />
              <div className={styles.ellipseDiv} />
            </div>
            <div className={styles.contractType}>
              primary sales revenue splits
            </div>
          </div>
          <div className={styles.erc721Erc721aEtc}>
            Skip when you (the collection owner) are the 100% shareholder
          </div>
        </div>
      </div>
      <div className={styles.btnSmallParent}>
        <div className={styles.btnSmall}>
          <div className={styles.contractType}>back</div>
        </div>
        <div className={styles.btnSmall1}>
          <div className={styles.contractType}>reset</div>
        </div>
      </div>
      <div className={styles.noCode}>no-code</div>
      <div className={styles.footerexplorer}>
        <div className={styles.frameParent5}>
          <div className={styles.frameParent6}>
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
            <div className={styles.frameWrapper4}>
              <div className={styles.privacyParent}>
                <div className={styles.contractType}>privacy</div>
                <div className={styles.contractType}>term</div>
              </div>
            </div>
          </div>
          <div className={styles.findUsParent}>
            <div className={styles.contractType}>find us</div>
            <div className={styles.mditwitterParent}>
              <img
                className={styles.mditwitterIcon}
                alt=""
                src="/mditwitter.svg"
              />
              <img
                className={styles.mditwitterIcon}
                alt=""
                src="/icoutlinediscord1.svg"
              />
              <img
                className={styles.mditwitterIcon}
                alt=""
                src="/mdigithub.svg"
              />
              <img
                className={styles.mditwitterIcon}
                alt=""
                src="/icoutlinetelegram.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.headerDiscussion}>
        <div className={styles.isolationModeWrapper}>
          <img
            className={styles.isolationModeIcon}
            alt=""
            src="/isolation-mode1.svg"
          />
        </div>
        <div className={styles.frameParent7}>
          <div className={styles.privacyParent}>
            <div className={styles.contractType}>Products</div>
            <div className={styles.contractType}>Project</div>
            <div className={styles.contractType}>Ecosystem</div>
            <div className={styles.contractType}>About us</div>
            <div className={styles.contractType}>doc</div>
          </div>
          <div className={styles.btnSmall1}>
            <div className={styles.contractType}>connect wallet</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenGeneration4;
