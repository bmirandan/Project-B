import styles from "./page.module.css";
import MainLayout from "../../../components/layouts/MainLayout";
import NavigateButton from "../../../components/NavigateButton/NavigateButton";

export default function About() {
  return (
    <MainLayout>
      <div className={styles.grid}>
        <NavigateButton title="Home" description="Return" />
      </div>
    </MainLayout>
  );
}
