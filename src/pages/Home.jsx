import React from 'react'
import Header from '../Layout/UI/Header'
import '../css/home.css'
import { BrowserRouter } from 'react-router-dom'
import Services from './Services'
import SecOne from '../sections/secOne'
import Footer from '../Layout/UI/Footer'
import Work from './Work'
import Contact from './Contact'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';

const Home = () => {

  gsap.registerPlugin(useGSAP)
  gsap.registerPlugin(ScrollTrigger)

  useGSAP(()=>{
    const tl_1 = gsap.timeline()
    const tl_2 = gsap.timeline({
      scrollTrigger:{
        trigger:'.servicesDiv',
        start: 'top 30%',
      }
    })
    const tl_3 = gsap.timeline({
      scrollTrigger:{
        trigger:'.workDiv',
        start: 'top 30%',
      }
    })
    const tl_4 = gsap.timeline({
      scrollTrigger:{
        trigger:'.contMain',
        start: 'top 50%',
      }
    })

    tl_1.from('.homeMain',{
      opacity:0,
      delay:0.5,
      duration:0.5
    })

    tl_1.from('.frntImg',{
      opacity:0,
      delay:0.5,
      duration:0.3
    })

    tl_1.from('.para',{
      opacity:0,
      y:50,
      delay:0.5,
      duration:0.7
    })

    tl_1.from('.contact',{
      opacity:0,
      y:20,
      delay:0.2,
      duration:0.5
    })

    tl_2.from('.servicesDiv',{
      opacity:0
    })
    tl_2.from('.h1',{
      opacity:0,
    })
    tl_2.from('.card',{
      opacity:0,
      y:20,
      stagger:0.3
    })

    tl_3.from('.workSec',{
      opacity:0
    })
    tl_3.from('.worksTitle',{
      opacity:0,
    })
    tl_3.from('.prImg',{
      opacity:0,
      y:20,
    })
    tl_3.from('.wTt',{
      opacity:0,
      y:20,
    })
    tl_3.from('.wDs',{
      opacity:0,
      y:20,
    })
    tl_3.from('.dndBtn',{
      opacity:0,
      y:20,
      stagger:0.3
    })

    tl_4.from('.contSpan',{
      opacity:0,
      scale:0,
      duration:0.5
    })
    tl_4.from('.contH3',{
      opacity:0,
      duration:0.5
    })
    tl_4.from('.mail',{
      opacity:0,
      y:10,
      stagger:0.5
    })
  })

  return (
    <BrowserRouter>
        <Header />
        <div className="homeDiv" id='about'>
          <SecOne />
        </div>
        <Services />
        <Work />
        <Contact />
        <Footer />
    </BrowserRouter>
  )
}

export default Home
