import React from 'react'
import ProgressBar from "react-scroll-progress-bar";
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export default function Lionplanner(){
   return(
      <>
      <div className='progress-bar-wrap'><ProgressBar bgcolor='#FED02F'/></div>
      <h1>LionPlanner</h1>
         <div className='lionplanner-hero-wrap'>
            <img src={'/assets/lionplanner/final.png'} alt="LionPlanner final design" className='img-shadow '/>
         </div>
      <div className='content-wrap'>
         <section id='tldr'>
            <span className='section-divider'><h3>TLDR;</h3><hr/></span>
            <h6>I worked as the sole designer on a team of front and backend developers to build a web application for students to plan their long-term (multi-year) college course schedules. The app generated interactive course plans for chosen major(s) and eliminated the risk of of missing requirements or prerequisites.<br/><br/>The largest design challenge with LionPlanner was consolidating the many scattered resources students need to consult during their planning process within the UI, while still making it easy to navigate.<br/><br/>We completed this project as a part of a 9-month long competition at Penn State called the NittanyAI Challenge. While our team ultimately didn't pursue this project after the competition, we were so excited to receive first place, and it was the project that inspired me to go into UX.</h6>

            <a href='#case-study' className='styled'>read the case study<img src='/assets/search/arrow-down-plain.svg' className='link-arrow'/></a>
         </section>
         <section id='case-study'>
            <span className='section-divider'><h3>Case Study</h3><hr/></span>
            <div className='context'>
               <h4>Context</h4>
               <p>The Nittany AI Challenge prompt was to build an application that uses AI to solve a problem in education. As students, we knew that planning which courses to take over a college career at Penn State is a <span className='highlight'>tedious and entirely manual process</span> involving <span className='highlight'>many scattered resources.</span></p>
               <div className='img-wrap'>
                  <img src='/assets/lionplanner/resources.png'/>
                  <small class='subs-caption'>Some of the resources a student would need to use to plan their college courses</small>
               </div>
               <br/><p>We proposed LionPlanner: a solution that would automate the course plan up front by fulfilling all requirements for a chosen major. The app would then provide an interactive UI where students could add, remove, and reorder courses in their plan and view warnings for any missing requirements or prerequisites.</p>
               <p>Our team's proposal was one of 10 given funding to build a prototype from an initial 70+ teams and we were then one of 5 given funding to develop an MVP. Over the 9 month challenge, I pitched our project to judges twice and led the writing of detailed proposals.</p>
            </div>

            <h4>A Closer Look at the Problem</h4>
            <h5>Manual planning</h5>
            <p>Students planning more than one semester ahead have to resort to using a spreadsheet or pen and paper to organize their plans, making this process unnecessarily time consuming.</p>
            <p className='img'>sheet</p>
            <h5>Scattered resources</h5>
            <p>The course catalog, major handbooks, recommended plans, etc. are all in different places and carry information that, if missed, could lead to issues down the road.</p>
            <h5>Difficult to explore options</h5>
            <p>Manually testing different classes, majors, and minors is very complicated, and many students avoid planning anything more than the bare minimum for their majors.</p>

            <h4>LionPlanner's Primary Users</h4>
            <h6>Based on students I knew and spoke to, I defined two main users to focus on:</h6>
            <h5>1. The In Depth Planner</h5>
            <p>This student wants to explore all of their options and tailor their degree to specific interests. They plan in a Google Sheet, but find it time consuming to test different scenarios. They also particularly like branching out of the required courses for their major(s), and want to get the most out of their time in college.</p>
            <div className='user-needs'>
               <p><b>Needs</b></p>
               <ul>
                  <li>experiment with various scenarios (double majors, minors, etc.)</li>
                  <li>explore out-of-major courses</li>
                  <li>read about courses without leaving the app</li>
               </ul>
            </div>
            <h5>2. The Degree Seeker</h5>
            <p>This student simply wants to graduate on time with all the requirements for their degree. They don't want to take many extra classes, but would like the opportunity to explore electives within their major. They'd rather not spend much time in their advisor's office, but do want their advisor to approve their course plan.</p>
            <div className='user-needs'>
               <p><b>Needs</b></p>
               <ul>
                  <li>fulfill degree requirements on time</li>
                  <li>avoid missing prerequisites</li>
                  <li>explore interchangeable in-major courses</li>
               </ul>
            </div>

            <h4>Functionality &amp; UX Goals</h4>
            <h6>Together, our team determined the functionality we'd aim to include in LionPlanner in order to make it an improvement on most students' course planning processes:</h6>
            <h5><span className='highlight'>Automate Initial Plan</span></h5>
            <p>Generate an initial plan based on a student's major that takes into account any previous course history</p>
            <h5><span className='highlight'>Prevent Missed Courses</span></h5>
            <p>Automatically fulfill all degree requirements and alert when students are missing prerequisites</p>
            <h5><span className='highlight'>Provide Easy Customization</span></h5>
            <p>Allow major, minor, and course exploration, and suggest similar courses to ones in the plan</p>

            <h4>Design Process &amp; Progression</h4>
            <h6>LionPlanner was my first experience with UI and UX design, so it was a <em>tremendous</em> experience for learning and growth.</h6> 
            <p>During this process I gained knowledge around best practices and standards and started developing a better sense of what "good" UI design looked like. My sense of typography and color usage for web also improved, as I learned to apply my graphic design knowledge to a new medium.</p> 
      </section>
   </div>
               <div className='desktop-swiper-wrap'>
               <br/>
                  <Swiper
                     modules={[Navigation, Pagination]}
                     spaceBetween={50}
                     slidesPerView={1}
                     navigation
                     pagination
                     pagination={{ clickable: true }}
                     onSlideChange={() => console.log('slide change')}
                     onSwiper={(swiper) => console.log(swiper)}
                  >
                     <SwiperSlide>
                        <div className='img-wrap'>
                           <img src='/assets/lionplanner/sketch.jpg' className='carousel-img-d img-shadow'/>
                           <small className='slide-caption'>Initial sketch I drew in our early discussions of LionPlanner's functionality (beautiful, I know)</small>
                        </div>
                     </SwiperSlide>
                     <SwiperSlide>
                        <div className='img-wrap'>
                           <img src='/assets/lionplanner/wireframe.jpg' className='carousel-img-d img-shadow'/>
                           <small className='slide-caption'>A wireframe I made based on the sketch</small>
                        </div>
                     </SwiperSlide>
                     <SwiperSlide>
                        <div className='img-wrap'>
                           <img src='/assets/lionplanner/lowfi.jpg' className='carousel-img-d img-shadow'/>
                           <small className='slide-caption'>Color applied to the wireframe—the final design before I started working in HTML/CSS</small>
                        </div>
                     </SwiperSlide>
                     <SwiperSlide>
                        <div className='img-wrap'>
                           <img src='/assets/lionplanner/lowfi2.png' className='carousel-img-d img-shadow'/>
                           <small className='slide-caption'>The first HTML/CSS prototype of our app and, I believe, my first time writing HTML/CSS</small>
                        </div>
                     </SwiperSlide>
                     <SwiperSlide>
                        <div className='img-wrap'>
                           <img src='/assets/lionplanner/final.png' className='carousel-img-d img-shadow'/>
                           <small className='slide-caption'>Our final MVP that we presented at the end of the challenge; many things changed from the initial sketch, but some stayed surprisingly the same. More on that below.</small>
                        </div>
                     </SwiperSlide>
                  </Swiper>
               </div>  

   <div className='content-wrap'>
      <h4>Feature Design</h4>   
         <h5>Semesters</h5>
         <p>When designing the semesters, I took visual inspiration from the university-provided recommended course plans to increase familiarity in the UI. This basic design was consistent from the very first sketch, because a low learning curve was one of our priorities.
         <br/><br/>Each course is also drag-and-droppable within and between semesters, making experimenting with different orders etc. very simple.</p>
         <div className="img-wrap">
            <img src={'/assets/lionplanner/rapSemester.png'} alt="LionPlanner Recommended Plan" className='img-shadow'/>
            <small>Semesters in the recommended course plan</small>
         </div>
         <div className="img-wrap back-to-back-img">
            <img src={'/assets/lionplanner/semester.png'} alt="LionPlanner Semester" className='sm-img img-shadow'/>
            <small>LionPlanner semester</small>
         </div>

         <h5 className='feature'>Tab Bar</h5>
         <p>I originally designed the lefthand part of the page to have accordion sections, but iterated into a vertical tab bar. This design allows for more vertical real estate for courses (especially important for those browsing a bunch at a time), and establishes a better hierarchy.</p>
         <p>While we didn't have time to add this functionality, ideally, this part of the page would be resizeable and fully collapsible.</p>
         <p>This was by far the part of the app I spent the most time iterating on, because it includes such important and extensive resources. It needed to have enough space to fully explore them, without detracting too much from the plan itself.</p>

         <h5 className='feature'>Course Catalog Search</h5>
         <p>As part of the effort to consolidate resources, we included a feature to search Penn State's entire course catalog. Students can view the descriptions of any course and what requirement it satisfied. This feature would be especially helpful for the "In Depth Planner" to find courses outside of their major.</p>
         <div className='img-wrap'>
            <img src={'/assets/lionplanner/search.png'} alt="LionPlanner Search" className='img-shadow'/>
            <small>Search the full course catalog and view course descriptions</small>
         </div>
         
         <h5 className='feature'>Still Needed &amp; Prerequisite Warnings</h5>
         <p>If a student deletes a required course, we add it to the Still Needed tab as a reminder. Students can delete these courses if they know they've gotten credit for them in some way the app isn't aware of.
         </p><br/>
         <small>If I revisited this design, I'd add a small notification-style indicator to the tab, so students can tell easily if they have missing courses.</small>

         <p>If a student is missing prerequisites for any course in the plan, the course is highlighted in red with a tooltip of the missing prereq.</p>

         <div className="img-wrap">
            <img src={'/assets/lionplanner/still-needed.png'} alt="LionPlanner Still Needed" className='img-shadow'/>
            <small>"Still Needed" course (left) and highlighted missing prerequisite (right)</small>
         </div>

         <h5 className='feature'>Similar Courses &amp; Suggested Alternatives</h5>
         <p>Shows other courses that meet the same requirements as the one selected can can be swapped out, allowing the Degree Seeker to explore options within their major.</p>
         <div className='multi-img-wrap img-wrap'>
            <img src={'/assets/lionplanner/similar-courses.png'} alt="LionPlanner Similar and Alternatives" className='sm-img img-shadow'/>
            <img src={'/assets/lionplanner/suggested-alts.png'} alt="LionPlanner Similar and Alternatives" className='sm-img img-shadow'/>
         </div>

         <h5 className='feature'>Toolbar</h5>
         <p>The plan will automatically update with changes in majors and minors, and students can create, save, and export new plans, giving the In Depth Planner a space to test many scenarios.</p>
         <div className="img-wrap">
            <img src={'/assets/lionplanner/toolbar.png'} alt="LionPlanner Toolbar" className='img-shadow'/>
            <small>LionPlanner semester</small>
         </div>
         
         <div className='reflection'>
            <h4>Reflection</h4>
            <h5>Next Time...</h5>
            <p>As a large team of busy college students, we faced many challenges with communication. If we were to do the project over, I would make sure to establish clear roles on our team, including how much each member would like to contribute and general expectations for communication. Navigating the conflicts that arose was absolutely a learning experience that changed the way I now approach collaboration.</p>
            <p>Since this was my first UX project, there are certainly gaps in my process, especially around user testing and research. Lots of decisions were based on assumptions of what most students would want without conducting tests or surveys to verify. I'd love to revisit LionPlanner and incorporate user feedback and the design knowledge I've gained since then!</p>
            <h5>Impact</h5>
            <p>When I'm asked at what point I became sure that I wanted to pursue UI &amp; UX design, I always point to LionPlanner. Not only was this project impactful for me because of its scale and how much I learned, but it also showed me the potential design &amp; tech have to help people. I truly loved the opportunity to help solve a real issue (even in a hypothetical setting) and hearing feedback of how much it would have made a difference in people's college experiences. This project is the perfect example of the type of work I love doing.</p>
            <div className='img-wrap'>
                  <img src={'/assets/lionplanner/pitch.jpg'} alt="LionPlanner team" className='img-shadow'/>
            </div>
            <div className='img-wrap'>
               <img src={'/assets/lionplanner/group.jpg'} alt="LionPlanner team" className='img-shadow'/>
               <small>Our team during and after our final presentation</small>
            </div>    
         </div>
      </div>
      </>
   )
}