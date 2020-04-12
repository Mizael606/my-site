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

const Home = () => {
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
