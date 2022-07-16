import React, { useEffect } from 'react';
import ProgressBar from "react-scroll-progress-bar";


export default function NavRedesign(){
   useEffect(() => {
      window.scrollTo(0, 0)
   }, [])
   return(
      <>
      <div className='progress-bar-wrap'><ProgressBar bgcolor='#8A96FF'/></div>
      <div className='content-wrap'>
         
         
      </div>
      </>
   )
}