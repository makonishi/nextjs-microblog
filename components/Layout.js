import Head from "next/head";
import styles from "./layout.module.css";

const name = "makonishi";
export const siteTitle = "Next.js blog";

function Layout({children}) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <img src="/images/profile.png" width={200} height={200}></img>
        <h1>{name}</h1>
      </header>
      <main>
        {children}
      </main>
    </div>
  );
}

export default Layout;