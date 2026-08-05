import { Link } from "react-router-dom";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header>
      <Link to="/" className={styles.logo}>
        PrimeFlix
      </Link>
      <Link to="/favoritos" className={styles.favoritos}>
        Meus filmes
      </Link>
    </header>
  );
}
