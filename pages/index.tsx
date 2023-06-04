import type { NextPage } from "next";
import "antd/dist/antd.min.css";
import { Button } from "@mui/material";
import { Button as AntButton } from "antd";
import Link from "next/link";
import styles from "./index.module.css";
const Homepage: NextPage = () => {
  return (
    <div className={styles.homepage}>
      <img className={styles.vectorIcon} alt="" src="/vector.svg" />
      <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
      <div className={styles.footerexplorer}>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
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
            <div className={styles.frameWrapper}>
              <div className={styles.privacyParent}>
                <div className={styles.privacy}>privacy</div>
                <div className={styles.privacy}>term</div>
              </div>
            </div>
          </div>
          <div className={styles.findUsParent}>
            <div className={styles.privacy}>find us</div>
            <div className={styles.mditwitterParent}>
              <img
                className={styles.mditwitterIcon}
                alt=""
                src="/mditwitter.svg"
              />
              <img
                className={styles.mditwitterIcon}
                alt=""
                src="/icoutlinediscord.svg"
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
      <div className={styles.introArea}>
        <div className={styles.titleH1}>Explore the No-Code World</div>
        <div className={styles.subTitle}>
          Build your DApp, be part of Contributor and Veterans ,explore
          communities, and find inspiration for your project all in one place.
        </div>
      </div>
      <div className={styles.btnSmall}>
        <div className={styles.privacy}>show more</div>
      </div>
      <img className={styles.homepageChild} alt="" src="/polygon-1.svg" />
      <img className={styles.homepageItem} alt="" src="/polygon-2.svg" />
      <img className={styles.homepageInner} alt="" src="/polygon-3.svg" />
      <img className={styles.vectorIcon} alt="" src="/vector.svg" />
      <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
      <img className={styles.vectorIcon} alt="" src="/vector.svg" />
      <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
      <div className={styles.createYourProjectAreaParent}>
        <div className={styles.createYourProjectArea}>
          <img className={styles.icon} alt="" src="/icon.svg" />
          <div className={styles.frameContainer}>
            <div className={styles.createYourProjectParent}>
              <div className={styles.createYourProject}>
                Create your Project
              </div>
              <div className={styles.mintTokensNfts}>
                Mint tokens, NFTs or DApp, set parameters, and deploy your
                project on-chain in minutes with our no- code setup process.
              </div>
            </div>
            <Button variant="contained" color="primary">
              Create a Project
            </Button>
          </div>
        </div>
        <div className={styles.learnAboutCodexArea}>
          <img className={styles.icon} alt="" src="/icon1.svg" />
          <div className={styles.frameDiv}>
            <div className={styles.createYourProjectParent}>
              <div className={styles.createYourProject}>Learn about CodeX</div>
              <div className={styles.mintTokensNfts}>
                Find inspiration and learn about Codex in our education portal
                designed for builders at every stage of the journey.
              </div>
            </div>
            <Button variant="contained" color="primary" href="/token-deatils">
              Learn about
            </Button>
          </div>
        </div>
        <div className={styles.learnAboutCodexArea}>
          <img className={styles.icon} alt="" src="/icon2.svg" />
          <div className={styles.frameDiv}>
            <div className={styles.createYourProjectParent}>
              <div className={styles.createYourProject}>Be A Part</div>
              <div className={styles.mintTokensNfts}>
                As a veteran programmer, join CodeX's bounty program and
                contribute to building a sustainable no- code ecosystem.
              </div>
            </div>
            <div className={styles.beOnBoardButton}>
              <div className={styles.beOnBoard}>Be On Board</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.exploreProject}>explore project</div>
      <div className={styles.frameParent2}>
        <div className={styles.tokenGeneratorLinkSectionParent}>
          <Link
            className={styles.tokenGeneratorLinkSection}
            href="/create-token"
          >
            <div className={styles.frameParent3}>
              <div className={styles.cWrapper}>
                <div className={styles.c}>c</div>
              </div>
              <div className={styles.tokenGeneratorParent}>
                <div className={styles.tokenGenerator}>Token Generator</div>
                <div className={styles.level0NoCode}>Level 0 (No-Code)</div>
              </div>
            </div>
            <div className={styles.codexsNoCodePlatform}>
              CodeX's no-code platform enables effortless creation of custom
              tokens and cryptocurrencies without coding, allowing users to
              tokenize assets and launch digital currencies easily.
            </div>
          </Link>
          <a className={styles.daoLinkSection}>
            <div className={styles.frameParent3}>
              <div className={styles.cWrapper}>
                <div className={styles.gd}>GD</div>
              </div>
              <div className={styles.tokenGeneratorParent}>
                <div className={styles.tokenGenerator}>DAO</div>
                <div className={styles.level0NoCode}>Level 0 (No-Code)</div>
              </div>
            </div>
            <div className={styles.codexsNoCodePlatform}>
              CodeX: No-code DAO creation. Empower self-governed communities
              effortlessly.
            </div>
          </a>
        </div>
        <div className={styles.tokenGeneratorLinkSectionParent}>
          <div className={styles.nftLinkSection}>
            <div className={styles.frameParent5}>
              <div className={styles.frameParent3}>
                <div className={styles.cWrapper}>
                  <div className={styles.u}>U</div>
                </div>
                <div className={styles.tokenGeneratorParent}>
                  <div className={styles.tokenGenerator}>Mint NFT</div>
                  <div className={styles.level0NoCode}>Level 0 (No-Code)</div>
                </div>
              </div>
              <div className={styles.codexsNoCodePlatform}>
                CodeX: No-code NFT minting. Create unique digital assets
                effortlessly.
              </div>
            </div>
          </div>
          <div className={styles.launchpadLinkSection}>
            <div className={styles.frameParent3}>
              <div className={styles.cWrapper}>
                <div className={styles.u}>D</div>
              </div>
              <div className={styles.tokenGeneratorParent}>
                <div className={styles.tokenGenerator}>Launchpad</div>
                <div className={styles.level0NoCode}>Level 0 (No-Code)</div>
              </div>
            </div>
            <div className={styles.codexEnablesThe}>
              CodeX enables the creation of decentralized applications (DApps)
              without coding, offering a no-code platform for effortless
              development.
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerexplorer1}>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
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
            <div className={styles.frameWrapper}>
              <div className={styles.privacyParent}>
                <div className={styles.privacy}>privacy</div>
                <div className={styles.privacy}>term</div>
              </div>
            </div>
          </div>
          <div className={styles.findUsParent}>
            <div className={styles.privacy}>find us</div>
            <div className={styles.mditwitterParent}>
              <img
                className={styles.mditwitterIcon}
                alt=""
                src="/mditwitter.svg"
              />
              <img
                className={styles.mditwitterIcon}
                alt=""
                src="/icoutlinediscord.svg"
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
      <div className={styles.menu}>
        <div className={styles.isolationModeWrapper}>
          <img
            className={styles.isolationModeIcon}
            alt=""
            src="/isolation-mode.svg"
          />
        </div>
        <div className={styles.navLinkParent}>
          <div className={styles.privacyParent}>
            <a className={styles.products}>Products</a>
            <div className={styles.privacy}>Project</div>
            <div className={styles.privacy}>Ecosystem</div>
            <div className={styles.privacy}>About us</div>
            <div className={styles.privacy}>doc</div>
          </div>
          <div className={styles.connectWalletButton}>
            <div className={styles.privacy}>connect wallet</div>
          </div>
        </div>
      </div>
      <AntButton
        className={styles.buttonprimaryText}
        type="primary"
        size="middle"
        shape="default"
      >
        Button
      </AntButton>
    </div>
  );
};

export default Homepage;
