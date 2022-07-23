import React, { useEffect } from 'react';
import ProgressBar from "react-scroll-progress-bar";
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Footer from '../Footer';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export default function NavRedesign(){
   // useEffect(() => {
   //    window.scrollTo({
   //       top: 0, 
   //       left: 0,
   //       behavior: 'instant'})
   // }, [])
   return(
      <>
      <div className='progress-bar-wrap'><ProgressBar bgcolor='#8A96FF'/></div>
      <div className='under-page'></div>
         <div className='over-page'>
            <div className='proj-header'>
               <div className='proj-header-text'>
                  <h1>Navigation Redesign</h1>
                  <h2>@KiwiCo</h2>
                  <div className='proj-header-text-sm'>
                        <p>UI/UX Design</p>
                  </div>
               </div>
               <img src={'/assets/search/final/mobile/results-sub.jpg'} className='proj-hero'/>
            </div>
         <div className='content-wrap'>
            <section id='tldr'>
               <span className='section-divider'><h3>TLDR;</h3><hr/></span>
               <h6>I completed a full redesign of KiwiCo's mobile and desktop main navigation and footers. 
               <br/><br/>The main goals of this project were to better align the navigation and footers with KiwiCo's brand, improve the hierarchy and visual design, and increase discoverability of certain content.
               <br/><br/>Challenges in this project primarily revolved around the multiple A/B test variations we ran on the site. Along with my PM, I monitored the metrics from these tests and proposed changes to the design to improve pageview, etc.
               <br/><br/>Some highlights from the improved mobile nav metrics include:
                  <ul>
                     <li>+ 5% in revenue and completed order </li>
                     <li>+ 4% in product page views</li>
                     <li>+ 23% in visits to our Blog pages</li>
                  </ul>
               </h6>

               <a href='https://www.kiwico.com/' target='blank' className='no-style-link'>
                  <button>see it live<img src='/assets/search/arrow-right.svg' className='button-arrow'/></button>
               </a>
               <a href='#case-study' className='styled'>read the case study<img src='/assets/search/arrow-down-plain.svg' className='link-arrow'/></a>
            </section>

            <section id='case-study'>
               <span className='section-divider'><h3>Case Study</h3><hr/></span>
               <div className='context'>
                  <h4>Context</h4>
                  <p>KiwiCo's site navigation had last been updated in 2020, and the footer design had been largely the same since 2017 (though many more links were added since then).
                  </p>
                  <div className='img-wrap'>
                     <img src='/assets/nav/old-mobile-navs.png'/>
                     <small className='subs-caption'>Former mobile navigation</small>
                  </div>
                  <div className='img-wrap'>
                     <img src='/assets/nav/old-footers.png'/>
                     <small className='subs-caption'>Former mobile and desktop footers</small>
                  </div>
                  <p>With KiwiCo's now nine subscription lines, 160+ store products, and nearly 1,600 DIY and Blog articles, discoverability and ease of navigation are essential to the business's success and users' understanding of its (somewhat complex) offerings.</p>
               </div>
               <h4>Research &amp; Benchmarking</h4>
               <p>Considering the importance of familiarity and the relative complexity of KiwiCo’s searchable content** I started with some extensive benchmarking. I <span className='highlight'>reviewed search features on over 20 websites and apps</span> and noted consistencies and aspects that would or wouldn’t work well for KiwiCo’s search.</p>
               <br/><small>** subscription lines, Store products, DIY ideas, Blog posts, Help articles, and miscellaneous pages</small>
               <div className='img-wrap'>
                  <img src='/assets/search/benchmarking.png'/>
                  <small>I mainly benchmarked against ecommerce sites like Lego and Target</small>
               </div>
               <br/><p>I also read numerous articles from the Baymard Institute to determine best practices for search features as well as how prominent ours should be.</p>
               <div className='img-wrap search-placement'>
                  <img src='/assets/search/search-placement.png' className='sm-img'/>
                  <small>Initial exploration of placement in the mobile nav, compared to the original nav sans-search (top)<br/>I moved forward with #1 for its simplicity and better use of space.</small>
               </div>
               <h4>Primary Problems in the Navs and Footers</h4>
               <h5><b>Hierarchy:</b> Mobile Menu</h5>
               <p>The mobile menu lacked hierarchy almost entirely, using the same size gray, regular weight font for all dropdowns and links within them. <span className='highlight'>Users weren't guided</span> towards KiwiCo's primary offerings (subscriptions and Store products).</p>
               <h5><b>Brand Alignment:</b> All</h5>
               <p>KiwiCo's brand is friendly, fun, playful, and caring, and none of the navigation really reflected this. All caps text in the mobile and desktop navs and unorganized links in the footers and mobile menu all contributed to an <span className='highlight'>unwelcoming, even intimidating environment,</span> which did not at all align with the content on the rest of the site.</p>
               <h5><b>Organization</b> Footers &amp; Mobile Nav</h5>
               <p>Many links had been added to these areas over time without reorganization, leading to <span className='highlight'>repetitiveness and unnecessary links.</span> The worst instance of this was the Quick Links section with 14 links. Rather than being what was intended — a helpful assortment of most-needed links — it had become a catch-all of random ones.</p>
               <p>Not to mention, the mobile footer hadn't been adapted to hold this many links, so about <span className='highlight'>3/4 of the desktop links were excluded</span> (for about 70% of users).</p>
               <h5><b>Responsiveness:</b> Desktop Nav &amp; Footer</h5>
               <p>When resized, these areas didn't respond well with <span className='highlight'>little to no outer margins and awkward spacing and overlapping,</span> adding an unprofessional and dated feel to the site.</p>
               
               <h4>User Testing</h4>
               <h5>Round 1&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;</h5>
               <a href='/assets/search/user-test-script1.pdf' target='blank' className='styled sm'>view script PDF</a>
               <h6>My main goals for Round 1 were to determine whether subscriptions and Store products were presented in an understandable way and test the hypotheses I made during research.</h6>
               <br/><p>A whole tab for subscriptions seemed like overkill when it would only have a max of nine results. So, for my tests I combined subscriptions and Store products into a “Products” tab, which also meant combining them into one section in the “All” tab.</p>
               <div className='img-wrap'>
                  <img src='/assets/search/user-test-round1-desktop.png'/>
                  <small>Subscriptions and Store items combined into a Products tab and category</small>
               </div>
               <br/><p>Feedback from the tests made it clear that <span className='highlight'>this solution was far too confusing</span> and led to hesitancy around viewing more products, since participants were unsure exactly what they’d be viewing.</p>

               <h5>Rounds 2 &amp; 3&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;</h5>
               <a href='/assets/search/user-test-script23.pdf' target='blank' className='styled sm'>view script PDF</a>
               <h6>These rounds I primarily gathered feedback on the ideal amount of information and options to provide throughout the flow. </h6>
               <p>In particular, I hoped to provide clarity around the relevance of subscription results to the search term by listing which boxes in each subscription line matched the search term. (e.g. if “robots” is the search term, the Tinker Crate project, “Walking Robot,” is listed under Tinker Crate).</p>
               <div className='img-wrap'>
                  <img src='/assets/search/sub-crates.png' className='sm-img'/>
                  <small>Subscriptions and Store items combined into a Products tab and category</small>
               </div>
               <br/><p>However, this extra info had the opposite effect, raising more questions and hesitancy and distracting participants from other results. Instead, they voiced that <span className='highlight'>price, images, and quick view</span> would be much more helpful to their understanding of each subscription.<br/><br/>These rounds also confirmed that giving subscriptions their own category but only displaying it at the top of the “All” tab would give them sufficient prominence, without dedicating a whole tab to them.</p>

               <h4>Final Designs</h4>
               <h5>Mobile</h5>
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
                        <img src='/assets/search/final/mobile/empty-state.jpeg' className='carousel-img-m img-shadow'/>
                        <small className='slide-caption'>Search opens in a full-page overlay, and empty state suggests subscription lines and popular Store items</small>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <div className='img-wrap'>
                        <img src='/assets/search/final/mobile/suggestions1.jpg' className='carousel-img-m img-shadow'/>
                        <small className='slide-caption'>Suggestions allow user to go directly to a specific category</small>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <div className='img-wrap'>
                        <img src='/assets/search/final/mobile/suggestions2.jpg' className='carousel-img-m img-shadow'/>
                        <small className='slide-caption'>More suggestions show related subscriptions and Store items</small>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <div className='img-wrap'>
                        <img src='/assets/search/final/mobile/results-sub.jpg' className='carousel-img-m img-shadow'/>
                        <small className='slide-caption'>Results feature subscriptions prominently without them occupying too much vertical space</small>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <div className='img-wrap'>
                        <img src='/assets/search/final/mobile/results-store.jpg' className='carousel-img-m img-shadow'/>
                        <small className='slide-caption'>Store results feature the six most relevant products with the ability to view more in the Store tab (via a View more button not pictured)</small>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <div className='img-wrap'>
                        <img src='/assets/search/final/mobile/results-diy-blog.jpg' className='carousel-img-m img-shadow'/>
                        <small className='slide-caption'>Similarly, results for DIY ideas and Blog posts feature the six most relevant articles</small>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <div className='img-wrap'>
                        <img src='/assets/search/final/mobile/results-help-more.jpg' className='carousel-img-m img-shadow'/>
                        <small className='slide-caption'>Help and More results contain relevant help articles and miscellaneous pages</small>
                     </div>
                  </SwiperSlide>
               </Swiper>
               <h5 className='desktop-final'>Desktop</h5>
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
                        <img src='/assets/search/final/desktop/empty-state.jpg' className='carousel-img-d img-shadow'/>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <div className='img-wrap'>
                        <img src='/assets/search/final/desktop/suggestions.jpg' className='carousel-img-d img-shadow'/>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <div className='img-wrap'>
                        <img src='/assets/search/final/desktop/results-sub.jpg' className='carousel-img-d img-shadow'/>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <div className='img-wrap'>
                        <img src='/assets/search/final/desktop/results-store.jpg' className='carousel-img-d img-shadow'/>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <div className='img-wrap'>
                        <img src='/assets/search/final/desktop/results-diy-blog.jpg' className='carousel-img-d img-shadow'/>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <div className='img-wrap'>
                        <img src='/assets/search/final/desktop/results-help-more.jpg' className='carousel-img-d img-shadow'/>
                     </div>
                  </SwiperSlide>
               </Swiper>
            </div>
            <div className='content-wrap'>
               <h4>Measuring Success</h4>
               <p>It’s tough to quantify the success of this feature for a couple reasons:</p>
               <ul>
                  <li><p>Users who enter a search are more likely to know what they’re looking for, so comparing conversion with those who don’t enter a search would be misleading</p></li>
                  <li><p>In general, conversion through search isn’t very meaningful, since we show results for multiple categories that wouldn’t lead to a purchase (Blog, DIY, Help, and More)</p></li>
               </ul>
               <p>That being said, one thing we know for sure is that <span className='highlight'>the number of people searching the site has nearly <b>quadrupled</b></span> with the addition of Sitewide Search. The individual searches in Store, Blog, and DIYs account for a combined average of <b>219</b> searches per day, compared to Sitewide Search’s average of <b>839</b>.</p>
               <div className='img-wrap'>
                  <img src='/assets/search/mixpanel-graph.png' className='img-shadow'/>
                  <small>Sitewide search (top/purple) traffic vs. Store, DIY, and Blog searches</small>
               </div>
               
               <div className='reflection'>
                  <h4>Reflection</h4>
                  <h5>Learnings</h5>
                  <p>At this small company, designers present their large projects multiple times to stakeholders and various execs — including the CEO — and discuss feedback with them. Since this was my first solo large project here, creating the presentations and discussing my work in a digestible, but thorough manner was a huge learning experience. Not to mention learning to field questions and feedback with solid reasoning based in my research and testing.</p>

                  <h5>Challenges</h5>
                  <p>I also got great experience writing scripts and preparing prototypes for user tests. These tests came with their fair share of frustration and troubleshooting as I learned how to communicate to participants things as simple as what screen they should be on (without being able to talk to them in real time).<br/><br/>There were also some technical limitations in the search functionality, especially around searching for subscriptions. I had hoped to show results if a user searched for a box in a given subscription, even if that particular box wasn’t featured on the site. However, the PM and devs I worked with determined that this kind of mapping would be a lot of manual work, so we had to cut it out of the scope for the time being. (Maybe one day!)</p>
               </div>
            {/* </section> */}
         </div>
      </div>
      <Footer/>
      </>
   )
}

