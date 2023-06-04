import type { NextPage } from "next";
import styles from "./token-generation.module.css";
const TokenGeneration: NextPage = () => {
  return (
    <div className={styles.tokenGeneration}>
      <div className={styles.mintNftProcessed}>
        <div className={styles.frameParent}>
          <img className={styles.frameChild} alt="" src="/frame-371085.svg" />
          <img className={styles.frameItem} alt="" src="/line-69.svg" />
          <img className={styles.frameChild} alt="" src="/frame-371086.svg" />
          <img className={styles.frameItem} alt="" src="/line-69.svg" />
          <img className={styles.frameChild} alt="" src="/frame-371087.svg" />
          <img className={styles.frameItem} alt="" src="/line-69.svg" />
          <img className={styles.frameChild} alt="" src="/frame-371088.svg" />
          <img className={styles.frameItem} alt="" src="/line-69.svg" />
          <img className={styles.frameChild} alt="" src="/frame-371089.svg" />
          <img className={styles.frameItem} alt="" src="/line-69.svg" />
          <img className={styles.frameChild} alt="" src="/frame-371090.svg" />
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
      <div className={styles.pickContractType}>Pick Contract Type</div>
      <div className={styles.noCode}>no-code</div>
      <div className={styles.frameParent1}>
        <div className={styles.frameParent2}>
          <div className={styles.frameWrapper4}>
            <div className={styles.nftErc721Parent}>
              <div className={styles.nftErc721}>{`NFT | ERC721 `}</div>
              <div className={styles.erc721Erc721aEtc}>
                Typical NFT contract, suitable for ETH Network and most
                scenario.
              </div>
            </div>
          </div>
          <div className={styles.frameWrapper5}>
            <div className={styles.nftErc721Parent}>
              <div className={styles.nftErc721}>{`NFT | CW721 `}</div>
              <div className={styles.erc721Erc721aEtc}>
                Typical NFT contract, suitable for CosmWasm Network and most
                scenario.
              </div>
            </div>
          </div>
          <div className={styles.frameWrapper5}>
            <div className={styles.nftErc721Parent}>
              <div className={styles.nftErc721}>{`NFT | BEP721 `}</div>
              <div className={styles.erc721Erc721aEtc}>
                Typical NFT contract, suitable for BNB Smart Chain Network and
                most scenario.
              </div>
            </div>
          </div>
          <div className={styles.frameWrapper7}>
            <div className={styles.nftErc721Parent}>
              <div className={styles.nftErc721}>{`NFT | TRC721 `}</div>
              <div className={styles.erc721Erc721aEtc}>
                Typical NFT contract, suitable for Tron Network. it is
                compatible with ERC-721, a standard that creates NFT on the ETH
                blockchain. Pick if unsure.
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameParent3}>
          <div className={styles.frameWrapper8}>
            <div className={styles.nftErc721Parent}>
              <div className={styles.nftErc721a}>NFT | ERC721A (Azuki)</div>
              <div className={styles.knownAsAzuki}>
                Known as Azuki smart contract, suitable when you expect your
                customers to mint NFTs in small batches thus saving them on gas
                fees. under certain circumstance this might increase the
                transfer gas fee (e.g. when sending NFTs to someone after mint).
              </div>
              <div className={styles.inquire}>Inquire</div>
            </div>
          </div>
          <div className={styles.frameWrapper5}>
            <div className={styles.frameParent4}>
              <div className={styles.nftErc721OmnichainCustomParent}>
                <div className={styles.nftMembership}>
                  NFT | ERC721 OmniChain (Custom order)
                </div>
                <div className={styles.spreadOutYourContainer}>
                  <span className={styles.spreadOutYourContainer1}>
                    <p className={styles.spreadOutYour}>
                      Spread out your NFT collection across 7 different
                      blockchains. Allows NFTs to be transferred between these
                      chains.
                    </p>
                    <p className={styles.spreadOutYour}>Inquire</p>
                  </span>
                </div>
              </div>
              <div className={styles.inquire2}>Inquire</div>
            </div>
          </div>
          <div className={styles.frameWrapper5}>
            <div className={styles.frameParent4}>
              <div className={styles.nftErc721OmnichainCustomParent}>
                <div className={styles.nftMembership}>
                  Fungible | ERC20 or NFT i DAO (Custom order)
                </div>
                <div className={styles.spreadOutYourContainer}>
                  typical fungible token contract or custom for decentralized
                  autonomous organization with NFTs used for voting power.
                </div>
              </div>
              <div className={styles.inquire2}>Inquire</div>
            </div>
          </div>
          <div className={styles.frameWrapper5}>
            <div className={styles.frameParent4}>
              <div className={styles.nftErc721OmnichainCustomParent}>
                <div className={styles.nftMembership}>
                  NFT | membership / mint pass (custom order)
                </div>
                <div className={styles.spreadOutYourContainer}>
                  Create NFT passed to use membership cards, event tickets, etc.
                </div>
              </div>
              <div className={styles.inquire2}>Inquire</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.btnSmall}>
        <div className={styles.contractType}>next</div>
      </div>
      <div className={styles.footerexplorer}>
        <div className={styles.frameParent7}>
          <div className={styles.frameParent8}>
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
            <div className={styles.frameWrapper12}>
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
        <div className={styles.frameParent9}>
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

export default TokenGeneration;
