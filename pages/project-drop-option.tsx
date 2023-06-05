import type { NextPage } from "next";
import Link from "next/link";
import styles from "./project-drop-option.module.css";
const ProjectDropOption: NextPage = () => {
  return (
    <div className={styles.projectDropOption}>
      <Link className={styles.createProjectWrapper} href="/create-project-page">
        <div className={styles.createProject}>Create Project</div>
      </Link>
      <a className={styles.codexDaoWrapper}>
        <div className={styles.createProject}>CodeX DAO</div>
      </a>
      <a className={styles.codexDaoWrapper}>
        <div className={styles.createProject}>Be a part</div>
      </a>
    </div>
  );
};

export default ProjectDropOption;
