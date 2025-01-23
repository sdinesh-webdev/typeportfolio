import React from 'react';
import Layout from '../../components/Layout';
import Head from 'next/head';

export default function Proj1() {
  return (
    <>
      <Head>
        <title>Project 1</title>
      </Head>
      <div className="w-full">
        <Layout />
        <div className="container mx-auto px-4 py-8">
          <h2>Project 1</h2>
          <p>Details about Project 1...</p>
        </div>
      </div>
    </>
  );
}

// Enable SSR
export async function getServerSideProps() {
  return {
    props: {}, // Will be passed to the page component as props
  };
}
