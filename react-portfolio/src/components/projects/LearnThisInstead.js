import React, { useEffect } from 'react';
import ProgressBar from "react-scroll-progress-bar";
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export default function LearnThisInstead(){
   useEffect(() => {
      window.scrollTo({
         top: 0, 
         left: 0,
         behavior: 'instant'})
   }, [])
   return(
      <>
      <div className='progress-bar-wrap'><ProgressBar bgcolor='#8A96FF'/></div>         
      <div className='under-page'></div>
      <div className='over-page'>
         <div className='proj-header'>
            <div className='proj-header-text'>
               <h1>Mentor App</h1>
            </div>
            <img src={'/assets/home/mentor.png'} alt="mentor app final design" className='proj-hero'/>
         </div>
         <div className='content-wrap'>
            
         </div>
      </div>
      </>
   )
}