import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import linkedin_icon from '../../assets/linkedin_icon.png'
import call_icon from '../../assets/call_icon.svg'

export const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "6d4360ea-d997-4de8-897c-3ce91da6f852");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message)
        }
      };

  return (
    <div id="contact" className='contact'>
        <div className="contact-title">
            <h1>Get In Touch</h1>
            <img src={theme_pattern} alt="" />
        </div>

        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's Talk</h1>
                <p>I'm always look for new opportunities in the field of software engineering, so feel free to contact me or connect with me on LinkedIn!</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt="" /><a href='harnoor.sagar@gmail.com' target='_blank'><p>harnoor.sagar@gmail.com</p></a>
                    </div>
                    <div className="contact-detail">
                        <img src={call_icon} alt="" /> <p>(289) 927-6435</p>
                    </div>
                    <div className="contact-detail">
                        <img src={linkedin_icon} alt="" /><a href='https://www.linkedin.com/in/harnoor-sagar/' target='_blank' ><p>www.linkedin.com/in/harnoor-sagar</p></a>
                    </div>
                </div> 
            </div>

            <form onSubmit={onSubmit} className="contact-right">
                <label htmlFor="">Your Name</label> 
                <input type="text" placeholder='Enter your name' name='name' />
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder='Enter your email' name='email' />
                <label htmlFor="">Write Your Message Here</label>
                <textarea name="message" rows="8" placeholder='Enter Your message'></textarea>
                <button type='submit' className="contact-submit">Submit Now</button>
            </form>
        </div>
    </div>
  )
}
