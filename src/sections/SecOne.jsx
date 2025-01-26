import React from 'react'
import '../css/home.css'
import { HashLink as Link } from 'react-router-hash-link'

const SecOne = () => {


    let myData = [{
        'id':1,
        'description':"I'm Piyush Jha, a frontend developer with expertise in React.js, GSAP, Framer Motion, and React Spring. I excel at creating dynamic and visually stunning web applications with smooth and engaging animations.",
        'image':'https://i.imgur.com/RFxVfIL.png',
    }]

  return (
    <div className="homeMain">
        {myData.map((v,i)=>{
            return(
                <div className='about' key={i}>
                    <div className="description">
                        <p className='para'>{v.description}</p>
                        <Link to={'/#contact'}><button className='contact'>Contact</button></Link>
                    </div>
                    <div className="img">
                        <img className='frntImg' src={v.image} alt={v.image} />
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default SecOne
