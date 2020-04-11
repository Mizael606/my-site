import Head from '../components/head'
import Header from '../components/header'
import About from "../components/about"
import Skills from "../components/skills"
import Jobs from "../components/jobs"
import Message from "../components/message"
import Footer from "../components/footer"
import Loading from "../components/loading"
import ParallaxHeader from "../components/header/parallax"

const Home = () => (
  <>
    <Loading />
    <main id="main" >
      <Head />
      <ParallaxHeader />
      <Header />      
      <About />
      <Skills />
      <Jobs />
      <Message />
      <Footer />
    </main>
  </>
)

export default Home
