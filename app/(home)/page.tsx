import { StarBackground } from './_components'
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.background}>
        <StarBackground />
      </div>
    </main>
  );
}
