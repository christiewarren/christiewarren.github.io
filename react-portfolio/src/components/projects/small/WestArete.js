import React from 'react'
import ProgressBar from "react-scroll-progress-bar";
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export default function WestArete(){
   return(
      <>
      <div className='progress-bar-wrap'><ProgressBar bgcolor='#8A96FF'/></div>         
      <div className='under-page'></div>
      <div className='over-page'>
         <div className='proj-header'>
            <h1>Research-Based LMS @West Arete</h1>
            <div className='one-img-hero-wrap'>
               <img src={'/assets/home/lms.png'} className='img-shadow' alt="LMS final design"/>
            </div>
         </div>
         <div className='content-wrap'>
            <section id='tldr'>
               <span className='section-divider'><h3>TLDR;</h3><hr/></span>
               <h6>I designed a learning management system (LMS) to help students learn better based on their personal learning style and the research behind how to learn best. This project was part of my internship at West Arete in 2019.</h6>

               <a href='#case-study' className='styled'>read more<img src='/assets/search/arrow-down-plain.svg' className='link-arrow'/></a>
            </section>
            <section id='case-study'>
               <span className='section-divider'><h3>Project Details</h3><hr/></span>
               <div className='context'>
                  <h4>Context</h4>
                  <p>Our clients for this project were education research professors from Penn State who saw an opportunity to make a Learning Management System that actually helps students learn. Most current LMS’s do not capitalize on their position in students' educations, serving as file storage systems that fail to enforce positive or personalized learning habits.</p>
                  <p>I worked alongside a project manager for three weeks to organize our clients' research and goals into a tangible concept for an LMS with specific features and hi-fi designs.</p>

               </div>

               <h4>Defining the Problems</h4>
               <h5>Students don’t know how to learn</h5>
               <p>Many students are unaware of the best way to learn based on their individual traits. This often leads to favoring of memorization over comprehension.</p>
               <h5>LMS’s miss opportunities</h5>
               <p>College students rely heavily on LMS's for class resources, but these applications could also be used to reinforce positive learning habits.</p>
               <div className="img-wrap">
                  <img src={'/assets/west-arete/canvas-course.png'} alt="Canvas module" className='img-shadow'/>
               </div>
               <div className="img-wrap">
                  <img src={'/assets/west-arete/canvas-dash.png'} alt="Canvas courses" className='img-shadow'/>
                  <small>Typical LMS's fail tp provide students with unique learning opportunities and serve more as file storage for professors.</small>
               </div>
               <h5>No clear progression</h5>
               <p>It is difficult for self-directed learners to know how much they have learned on the topic they are learning, and how much they have left to go.</p>

               <h4>Primary Users</h4>
               <h6>Based on our clients' research, we focused on two users groups:</h6>
               <h5>1. The Lost Learner</h5>
               <p>This student does not have a good idea of how to best learn and retain information in their courses, and as a result, usually crams before tests, and cannot remember that info long after. They don't have much of a desire to know all the research and details behind how they should learn, but would like to get better.</p>
               <div className='user-needs'>
                  <p><b>Needs</b></p>
                  <ul>
                     <li>guided, personalized learning tools</li>
                     <li>uncomplicated interface</li>
                     <li>make learning more enjoyable</li>
                  </ul>
               </div>
               <h5>2. The Pro Learner</h5>
               <p>This student is generally quite good at learning, and would like to monitor their progression and abilities throughout a course. They would be interested in reading about the research behind their learning style, so they can improve on their own. This student would also like to have the ability to try out different tpyes of learning tools.</p>
               <div className='user-needs'>
                  <p><b>Needs</b></p>
                  <ul>
                     <li>improve knowledge of learning strategies</li>
                     <li>data on learning progression</li>
                     <li>ability to choose learning tools</li>
                  </ul>
               </div>

               <h4>Goals for Our LMS</h4>
               <h6>With these user groups in mind, I worked with my project manager to define three main goals for our LMS to accomplish in order to meet their needs:</h6>
               <h5><span className='highlight'>Personalize Learning</span></h5>
               <p>Allow students to take whatever path is best for them, rather than following a standard one made for the whole class</p>
               <h5><span className='highlight'>Answer “How Am I Doing?”</span></h5>
               <p>Give students an idea of their progress and success in learning at a glance so they can monitor it easily</p>
               <h5><span className='highlight'>Incorporate Research</span></h5>
               <p>Make this LMS valuable through providing research-based techniques and lessons</p>
               
               <h4>Scope &amp; Feature Definition</h4>
               <h6>Working alongside Natalie (the PM) and our clients to create a scope and definition for this application was a major part of the project. Our clients came in with lots of concrete research and a broad idea of what the application could be, so we worked to hone in on the most feasible and impactful experience that best reflected their mission.</h6>
               <div className="img-wrap">
                  <img src={'/assets/west-arete/wireframes.jpeg'} alt="wireframe sketches" className='img-shadow'/>
               </div>

               <h5>Dash Courses</h5>
               <h6>Basic stats that inform the student about their learning without overwhelming them with complex data</h6>
               <p>These stats provide a <span className="highlight">simple, personalized interface</span> for the "Lost Learner" while giving the "Pro Learner" an <span className="highlight">overview of learning progression.</span>
               <br/><br/>Students can also click "Course Stats &amp; Progress" to learn about the details.</p>
               <div className="img-wrap">
                  <img src={'/assets/west-arete/dashboard.png'} alt="LMS dashboard" className='img-shadow'/>
               </div>

               <h5>Learning Skillsets</h5>
               <h6>Students are prompted to complete learning skillsets that provide them with the tools to learn better</h6>
               <p>This will guide the "Lost Learner" to <span className="highlight">become a better learner</span> and the "Pro Learner" can explore other skillsets to <span className="highlight">gain new learning tools.</span></p>
               <div className="img-wrap">
                  <img src={'/assets/west-arete/questionnaire.png'} alt="learning skillset questionnaire" className='img-shadow'/>
               </div>

               <h5>Course Concept Map</h5>
               <h6>A visualization of students' curricula, allowing for freedom in exploration of topics</h6>
               <p>The LMS allows for more self-directed learning aimed to <span class="highlight">make learning more enjoyable</span> for the "Lost Learner" and give the "Pro Learner" more <span className="highlight">learning independence.</span></p>
               <div className="img-wrap">
                  <img src={'/assets/west-arete/course-map.png'} alt="course map" className='img-shadow'/>
               </div>

               <h5>Quiz Summary</h5>
               <h6>A summary of questions a student "mastered" as well as which questions they answered correctly and incorrectly</h6>
               <p>When clicked, each question has a description of the answers. The main goal of this page is to help both learners to be <span className="highlight">actively involved in and informed about their learning process.</span></p>
               <div className="img-wrap">
                  <img src={'/assets/west-arete/quiz-summary.png'} alt="quiz summary" className='img-shadow'/>
               </div>

               <h4>Design Progression</h4>
               <h5>A Different LMS</h5>
               <p>I often heard the feedback that the UI should look different from a traditional LMS. Executing this was a practice in knowing when to use familiar, established design patterns, and when we should stray from those (and more importantly why). The evolution of hifis demonstrates the progression from traditional LMS to a strategically unique design.</p>
               <div className="img-wrap">
                  <img src={'/assets/west-arete/hifi-process.png'} alt="hifi design progression" className='img-shadow'/>
               </div>

               <div className='reflection'>
                  <h4>Reflection</h4>
                  <h5>Learnings</h5>
                  <p>For this project, our clients' expertise lay largely in research, so I often needed to justify my design decsions, as I favored a user-friendly interface over detailed data visualizations. Being prepared to reason with our clients and make compromises when necessary was extremely valuable, and I found that my extensive critiquing experience really helped with this process. Transforming a broad, grandiose concept into a concrete interface and flow was also great experience, and required a lot of discipline from our end.</p>

                  <h5>Next Time...</h5>
                  <p>This being my first client project, I learned how important it is to be responsive to clients. Our clients were particularly enthusiastic and would complete the "homework" we asked them to do and then some, so at a point our team wasn't keeping up with the clients' updated documents. If I were to do this over, I'd reign in the design process until I was completely certain of the clients' expectations in order to make better usage of everyone's time.</p>
               </div>
            </section>
         </div>
      </div>
      </>
   )
}