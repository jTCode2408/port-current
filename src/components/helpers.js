//helper vars
import React from 'react'

export const SSInfo = <ul>
<li> Story Squad is a web gaming application to encourage reading and writing for children grades 3-6.  
</li>   
<li> Collaborated as part of a team of 5 full stack developers, working with a stakeholder over 7 weeks on ongoing project.
</li>
 <li> Contributed to creating dashboard and match-up pages. </li>
 <li> Solely responsible for front-end code cleanup by extracting repeated code from multiple files to create reusable components, as well as maintaining clear documentation.</li>
 </ul>


export const GOLInfo = <ul>
    <li> Adaptation of John Conway's 'Game Of Life'. </li>
     <li> Solely responsible for adopting rules based on Conway's original Game Of Life, application styling, and deployment.
     </li>
    <li> Utilized React hooks for state changes of cells, implementing grid feature, and all styling. 
    </li>
    </ul>

export const SpotifyInfo = <ul> 
    <li> Symphinity allows users to visualize song features, add songs to favorites list and receive a list of recommendations. </li>
    <li> Contributed to cross functional team of front-end, back-end, data science, and machine learning engineers. 
     </li>
     <li> Solely responsible for user registration, dashboard, and recommeneded songs list components by pulling data from an API created by back end team member. 
    </li>
    <li> Additional styling contributions across front-end. </li>
</ul>

export const RefugeeInfo = <ul> 
    <li> Refugees Stories is a web application to help bring awareness to the ongoing refugee crisis. </li>
    <li> Contributed to team of 4 cross-functional full-stack and data science developers.</li>
     <li> Solely responsible for design and creation of fully responsive landing and about the team web pages. </li>
</ul>

export const NNLInfo = <ul>
<li> Numbers Never Lie is a web application for viewing NBA players' stats. </li>
<li> Users can search for individual, or multiple players' stats and view or compare them in various displays.</li>
<li> Soley responsible for implementation, pulling data from API, and overall page flow.</li>
</ul>

export const TodoInfo = <ul> 
    <li> A straight forward to-do application for web. </li>
    <li> Solely responsible for creation of Todo app functionality such as adding and clearing tasks and styling. </li>
    <li> Implementation of Redux used for state handling. </li>

</ul>
//NOT USING TODO RN (9/30/20)

export const AdvInfo = <ul> 
    <li> An in terminal 'adventure game' that allows users to enter commands and travel to various rooms and collect items. </li>
    <li>  Built exclusively with Python. </li>
    <li>  Solely responsible for implementation of game by creating mini programs using classes, lists, and algorithms.</li>

</ul>

export const NewsInfo = <ul>
    <li> Sample newspaper website. </li>
    <li> Solely responsible for DOM manipulation for articles components, click events, and styling with LESS.
     </li>
</ul> 

export const PortInfo = <ul> 
    <li> My portfolio built from scratch.  </li>
    <li> Solely responsible for creation of all pages, planning, functionality, styling, and deployment. </li>

</ul>

export const QuizInfo= <ul>
<li> 'Guess the quotes' quiz for The Office fans.</li>
<li> Solely responsible for implementation of quiz, creating quotes, styling, and deployment </li>

</ul>

export const audioPlayerInfo= <ul>
<li> Throwback audio player to play songs and visualization.</li>
<li> Responsible for implementation of music player, styling, and deployment </li>

</ul>

///////History helpers///////
export const WorkInfo= <div>
    <h3>Work Experience: </h3>
    <p>I have experience working in many different fields such as retail, customer service, warehousing, and music. I enjoy work that is challenging, fast paced, and working both in teams or individually. Some of my most recent work experience is listed below. </p>
    <h5> Lambda School - Team Lead (Mar 2020-Present)</h5>
    <ul>
    <li>Mentored 8-10 students in problem-solving, effective learning, and agile development production environments </li>
    <li>Led 1:1 code reviews, team stand-ups, and provided daily technical support via Slack and Zoom</li>
    <li>Provided supplemental education and resources on various topics related to web development </li>
    </ul>

    <h5> LifeStation Medical Alert - Product Specialist (Jan 2017-Sep 2019)</h5>
    <ul>
    <li>Updated software, troubleshoot, restored, and tested medical alert devices </li>
    <li>Innovated new regulations and processes for product specialist position</li>
    <li>Solely responsible for the updating and troubleshooting of over 100 devices daily</li>
    <li>Assisted in other warehouse operations such as shipping, refurbishing, data entry, and processing returned devices into the company system</li>
    </ul>

    <h5> Target - Team Member (Feb 2014-May 2016)</h5>
    <ul>
    <li>Led instocks team and trained new team members on policies and procedures of the position</li>
    <li>Cross-trained and supported various teams such as instocks, backroom, and sales floor</li>
    <li>Provided exceptional customer service, displayed the ability to quickly solve problems, and work under pressure </li>
    </ul>
</div>

export const SchoolInfo = <div>
    <h3>Education History: </h3>
        <ul>
        <li> Lambda School (Oct 2019-Sep 2020): Full Stack Web Development and Computer Science </li>
          <li>SAE Institute (Jan 2011-Oct 2011): Audio Engineering </li>
          <li>Bayside High School (Sep 2006-June 2010)</li>
        </ul>

</div>

export const LifeInfo = <div>
          <h3> About Me: </h3>
         <p> Technology has always been a point of intrigue for me. After high school, I attended SAE Institute in NYC for Audio Engineering. Soon after interning in a NYC studio, my thirst for the technical side of things increased and I began self-learning, then attended a coding bootcamp to learn Full-Stack development techniques. </p>
        <p> When not fixing a bug in code (or creating one, I can be honest), I'm with my dog at the park or hiking, watching basketball or The Office, listening to music, or eating. </p>
</div>



////////MEDIA QUERY SIZES//////

const sizes = {
galaxy: '360px',
xs:'376px',
small:'390px',
xsMax: '420px',
midBreak: '458px',
mobile: '470px',
medium:'520px',
ipadPro: '834px',
kindle: '800px',
ipad:'768px',
mainBreak:`1000px`

}



export const breakpoints ={
galaxy: `(max-width: ${sizes.galaxy})`,
xs: `(max-width: ${sizes.xs})`,
small: `(max-width: ${sizes.small})`,
xsMax: `(max-width: ${sizes.xsMax})`,
midBreak: `(max-width: ${sizes.midBreak})`,
mobile: `(max-width: ${sizes.mobile})`,
medium:`(max-width: ${sizes.medium})`,
ipad: `(max-width: ${sizes.ipad})`,
ipadPro: `(max-width: ${sizes.ipadPro})`,
kindle:`(max-width: ${sizes.kindle})`,
mainBreak:`(max-width:${sizes.mainBreak} )`
}


















