import React, { useEffect } from 'react';
import ProgressBar from "react-scroll-progress-bar";
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export default function Search(){
   useEffect(() => {
      window.scrollTo({
         top: 0, 
         left: 0,
         behavior: 'instant'})
   }, [])
   return(
      <>
      <div className='progress-bar-wrap'><ProgressBar bgcolor='#8A96FF'/></div>
      <div className='about-header'>
         <h6>Hey, happy to have you here!<br/><br/>I'm a UI/UX designer from Pennsylvania, currently working at <span className='highlight'>KiwiCo in Mountain View, CA.</span> I have a B.Des. in Graphic Design from Penn State, where I also grew my love for UX through the <a href='https://nittanyai.psu.edu/blog/nittany-ai-challenge-helps-design-christie-warrens-future/'>NittanyAI Challenge.</a><br/><br/>My favorite type of work poses complex UX challenges and improves everyday life for users. I aim to approach each project with ambition and curiosity, as well as a thoroughness that fosters smooth x-functional collaboration. I'd love to bring these qualities to a team that prioritizes people and process.
         <br/><br/>Now for the good stuff...
         </h6>
         <h4>Some things I love in no particular order:</h4>
         <ul>
            <li>My cat</li>
            <li>Rock climbing (indoors — real rocks are pointy)</li>
            <li>Puzzles (jigsaw &amp; crossword)</li>
            <li>Eating snacks on top of mountains</li>
            <li>Other people’s cats</li>
            <li>Peanut butter pie</li>
            <li>Other people’s dogs</li>
            <li>Wawa</li>
            <li>The National Treasure movies</li>
            <li>This playlist</li>
         </ul>
         <iframe src="https://open.spotify.com/embed/playlist/6zYfgPPCCkaBIBGmW6Ky8g?utm_source=generator" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" className='spotify'/>
      </div>
      </>
   )
}

