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
      window.scrollTo(0, 0)
   }, [])
  return (
      <>
      <section id="welcome">
        <div className="welcome-text">
         <h4>Hi! I'm Christie. I create...</h4>
         <h2>thoughtful, clean UX design. <span style={{textDecoration: 'line-through'}}>No&nbsp;frills.</span>&nbsp;*</h2>
         <h3 className='asterisk'>* Frills in moderation. Who doesn't love a good frill?</h3>
        </div>
      </section>
      <ProjectList />
      </>
  );
}
