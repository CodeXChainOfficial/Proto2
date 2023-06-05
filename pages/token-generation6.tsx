import type { NextPage } from "next";
import styles from "./token-generation6.module.css";
const TokenGeneration6: NextPage = () => {
  return (
    <div className={styles.tokenGeneration}>
      <div className={styles.pickBlockchain}>Pick blockchain</div>
      <div className={styles.btnSmall}>
        <div className={styles.buildOnCodex}>next</div>
      </div>
      <div className={styles.createYourTokenParent}>
        <div className={styles.buildOnCodex}>Create Your Token</div>
        <div className={styles.frameWrapper}>
          <div className={styles.frameParent}>
            <div className={styles.frameGroup}>
              <div className={styles.nameParent}>
                <div className={styles.name}>Name*</div>
                <div className={styles.boredApesWrapper}>
                  <div className={styles.buildOnCodex}>bored apes</div>
                </div>
                <div className={styles.pleaseCorrectName}>
                  Please correct "Name"
                </div>
                <div className={styles.purelyPresentationalNo}>
                  Purely presentational, no special characters, max 50, start
                  with a letter
                </div>
              </div>
              <div className={styles.nameParent}>
                <div className={styles.name}>Token Symbol*</div>
                <div className={styles.baycWrapper}>
                  <div className={styles.buildOnCodex}>bayc</div>
                </div>
                <div className={styles.pleaseCorrectName}>
                  Please corrent "Token Symbol"
                </div>
                <div className={styles.purelyPresentationalNo1}>
                  Purely presentational, no spaces, max 10 characters
                </div>
              </div>
              <div className={styles.pricePerNftInEthParent}>
                <div className={styles.buildOnCodex}>Price per NFT in ETH*</div>
                <div className={styles.parent}>
                  <div className={styles.buildOnCodex}>1</div>
                  <img
                    className={styles.bxsupArrowIcon}
                    alt=""
                    src="/bxsuparrow.svg"
                  />
                </div>
                <div className={styles.pleaseCorrectName}>
                  Please correct "Mint Price"
                </div>
                <div className={styles.mintPriceDuring}>
                  Mint price during public sale
                </div>
              </div>
              <div className={styles.nameParent}>
                <div className={styles.name}>Max NFTs Per Transaction</div>
                <div className={styles.baycWrapper}>
                  <div className={styles.buildOnCodex}>token suply</div>
                </div>
                <div className={styles.purelyPresentationalNo}>
                  Maximum number of NFTs someone can mint in one go. Helps
                  prevent botting and give everyone a fair chance to mint.
                </div>
              </div>
            </div>
            <div className={styles.frameContainer}>
              <div className={styles.standardTokenParent}>
                <div className={styles.name}>standard token</div>
                <div className={styles.baycWrapper}>
                  <div className={styles.buildOnCodex}>ex. shibainu</div>
                </div>
                <div className={styles.pleaseCorrectName}>
                  Please correct "Collection Size"
                </div>
                <div className={styles.purelyPresentationalNo1}>
                  Maximum number of NFTs that can be ever minted in this
                  collection
                </div>
              </div>
              <div className={styles.nameParent}>
                <div className={styles.buildOnCodex}>
                  First X Free Per Person
                </div>
                <div className={styles.group}>
                  <div className={styles.buildOnCodex}>1</div>
                  <img
                    className={styles.bxsupArrowIcon}
                    alt=""
                    src="/bxsuparrow.svg"
                  />
                </div>
                <div className={styles.pleaseCorrectName}>
                  Please correct "Collection Size"
                </div>
                <div className={styles.totalNumberOf}>
                  Maximum number of NFTs someone can mint for free. Subject to
                  Max NFTs Per Person and Max NFTs Per Transaction limits.
                </div>
              </div>
              <div className={styles.nameParent}>
                <div className={styles.buildOnCodex}>Max NFTs Per Person</div>
                <div className={styles.group}>
                  <div className={styles.buildOnCodex}>1</div>
                  <img
                    className={styles.bxsupArrowIcon}
                    alt=""
                    src="/bxsuparrow.svg"
                  />
                </div>
                <div className={styles.totalNumberOf}>
                  Total number of NFTs someone can mint during public sale
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.btnSmallParent}>
        <div className={styles.btnSmall1}>
          <div className={styles.buildOnCodex}>back</div>
        </div>
        <div className={styles.btnSmall2}>
          <div className={styles.buildOnCodex}>reset</div>
        </div>
      </div>
      <div className={styles.mintNftProcessed}>
        <div className={styles.frameDiv}>
          <img className={styles.frameChild} alt="" src="/frame-3710911.svg" />
          <img className={styles.frameItem} alt="" src="/line-691.svg" />
          <img className={styles.frameChild} alt="" src="/frame-3710911.svg" />
          <img className={styles.frameItem} alt="" src="/line-691.svg" />
          <img className={styles.frameIcon} alt="" src="/frame-3710871.svg" />
          <img className={styles.frameItem} alt="" src="/line-69.svg" />
          <img className={styles.frameIcon} alt="" src="/frame-3710882.svg" />
          <img className={styles.frameItem} alt="" src="/line-69.svg" />
          <img className={styles.frameIcon} alt="" src="/frame-3710893.svg" />
          <img className={styles.frameItem} alt="" src="/line-69.svg" />
          <img className={styles.frameIcon} alt="" src="/frame-3710904.svg" />
        </div>
        <div className={styles.frameParent1}>
          <div className={styles.frameWrapper1}>
            <div className={styles.contractTypeParent}>
              <div className={styles.buildOnCodex}>Contract Type</div>
              <div className={styles.erc721Erc721aEtc}>
                ERC721, ERC721A, etc
              </div>
            </div>
          </div>
          <div className={styles.frameWrapper1}>
            <div className={styles.blockchainParent}>
              <div className={styles.buildOnCodex}>Blockchain</div>
              <div className={styles.blockchainToDeploy}>
                Blockchain to deploy smart contract to
              </div>
            </div>
          </div>
          <div className={styles.frameWrapper1}>
            <div className={styles.blockchainParent}>
              <div className={styles.buildOnCodex}>General Info</div>
              <div className={styles.blockchainToDeploy}>
                Smart contract name, symbol, etc.
              </div>
            </div>
          </div>
          <div className={styles.frameWrapper1}>
            <div className={styles.blockchainParent}>
              <div className={styles.buildOnCodex}>Features</div>
              <div className={styles.blockchainToDeploy}>
                Delayed reveal, whitelist, etc.
              </div>
            </div>
          </div>
          <div className={styles.frameWrapper1}>
            <div className={styles.blockchainParent}>
              <div className={styles.buildOnCodex}>Marketplace</div>
              <div className={styles.blockchainToDeploy}>
                Collection name, royalties, etc.
              </div>
            </div>
          </div>
          <div className={styles.frameWrapper1}>
            <div className={styles.blockchainParent}>
              <div className={styles.buildOnCodex}>Deploy</div>
              <div className={styles.blockchainToDeploy}>
                Verify and publish the smart contract
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.noCode}>no-code</div>
      <div className={styles.generalInfo1}>general info</div>
      <div className={styles.footerexplorer}>
        <div className={styles.frameParent2}>
          <div className={styles.frameParent3}>
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
            <div className={styles.frameWrapper7}>
              <div className={styles.privacyParent}>
                <div className={styles.buildOnCodex}>privacy</div>
                <div className={styles.buildOnCodex}>term</div>
              </div>
            </div>
          </div>
          <div className={styles.findUsParent}>
            <div className={styles.buildOnCodex}>find us</div>
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
      <div className={styles.headerDiscussion}>
        <div className={styles.isolationModeWrapper}>
          <img
            className={styles.isolationModeIcon}
            alt=""
            src="/isolation-mode2.svg"
          />
        </div>
        <div className={styles.frameParent4}>
          <div className={styles.privacyParent}>
            <div className={styles.buildOnCodex}>Products</div>
            <div className={styles.buildOnCodex}>Project</div>
            <div className={styles.buildOnCodex}>Ecosystem</div>
            <div className={styles.buildOnCodex}>About us</div>
            <div className={styles.buildOnCodex}>doc</div>
          </div>
          <div className={styles.btnSmall2}>
            <div className={styles.buildOnCodex}>connect wallet</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenGeneration6;
