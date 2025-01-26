import React from 'react'
import '../css/service.css'
import { FaCode } from "react-icons/fa6"
import { FaReact } from "react-icons/fa";
import { FaPaintBrush } from "react-icons/fa";
import { GiRunningNinja } from "react-icons/gi";
import { MdComputer } from "react-icons/md";


const ServicesSec = () => {

    const services = [
        {
            'id':1,
            'logo':<FaCode />,
            'skill':'Web Development',
            'description':'A web developer with expertise in React.js, GSAP, Framer Motion, and React Spring.'
        },
        {
            'id':2,
            'logo': <FaReact />,
            'skill':'FrontEnd Development',
            'description':'A FrontEnd freak providing the most creative user interfaces along with animations.'
        },
        {
            'id':3,
            'logo':<FaPaintBrush />,
            'skill':'Web Design',
            'description':'A consummate web designer, Masterfully crafts visually captivating and user-centric web applications.'
        },
        {
            'id':4,
            'logo':<GiRunningNinja />,
            'skill':'Web Optimization',
            'description':'A distinguished web optimizer, Adeptly enhances website performance and speed and user experience.'
        },
        {
            'id':5,
            'logo':<MdComputer />,
            'skill':'Responsive Design',
            'description':'Specialist in responsive design, Skillfully ensuring optimal user experiences across all devices.'
        },
    ]

  return (
    <div className='servicesDiv' id='services'>
      <div className="servicesList">
        <h1 className='h1'>Services</h1>
        <div className="cards">
            {services.map((v,i)=>{
                return(
                    <div className="card" key={i}>
                        <div className="icon">{v.logo}</div>
                        <h3 className='h3'>{v.skill}</h3>
                        <p>{v.description}</p>
                    </div>
                )
            })}
            
        </div>
        <span className="top"></span>
        <span className="right"></span>
        <span className="bottom"></span>
        <span className="left"></span> 
      </div>
    </div>
  )
}

export default ServicesSec
