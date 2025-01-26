import React from 'react'
import '/src/css/work.css'
import { Link } from 'react-router-dom'
import { FaGithub } from "react-icons/fa";

const WorkSec = () => {

    const projects =[
        {
            'id':1,
            'img':'https://media-hosting.imagekit.io//71152240c6a3446b/Screenshot%202025-01-26%20024656.png?Expires=1832447840&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=izJyDBcOb8WoR3dbX1l73YNo2GHgdSd8EukD9Eed8G7gXjJTbY8XBnvEVzOek1i3xz6BY6GbzSn2G0wtNfWSSMWhsntowDzYHEnVC0RurVbfnJ7Cjk9EZcWzVilOkl~5NT0gilnZL8UJIwv1KKXAcQste4kwl3gY9TXmTL5QoxyuuK5vFcBJFxqGnF1QAu3K4DE6psaltOqONzojdwwUDIhK1RxvXQe8KCJ9rQ65WD9KuwEPOd9tPcZhI7GfP4~WRAP5OxQTkaMjRgTGrwbA1IeF1LmUa08AAimH7xelbn6oUWUYE8P5q3YR1jPLoiwAQ85R1XHlZtSFIBSu9XOJYA__',
            'name':'Quotify',
            'description':'Quotify is an innovative project inspired by the power of quotes. Built using React JS and GSAP (GreenSock Animation Platform), Quotify offers a dynamic and engaging user experience. The project allows users to explore, share, and be inspired by a wide range of quotes. The use of React JS ensures a seamless and responsive interface, while GSAP brings the quotes to life with smooth and captivating animations. Whether you are looking for motivation, wisdom, or just a touch of elegance, Quotify provides a beautiful platform to immerse yourself in the world of quotes.',
            'vdo':'https://drive.google.com/file/d/1UzNGX1WsWk0pVmmrlprsMZU_YLEcLAhA/view?usp=sharing',
            'gitHub':'https://github.com/piyushhh017/Quotify'
        },
        {
            'id':2,
            'img':'https://media-hosting.imagekit.io//98666f1933a34dc4/Screenshot%202025-01-26%20035059.png?Expires=1832451680&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=2DwLkYo6PMiH5i0YapqNbndGQorjrowKTizQ9CGRJbnV0GwayBhRWX~bTfHGEtNyb1Kbj6EI53v0YynbBuIr~9TPKv0No6VgCrXPAIEfJ2B3I3yZnlsRH8etCqGX~R5B3i7LB5LGIO~x6904wQuo-TEwzzxnrOo60uKXxOamhCQyvD9AKgtLsorniHIlBcUZ~giVyP23AVAFptniPF473-FQlUOwrmgcOlAxJqeyGimw2YIC7ywf2-3sFVUqTrC4EzkBGlwYygv4vhTpHDd7Ak~lzWjdQCGJsgcZV9XOeCI22gR4fOGaySFtuZJdDOOFPUAcQ5eQ6zaiq4biRU8mYg__',
            'name':'Spectrul Guard',
            'description':'Spectrul Guard is an e-commerce web app designed to sell evil eye protectors. Built using React JS, GSAP, and AOS, it offers a visually engaging and smooth shopping experience. The app features a variety of stylish and powerful amulets designed to ward off negative energy and bring positive vibes. With React JS ensuring a responsive interface, GSAP adding smooth animations, and AOS enhancing visual appeal with scroll animations, Spectrul Guard stands out as a unique and user-friendly platform for purchasing evil eye protectors. ',
            'vdo':'https://drive.google.com/file/d/16bqhfoRB8GbTvQ8DkZ4m5I9VO76LdMLf/view?usp=sharing',
            'gitHub':'https://github.com/piyushhh017/Spectral_Guard'
        },
        {
            'id':3,
            'img':'https://media-hosting.imagekit.io//17cbc703d8994c56/pikafoot.gif?Expires=1832452625&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=qnopUsnFs0czpkjSs37adx0uZC30QThwKySm6d4SuDNIvReWJLWAVv2288dcyeyxtbguwyUkty2lj4-XQ5qnwEEONUFgz9xi7sp1G5q6ZE72RR4xWhsmckun8aA9765dq8PsVjppOCwPZBq6FhnGeZwamBb-D2F4GS5G3p78xNYdrB-RaSjGpjP7Iw~4ZcrRysocO59LgLgr2WpRuWmRrIX~87C7cy2vFIcHfcVp4A~NfQKqiHRmky6bQ-QrHTlambq5nd~ZPcwuwpzVwKjyc86FJQKUdhK195-QVO2sbG5cQl3KSM16EsWaZrFZijXX0TPNmY9yW9VlNT4fBhOWCQ__',
            'name':'PokeFlex',
            'description':'Pokeflex is an engaging web app built using React JS and AOS (Animate On Scroll). It offers a dynamic and interactive experience for users, allowing them to explore and enjoy various features related to Pokémon. The use of React JS ensures a responsive and seamless interface, while AOS adds captivating scroll animations that enhance the visual appeal. Whether you are a Pokémon enthusiast or just looking for a fun and interactive web app, Pokeflex provides an enjoyable and visually appealing experience.',
            'vdo':'https://drive.google.com/file/d/1l-JI8GcuD5RfQpnZuy1JV6WHNtVRnNqf/view?usp=sharing',
            'gitHub':'https://github.com/piyushhh017/PokeFlex-Pokemon-Website-'
        },
    ]

  return (
    <div className='workSec'>
        <h1 className='worksTitle'>Works</h1>

        <div className="worksCard">
            {projects.map((v,i)=>{
                return(
                <div className="card" key={i}>
                    <div className="prImg">
                        <img className='img' src={v.img} alt={v.id}/>
                    </div>
                    <div className="description">
                        <h1 className='wTt'>{v.name}</h1>
                        <p className='wDs'>{v.description}</p>
                        <div className="buttons">
                            <Link className='dndLinks' to={`${v.vdo}`}><button className='dndBtn'>View Demo</button></Link>
                            <Link className='dndLinks' to={`${v.gitHub}`}><button className='dndBtn'><FaGithub /> Github</button></Link>
                        </div>
                    </div>
                </div>
                )
            })}
            
        </div>

        <span className="top"></span>
        <span className="right"></span>
        <span className="bottom"></span>
        <span className="left"></span> 
    </div>
  )
}

export default WorkSec
