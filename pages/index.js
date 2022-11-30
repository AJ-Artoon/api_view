import TableCustom from "../component/table";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <TableCustom /> 
      </main>
    </div>
  );
}
