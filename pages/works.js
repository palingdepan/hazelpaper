import Head from "next/head";
import Link from "next/link";

import Heading from "../components/shared/heading";
import Page from "../components/page";

export default function Works() {
  const works = [
    {
      title: "Red Lipstick",
      path: "red-lipstick",
      description: "merah cabai",
      img: "/works/red-lipstick.jpg",
    },
    {
      title: "Savanah",
      path: "savanah",
      description: "auo",
      img: "/works/savanah.jpeg",
    },
    {
      title: "The Science of Love",
      path: "tsol",
      description: "tsol",
      img: "/works/tsol.jpeg",
    },
  ];

  return (
    <Page>
      <Head>
        <title>hazelpaper | karya oleh hazelpaper</title>
        <meta
          name="Description"
          content="Daftar karya dari hazelpaper antara lain Red Lipstick, Savanah, dan masih banyak lagi"
        />
      </Head>

      <div>
        <Heading>Karya oleh hazelpaper</Heading>

        <div className="works">
          {works.map((work, index) => (
            <div key={`work-${work.path}-${index}`} className="work">
              <img
                className="work-image"
                src={work.img}
                alt={`${work.title} cover`}
              />
              <Heading as="h2">{work.title}</Heading>
              <p>{work.description}</p>
              <Link href={`/works/${work.path}`}>
                <a>Baca lebih lanjut &gt;</a>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .works {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }

        .work {
          margin: 16px;
        }

        .work-image {
          width: 100%;
        }

        /* Small devices (portrait tablets and large phones, 600px and up) */
        @media only screen and (min-width: 600px) {
          .work-image {
            width: 350px;
          }
        }
      `}</style>
    </Page>
  );
}
