import React from 'react';
import { Link } from 'react-router-dom';
import { faWindowRestore, faWindowMinimize, faWindowClose, faHdd, faEnvelopeOpenText,} from '@fortawesome/free-solid-svg-icons';
import {faTwitter, faLinkedin, faGithub} from  '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ComputerHead, IconsBar, ExitBar, CardsCont,CardHolder, ContactButton, ContactHead, ContactText, ContactCont } from '../styles'
import Navigation from './nav';

const Contact =()=>{

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
          <h2> CONTACT </h2>  
            </ComputerHead>
       
            <CardsCont>
            <ContactHead>
            <ContactText>
          
            Have an idea or a concept that really excites you? Let's chat!
            {/* email encrypted for spam block help */}
           <ContactButton> <a href= "mailto: &#106;&#97;&#115;&#109;&#105;&#110;&#101;&#46;&#116;&#101;&#114;&#114;&#121;&#57;&#49;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;"> Contact Me </a></ContactButton>
           </ContactText>
           </ContactHead>
          

        <CardHolder>

          {/*EMAIL CARD START*/}
          <div className = " email-flip-cont">
          <div className = "email-flipper">
         
          <div className = "email-front"> 
          <div className="front-text">
<div className="email-front-text"> Email</div>
</div>
          
           </div>
          
                <div className = "email-back">
                   
  <div className="back-text">
 <div className = "back-top">
    <span class="top-rank">A</span>
    <span class="top-suit">&hearts;</span>
    </div>
          <a className="mid-suit" href="mailto: &#106;&#97;&#115;&#109;&#105;&#110;&#101;&#46;&#116;&#101;&#114;&#114;&#121;&#57;&#49;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;" title="email" > <FontAwesomeIcon icon={faEnvelopeOpenText} size="6x" color="red" />
            </a>
         

            <div className="back-bottom">
    <span class="bottom-suit">&hearts;</span>
    <span class="bottom-rank">A</span>
    </div>
</div>
            </div>
            </div>{/*flipper cont div end */}
            </div> {/*email flip cont div end */}
        
            <div className="empty-card"></div>
            
          {/*LINKED CARD START*/}
            
            <div className = "linked-flip-cont">
              <div className="linked-flipper">
                <div className="linked-front">
                <div className="front-text">
<span className="linked-front-text"> LinkedIn</span>
</div>
                 
                 </div>
                <div className="linked-back">

                   
  <div className="back-text">
 <div className = "back-top">
    <span class="top-rank">A</span>
    <span class="top-suit">&hearts;</span>
    </div>
            <a
              href="https://www.linkedin.com/in/jasmineterry92"
              className = "mid-suit" title="linkedin"> <FontAwesomeIcon icon={faLinkedin} size="6x" color="red" /> </a>


               <div className="back-bottom">
    <span class="bottom-suit">&hearts;</span>
    <span class="bottom-rank">A</span>
    </div>
</div>

</div>

</div>{/* linked flipper cont div end */}

          </div>{/*linkedin flip cont div end */}
          <div className="empty-card"></div>
          <div className="empty-card"></div>
         
          {/*GH CARD START */}
        <div className = "gh-flip-cont">
          <div className = "gh-flipper">
            <div className="gh-front">
            <div className="front-text">
<span className="gh-front-text"> Github</span>
</div>
            
            
            </div>
<div className="gh-back">

   
<div className="back-text">
 <div className = "back-top">
    <span class="top-rank">A</span>
    <span class="top-suit">&hearts;</span>
    </div>

          <a className = "mid-suit" href="https://Github.com/jTCode2408" title="github"> <FontAwesomeIcon icon={faGithub} size="6x" color="red"/>
            </a>


            <div className="back-bottom">
    <span class="bottom-suit">&hearts;</span>
    <span class="bottom-rank">A</span>
    </div>
</div>

            </div>
            </div>{/*flipper cont div end */}
            </div>{/*gh flip cont div end */}
            <div className="empty-card"></div>
            
            {/*TWITTER CARD START  */}
            <div className="twitter-flip-cont">
              
              <div className="twitter-flipper">
                
<div className="twitter-front"> 

<div className="front-text">
<span className="twitter-front-text"> Twitter</span>
</div>
</div>

<div className="twitter-back">

  
  <div className="back-text">
 <div className = "back-top">
    <span class="top-rank">A</span>
    <span class="top-suit">&hearts;</span>
    </div>
   
            <a class="mid-suit" href="https://twitter.com/jTCode2408" title="twitter"> <FontAwesomeIcon icon={faTwitter} size="6x" color="red" /> </a>
    
    <div className="back-bottom">
    <span class="bottom-suit">&hearts;</span>
    <span class="bottom-rank">A</span>
    </div>
            </div>
            </div>
            </div>{/* flipper cont div end */}
            </div>{/*twitter flip cont div end */}
 
          
        </CardHolder>
      </CardsCont>{/*contact cont div end */}
      </ContactCont>
      <Navigation/>
      
        </>
    )
}



export default Contact