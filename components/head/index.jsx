import Head from 'next/head';
import Metatags from "./meta";
const HeadComponent = () => (
  <Head>
    <title>
      WD - Mizael Silva Lemos - Desenvolvedor Web
    </title>
    <link rel="manifest" href="/manifest.json" />
    <Metatags />
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-163427193-1"></script>
    <script src="/assets/js/ga.js"></script>
  </Head>
);


export default HeadComponent;