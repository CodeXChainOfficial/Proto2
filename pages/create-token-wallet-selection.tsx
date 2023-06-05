import type { NextPage } from "next";
import Link from "next/link";
import styles from "./create-token-wallet-selection.module.css";
const CreateTokenWalletSelection: NextPage = () => {
  return (
    <div className={styles.createTokenWalletSelection}>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.tokenWrapper}>
            <div className={styles.token}>token</div>
          </div>
          <div className={styles.frameWrapper}>
            <div className={styles.frameContainer}>
              <div className={styles.frameDiv}>
                <div className={styles.createTokenWrapper}>
                  <div className={styles.createToken}>create token</div>
                </div>
                <div className={styles.myTokenWrapper}>
                  <div className={styles.createToken}>my token</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.createYourTokenParent}>
          <div className={styles.createToken}>Create Your Token</div>
          <div className={styles.frameWrapper1}>
            <div className={styles.frameParent1}>
              <div className={styles.frameParent2}>
                <div className={styles.tokenTypeParent}>
                  <div className={styles.createToken}>Token Type*</div>
                  <div className={styles.standardTokenParent}>
                    <div className={styles.createToken}>standard token</div>
                    <img
                      className={styles.bxsupArrowIcon}
                      alt=""
                      src="/bxsuparrow1.svg"
                    />
                  </div>
                </div>
                <div className={styles.tokenTypeParent}>
                  <div className={styles.createToken}>Symbol*</div>
                  <div className={styles.exShibaWrapper}>
                    <div className={styles.createToken}>ex. shiba</div>
                  </div>
                </div>
                <div className={styles.tokenTypeParent}>
                  <div className={styles.createToken}>Token Supply*</div>
                  <div className={styles.exShibaWrapper}>
                    <div className={styles.createToken}>token suply</div>
                  </div>
                </div>
                <div className={styles.btnSmall}>
                  <div className={styles.createToken}>connect wallet</div>
                </div>
              </div>
              <div className={styles.frameParent3}>
                <div className={styles.tokenTypeParent}>
                  <div className={styles.createToken}>Name*</div>
                  <div className={styles.exShibaWrapper}>
                    <div className={styles.createToken}>ex. shibainu</div>
                  </div>
                </div>
                <div className={styles.tokenTypeParent}>
                  <div className={styles.createToken}>Decimal*</div>
                  <div className={styles.standardTokenParent}>
                    <div className={styles.createToken}>6</div>
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
      </div>
      <div className={styles.frameParent4}>
        <div className={styles.frameParent5}>
          <div className={styles.connectWalletWrapper}>
            <div className={styles.token}>connect wallet</div>
          </div>
          <img
            className={styles.bxsupArrowIcon}
            alt=""
            src="/icroundclose.svg"
          />
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.frameParent7}>
            <Link className={styles.frameA} href="/token-deatils">
              <div className={styles.frameWrapper2}>
                <div className={styles.codex11Wrapper}>
                  <img
                    className={styles.codex11Icon}
                    alt=""
                    src="/codex1-11@2x.png"
                  />
                </div>
              </div>
              <div className={styles.createToken}>codex mainnet</div>
            </Link>
            <div className={styles.frameParent8}>
              <img
                className={styles.frameChild}
                alt=""
                src="/frame-371062@2x.png"
              />
              <div className={styles.createToken}>tron mainnet</div>
            </div>
            <div className={styles.frameParent8}>
              <img
                className={styles.frameChild}
                alt=""
                src="/image-4001@2x.png"
              />
              <div className={styles.createToken}>etherium mainnet</div>
            </div>
            <div className={styles.frameParent8}>
              <img
                className={styles.frameChild}
                alt=""
                src="/image-4002@2x.png"
              />
              <div className={styles.createToken}>polygon mainnet</div>
            </div>
            <div className={styles.frameParent8}>
              <img
                className={styles.frameChild}
                alt=""
                src="/image-4003@2x.png"
              />
              <div className={styles.createToken}>arbritrum nova</div>
            </div>
            <div className={styles.frameParent8}>
              <img
                className={styles.frameChild}
                alt=""
                src="/image-4004@2x.png"
              />
              <div className={styles.createToken}>fantom opera mainnet</div>
            </div>
            <div className={styles.frameParent8}>
              <img
                className={styles.frameChild}
                alt=""
                src="/image-4005@2x.png"
              />
              <div className={styles.createToken}>kava</div>
            </div>
            <div className={styles.frameParent8}>
              <img
                className={styles.frameChild}
                alt=""
                src="/image-4006@2x.png"
              />
              <div className={styles.createToken}>moonbin mainnet</div>
            </div>
            <div className={styles.frameParent8}>
              <img
                className={styles.frameChild}
                alt=""
                src="/image-4007@2x.png"
              />
              <div className={styles.createToken}>{`moonriver `}</div>
            </div>
            <div className={styles.frameParent8}>
              <img
                className={styles.frameChild}
                alt=""
                src="/image-4008@2x.png"
              />
              <div className={styles.createToken}>optimism</div>
            </div>
          </div>
          <div className={styles.frameParent7}>
            <div className={styles.frameParent8}>
              <img
                className={styles.frameChild}
                alt=""
                src="/image-4009@2x.png"
              />
              <div className={styles.createToken}>arbritrum mainnet</div>
            </div>
            <div className={styles.frameParent8}>
              <img
                className={styles.frameChild}
                alt=""
                src="/image-40010@2x.png"
              />
              <div className={styles.createToken}>avalanche mainnet</div>
            </div>
            <div className={styles.frameParent8}>
              <img
                className={styles.frameChild}
                alt=""
                src="/image-40011@2x.png"
              />
              <div className={styles.createToken}>BSC Mainnet</div>
            </div>
            <div className={styles.frameParent8}>
              <img
                className={styles.frameChild}
                alt=""
                src="/image-40012@2x.png"
              />
              <div className={styles.createToken}>cello</div>
            </div>
            <div className={styles.frameParent8}>
              <img
                className={styles.frameChild}
                alt=""
                src="/image-40013@2x.png"
              />
              <div className={styles.createToken}>cronos mainnet</div>
            </div>
            <div className={styles.frameParent8}>
              <img
                className={styles.frameChild}
                alt=""
                src="/image-40014@2x.png"
              />
              <div className={styles.createToken}>fuse</div>
            </div>
            <div className={styles.frameParent8}>
              <img
                className={styles.frameChild}
                alt=""
                src="/image-40015@2x.png"
              />
              <div className={styles.createToken}>gnosis</div>
            </div>
            <div className={styles.frameParent8}>
              <img
                className={styles.frameChild}
                alt=""
                src="/image-40016@2x.png"
              />
              <div className={styles.createToken}>harmony</div>
            </div>
            <div className={styles.frameParent8}>
              <img
                className={styles.frameChild}
                alt=""
                src="/image-40017@2x.png"
              />
              <div className={styles.createToken}>metis</div>
            </div>
            <div className={styles.frameParent8}>
              <img
                className={styles.frameChild}
                alt=""
                src="/image-40018@2x.png"
              />
              <div className={styles.createToken}>telos EVM</div>
            </div>
          </div>
        </div>
        <div className={styles.frameParent28}>
          <div className={styles.connectWalletWrapper}>
            <div className={styles.createToken}>tesnet</div>
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.frameParent30}>
              <div className={styles.frameParent8}>
                <div className={styles.frameWrapper2}>
                  <div className={styles.codex11Wrapper}>
                    <img
                      className={styles.codex11Icon}
                      alt=""
                      src="/codex1-11@2x.png"
                    />
                  </div>
                </div>
                <div className={styles.createToken}>codex testnet</div>
              </div>
              <div className={styles.frameParent8}>
                <img
                  className={styles.frameChild}
                  alt=""
                  src="/frame-371062@2x.png"
                />
                <div className={styles.createToken}>tron testnet</div>
              </div>
              <div className={styles.frameParent8}>
                <img
                  className={styles.frameChild}
                  alt=""
                  src="/image-40011@2x.png"
                />
                <div className={styles.createToken}>BSC testNet</div>
              </div>
              <div className={styles.frameParent8}>
                <img
                  className={styles.frameChild}
                  alt=""
                  src="/image-4004@2x.png"
                />
                <div className={styles.createToken}>fantom opera testNet</div>
              </div>
              <div className={styles.frameParent8}>
                <img
                  className={styles.frameChild}
                  alt=""
                  src="/image-4006@2x.png"
                />
                <div className={styles.createToken}>moonbin testNet</div>
              </div>
            </div>
            <div className={styles.frameParent7}>
              <div className={styles.frameParent8}>
                <img
                  className={styles.frameChild}
                  alt=""
                  src="/image-40010@2x.png"
                />
                <div className={styles.createToken}>avalanche testNet</div>
              </div>
              <div className={styles.frameParent8}>
                <img
                  className={styles.frameChild}
                  alt=""
                  src="/image-40013@2x.png"
                />
                <div className={styles.createToken}>cronos testNet</div>
              </div>
              <div className={styles.frameParent8}>
                <img
                  className={styles.frameChild}
                  alt=""
                  src="/image-4001@2x.png"
                />
                <div className={styles.createToken}>etherium testNet</div>
              </div>
              <div className={styles.frameParent8}>
                <img
                  className={styles.frameChild}
                  alt=""
                  src="/image-4002@2x.png"
                />
                <div className={styles.createToken}>mumbay testNet</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTokenWalletSelection;
