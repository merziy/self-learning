import { Link, Route, Routes } from "react-router-dom";
import styles from "./App.module.css";
import MadLib from "./MadLib";
import MadLibList from "./MadLibList";
import NotFound from "./NotFound";

function App() {
  return (
    <>
      <header className={styles.header}>
        <Link className={styles.headerLink} to="/">
          Sanity Mad Libs
        </Link>
      </header>

      <main className={styles.main}>
        <div className={styles.container}>
          <Routes>
            <Route component={MadLibList} path="/" exact />
            <Route component={MadLib} path="/mad-libs/:slug" />
            <Route component={NotFound} />
          </Routes>
        </div>
      </main>
    </>
  );
}

export default App;
