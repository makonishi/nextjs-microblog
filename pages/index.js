import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Layout from '../components/Layout'
import utilStyles from '../styles/utils.module.css'
import { getPostsData } from '../lib/post'

// SSGの場合
export async function getStaticProps() {
  const allPostsData = getPostsData();

  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <div>
      <Layout home>
        <section className={utilStyles.headingMd}>
          <p>
            テスト。テスト。テスト。テスト。テスト。テスト。テスト。テスト。テテスト。テスト。テスト。テスト。
            テスト。テスト。テスト。テスト。テスト。テスト。テスト。テスト。テテスト。テスト。テスト。テスト。
          </p>
        </section>

        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2>ブログ</h2>
          <div className={styles.grid}>
            {allPostsData.map(({id, title, date, thumbnail}) => (
              <article key={id}>
                <Link href={`/posts/${id}`}>
                  <img src={`${thumbnail}`} className={styles.thumbnailImage} />
                </Link>
                <Link href={`/posts/${id}`} className={utilStyles.boldText}>
                  {title}
                </Link>
                <br />
                <small>{date}</small>
              </article>

            ))}
          </div>
        </section>
      </Layout>
    </div>
  )
}
