import React from 'react'
import '/src/css/contact.css'
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { IoMdMail } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const ContactSec = () => {

  const contactData =[
    {
      'id':1,
      'handle':'E-mail',
      'icon':<IoMdMail />,
      'link':'piyushjhajp31@gmail.com',
      'handle2':'piyushjhajp31@gmail.com',
    },
    {
      'id':2,
      'handle':'Instagram',
      'icon':<FaInstagram />,
      'link':'https://www.instagram.com/_pi_yushh__017/profilecard/?igsh=c282NXQ4aWk1dTN3',
      'handle2':'_pi_yushh__017',
    },
    {
      'id':3,
      'handle':'WhatsApp',
      'icon':<FaWhatsapp />,
      'link':'',
      'handle2':'9057189706',
    },
    {
      'id':4,
      'handle':'LinkedIn',
      'icon':<FaLinkedin />,
      'link':'https://www.linkedin.com/in/piyush-jha-a138b6296?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      'handle2':'Piyush Jha',
    },
    {
      'id':5,
      'handle':'Github',
      'icon':<FaGithub />,
      'link':'https://github.com/piyushhh017',
      'handle2':'piyushhh017',
    },
  ]

  return (
    <div className='contMain'>
      <h3 className='contH3'>Do you too want such beautifully animated and engaging web interfaces for your web app ?</h3>
      <span className='contSpan'></span>
      <div className="contDetails">

        {contactData.map((v,i)=>{
          return(
          <div className="mail" key={i}>    
            <div className="link">
              <div className="instaIcon">{v.icon}</div> <h2>{v.handle} :    <Link className='socialLinks' to={`${v.link}`}>{v.handle2}</Link></h2>
            </div>
          </div>
          )
        })}
        
      </div>
    </div>
  )
}

export default ContactSec
