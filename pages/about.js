import Head from "next/head";
import Link from "next/link";

import Page from "../components/page";
import Heading from "../components/shared/heading";

export default function About() {
  return (
    <Page>
      <Head>
        <title>hazelpaper | tentang hazelpaper</title>
        <meta
          name="Description"
          content="Pelajari lebih lanjut siapa hazelpaper penulis red lipstick ini"
        />
      </Head>

      <div>
        <Heading>Tentang hazelpaper</Heading>

        <p>hazelpaper adalah</p>
      </div>
    </Page>
  );
}
