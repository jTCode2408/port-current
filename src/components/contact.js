import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { faWindowRestore, faWindowMinimize, faWindowClose, faHdd} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ComputerHead, IconsBar, ExitBar, Footer, Button, CardsCont,CardHolder } from '../styles'


const Contact =()=>{


    return(
        <div className='contact-cont'>
        <ComputerHead>
          <Link to= '/'><h2> <FontAwesomeIcon icon={faHdd}/> My Computer </h2> </Link>
        
            </ComputerHead>
            <div className = "exit-bar">
        <ExitBar> <span> Contact </span>
        <IconsBar>
          
            <FontAwesomeIcon icon={faWindowMinimize} />
            <FontAwesomeIcon icon={faWindowRestore} />
            <FontAwesomeIcon icon={faWindowClose} />
            </IconsBar>
        
         </ExitBar>
        </div>
        
            <h2>Get In Touch</h2>
            <p>
            Have an idea or a concept that really excites you? We can turn that idea into reality. Let's chat!
            </p>
            <a href="mailto:jasmine.terry91@gmail.com"> Contact Me </a>
            <CardsCont>
        <CardHolder>
          <div className = " email-flip-cont">
          <div className = "email-flipper">
         
          <div className = "email-front"> <div className="email-front-text">Email</div>
          
           </div>
          
                <div className = "email-back">
          <a href="https://twitter.com/jTCode2408"> Jasmine.Terry91@gmail.com
            </a>
         
            </div>
            </div>{/*flipper cont div end */}
            </div> {/*email flip cont div end */}
        
            <div className="empty-card"></div>
            

            
            <div className = "linked-flip-cont">
              <div className="linked-flipper">
                <div className="linked-front">
                <div className="linked-front-text"> LinkedIn</div>
                 
                 </div>
                <div className="linked-back">
            <a
              href="https://www.linkedin.com/in/jasmineterry92"
              title="LinkedIn"> LinkedIn </a>
</div>

</div>{/* linked flipper cont div end */}

          </div>{/*linkedin flip cont div end */}
          <div className="empty-card"></div>
          <div className="empty-card"></div>
         
        <div className = "gh-flip-cont">
          <div className = "gh-flipper">
            <div className="gh-front">
            <div className="gh-front-text"> Github </div>
            
            
            </div>
<div className="gh-back">
          <a href="https://Github.com/jTCode2408"> Github
            </a>
            </div>

            </div>{/*flipper cont div end */}
            </div>{/*gh flip cont div end */}
            <div className="empty-card"></div>
            

            <div className="twitter-flip-cont">
              
              <div className="twitter-flipper">
                
<div className="twitter-front"> 
<p className="twitter-front-text">Twitter</p>

</div>

<div className="twitter-back">

  

  <div className="twitter-back-text">
 
    <span class="top-rank">A</span>
    <span class="top-suit">&hearts;</span>
   
            <a class="mid-suit" href="https://twitter.com/jTCode2408">&hearts; TwitterICON HERE</a>
    
    <span class="bottom-suit">&hearts;</span>
    <span class="bottom-rank">A</span>
         
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