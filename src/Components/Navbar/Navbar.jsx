import './Navbar.css'
import logo from '../../assets/logo.png'
import menu_icon from '../../assets/menu-icon.png'
import { useState } from 'react'
import { Link } from 'react-scroll'

const Navbar = () => {

  const [sticky,setSticky] = useState(false)

  useState(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false)
    })
  },[])
  const [menuHide,setMenuHide] = useState(false);
  const toggleMenu = ()=> {
    menuHide ? setMenuHide(false) : setMenuHide(true);
  }
  
  return (
    <nav className={`container ${sticky ? 'dark-nav': ''}`}>
        <img src={logo} alt="" className='logo'/>
        <ul className={menuHide ? 'hide-menu': ""}>
          <li><Link to='hero' offset={0} duration={500} smooth="true">Home</Link></li>
          <li><Link to='programs' offset={-260} duration={500} smooth="true">Programs</Link></li>
          <li><Link to='about' offset={-150} duration={500} smooth="true">About Us</Link></li>
          <li><Link to='campus' offset={-260} duration={500} smooth="true">Campus</Link></li>
          <li><Link to='testimonials' offset={-260} duration={500} smooth="true">Testimonial</Link></li>
          <li><Link className='btn' to='contact' offset={-260} duration={500} smooth="true">Contact Us</Link></li>
        </ul>
        <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar