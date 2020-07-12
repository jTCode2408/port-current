import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { faWindowRestore, faWindowMinimize, faWindowClose, faHdd, faEnvelopeOpenText,} from '@fortawesome/free-solid-svg-icons';
import {faTwitter, faLinkedin, faGithub, faGit} from  '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ComputerHead, IconsBar, ExitBar, Footer, Button, CardsCont,CardHolder, ContactButton, ContactHead, ContactText, ContactTitle } from '../styles'


const Contact =()=>{


    return(
        <div className='contact-cont'>
    
        <ExitBar> <span> Contact </span>
        <IconsBar>
          
            <FontAwesomeIcon icon={faWindowMinimize} />
            <FontAwesomeIcon icon={faWindowRestore} />
            <FontAwesomeIcon icon={faWindowClose} />
            </IconsBar>
        
         </ExitBar>
        
        <ComputerHead>
          <Link to= '/'><h2> <FontAwesomeIcon icon={faHdd}/> My Computer </h2> </Link>
        
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
          <div className = " email-flip-cont">
          <div className = "email-flipper">
         
          <div className = "email-front"> 
          <div className="front-text">
<span className="email-front-text"> Email</span>
</div>
          
           </div>
          
                <div className = "email-back">
                   
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
              className = "mid-suit"> <FontAwesomeIcon icon={faLinkedin} size="6x" color="red" /> </a>


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

          <a className = "mid-suit" href="https://Github.com/jTCode2408"> <FontAwesomeIcon icon={faGithub} size="6x" color="red"/>
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
   
            <a class="mid-suit" href="https://twitter.com/jTCode2408"> <FontAwesomeIcon icon={faTwitter} size="6x" color="red" /> </a>
    
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

      <Footer>  <Button> Start </Button>
 </Footer>
        </div>
    )
}



export default Contact