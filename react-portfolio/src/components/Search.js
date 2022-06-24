import React from 'react'


export default function Search(){
   return(
      <div className='content-wrap'>
         <h1>Sitewide Search</h1>
         <h2>@KiwiCo</h2>
         <div className='hero-wrap'>
            <img src={'/assets/search/hero1.jpeg'} className='search-hero'></img>
            <img src={'/assets/search/hero2.jpeg'} className='search-hero'></img>
         </div>

         <h3>TLDR;</h3>
         <p>I designed the Sitewide Search feature for KiwiCo’s website, allowing users to search for subscription lines, individual products, DIY ideas, blog posts, help articles, and more. <br/><br/>The biggest challenge was providing enough — but not too much — information to clearly differentiate individual products from subscription lines in the results.<br/><br/>Today, an average of 668 people use Sitewide Search daily, compared to the combined 279 who use the search features within Store, Blog, and DIYs.</p>

         <h3>Case Study;</h3>
         <h4>Context</h4>
         <p>KiwiCo is an e-commerce site with nine subscription lines and 160+ products spanning ages newborn to 100 and countless interests. Not to mention the nearly 1,600 DIY and Blog articles.<br/><br/>Prior to this project, users could search the Store (individually sold products), DIY ideas, and Blog posts each individually. But, considering that subscriptions are actually KiwiCo’s primary revenue source and that products and content are often marketed together, our team wanted to create a feature for searching everything KiwiCo has to offer at once — a Sitewide Search feature.<br/><br/>Not only would Sitewide Search be a better (and more familiar) browsing experience, it would also help the business by featuring subscriptions more prominently. Making subscription lines searchable could be a huge opportunity, considering how likely users are to interact with Search.*</p>

         <h4>Research &amp; Benchmarking</h4>
         <p>Considering the importance of familiarity and the relative complexity of KiwiCo’s searchable content** I started with extensive benchmarking. I reviewed search features on over 20 websites and apps and noted consistencies and aspects that would or wouldn’t work well for KiwiCo’s search.</p>
         <p>I also read numerous articles from the Baymard Institute to determine best practices for search features as well as how prominent ours should be.</p>
         <h5>Based on my findings, I made these initial decisions:</h5>

         <h4>User Testing</h4>
         <h5>Round 1</h5>
         <h6>My main goals for Round 1 were determining whether subscriptions and Store products were presented in an understandable way, and testing the hypotheses I made during research.</h6>
         <p>A whole tab for subscriptions seemed like overkill when it would only ever have a max of nine results. So, for my tests I combined subscriptions and Store products into a “Products” tab, which also meant combining them into one section in the “All” tab.</p>
         <p>Feedback from the tests made it clear that this solution was far too confusing and led to hesitancy around viewing more products, since participants were unsure exactly what they’d be viewing.</p>

         <h5>Round 2</h5>
         <h6>These rounds I primarily gathered feedback on the ideal amount of information and options to provide throughout the flow. </h6>
         <p>In particular, I hoped to provide clarity around the relevance of subscription results to the search term by listing which boxes in each subscription line matched the search term. (e.g. if “robots” is the search term, the Tinker Crate project, “Walking Robot,” is listed under Tinker Crate).</p>
         <p>However, this extra info had the opposite effect, raising more questions and hesitancy and distracting participants from other results. Instead, they voiced that price, images, and a quick view option would be much more helpful to their understanding of each subscription.<br/><br/>These rounds also confirmed that giving subscriptions their own category but only displaying it in the “All” tab would give them sufficient prominence, without dedicating a whole tab to them.</p>

         <h4>Final Designs</h4>
         <h5>Mobile</h5>

         <h4>Measuring Success</h4>
         <p>It’s tough to quantify the success of this feature for a couple reasons:</p>
         <ul>
            <li><p>Users who enter a search are more likely to know what they’re looking for, so comparing conversion with those who don’t enter a search would be misleading</p></li>
            <li><p>In general, conversion through search isn’t very meaningful, since we show results for multiple categories that wouldn’t lead to a purchase (Blog, DIY, Help, and More)</p></li>
         </ul>
         <p>That being said, one thing we know for sure is that <span>the number of people searching the site has more than doubled</span> with the addition of Sitewide Search. The individual searches in Store, Blog, and DIYs account for a combined average of 279 searches per day, compared to Sitewide Search’s average of 668.</p>

         <h4>Reflection</h4>
         <h5>Learnings</h5>
         <p>At this small company, designers present their large projects multiple times to stakeholders and various execs — including the CEO — and discuss feedback with them. Since this was my first solo large project here, creating the presentations and discussing my work in a digestible, but thorough manner was a huge learning experience. Not to mention learning to field questions and feedback with solid reasoning based in my research and testing.</p>

         <h5>Challenges</h5>
         <p>I also got great experience writing scripts and preparing prototypes for user tests. These tests came with their fair share of frustration and troubleshooting as I learned how to communicate to participants things as simple as what screen they should be on (without being able to talk to them in real time).<br/><br/>There were also some technical limitations in the search functionality, especially around searching for subscriptions. I had hoped to show results if a user searched for a box in a given subscription, even if that particular box wasn’t featured on the site. However, the PM and devs I worked with determined that this kind of mapping would be a lot of manual work, so we had to cut it out of the scope for the time being. (Maybe one day!)</p>
      </div>
   )
}