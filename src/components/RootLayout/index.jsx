import { Outlet } from "react-router-dom";
import Header from "../Header";
import styles from "./rootLayout.module.css";

export default function RootLayout() {
  return (
    <>
      <Header />
      <main>
        <section className={styles.wrapper}>
          <div className={styles.appContainer}>
            <Outlet />
          </div>
        </section>
      </main>
    </>
  );
}
