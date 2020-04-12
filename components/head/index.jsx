import Head from 'next/head';
import Metatags from "./meta";
const HeadComponent = () => (
  <Head>
    <title>
      WD - Mizael Silva Lemos - Desenvolvedor Web
    </title>
    <link rel="manifest" href="/manifest.json" />
    <Metatags />
  </Head>
);


export default HeadComponent;