import type { NextPage } from 'next';
import Head from 'next/head';

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import { gql } from '@apollo/client';
import client from '../apollo/apollo-client';

import { FellList } from '@/components/index';
import { FellInterface } from './api/models/Fell';

import styles from '../styles/Home.module.css';
import React from 'react';

const Home: NextPage<{ fells: [FellInterface] }> = ({ fells }) => {
  const itemsPerPage = 40;
  const [page, setPage] = React.useState(1);
  const [noOfPages] = React.useState(Math.ceil(fells.length / itemsPerPage));

  const handleChange = (_event: any, value: React.SetStateAction<number>) => {
    setPage(value);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Wainwrights Tick List</title>
        <meta
          name="description"
          content="Create your own Wainwrights Tick List"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      <section>
        <h1>Wainwrights Tick List</h1>
      </section>
      <Stack spacing={2}>
        <ul>
          {fells
            .slice((page - 1) * itemsPerPage, page * itemsPerPage)
            .map((fell) => {
              return (
                <li key={fell.id}>
                  {fell.name}, m: {fell.metres}, ft: {fell.feet}
                </li>
              );
            })}
        </ul>
        <Pagination
          count={noOfPages}
          page={page}
          onChange={handleChange}
          defaultPage={1}
          color="primary"
          size="large"
          showFirstButton
          showLastButton
        />
      </Stack>
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
