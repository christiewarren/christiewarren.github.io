import React, { useEffect } from 'react';
import ProjectList from './ProjectList.js'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import About from './About.js'

export default function Home() {
   useEffect(() => {
      window.scrollTo({
         top: 0, 
         left: 0,
         behavior: 'instant'})
   }, [])
  return (
      <>
      <section id="welcome">
        <div className="welcome-text">
         <h2>Hi! I'm Christie.<br/><br/>I'm a UI/UX Designer creating <span className='highlight'>thoughtful, clean experiences.</span> <span style={{textDecoration: 'line-through'}}>No&nbsp;frills.</span>&nbsp;*</h2>
         <h3 className='asterisk'>* Frills in moderation. Who doesn't love a good frill?</h3>
         <div className='currently'>
            <p><b>Currently</b></p>
            <p>UX Designer @ KiwiCo</p>
            <p>Mountain View, CA</p>
         </div>
        </div>
      </section>
      <ProjectList />
      </>
  );
}
