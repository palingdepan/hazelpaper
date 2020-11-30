import Head from "next/head";

import Page from "../../components/page";
import Heading from "../../components/shared/heading";

export default function Work({ work }) {
  return (
    <Page>
      <Head>
        <title>hazelpaper | {work.title}</title>
        <meta name="Description" content={work.description} />
      </Head>

      <div>
        <Heading as="h1">{work.title}</Heading>
        <div className="work-data">
          <img
            className="work-image"
            src={work.img}
            alt={`${work.title} cover`}
          />
          <div>
            <p>{work.description}</p>
            <p>baca di wattpad</p>
            <p>baca di dreame</p>
            <p>beli buku fisik via WA</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .work-image {
          width: 350px;
          max-width: 100%;
          margin-right: 16px;
        }

        .work-data {
          display: flex;
          flex-wrap: wrap;
          margin-top: 16px;
        }
      `}</style>
    </Page>
  );
}

const works = [
  {
    slug: "red-lipstick",
    title: "Red Lipstick",
    description: "deskripsinya",
    img: "red-lipstick.jpg",
  },
  {
    slug: "savanah",
    title: "Savanah",
    description: "savanah auooo",
    img: "savanah.jpeg",
  },
  {
    slug: "tsol",
    title: "The Science of Love",
    description: "sains cinta",
    img: "tsol.jpeg",
  },
];

export async function getStaticPaths() {
  const paths = works.map((work) => ({ params: { slug: work.slug } }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const work = works.find((work) => work.slug === params.slug);

  return {
    props: {
      work,
    },
  };
}
