import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Navbar from "./navbar";
import Footer from "./footer";

const name = "Your Name";
export const siteTitle = "Next.js Sample Website";

export default function Page({ children, home }) {
  return (
    <div className="page">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        {/* <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" /> */}
      </Head>
      {/* <header className={styles.header}>
        {home ? (
          <>
            <img
              src="/images/profile.jpg"
              className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <img
                  src="/images/profile.jpg"
                  className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header> */}
      <Navbar />
      <div className="footer-wrapper">
        <main className="content">
          <div>{children}</div>
        </main>
        <Footer />
      </div>
      {/* {!home && (
        <div className={styles.backToHome}>
          <Link href="/blog">
            <a>← Back to home</a>
          </Link>
        </div>
      )} */}

      <style jsx>{`
        .page {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .footer-wrapper {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 100vh;
          width: 100%;
        }

        .content {
          width: 100%;
          padding: 16px;
        }

        .content > div {
          margin: auto;
          max-width: 1192px;
        }

        /* Small devices (portrait tablets and large phones, 600px and up) */
        @media only screen and (min-width: 600px) {
          .footer-wrapper {
            margin-top: 64px;
            min-height: calc(100vh - 64px);
          }
        }
      `}</style>
    </div>
  );
}
