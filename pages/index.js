import Head from "next/head";
import Link from "next/link";

import Layout, { siteTitle } from "../components/layout";
import Page from "../components/page";
import Date from "../components/date";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Home({ allPostsData }) {
  return (
    <Page>
      <Head>
        <title>hazelpaper website</title>
        <meta name="Description" content="tes deskripsi home" />
      </Head>
      <div>isinya home</div>
      {/* <div>isinya home</div>
      <div>isinya home</div>
      <div>isinya home</div>
      <div>isinya home</div>
      <div>isinya home</div>
      <div>isinya home</div>
      <div>isinya home</div>
      <div>isinya home</div>
      <div>isinya home</div>
      <div>isinya home</div>
      <div>isinya home</div>
      <div>isinya home</div>
      <div>isinya home</div>
      <div>isinya home</div>
      <div>isinya home</div>
      <div>isinya home</div>
      <div>isinya home</div>
      <div>isinya home</div>
      <div>isinya home</div>
      <div>isinya home</div>
      <div>isinya home</div>
      <div>isinya home</div>
      <div>isinya home</div>
      <div>isinya home</div>
      <div>isinya home</div>
      <div>isinya home</div>
      <div>isinya home</div>
      <div>isinya home</div>
      <div>isinya home</div>
      <div>isinya home</div>
      <div>isinya home</div>
      <div>isinya home</div>
      <div>isinya home</div>
      <div>isinya home</div>
      <div>isinya home</div>
      <div>isinya home</div>
      <div>isinya home</div>
      <div>isinya home</div>
      <div>isinya home</div>
      <div>isinya home</div>
      <div>isinya home</div>
      <div>isinya home</div>
      <div>isinya home</div>
      <div>isinya home</div>
      <div>isinya home</div>
      <div>isinya home</div>
      <div>isinya home</div>
      <div>isinya home</div>
      <div>isinya home</div>
      <div>isinya home</div>
      <div>isinya home</div>
      <div>isinya home</div>
      <div>isinya home</div>
      <div>isinya home</div>
      <div>isinya home</div>
      <div>isinya home</div>
      <div>isinya home</div>
      <div>isinya home</div>
      <div>isinya home</div>
      <div>isinya home</div> */}
      {/* <section className={utilStyles.headingMd}>…</section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section> */}
    </Page>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
