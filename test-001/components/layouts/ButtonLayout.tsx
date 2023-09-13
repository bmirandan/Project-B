import styles from "./ButtonLayout.module.css";

export default function ButtonLayout({children}: {children: React.ReactNode}) {
  return (
    <div className={styles.grid}>
        {children}
    </div>
  )
}
