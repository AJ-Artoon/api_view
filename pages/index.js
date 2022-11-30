// import Head from "next/head";
// import Image from "next/image";
import TableCustom from "../components/table";
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
