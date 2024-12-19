import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
import React from 'react'

const Contact = () => {

  const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "8032ca88-189b-4216-8f8a-1079939e45fd");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          setResult("Form Submitted Successfully");
          event.target.reset();
        } else {
          console.log("Error", data);
          setResult(data.message);
        }
      };

  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send Us a Message <img src={msg_icon} alt="" /></h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam aspernatur 
                perferendis magni facilis placeat itaque iusto ratione nihil! Eveniet, itaque?  
                corporis ducimus necessitatibus minima magnam nam soluta totam pariatur?
            </p>
            <ul>
                <li><img src={mail_icon} alt="" /> ublulubankgad@gmail.com</li>
                <li><img src={phone_icon} alt="" /> 1 453 837 122 8644</li>
                <li><img src={location_icon} alt="" /> Yeteyelele street 1674 mini road</li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label htmlFor="">Your Name:</label>
                <input type="text" name='name' placeholder='Enter your name' />
                <label htmlFor="">Phone Number:</label>
                <input type="number" name='phone' placeholder='Enter your phone' />
                <label htmlFor="">Message:</label>
                <textarea name="message" rows={6} placeholder='Enter your message here..'>

                </textarea>
                <button className='btn dark-btn'>Send Now 
                <img src={white_arrow} alt="" /></button>
            </form>
            <p className='response'>{result}</p>
        </div>
    </div>
  )
}
export default Contact