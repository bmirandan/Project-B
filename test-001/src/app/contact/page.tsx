import styles from "./page.module.css";
import Link from "next/link";
import MainLayout from "../../../components/layouts/MainLayout";
import ButtonLayout from "../../../components/layouts/ButtonLayout";

export default function About() {
  return (
    <MainLayout>
      <ButtonLayout>
        <Link href="/" className={styles.card} rel="noopener noreferrer">
          <h2>
            Home <span>-&gt;</span>
          </h2>
          <p>Return</p>
        </Link>
      </ButtonLayout>
    </MainLayout>
  );
}
