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
               <h5><b>Organization:</b> Footers &amp; Mobile Menu</h5>
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
                  <p className='img'>subs and shop by age/interest (V2)</p>
                  <small>V2 mocks</small>
               </div>
               <p>At this stage I also made adjustments to the spacing to ensure each link would have a large enough target area.</p>

               <h5><b>Mobile Menu:</b> User Tests</h5>
               <p>My user tests mainly focused on ensuring that the new organization and hierarchy of links was intuitive, and that users could easily and quickly find what they needed.</p>
               <p>The primary learning from this test was that users were confused by the "KiwiCo Content" section. To address this, I changed the title to "DIY &amp; Blog" to be more straightforward.</p>
               <p>Fortunately, the tests didn't reveal any other major confusion, so we were able to move forward with this version after a few small changes.</p>

               <h5><b>Mobile Menu:</b> V3 (first version A/B tested on the site)</h5>
               <p>Other changes I made before our first A/B test included:</p>
               <ul>
                  <li>Added Shop by Interest to the Store accordion</li>
                  <br/>
                  <li>Altered the link style of Shop by Age so it could be consistent with Shop by Interest</li>
                  <br/>
                  <li>Added an icon to the Sign In link to increase its prominence</li>
                  <li>Updated the shopping cart and search icons in the nav to be consistent line weights</li>
                  <br/>
                  <li>Added a My Account dropdown when the user is logged in</li>
               </ul>
               <div className='img-wrap'>
                  <p className='img'>V3</p>
                  <small>V3 mocks</small>
               </div>

               <h5><b>Desktop Nav:</b> V1</h5>
               <h6>In my V1, I focused on improving the use of space and reducing crowding:</h6>
               <ul>
                  <li>Increased the max-width of the nav content</li>
                  <br/>
                  <li>Used the horizontal version of the logo to better fit the space</li>
                  <br/>
                  <li>Reduced the nav's height and the need for the existing shrinking animation</li>
                  <br/>
                  <li>Switched dropdown links from all caps to title case for a more approachable feel</li>
                  <br/>
                  <li>Incorporated a search bar within the nav (was out of scope for the Sitewide Search project)</li>
                  <br/>
                  <li>Moved the Refer a Friend link ("Share KiwiCo, Get $10") to its own persistent banner below the nav</li>
               </ul>
               <div className='img-wrap'>
                  <p className='img'>desktop nav V1</p>
                  <small>Desktop nav V1</small>
               </div>

               <h5><b>Desktop Nav:</b> V2</h5>
               <h6>V2 modifications were primarily around improving consistency in style and size of the righthand elements:</h6>
               <ul>
                  <li>Made the search bar shorter and used a smaller icon inside</li>
                  <br/>
                  <li>Made the region icon smaller</li>
                  <br/>
                  <li>Added an icon to My Account</li>
                  <br/>
                  <li>Switched the cart icon (like on mobile) to a more consistent style</li>
                  <br/>
                  <li>Created an updated design for the cart indicator, as the original was not accessible</li>
                  <br/>
                  <li>Added a drop-shadow to the nav to give better contrast from the rest of the page</li>
                  <br/>
                  <li>Reduced the nav's height a second time</li>
               </ul>

               <h5><b>Footers:</b></h5>
               <p>When I first presented designs for the footer, I gave a lower lift option, in case the dev thought the ideal version wouldn't fit within the scope. But, luckily they were able to implement the ideal version with no issues!</p>
               <div className='img-wrap'>
                  <p className='img'>mobile &amp; desktop footers low and high lift</p>
                  <small>Initial footer mocks</small>
               </div>
               <p>Similar to the mobile menu, the footers didn't undergo many changes during the design process. I did make some alterations later, once we started running A/B tests and had data to work with.</p>
               
               <h4>Organization</h4>
               <h6>I proposed a new organization for the footers and mobile menu that would be more logical and avoid any sections being unnecessarily long or vague.</h6>
               <h5>Footers</h5>
               <p>I coordinated with our marketing team and SEO specialist to remove 12 links from the footer. This allowed me to remove the "Featured Products" section and rename "Quick Links" to "Helpful Links" after moving some of these miscellaneous links to other sections. I also renamed "DIY Ideas" to "DIY, Blog, &amp; More" as a part of the push to make Blog more prominent.</p>
               <div className='img-wrap'>
                  <p className='img'>list of past and present footer links</p>
               </div>
               <h5>Mobile Menu</h5>
               <p>Similarly to the footer, I was able to remove multiple links from the mobile menu. Here, I removed the lengthy "Quick Links" section entirely after dispersing remaining links to appropriate sections, like the new "Gifting" section. I also changed "DIY Ideas" to "DIY &amp; Blog," giving the Blog much more prominence than before.</p>
               <div className='img-wrap'>
                  <p className='img'>list of past and present menu links</p>
               </div>

               <h4>A/B Tests</h4>
               <h5><b>Mobile Menu:</b> Variations 1 &amp; 2</h5>
               <p>About a month after starting our mobile menu A/B test, my PM and I were seeing a mix of positive and negative numbers, but were specifically concerned about a 3.4% drop in visits to the subscription purchase widget (KiwiCo's main source of revenue).</p>
               <p>I proposed testing a variation with gray Subscription and Store accordion links instead of blue, to measure if the blue links were actually blending in with the nav.</p>
               <div className='img-wrap'>
                  <p className='img'>variations 1 and 2</p>
               </div>
               <p>However, the gray links variation was marginally less successful, seeing a slight drop in purchase widget visits, as well as up to 1% drops in completed order, overall revenue, and Store visits.</p>

               <h5><b>Mobile Menu:</b> Variations 3 &amp; 4</h5>
               <p>For our third variation, our CPO suggested adding the "Home" link back to the menu, to test whether the loss in purchase widget views was due to users getting lost somewhere on the site.</p>
               <p>I also proposed testing a fourth variation alongside this, which would include each subscription's tagline to make choosing a sub to explore less overwhelming.</p>
               <div className='img-wrap'>
                  <p className='img'>variations 3 and 4</p>
               </div>
               <p>While neither variation was actually able to produce an increase in purchase widget views from the original, variation 4 (subscription taglines) saw a 2% increase from variation 1.</p>
               <p>Compared to variation 3, variation 4 also saw a 2% higher increase in overall revenue and completed orders — also the highest among all variations — at +5.2% and +5.8%, respectively.</p>
               <br/><br/><b>Winning Variation</b>
               <h6>After running A/B tests for four months, it was decided to roll out variation 4 of the mobile menu (added subscription taglines).</h6>
               <p>Unfortunately, I wasn't a part of this final decision, and I now know to make sure I have a more active roll in the future. Both my PM and I would've liked to test another variation to attempt an increase in purchase widget views, but there was a sentiment that we had too many A/B tests running on the site and needed to wrap some up.</p>
               <p>However, I hope to run another test at a better time, possibly adding a CTA into the Subscription accordion.</p>


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

