import type { NextPage } from 'next';
import Head from 'next/head';

import { gql } from '@apollo/client';
import client from '../apollo/apollo-client';

import { FellList } from '@/components/index';
import { FellInterface } from './api/models/Fell';

import styles from '../styles/Home.module.css';

const Home: NextPage<{ fells: [FellInterface] }> = ({ fells }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Wainwrights Tick List</title>
        <meta
          name="description"
          content="Create your own Wainwrights Tick List"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <h1>Wainwrights Tick List</h1>
        <FellList fells={fells} />
      </section>
    </div>
  );
};

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query GetFells {
        getFells {
          id
          name
          region
          metres
          feet
          latitude
          longitude
          climbed
          notes
          date
        }
      }
    `,
  });

  return {
    props: {
      fells: data.getFells,
    },
  };
}

export default Home;
