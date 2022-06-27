import React from 'react'
import ProgressBar from "react-scroll-progress-bar";


export default function Lionplanner(){
   return(
      <>
      <div className='progress-bar-wrap'><ProgressBar bgcolor='#FED02F'/></div>
      <div className='content-wrap'>
         <section className="projectDetails">
                <div className="addInfo">
                    <div className="info">
                        <h4>Context: The NittanyAI Challenge</h4>
                        <h5>The Challenge: Build an application that uses AI to solve a problem in education.</h5>
                        <h5>9 month challenge</h5>
                        <h5>Initial 70+ teams</h5>
                        <h5>10 teams selected to build prototypes</h5>
                        <h5>5 teams selected to build MVPs</h5>
                    </div>
                    <div className="info">
                        <h4>Team</h4>
                        <div className="teamMember">
                            <h5 className="name">Christie (me): </h5>
                            <h5>UI/UX Designer, Communications &amp; Presentations</h5>
                        </div>
                        <div className="teamMember">
                            <h5 className="name">Matt: </h5>
                            <h5>Full Stack Dev</h5>
                        </div>
                        <div className="teamMember">
                            <h5 className="name">Mike: </h5> 
                            <h5>Front End Dev</h5>
                        </div>
                        <div className="teamMember">
                            <h5 className="name">Dylan, Ben, Quinn: </h5>
                            <h5>Back End Devs</h5>
                        </div>
                        <h4>Outcome</h4>
                        <h5>Our team was awarded 1st Place in the Challenge, and received a total of $37,500 in funding.</h5>
                    </div>
                    
                    <div className="info">
                        
                    </div>
                </div>
                
                <div className="problem">
                    <div className="problemStatement">
                        <h4>PROBLEM STATEMENT</h4>
                        <h3>Planning which courses to take over a college career at Penn State is a tedious and entirely manual 
                            process that requires students to seek information from multiple scattered resources. 
                        </h3>
                    </div>
                    <div className="probList">
                        <div className="probListItem">
                            <h4>Manual planning process.</h4>
                            <h5>Students planning more than one semester ahead have to resort to using a spreadsheet or pen and paper to organize their 
                                plans, making this process unnecessarily time consuming.</h5>
                        </div>
                        <div className="probListItem">
                            <h4>Scattered resources.</h4>
                            <h5>The course catalog, major handbooks, recommended plans, etc. are all in different places, and carry  
                                information that, if missed, could lead to issues down the road.</h5>
                        </div>
                        <div className="probListItem">
                            <h4>Difficult to Explore Options</h4>
                            <h5>Manually testing different classes, majors, and minors is very complicated, and many students avoid 
                                planning entirely, leaving Penn State with the bare minimum.</h5>
                        </div>
                    </div>
                    <div className="imgGroup">
                        <img src="images/lp/lionplanner-resources.png" alt="Resources for Planning" className="resourceImg"/>
                        <p>Some of the resources a student would need to use all at once in order to plan their college courses.</p>
                    </div>
                </div>
                <div className="users">
                    <h3>Users</h3>
                    <div className="userList">
                        <div className="userListItem">
                            <h4>In Depth Planner</h4>
                            <h5>This student wants to explore all of their options and tailor their degree to their specific interests. They usually 
                                plan using a Google Sheet, but find it frustrating to test different scenarios for their degree. This student also 
                                particularly likes branching out of the required courses for their major(s), and wants to get more out of their time in college. 
                            </h5>
                            <div className="needs">
                                <p>Needs</p>
                                <li>test different scenarios</li>
                                <li>explore out-of-major courses</li>
                                <li>read about courses without leaving</li>
                            </div>
                        </div>
                        <div className="userListItem">
                            <h4>Degree Seeker</h4>
                            <h5>This student wants to make sure they will graduate on time with all the requirements for their degree. They don't want to 
                                take many extra classes, but would like to easily explore different electives to take within their major. This student would rather not 
                                spend too much time in their advisor's office, but does want their advisor to approve their plan.
                            </h5>
                            <div className="needs">
                                <p>Needs</p>
                                <li>fulfill degree requirements</li>
                                <li>avoid missing necessary prerequisites</li>
                                <li>explore similar major courses</li>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="goals">
                    <h3>Goals</h3>
                    <div className="goalsList">
                        <div className="goalsListItem">
                            <h4>Automate Initial Plan</h4>
                            <h5>Generate an initial plan based on a student's major that takes into account any previous course history.</h5>
                        </div>
                        <div className="goalsListItem">
                            <h4>Prevent Missed Courses</h4>
                            <h5>Automatically fulfill all degree requirements, and alert when students are missing prerequisites.</h5>
                        </div>
                        <div className="goalsListItem">
                            <h4>Provide Easy Customization</h4>
                            <h5>Allow major, minor, and course exploration, and suggest similar courses to ones in the plan.</h5>
                        </div>
                    </div>
                </div>
                <div className="process">
                    <h3>Design process &amp; progression</h3>
                    <div className="featuresList">
                        <h5 className="processText">My visual design skills grew significantly during this project, as it was my first major experience with interface design. Below 
                            are my designs from wireframe to final prototype, with medium/hi-fi's between. During this process I grew more accustomed to the 
                            standards of interface design, and how to best use (and not use) screen space. My sense of web typography and 
                            color palettes also 
                            improved, as I learned to apply my graphic design knowledge to a new medium.    
                        </h5>
                        </div>
                        <div className="imgGroup">
                            <img src="images/lp/sketch.jpg" alt="LionPlanner Sketch"/>
                            <img src="images/lp/wireframe.jpg" alt="LionPlanner Wireframe"/>
                            <img src="images/lp/lowfi.jpg" alt="LionPlanner Lowfi"/>
                            <img src="images/lp/lowfi2.png" alt="LionPlanner Lowfi 2"/>
                            <img src="images/lp/final.png" alt="LionPlanner Final"/>
                        </div>
                    </div>
                <div className="features">
                    <h3>Features &amp; hi-fi design</h3>
                    <div className="featuresList featureHighlight">
                        <div className="smScreenshot">
                            <div className="smImgWrap">
                                <img src="images/lp/semester.png" alt="LionPlanner Semester"/>
                            </div>
                            <div className="smImgWrap">
                                <img src="images/lp/rapSemester.png" alt="LionPlanner Recommended Plan"/>
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
                        <img src="images/lp/search.png" className="croppedScreenshot" alt="LionPlanner Search"/>
                    </div>
                    <div className="featuresList">
                        <div className="fullScreenshot">
                            <img src="images/lp/stillNeeded.png" alt="LionPlanner Still Needed"/>
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
                            <img src="images/lp/similarAlts.png" alt="LionPlanner Similar and Alternatives"/>
                        </div>
                    </div>
                    <div className="featuresList featureHighlight">
                        <div className="tinyImgWrap">
                            <img src="images/lp/toolBar.png" alt="LionPlanner Toolbar"/>
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
                            <img src="images/lp/pitch.jpg" alt="Revu Team"/>
                            <img src="images/lp/group.jpg" alt="Revu Team"/>
                            <h5>Our team during and after our final presentation.</h5>
                    </div>
                    <a id="scrollBtn" className="backToTop">&uarr; back to top</a>
                </div>
            </section> 
         
      </div>
      </>
   )
}