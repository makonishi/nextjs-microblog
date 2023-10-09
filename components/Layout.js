import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";

const name = "makonishi";
export const siteTitle = "Next.js blog";

function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <img src="/images/profile.png" className={`${utilStyles.borderCircle} ${styles.headerHomeImage}`}></img>
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <img src="/images/profile.png" className={`${utilStyles.borderCircle}`}></img>
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        )}
      </header>
      <main>
        {children}
      </main>
    </div>
  );
}

export default Layout;