import React from 'react';

import type { NextPage } from 'next';
import Link from 'next/link';

import Head from 'next/head';

import { gql } from '@apollo/client';
import client from '../apollo/apollo-client';

import { Header } from '@/components/index';

import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0';

import styles from '../styles/Dashboard.module.css';

const Ticklist: NextPage = () => {
  const { user, error, isLoading } = useUser();

  console.log(user);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

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
      <section className={styles.dashboard}>
        <h2>Dashboard</h2>
        <ul className={styles.dashboardNavigation}>
          <li>
            <Link href="/ticklist">
              <a className={styles.link}>Tick List</a>
            </Link>
          </li>
          <li>
            <Link href="/profile">
              <a className={styles.link}>Profile</a>
            </Link>
          </li>
          <li>
            <Link href="/close-account">
              <a className={styles.danger}>Close Account</a>
            </Link>
          </li>
        </ul>
        <pre>{JSON.stringify(user, null, 3)}</pre>
      </section>
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
