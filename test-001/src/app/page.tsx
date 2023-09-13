import Link from "next/link";
import styles from "./page.module.css";
import MainLayout from "../../components/layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <div className={styles.grid}>
        <Link href="/about" className={styles.card} rel="noopener noreferrer">
          <h2>
            About <span>-&gt;</span>
          </h2>
          <p>Find more insights</p>
        </Link>
        <a href="/contact" className={styles.card} rel="noopener noreferrer">
          <h2>
            Contact <span>-&gt;</span>
          </h2>
          <p>Navigate to contact page</p>
        </a>
      </div>
    </MainLayout>
  );
}
