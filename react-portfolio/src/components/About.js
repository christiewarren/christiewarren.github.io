import React, { useEffect } from 'react';
import ProgressBar from "react-scroll-progress-bar";
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Footer from './Footer';

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
         <div className='about-header-img'>
            <img src={'/assets/about/christie.jpg'} className='img-shadow' />
         </div>
         <h6>Hey, happy to have you here!<br/><br/>I'm a UI/UX designer from Pennsylvania, currently working at <span className='highlight'>KiwiCo in Mountain View, CA.</span> I have a B.Des. in Graphic Design from Penn State, where I also grew my love for UX through the <a href='https://nittanyai.psu.edu/blog/nittany-ai-challenge-helps-design-christie-warrens-future/'>NittanyAI Challenge.</a><br/><br/>My favorite type of work poses complex UX challenges and improves everyday life for users. I aim to approach each project with ambition and curiosity, as well as a thoroughness that fosters smooth x-functional collaboration. I'd love to bring these qualities to a team that prioritizes people and process!
         <br/><br/>Now for the good stuff...
         </h6>
         
      </div>
      <h4>Some things I love in no particular order:</h4>
         <ul>
            <li>My cat</li>
            <small>My cat's name is Kitten (pronounced Kit-TEN — creative, I know) and I found him in a parking garage when he was 6 weeks old!</small>
            <li>Rock climbing</li>
            <small>I mainly boulder, and really only inside, because real rocks are sharp, and I have wimpy skin.</small>
            <li>Puzzles (jigsaw &amp; crossword)</li>
            <small>I do crosswords with friends on <a href='https://downforacross.com/'>Down for a Cross</a>, a genious innovation.</small>
            <li>Eating snacks on top of mountains</li>
            <small>Snacks not pictured, but believe me, they were there.</small>
            <li>Other people’s dogs</li>
            <small>Okay, these are technically my family's dogs, but I live ~3,000 miles away, so I don't think I can claim to own them. Don't be alarmed though, I would also love to have a dog of my own.</small>
            <li>Wawa</li>
            <small>@Wawa please expand to California</small>
            <li>The National Treasure movies</li>
            <small>They are true classics. NT1 is my family's go-to movie, and definitely my most watched. This is a no-judge zone, btw.</small>
            <li>This playlist</li>
         </ul>
         <iframe src="https://open.spotify.com/embed/playlist/6zYfgPPCCkaBIBGmW6Ky8g?utm_source=generator" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" className='spotify'/>
         <Footer/>
      </>
   )
}

