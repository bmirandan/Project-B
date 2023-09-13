import Link from "next/link";
import styles from "./NavigateButton.module.css";

type NavigateButtonProps = {
  title: string;
  description: string;
};

export default function NavigateButton({
  title,
  description,
}: NavigateButtonProps) {
  return (
    <Link href="/" className={styles.card} rel="noopener noreferrer">
      <h2>
        {title} <span>-&gt;</span>
      </h2>
      <p>{description}</p>
    </Link>
  );
}
