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
               <div className='proj-hero-wrap'>
                  <img src={'/assets/home/nav-redesign.png'} className='proj-hero'/>
               </div>
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

               <h4>Scope</h4>

               <h4>Research &amp; Benchmarking</h4>
               <p>During my Sitewide Search project, I conducted extensive benchmarking, including navigation, since I placed Search in KiwiCo's navs. So, I was able to reuse much of that, but this time focused on hierarchy, navigation options (like Shop by Age), and organization.</p>
               <div className='img-wrap'>
                  <img src='/assets/search/benchmarking.png'/>
                  <small>I mainly benchmarked against ecommerce sites like Lego and Target</small>
               </div>
               <br/><p>Also similar to Search, I read about best practices in Baymard Institute articles. Learnings from this are best summarized by this excerpt about hierarchy:</p>
               <h6 className='quote'>“Testing showed that simply “lumping” all paths together in the main navigation, without any visual distinction, brought many subjects to a full stop . . . as they struggled to identify how to actually begin browsing products. Other subjects, intimidated by the overwhelming appearance of the main navigation, immediately abandoned trying to use the main navigation . . .”</h6>

               <h4>Primary Problems in the Navs and Footers</h4>
               <h5><b>Hierarchy:</b> Mobile Menu</h5>
               <p>The mobile menu lacked hierarchy almost entirely, using the same size gray, regular weight font for all dropdowns and links within them. <span className='highlight'>Users weren't guided</span> towards KiwiCo's primary offerings (subscriptions and Store products).</p>
               <h5><b>Brand Alignment:</b> All</h5>
               <p>KiwiCo's brand is friendly, fun, playful, and caring, and none of the navigation really reflected this. All caps text in the mobile and desktop navs and unorganized links in the footers and mobile menu all contributed to an <span className='highlight'>unwelcoming, even intimidating environment,</span> which did not at all align with the rest of the site.</p>
               <h5><b>Organization</b> Footers &amp; Mobile Menu</h5>
               <p>Many links had been added to these areas over time without reorganization, leading to <span className='highlight'>repetitiveness and unnecessary links.</span> The worst instance of this was the Quick Links section with 14 links. Rather than being what was intended — a helpful assortment of most-needed links — it had become a catch-all of random ones.</p>
               <p>Not to mention, the mobile footer hadn't been adapted to hold this many links, so about <span className='highlight'>3/4 of the desktop links were excluded</span> (for about 70% of users).</p>
               <h5><b>Responsiveness:</b> Desktop Nav &amp; Footer</h5>
               <p>When resized, these areas didn't respond well, having <span className='highlight'>little to no outer margins and awkward spacing and overlapping,</span> which made the site feel unprofessional and dated.</p>
               
               <h4>Visual Design Progression</h4>
               <h5><b>Mobile Menu:</b> V1</h5>
               <h6>One of the largest changes to the mobile menu was separating Subscription Lines (Our Lines here) and Store into their own section, as well as making them visually distinct.</h6>
               <p>This change guides users to KiwiCo's primary offerings. While the other links are still important, the majority of users will be looking for products, all of which can be found in these two accordions.</p>
               <p>I also changed the menu background from gray to white to create a more inviting, friendly feel and ensure the active states were accessible.</p>

               <div className='img-wrap'>
                  <p className='img'>V1</p>
                  <small>V1 mock with no organizational changes yet</small>
               </div>

               <h5><b>Mobile Menu:</b> V2</h5>
               <p>The visual design remained relatively consistent from my initial mocks, since I had thought through it thoroughly during benchmarking &amp; research, even starting during the Search project.</p>
               <p>However, as I got more comfortable, I started adding more visual interest to reflect our brand in certain areas:</p>
               <div className='img-wrap'>
                  <p className='img'>subs and shop by age/interest</p>
                  <small>V2 mocks</small>
               </div>
               <p>At this stage I also made adjustments to the spacing to ensure each link would have a large enough target area.</p>

               <h5><b>Mobile Menu:</b> V3 (first version A/B tested on the site)</h5>
               <p>Final changes I made before our first A/B test included:</p>
               <ul>
                  <li>Adding Shop by Interest to the Store accordion</li>
                  <li>Altering the link style of Shop by Age so it could be consistent with Shop by Interest</li>
                  <li>Adding an icon to the Sign In link to increase its prominence</li>
                  <li>Updating the shopping cart and search icons in the nav to be consistent line weights</li>
                  <li>Adding a My Account dropdown when the user is logged in</li>
               </ul>
               
               
               <h5>Organization</h5>
               <h6>I proposed a new organization for the footers and mobile menu that would be more logical and avoid any sections being unnecessarily long or vague.</h6>

               <h4>User Testing</h4>
               <h6>My user tests mainly focused on ensuring that the new organization and hierarchy of links was intuitive, and that users could easily and quickly find what they needed.</h6>

               <h4>A/B Tests</h4>

               <h4>Final Designs</h4>
               <h5>Mobile Nav &amp; Menu</h5>
               <h5>Desktop Nav</h5>
               <h5>Mobile &amp; Desktop Footers</h5>
            </section>
         </div>
      </div>
      <Footer/>
      </>
   )
}

