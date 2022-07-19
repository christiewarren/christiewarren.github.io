import React, { useEffect } from 'react';
import ProgressBar from "react-scroll-progress-bar";
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Footer from '../Footer';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export default function LearnThisInstead(){
   // useEffect(() => {
   //    window.scrollTo({
   //       top: 0, 
   //       left: 0,
   //       behavior: 'instant'})
   // }, [])
   return(
      <>
      <div className='progress-bar-wrap'><ProgressBar bgcolor='#8A96FF'/></div>         
      <div className='under-page'></div>
      <div className='over-page'>
         <div className='proj-header'>
            <div className='proj-header-text'>
               <h1>Learn This Instead</h1>
               <h2>A Chrome Extension</h2>
            </div>
            <div className='proj-hero-wrap'>
               <img src={'/assets/home/learn-this-instead.png'} alt="mentor app final design" className='proj-hero'/>
            </div>
         </div>
         <div className='content-wrap'>
         <section id='tldr'>
            <span className='section-divider'><h3>TLDR;</h3><hr/></span>
            <h6>I designed and built a Chrome extension that redirects users from websites of their choice to a low-stress Basics of CSS course.
            <br/><br/>To build the course, I wrote 26 prompts, each covering a CSS property, over 6 chapters. I built the extension using Javascript, HTML, and CSS.
            <br/><br/>This was my college senior capstone project, taking place over a full semester. Our professor allowed us to propose our own project concepts, and I developed mine with the primary goal of improving my technical skills and the inspiration of my designer peers' animosity towards CSS.
            </h6>

            <a href='https://www.kiwico.com/' target='blank' className='no-style-link'>
               <button>watch the presentation (11 min)<img src='/assets/search/arrow-right.svg' className='button-arrow'/></button>
            </a>
            <a href='#case-study' className='styled'>read more<img src='/assets/search/arrow-down-plain.svg' className='link-arrow'/></a>
         </section>
         <h4>Niche</h4>
            <h6>There are numerous Chrome extensions that block websites for the purpose of focus and productivity, but none that I found would actually redirect the user to something productive.</h6>
            <p>Typically, the idea of this type of extension is to keep users on track with something they're already working on. But my thought was, what if the extension instead <span className='highlight'>makes better use of free time.</span> For example, rather than watching Netflix for an hour, the user can learn CSS for a bit.</p>
            <p>The other half of the niche is that users <span className='highlight'>don't need to make a conscious decision</span> every time they want to learn something new (CSS). Plenty of online coding courses exist, but none are presented to users without them actively seeking one out.</p>
            <div className='img-wrap'>
               <img src='/assets/learn-this-instead/niche.png'/>
            </div>
         <h4>Brand</h4>
            <h5>Voice</h5>
            <h6>It was important to me that Learn This Instead felt relatable and understanding and didn't pretend that users would actually rather learn CSS than watch Netflix.</h6>
            <p>To establish this tone, I defined the voice with adjectives most of the copy should embody:</p>
            <div className='img-wrap'>
               <img src='/assets/learn-this-instead/voice.png' className='sm-img'/>
            </div>
            <br/><br/><p>When writing the course materials, I made sure to inject this voice into any copy that had room for it. (I kept the actual prompts straightforward to avoid overkill.) Chapter intros were the best examples, including these snippets:</p>
            <div className='img-wrap'>
               <img src='/assets/learn-this-instead/chapter-intros.png' className='sm-img'/>
            </div>
            <br/><br/><h5>Visuals</h5>
            <h6>I continued the tongue-in-cheek-ness through to the visuals with the duality of a terminal-like typeface and color scheme paired with a modern typeface and accents of an almost overly vibrant gradient.</h6>
            <div className='img-wrap'>
               <img src='/assets/learn-this-instead/typography.png' className='sm-img'/>
            </div>
            <div className='img-wrap back-to-back-img'>
               <img src='/assets/learn-this-instead/colors.png' className='sm-img'/>
            </div>
         </div>
      </div>
      <Footer/>
      </>
   )
}