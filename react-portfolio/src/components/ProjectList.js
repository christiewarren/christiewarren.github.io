import React from 'react'
import projectData from '../ProjectData.js'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
// import "../animate.css";
import ScrollAnimation from 'react-animate-on-scroll';

export default function ProjectList(){
   return(
      <div className='proj-list-wrap' id='projects'>
         <button className='view-work-btn'><a href='#projects'>things I've worked on</a><img src='/assets/home/arrow-up.svg' className='button-arrow'/></button>
         {projectData.map(project =>{
            return(
               <Link to={project.path}>
                  <div className={'proj-wrap ' + project.wrapClass} key={project.title}>
                  <ScrollAnimation animateIn="animate__fadeInUp-New" duration={1} animateOnce={true} delay={200}>
                     <div className='proj-text-wrap'>
                        <h4 className='proj-title'>{project.title}</h4>
                        <h2 className='proj-description'>{project.description}</h2>
                     </div>
                     <div className='proj-img-wrap'>
                        <img src={'/assets/' + project.image} className={project.imgClass}/>
                     </div>
                     </ScrollAnimation>
                  </div>
               </Link>
            )
         })}
         <h3 className='sm-proj-header'>More projects!</h3>
         <div className='sm-proj-list'>
         <ScrollAnimation animateIn="animate__fadeInUp-New" duration={1} animateOnce={true} delay={0}>
            <div className='sm-proj-wrap'>
               <Link to="/family-archive">
                  <img src={'/assets/home/family-archive.png'} className='sm-proj-img'/>
                  <h4 className='sm-proj-title'>Family History Archive</h4>
                  <small className='sm-proj-description'>An interactive archive of 7+ generations of family photos etc.</small>
               </Link>
            </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="animate__fadeInUp-New" duration={1} animateOnce={true} delay={250}>
            <div className='sm-proj-wrap'>
               <a href='https://christiewarren.com/reform/' target='blank'>
               <img src={'/assets/home/reform.png'} className='sm-proj-img'/>
               <h4 className='sm-proj-title'>Re/Form <img src={'/assets/home/external-link.svg'} className='external-link'/></h4>
               <small className='sm-proj-description'>The capstone exhibition for Penn State's Graphic Design Class of '21</small>
               </a>
            </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="animate__fadeInUp-New" duration={1} animateOnce={true} delay={500}>
            <div className='sm-proj-wrap'>
               <Link to="/mentor-app">
                  <img src={'/assets/home/mentor.png'} className='sm-proj-img'/>
                  <h4 className='sm-proj-title'>College Mentor App</h4>
                  <small className='sm-proj-description'>An app for college students to connect with mentors</small>
               </Link>
            </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="animate__fadeInUp-New" duration={1} animateOnce={true} delay={750}>
            <div className='sm-proj-wrap'>
               <Link to="/west-arete">
                  <img src={'/assets/home/lms.png'} className='sm-proj-img'/>
                  <h4 className='sm-proj-title'>Research-Based LMS</h4>
                  <small className='sm-proj-description'>A Learning Management System that teaches students how to learn</small>
               </Link>
            </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="animate__fadeInUp-New" duration={1} animateOnce={true} delay={1000}>
            <div className='sm-proj-wrap'>
               <a href='https://synthesis21.github.io/synthesis.github.io/' target='blank'>
                  <img src={'/assets/home/synthesis.png'} className='sm-proj-img'/>
                  <h4 className='sm-proj-title'>Synthesis <img src={'/assets/home/external-link.svg'} className='external-link'/></h4>
                  <small className='sm-proj-description'>The junior year exhibition for Penn State's Graphic Design Class of '21</small>
               </a>
            </div>
            </ScrollAnimation>
         </div>
      </div>
   )
}