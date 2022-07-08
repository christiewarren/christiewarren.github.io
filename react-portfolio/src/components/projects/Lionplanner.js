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
      <div className='content-wrap'>
         <h1>LionPlanner</h1>
         <div className='img-wrap'>
            <img src={'/assets/lionplanner/final.png'} alt="Revu Team"/>
         </div>
         <section id='tldr'>
            <span className='section-divider'><h3>TLDR;</h3><hr/></span>
            <h6>I worked as the sole designer on a team of front and backend developers to design and build a web application for students to plan their long-term (multi-year) college course schedule. We worked on this project as a part of a 9-month competition at Penn State called the NittanyAI Challenge.<br/><br/>The largest design challenge was consolidating the many scattered resources students need to consult during their planning process within the UI, while still making it easy to learn.<br/><br/>While our team ultimately didn't pursue this project after the competition, we were so excited to receive first place, and it was the project that inspired me to go into UX.</h6>

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
                           </div>
                        </SwiperSlide>
                        <SwiperSlide>
                           <div className='img-wrap'>
                              <img src='/assets/lionplanner/wireframe.jpg' className='carousel-img-d img-shadow'/>
                           </div>
                        </SwiperSlide>
                        <SwiperSlide>
                           <div className='img-wrap'>
                              <img src='/assets/lionplanner/lowfi.jpg' className='carousel-img-d img-shadow'/>
                           </div>
                        </SwiperSlide>
                        <SwiperSlide>
                           <div className='img-wrap'>
                              <img src='/assets/lionplanner/lowfi2.png' className='carousel-img-d img-shadow'/>
                           </div>
                        </SwiperSlide>
                        <SwiperSlide>
                           <div className='img-wrap'>
                              <img src='/assets/lionplanner/final.png' className='carousel-img-d img-shadow'/>
                           </div>
                        </SwiperSlide>
                     </Swiper>
                  </div>  

      <div className='content-wrap'>
      
         <section className="projectDetails">
                <div className="process">
                    
                    </div>
                <div className="features">
                    <h3>Features &amp; hi-fi design</h3>
                    <div className="featuresList featureHighlight">
                        <div className="smScreenshot">
                            <div className="smImgWrap">
                                <img src={'/assets/lionplanner/semester.png'} alt="LionPlanner Semester"/>
                            </div>
                            <div className="smImgWrap">
                                <img src={'/assets/lionplanner/rapSemester.png'} alt="LionPlanner Recommended Plan"/>
                            </div>
                        </div>
                        <div className="featuresListItems">
                            <div className="featuresListItem">
                                <h4>Semester Design</h4>
                                <h5>Semesters take visual inspiration from the recommended plans for students' majors to increase familiarity in 
                                    the design and decrease the learning curve of LionPlanner.
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className="featuresList">
                        <div className="featuresListItems">
                            <div className="featuresListItem">
                                <h4>Search Courses</h4>
                                <h5>Students can search the entire course catalog and view the descriptions of any course, consolidating resources, and allowing  
                                    the <span className="userSpan">In Depth Planner</span> to <span className="problemSolved">discover courses outside their major.</span>
                                </h5>
                            </div>
                        </div>
                        <img src={'/assets/lionplanner/search.png'} className="croppedScreenshot" alt="LionPlanner Search"/>
                    </div>
                    <div className="featuresList">
                        <div className="fullScreenshot">
                            <img src={'/assets/lionplanner/stillNeeded.png'} alt="LionPlanner Still Needed"/>
                        </div>
                        <div className="featuresListItems">
                            <div className="featuresListItem">
                                <h4>Still Needed</h4>
                                <h5>If a student deletes a required course, it will be added to Still Needed as a reminder, 
                                    which is especially useful for the <span className="userSpan">Degree Seeker</span> to 
                                    <span className="problemSolved">fulfill their degree requirements.</span>
                                </h5>
                            </div>
                            <div className="featuresListItem">
                                <h4>Prerequisite Warnings</h4>
                                <h5>Any course that does not have necessary prerequisites before it is highlighted in red with a tooltip 
                                    of the missing prereq. This keeps the <span className="userSpan">Degree Seeker</span> on track to 
                                    <span className="problemSolved">take all courses on time.</span></h5>
                            </div>
                        </div>
                    </div>
                    <div className="featuresList">
                        <div className="featuresListItems">
                            <div className="featuresListItem">
                                <h4>Similar Courses</h4>
                                <h5>If a student deletes a required course, it will be added to Still Needed as a reminder, 
                                    which is especially useful for the <span className="userSpan">Degree Seeker</span> to 
                                    <span className="problemSolved">fulfill their degree requirements.</span>
                                </h5>
                            </div>
                            <div className="featuresListItem">
                                <h4>Suggested Alternatives</h4>
                                <h5>Shows other courses that meet the same requirements as the one selected can can be swapped out, allowing the <span className="userSpan">Degree Seeker</span> 
                                    to <span className="problemSolved">explore options within their major.</span></h5>
                            </div>
                        </div>
                        <div className="fullScreenshot">
                            <img src={'/assets/lionplanner/similarAlts.png'} alt="LionPlanner Similar and Alternatives"/>
                        </div>
                    </div>
                    <div className="featuresList featureHighlight">
                        <div className="tinyImgWrap">
                            <img src={'/assets/lionplanner/toolbar.png'} alt="LionPlanner Toolbar"/>
                        </div>
                        <div className="featuresListItems">
                            <div className="featuresListItem">
                                <h4>Toolbar</h4>
                                <h5>The plan will automatically update with changes in majors and minors, and students can create, save, and export new 
                                    plans, giving the <span className="userSpan">In Depth Planner</span> a space to <span className="problemSolved">test many scenarios.</span>
                                </h5>
                            </div>
                        </div>
                    </div>
                    
                    <h3>Conclusion</h3>
                </div>
                <div className="conclusion">
                    <div className="conclusionText">
                        <h4>Summary</h4>
                        <h5>When I'm asked at what point I became sure that I wanted to do UI/UX design, I always point to LionPlanner. Not only was this project impactful 
                            because of its scale and how much I learned, but it also showed me the potential design & tech have to help people. I truly loved 
                            helping solve a real issue and hearing people say how much it would have changed their experience. 
                        </h5>
                        <h4>Next Time...</h4>
                        <h5>The major challenges our team faced during this project were with communication among a large team of college students. If we were to do the project over again, I would make sure to establish clear roles on our team, 
                            including how much each member would like to contribute. Navigating conflicts that arose was absolutely a learning experience that changed the way I now approach collaboration.
                        </h5>
                    </div>
                    <div className="teamImg">
                        <div className='img-wrap'>
                            <img src={'/assets/lionplanner/pitch.jpg'} alt="Revu Team"/>
                        </div>
                        <div className='img-wrap'>
                            <img src={'/assets/lionplanner/group.jpg'} alt="Revu Team"/>
                        </div>    
                            <h5>Our team during and after our final presentation.</h5>
                    </div>
                    <a id="scrollBtn" className="backToTop">&uarr; back to top</a>
                </div>
            </section> 
         
      </div>
      </>
   )
}