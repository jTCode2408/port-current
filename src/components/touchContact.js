import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { faWindowRestore, faWindowMinimize, faWindowClose, faHdd, faEnvelopeOpenText,} from '@fortawesome/free-solid-svg-icons';
import {faTwitter, faLinkedin, faGithub, faGit} from  '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ComputerHead, IconsBar, ExitBar, Footer, Button, CardsCont,CardHolder, ContactButton, ContactHead, ContactText, ContactTitle, ContactCont } from '../styles'
import Navigation from './nav';

const TouchContact =()=>{


    return(
        <>
    
        <ExitBar> <span> Contact </span>
        <IconsBar>
          
            <FontAwesomeIcon icon={faWindowMinimize} />
            <FontAwesomeIcon icon={faWindowRestore} />
            <FontAwesomeIcon icon={faWindowClose} />
            </IconsBar>
        
         </ExitBar>
        

       <ContactCont> 
        <ComputerHead>
          <Link to= '/'><h2> <FontAwesomeIcon icon={faHdd}/> Desktop </h2> </Link>
        
            </ComputerHead>
       

            <CardsCont>
            <ContactHead>
            
            <ContactText>
          
            Have an idea or a concept that really excites you? Let's chat!
            
           <ContactButton> <a href= "mailto:jasmine.terry91@gmail.com"> Contact Me </a></ContactButton>
           </ContactText>
           </ContactHead>

        <CardHolder>

          {/*EMAIL CARD START*/}
         
  
                <div className = "touch-email">
                   
  <div className="back-text">
 <div className = "back-top">
    <span class="top-rank">A</span>
    <span class="top-suit">&hearts;</span>
    </div>
          <a className="mid-suit" href="mailto:jasmine.terry91@gmail.com" > <FontAwesomeIcon icon={faEnvelopeOpenText} size="6x" color="red" />
            </a>
         

            <div className="back-bottom">
    <span class="bottom-suit">&hearts;</span>
    <span class="bottom-rank">A</span>
    </div>
</div>
            </div>
           
        
            <div className="empty-card"></div>
            
          {/*LINKED CARD START*/}
                 
                <div className="touch-linked">

                   
  <div className="back-text">
 <div className = "back-top">
    <span class="top-rank">A</span>
    <span class="top-suit">&hearts;</span>
    </div>
            <a
              href="https://www.linkedin.com/in/jasmineterry92"
              className = "mid-suit"> <FontAwesomeIcon icon={faLinkedin} size="6x" color="red" /> </a>


               <div className="back-bottom">
    <span class="bottom-suit">&hearts;</span>
    <span class="bottom-rank">A</span>
    </div>
</div>

</div>

{/*linkedin flip cont div end */}
          <div className="empty-card"></div>
         
          {/*GH CARD START */}
     
<div className="touch-gh">
   
<div className="back-text">
 <div className = "back-top">
    <span class="top-rank">A</span>
    <span class="top-suit">&hearts;</span>
    </div>

          <a className = "mid-suit" href="https://Github.com/jTCode2408"> <FontAwesomeIcon icon={faGithub} size="6x" color="red"/>
            </a>


            <div className="back-bottom">
    <span class="bottom-suit">&hearts;</span>
    <span class="bottom-rank">A</span>
    </div>


</div>

            </div>
{/*gh flip cont div end */}
            <div className="empty-card"></div>
            

            {/*TWITTER CARD START  */}



<div className="touch-twitter">

  
  <div className="back-text">
 <div className = "back-top">
    <span class="top-rank">A</span>
    <span class="top-suit">&hearts;</span>
    </div>
   
            <a class="mid-suit" href="https://twitter.com/jTCode2408"> <FontAwesomeIcon icon={faTwitter} size="6x" color="red" /> </a>
    
    <div className="back-bottom">
    <span class="bottom-suit">&hearts;</span>
    <span class="bottom-rank">A</span>
    </div>
            </div>
            </div>
            {/*twitter flip cont div end */}
 
          
        </CardHolder>
      </CardsCont>{/*contact cont div end */}
      </ContactCont>
      <Navigation/>
      
        </>
    )
}



export default TouchContact