import './About.css'
import about_image from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'


const About = ({setVideoPlay}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_image} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play-icon' 
            onClick={()=>{setVideoPlay(true)}}/>
        </div>
        <div className="about-right">
            <h3>Here is what we can do to help you</h3>
            <h2>There is nothing that we can do to help you right now, so just go.</h2>
            <p>There is nothing that we can do to help you right now, so just go.
            There is nothing that we can do to help you right now, so just go.
            </p>
            <p>There is nothing that we can do to help you right now, so just go.
            There is nothing that we can do to help you right now, so just go.
            There is nothing that we can do to help you right now, so just go.
            </p>
            <p>
            There is nothing that we can do to help you right now, so just go.
            There is nothing that we can do to help you right now, so just go.
            </p>
        </div>
    </div>
  )
}
export default About