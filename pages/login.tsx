import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';

import { Header } from '@/components/index';
import { LogInForm } from '@/components/index';

import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Wainwrights Tick List Login</title>
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
      <LogInForm />
    </div>
  );
};

export default Home;
