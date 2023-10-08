import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Layout from '../components/Layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <div>
      <Layout>
        <section className={utilStyles.headingMd}>
          <p>
            テスト。テスト。テスト。テスト。テスト。テスト。テスト。テスト。テテスト。テスト。テスト。テスト。
            テスト。テスト。テスト。テスト。テスト。テスト。テスト。テスト。テテスト。テスト。テスト。テスト。
          </p>
        </section>

        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2>ブログ</h2>
          <div className={styles.grid}>
            <article>
              <Link href="/">
                <img src="/images/thumbnail01.jpg" className={styles.thumbnailImage} />
              </Link>
              <Link href="/" className={utilStyles.boldText}>
                hogehgoefugafaugafuaga
              </Link>
              <br />
              <small>February 23, 2020</small>
            </article>
            <article>
              <Link href="/">
                <img src="/images/thumbnail01.jpg" className={styles.thumbnailImage} />
              </Link>
              <Link href="/" className={utilStyles.boldText}>
                hogehgoefugafaugafuaga
              </Link>
              <br />
              <small>February 23, 2020</small>
            </article>
            <article>
              <Link href="/">
                <img src="/images/thumbnail01.jpg" className={styles.thumbnailImage} />
              </Link>
              <Link href="/" className={utilStyles.boldText}>
                hogehgoefugafaugafuaga
              </Link>
              <br />
              <small>February 23, 2020</small>
            </article>
            <article>
              <Link href="/">
                <img src="/images/thumbnail01.jpg" className={styles.thumbnailImage} />
              </Link>
              <Link href="/" className={utilStyles.boldText}>
                hogehgoefugafaugafuaga
              </Link>
              <br />
              <small>February 23, 2020</small>
            </article>
          </div>
        </section>
      </Layout>
    </div>
  )
}
