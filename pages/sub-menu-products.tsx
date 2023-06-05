import type { NextPage } from "next";
import {
  FormControl,
  InputLabel,
  MenuItem,
  FormHelperText,
  Select,
} from "@mui/material";
import Link from "next/link";
import styles from "./sub-menu-products.module.css";
const SubMenuProducts: NextPage = () => {
  return (
    <div className={styles.submenuProducts}>
      <FormControl sx={{ width: 305 }} variant="standard">
        <InputLabel color="primary">Token Generator</InputLabel>
        <Select color="primary" size="medium" label="Token Generator">
          <MenuItem value="NFT Generator">NFT Generator</MenuItem>
          <MenuItem value="DApp">DApp</MenuItem>
        </Select>
        <FormHelperText />
      </FormControl>
      <Link className={styles.nftGeneratorWrapper} href="/token-generation">
        <div className={styles.nftGenerator}>NFT generator</div>
      </Link>
      <a className={styles.dappWrapper}>
        <div className={styles.nftGenerator}>DApp</div>
      </a>
    </div>
  );
};

export default SubMenuProducts;
