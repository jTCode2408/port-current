//helper vars
import React from 'react'

export const SSInfo = <ul>
<li>Story Squad is a web gaming application to encourage reading, and writing for children grades 3-6.  
</li>   
<li>Collaborated with other Lambda students as part of a team of 5 full stack developers, working with a stakeholder over 7 weeks on ongoing project.
</li>
 <li>Contributed to creating dashboard and match-up pages </li>
 <li> Solely responsible for front-end code cleanup by extracting repeated code from multiple files to create reusable components, as well as maintaining clear documentation.</li>
 </ul>


export const GOLInfo = <ul>
    <li> Adaptation of John Conway's 'Game Of Life'. </li>
    <li> Built using ReactJS, CSS, and Styled Components. </li>
     <li> Solely responsible for adopting rules based on Conway's original Game Of Life, application styling, and deployment.
     </li>
    <li> Utilized React hooks and Immer dependency for state changes of cells, CSS to implement grid feature, and Styled Components for main styling. 
    </li>
    </ul>

export const SpotifyInfo = <ul> 
    <li> Symphinity is an application to mimic a Spotify song suggester feature that allows users to visualize song features, add songs to their favorites and receive a list of recommendations.
    </li>
    <li> Contributed to cross functional team of front-end, back-end, data science, and machine learning students. 
     </li>
     <li> Solely responsible for log-in, dashboard, recommened, and favorite songs list components by pulling data from an API created by my backend team member. 
    </li>
    <li> Styling contributions across front-end. </li>
</ul>

export const RefugeeInfo = <ul> 
    <li> Refugees Stories is a Web application to help bring awareness to the refugee crisis. </li>
    <li> Contributed to team of 5 cross-functional full-stack and data science students.</li>
     <li> Solely responsible for design and creation of fully responsive 'landing' and 'about the team' pages. </li>
</ul>

export const TodoInfo = <ul> 
    <li> A straight forward to-do application for web. </li>
    <li> Solely responsible for creation of Todo app functionality such as adding and clearing tasks and styling. </li>
    <li> Implementation of Redux used for state handling</li>

</ul>

export const AdvInfo = <ul> 
    <li> An in terminal 'Adventure Game' that allows users to enter commands and travel to various rooms and collect items. </li>
    <li>  Built with Python. </li>
    <li>  Solely responsible for implementation of game by creating mini programs using classes, lists, and algorithms.</li>

</ul>

export const NewsInfo = <ul>
    <li> Sample newspaper website </li>
    <li> Built with JS/LESS. </li>
    <li> Solely responsible for DOM manipulation for articles components, click events, and styling with LESS.
     </li>
</ul> 

export const GHCardsInfo= <ul> 
    <li> Github Cards is a single page application to display current Github followers.  </li>
    <li> Built using ReactJS and styled with CSS.</li> 
    <li> Solely responsible for implementation by calling and displaying data from github API.</li>

</ul>




////////MEDIA QUERY SIZES//////
//Breakpoint mobile 470px
//Kindle-800px
//xs max-414
//x/xs-375
//ipad pro-834
//ipad-768
//galaxy S-360

const sizes = {
galaxy: '360px',
xs:'376px',
small:'390px',
xsMax: '420px',
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
mobile: `(max-width: ${sizes.mobile})`,
medium:`(max-width: ${sizes.medium})`,
ipad: `(max-width: ${sizes.ipad})`,
ipadPro: `(max-width: ${sizes.ipadPro})`,
kindle:`(max-width: ${sizes.kindle})`,
mainBreak:`(max-width:${sizes.mainBreak} )`
}


















