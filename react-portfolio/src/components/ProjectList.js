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
               <Link to={project.path}>
                  <div className='proj-wrap' key={project.title}>
                     <div className='proj-text-wrap'>
                        <h4 className='proj-title'>{project.title}</h4>
                        <h2 className='proj-description'>{project.description}</h2>
                     </div>
                     <div className='proj-img-wrap'>
                        <img src={'/assets/' + project.image} className={project.imgClass}/>
                     </div>
                  </div>
               </Link>
            )
         })}
         <div className='sm-proj-list'>
            <div className='sm-proj-wrap'>
               <a href='https://christiewarren.com/reform/'>
               <img src={'/assets/home/reform.png'} className='sm-proj-img'/>
               <h4 className='sm-proj-title'>Re/Form</h4>
               </a>
            </div>
            <div className='sm-proj-wrap'>
               <Link to="/family-archive">
                  <img src={'/assets/home/family-archive.png'} className='sm-proj-img'/>
                  <h4 className='sm-proj-title'>Family History Archive</h4>
               </Link>
            </div>
         </div>
      </div>
   )
}