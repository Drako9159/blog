import Header from "../components/movies/Header";
import Nav from "../components/movies/Nav";
import Selectors from "../components/movies/Selectors";
import Main from "../components/movies/Main";

import styles from "../styles/Movies.module.css";
export default function Movies() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.primary}>
          <Header />
          <div className={styles.main}>
            <div className={styles.left}>
              <Nav />
            </div>
            <div className={styles.right}>
              <Selectors />
              <Main />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
