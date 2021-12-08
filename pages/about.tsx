import { readFile } from 'fs/promises';

import Head from 'next/head';

import { Footer } from '../components/Footer';
import { Markdown } from '../components/Markdown';
import { Navbar } from '../components/Navbar';
import styles from '../styles/Legal.module.scss';

export default function Home({ content }: { content: string }) {
  return (
    <div>
      <Head>
        <title>About Simtropolis</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=0.9, user-scalable=0"
        />
      </Head>
      <main>
        <Navbar />
        <div className={styles.content}>
          <Markdown content={content} />
        </div>
        <Footer />
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const file = await readFile('./legal/About.md');
  const content = file.toString();

  return { props: { content } };
}
