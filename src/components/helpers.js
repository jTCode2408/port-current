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
    <li> Utilized React hooks and Immer dependency for state changes of cells, CSS to implement grid feature, and Styled Components for main styling. 
    </li>
    </ul>

export const SpotifyInfo = <ul> 
    <li> Symphinity is an application to mimic a Spotify song suggester feature.
    </li>
    <li> Allows users to visualize song features, add songs to favorites list and receive a list of recommendations, based on their favorites. </li>
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

export const TodoInfo = <ul> 
    <li> A straight forward to-do application for web. </li>
    <li> Solely responsible for creation of Todo app functionality such as adding and clearing tasks and styling. </li>
    <li> Implementation of Redux used for state handling. </li>

</ul>

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

export const GHCardsInfo= <ul> 
    <li> Github Cards is a single page application to display current Github followers.  </li>
    <li> Solely responsible for implementation by calling and displaying data from Github's API.</li>

</ul>




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


















