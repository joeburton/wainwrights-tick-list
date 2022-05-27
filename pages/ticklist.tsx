import React from 'react';

import type { NextPage } from 'next';
import Head from 'next/head';

import { gql } from '@apollo/client';
import client from '../apollo/apollo-client';

import { FellInterface } from './api/models/Fell';

import { FellListPaginated } from '@/components/index';
import { Header } from '@/components/index';

import { withPageAuthRequired } from '@auth0/nextjs-auth0';

import styles from '../styles/Home.module.css';

const Ticklist: NextPage<{ fells: FellInterface[] }> = ({ fells }) => {
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
      <Header />
      <FellListPaginated fells={fells} itemsPerPage={20} />
    </div>
  );
};

export default Ticklist;

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(context) {
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
  },
});
