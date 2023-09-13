import styles from "./page.module.css";
import Link from "next/link";
import MainLayout from "../../../components/layouts/MainLayout";

export default function About() {
  return (
    <MainLayout>
      <div className={styles.grid}>
        <Link href="/" className={styles.card} rel="noopener noreferrer">
          <h2>
            Home <span>-&gt;</span>
          </h2>
          <p>Return</p>
        </Link>
      </div>
    </MainLayout>
  );
}
