import React from 'react'
import projectData from '../ProjectData.js'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

export default function ProjectList(){
   return(
      <div className='proj-list-wrap' id='projects'>
         <button className='view-work-btn'><a href='#projects'>things I've worked on</a><img src='/assets/home/arrow-up.svg' className='button-arrow'/></button>
         {projectData.map(project =>{
            return(
                  <div className='proj-wrap' key={project.title}>
                     <div className='proj-text-wrap'>
                        <h3 className='proj-title'><Link to="/sitewide-search">{project.title}</Link></h3>
                        <h2 className='proj-description'>{project.description}</h2>
                     </div>
                     <div className='proj-img-wrap'>
                        <img src={'/assets/' + project.image} className='proj-img img-shadow'/>
                     </div>
                  </div>
            )
         })}
         <div className='sm-proj-wrap'>
            
            <div className='proj-img-wrap'>
               <img src={'/assets/home/reform.png'} className='proj-img img-shadow'/>
               <div className='proj-text-wrap'>
                  <a href='https://christiewarren.com/reform/' className='proj-title'>Re/Form</a>
               </div>
            </div>
         </div>
      </div>
   )
}