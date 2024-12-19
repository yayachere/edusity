import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>We Insure better education for better world.</h1>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean 
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque 
                penatibus et magni</p>
            <button className='btn'>Explore More <img src={dark_arrow} alt="" /></button>
        </div>
    </div>
  )
}
export default Hero