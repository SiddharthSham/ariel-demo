import Head from "next/head";
import Link from "next/link";

import styles from "../styles/home.module.css";

const Home = () => {
  return (
    <>
      <Head>
        <title>Ariel Demo</title>
        <meta name="description" content="Ariel Demo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.heading}>Hello!</h1>
        <section className={styles.section}>
          <Link passHref href="/staff">
            <div className={styles.item}>
              <a className={styles.link}>Staff</a>
            </div>
          </Link>
          <Link passHref href="/client">
            <div className={styles.item}>
              <a className={styles.link}>Client</a>
            </div>
          </Link>
        </section>
      </main>
    </>
  );
};

export default Home;
