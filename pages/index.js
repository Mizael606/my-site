import { useEffect } from "react"
import Head from '../components/head'
import Header from '../components/header'
import About from "../components/about"
import Career from "../components/career"
import Skills from "../components/skills"
import Jobs from "../components/jobs"
import Message from "../components/message"
import Footer from "../components/footer"
import Loading from "../components/loading"
import Rellax from "rellax"

const Home = () => {
  useEffect(() => {
    if (window) {     
      let rellax = new Rellax('.rellax\\.parallax',{
        speed: -2,
        center: false,
        wrapper: null,
        round: true,
        vertical: true,
        horizontal: false
      });
    }
  });
  return (
    <>
      <Loading />
      <main id="main" >
        <Head />
        <Header />      
        <About />
        <Career />
        <Skills />
        <Jobs />
        <Message />
        <Footer />
      </main>
    </>
  );
}

export default Home
