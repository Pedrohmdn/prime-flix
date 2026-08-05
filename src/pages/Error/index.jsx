import styles from "./error.module.css";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className={styles.notFound}>
      <h1>404</h1>
      <h2>página não encontrada</h2>
      <Link to="/" className={styles.button}>
        Veja todos os Filmes!
      </Link>
    </div>
  );
}
