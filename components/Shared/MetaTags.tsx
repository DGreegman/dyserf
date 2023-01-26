import Head from 'next/head';

interface Props {
  title: string;
  description?: string;
  image?: string;
}

const Metatags = ({ title, description }: Props) => {
  return (
    <Head>
      <meta name='twitter:card' content='summary' />
      <meta name='twitter:site' content='dyserf' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />

      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <title>{title}</title>
    </Head>
  );
};

export default Metatags;
