import { InputCustom,  TableCustom } from "../components/index";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <InputCustom placeholder="api here" />
        <TableCustom />  
    </div>
  );
}
