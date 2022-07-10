import React from 'react'
import ProgressBar from "react-scroll-progress-bar";
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export default function Revu(){
   return(
      <>
      <div className='progress-bar-wrap'><ProgressBar bgcolor='#8A96FF'/></div>         
      <div className='under-page'></div>
      <div className='over-page'>
         <h1>Revu</h1>
         <div className='one-img-hero-wrap'>
            <img src={'/assets/revu/edit-quiz.png'} alt="LionPlanner final design" className='img-shadow '/>
         </div>
         <div className='content-wrap'>
            <section id='tldr'>
               <span className='section-divider'><h3>TLDR;</h3><hr/></span>
               <h6>I worked as a UI/UX designer along with a full stack developer to create a web app that generates multiple choice quizzes from a passage of text.</h6>

               <a href='#case-study' className='styled'>read the case study<img src='/assets/search/arrow-down-plain.svg' className='link-arrow'/></a>
            </section>
            <section id='case-study'>
               <span className='section-divider'><h3>Case Study</h3><hr/></span>
               <div className='context'>
                  <h4>Context</h4>
                  <p>The Nittany AI Challenge prompt was to build an application that uses AI to solve a problem in education. Our idea stemmed from my teammate's interest in the unsolved problem of creating an algorithm to generate multiple choice questions and answers from a passage of text. </p>
                  <div className='img-wrap'>
                     <img src='/assets/lionplanner/resources.jpg'/>
                     <small class='subs-caption'>Some of the resources a student would need to use to plan their college courses</small>
                  </div>
                  <br/><p>We proposed LionPlanner: a solution that would automate the course plan up front by fulfilling all requirements for a chosen major. The app would then provide an interactive UI where students could add, remove, and reorder courses in their plan and view warnings for any missing requirements or prerequisites.</p>
                  <p>Our team's proposal was one of 10 given funding to build a prototype from an initial 70+ teams and we were then one of 5 given funding to develop an MVP. Over the 9 month challenge, I pitched our project to judges twice and led the writing of detailed proposals.</p>
               </div>

               <h4>A Closer Look at the Problem</h4>
               <h5>Manual planning</h5>
               <p>Students planning more than one semester ahead have to resort to using a spreadsheet or pen and paper to organize their plans, making this process unnecessarily time consuming.</p>
               <div className="img-wrap">
                  <img src={'/assets/lionplanner/sheet.png'} alt="LionPlanner Still Needed"/>
                  <small>About <b>half</b> of a friend's course-planning spreadsheet</small>
               </div>
            </section>
         </div>
                    {/* <h3>A web app that automatically generates modifiable multiple choice quizzes from readings
                        to help teachers encourage students to complete reading assignments.
                    </h3> 
                    
                </div>
            </section>
            
            <section class="projectDetails">
                <div class="addInfo">
                    <div class="info">
                        <h4>Context: The NittanyAI Challenge</h4>
                        <h5>The Challenge: Build an application that uses AI to solve a problem in education.</h5>
                        <h5>9 month challenge</h5>
                        <h5>Initial 100+ teams</h5>
                        <h5>20 teams selected to build prototypes</h5>
                        <h5>10 teams selected to build MVPs</h5>
                    </div>
                        
                    
                    <div class="info">
                        
                    </div>
                </div>
                <div class="research">
                    <h3>Research</h3>
                    <h4>User Interviews</h4>
                    <p>Initially our idea for Revu was to make it a tool for students to study with and stay focused while reading out 
                        of class assignments. After interviewing multiple students and speaking with professors, it became clear that this 
                        tool would be much more impactful if it were in the hands of teachers.
                        <br><br>The problem lies with students not reading out of class in the first place, not with their studying habits. This phase 
                        showed us that it would be tough to motivate students to read, unless their teachers got involved.
                    </p>
                    <h4>Defining a Solution</h4>
                    <p>The biggest obstacle to designing Revu was determining how to incentivize students to do these readings. Extra credit is a 
                        possible incentive, but the professors and educators we spoke with didn't like the idea of rewarding students for doing what they 
                        signed up for (understandably).
                        <br><br>
                    </p>
                    <div class="survey">
                        <div class="featuresList">
                            <div class="fullScreenshot">
                                <img src="images/revu/studentIncentive.png" alt="Student Incentive Graph">
                            </div>
                            <div class="featuresListItems">
                                <div class="featuresListItem">
                                    <h5>The students we surveyed are nearly 70% more likely to complete an out of class reading if they 
                                        know <span class="problemSolved">their professor can see whether they did it.</span>
                                        <br><br>Using this information, we decided to allow teachers to keep track of their students' participation,
                                        also allowing for more insight on their part.
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="problem">
                    <div class="problemStatement">
                        <h4>PROBLEM STATEMENT</h4>
                        <h3>A significant majority of students do not complete out of class reading 
                        assignments, and the options instructors have to remedy this take valuable
                        time from them and from their class time.</h3>
                    </div>
                    <div class="probList">
                        <div class="probListItem">
                            <h4>Students don't read.</h4>
                            <h5>Studies have shown that 70% of students do not complete out of class reading assignments, 
                                causing them to miss out on course content and reading skill development.</h3>
                        </div>
                        <div class="probListItem">
                            <h4>Extra teacher time.</h4>
                            <h5>Teachers have to put in extra time to create quizzes or summarize readings to ensure their 
                                students are learning the material they didn't read.</h3>
                        </div>
                        <div class="probListItem">
                            <h4>Class time misused.</h4>
                            <h5>Finite class time ends up being used to cover material from the readings, when it should be used
                                to cover fundamental material.</h3>
                        </div>
                    </div>
                </div>
                <div class="users">
                    <h3>Users</h3>
                    <div class="userList">
                        <div class="userListItem">
                            <h4>Quick Quizzer</h4>
                            <h5>This teacher has little time to spare, but wants to know which of their students are actually
                                completing readings. They can tell many students aren't, but don't want to use class time to 
                                give quizzes. The reading content for this class usually reiterates content from lectures, so 
                                questions can be largely pulled from the text to test students' memory. 
                            </h5>
                            <div class="needs">
                                <p>Needs</p>
                                <li>fast, hands-off process</li>
                                <li>quickly look through questions</li>
                                <li>easily check who took quiz</li>
                            </div>
                        </div>
                        <div class="userListItem">
                            <h4>Insight Seeker</h4>
                            <h5>This teacher wants to get insight on which of their students are struggling with outside reading content 
                                as well as what specific content their class is having trouble with. The reading content for their 
                                class is more in-depth content that won't be covered during class, so it's important that students
                                demonstrate comprehension.
                            </h5>
                            <div class="needs">
                                <p>Needs</p>
                                <li>ability to edit quiz in depth</li>
                                <li>ask critical thinking questions</li>
                                <li>view specific content students struggle with</li>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="goals">
                    <h3>Goals</h3>
                    <div class="goalsList">
                        <div class="goalsListItem">
                            <h4>Relieve Teachers of Extra Tasks</h4>
                            <h5>Automate quiz generation to create a solution that doesn't take lots of time from teachers.</h5>
                        </div>
                        <div class="goalsListItem">
                            <h4>Improve Student Participation</h4>
                            <h5>Provide teachers with a list of students who complete the reading, incentivizing students without extra credit.</h5>
                        </div>
                        <div class="goalsListItem">
                            <h4>Provide Teachers with Insight</h4>
                            <h5>Show teachers specific content students are struggling with so they can steer their lectures towards these areas.</h5>
                        </div>
                    </div>
                </div>
                <div class="features">
                    <h3>Features: Creating the Quiz</h3>
                    <div class="featuresList">
                        <div class="featuresListItems">
                            <div class="featuresListItem">
                                <h4>Reading Text Entry</h4>
                                <h5>Easily paste a reading here from a textbook PDF, article etc., starting the <span class="problemSolved">fast, hands-off process</span> 
                                    the <span class="userSpan">Quick Quizzer</span> needs.
                                </h5>
                            </div>
                            <div class="featuresListItem">
                                <h4>Quiz Preferences</h4>
                                <h5>Each quiz has a title and class, and teachers can choose 
                                    the number of distractors per question.</h5>
                            </div>
                        </div>
                        <div class="fullScreenshot">
                            <img src="images/revu/input.png" alt="Revu Input Screen">
                        </div>
                    </div>
                    <div class="featuresList featureHighlight">
                        <div class="smScreenshot">
                            <div class="smImgWrap">
                                <img src="images/revu/editableQuestion.png" alt="Revu Editable Question">
                            </div>
                            <div class="smImgWrap">
                                <img src="images/revu/editQuestion.png" alt="Revu Edit Question">
                            </div>
                        </div>
                        <div class="featuresListItems">
                            <div class="featuresListItem">
                                <h4>Editable Question</h4>
                                <h5>Easy editing is especially important, since Revu is powered by AI. This allows teachers to easily fix any small
                                    errors that may occur while our algorithms are in development and allows the <span class="userSpan">Insight Seeker</span> 
                                    to <span class="problemSolved">edit the quiz in depth.</span>
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div class="featuresList">
                        <div class="featuresListItems">
                            <div class="featuresListItem">
                                <h4>Where is this from?</h4>
                                <h5>A teacher can click this to highlight the text where the question is from, allowing them to ensure 
                                    the question is relevant.
                                </h5>
                            </div>
                        </div>
                        <div class="fullScreenshot">
                            <img src="images/revu/whereFrom.png" alt="Revu Where is this from?">
                        </div>
                    </div>
                    <div class="featuresList featureHighlight">
                        <div class="featuresListItems">
                            <div class="featuresListItem">
                                <h4>Create New Question</h4>
                                <h5>Add questions simply by filling in a blank template question. This allows the <span class="userSpan">Insight Seeker</span> 
                                    to <span class="problemSolved">ask critical thinking questions</span> in addition to the recall-based ones Revu provides.
                                </h5>
                            </div>
                        </div>
                        <div class="smScreenshot">
                            <div class="smImgWrap">
                                <img src="images/revu/newQuestion.png" alt="Revu New Question">
                            </div>
                        </div>
                    </div>
                    <h3>Features: Quiz Insights</h3>
                    <div class="featuresList pageFeatures">
                        <div class="featuresListItems">
                            <div class="featuresListItem">
                                <h4><span class="numLabel">A</span> Student List</h4>
                                <h5>A list of who has completed the quiz, their score, and when they completed it. Satisfying the need <span class="userSpan">both
                                        teachers</span> have to <span class="problemSolved">know which of their students are participating.</span>
                                </h5>
                            </div>
                            <div class="featuresListItem">
                                <h4><span class="numLabel">B</span> Frequently Incorrect ?s</h4>
                                <h5>A list of the specific questions the most students got wrong, so that the <span class="userSpan">Insight Seeker</span> 
                                    knows <span class="problemSolved">what specific content students are struggling with.</span>
                                </h5>
                            </div>
                            <div class="featuresListItem">
                                <h4><span class="numLabel">C</span> Shareable Link</h4>
                                <h5>Simple link sharing with students is a time saver and makes Revu easy to integrate into any classroom.
                                </h5>
                            </div>
                            <div class="featuresListItem">
                                <h4><span class="numLabel">D</span> Student View</h4>
                                <h5>Shows the teacher what their quiz looks like from a student's perspective.
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div class="fullScreenImg">
                        <img src="images/revu/dashboard.png" alt="Revu Dashboard">
                    </div>
                    <h3>Conclusion</h3>
                </div>
                <div class="conclusion">
                    <div class="conclusionText">
                        <h4>Summary</h4>
                        <h5>Designing Revu gave me extensive experience with each part of the design process from basic user research, to ideation, 
                                to mockups and prototypes, all while collaborating with a full stack developer. I also got to improve my public speaking and communication skills, 
                                specifically explaining the functionality of Revu. 
                        </h5>
                        <h4>Next Time...</h4>
                        <h5>This project emphasized the importance of user research, and how it can change the direction of a product. If I could redo this process, 
                            next time I would do more research sooner, to make sure the design is steered in the "right" direction from the start. 
                        </h5>
                    </div>
                    <div class="teamImg">
                            <img src="images/revu/pitch.jpg" alt="Revu Team">
                            <h5>Matt and I after our final presentation of Revu.</h5>
                    </div> */}

      </div>
      </>
   )
}