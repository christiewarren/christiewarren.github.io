import React, { useEffect } from 'react';
import ProgressBar from "react-scroll-progress-bar";


export default function NavRedesign(){
   useEffect(() => {
      window.scrollTo({
         top: 0, 
         left: 0,
         behavior: 'instant'})
   }, [])
   return(
      <>
      <div className='progress-bar-wrap'><ProgressBar bgcolor='#8A96FF'/></div>
      <div className='content-wrap'>
         
         
      </div>
      </>
   )
}