import { useState } from "react"
import About from "./Components/About/About"
import Campus from "./Components/Campus/Campus"
import Contact from "./Components/Contact/Contact"
import Footer from "./Components/Footer/Footer"
import Hero from "./Components/Hero/Hero"
import Navbar from "./Components/Navbar/Navbar"
import Programs from "./Components/Programs/Programs"
import Testimonials from "./Components/Testimonials/Testimonials"
import Title from "./Components/Title/Title"
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer"

const App = () => {

  const [videoPlay,setVideoPlay] = useState(false);

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle='Our Programs' title="What We Offer"/>
        <Programs />
        <About setVideoPlay={setVideoPlay}/>
        <Title subTitle='Gallery' title="Campus Photos"/>
        <Campus />
        <Title subTitle='Testimonials' title="What Student Say"/>
        <Testimonials />
        <Title subTitle='Contact Us' title="Get In Touch"/>
        <Contact />
        <Footer/>
      </div>
      <VideoPlayer videoPlay={videoPlay} setVideoPlay={setVideoPlay}/>
    </div>
  )
}
export default App