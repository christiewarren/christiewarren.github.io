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
      <div className='proj-list-wrap' id='work'>
         <button className='view-work-btn'>things I've worked on<img src='/assets/home/arrow-up.svg' className='button-arrow'/></button>
         {projectData.map(project =>{
            return(
                  <div className='proj-wrap' key={project.title}>
                     <div className='proj-img-wrap'>
                        <img src={'/assets/home/' + project.image} className='proj-img'></img>
                     </div>
                     <div className='proj-text-wrap'>
                        <h3 className='proj-title'><Link to="/sitewide-search">{project.title}</Link></h3>
                        <h2 className='proj-description'>{project.description}</h2>
                     </div>
                  </div>
            )
         })}
      </div>
   )
}