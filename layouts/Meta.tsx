'use client';

import Head from 'next/head';
import { NextSeo } from 'next-seo';

import siteMetadata from '../data/siteMetadata';

type IMetaProps = {
  title: string;
  description: string;
  canonical?: string;
};

const Meta = (props: IMetaProps) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" key="charset" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
          key="viewport"
        />
      </Head>
      <NextSeo
        title={props.title}
        description={props.description}
        canonical={props.canonical}
        openGraph={{
          title: props.title,
          description: props.description,
          url: props.canonical,
          locale: siteMetadata.locale,
          site_name: siteMetadata.title,
        }}
      />
    </>
  );
};

export { Meta };