import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { faWindowRestore, faWindowMinimize, faWindowClose, faHdd} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ComputerHead, IconsBar, ExitBar, Footer, Button, CardsCont } from '../styles'


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
        
          <div className = " email-flip-cont">
          <div className = "email-flipper">
          <div className = "email-front"> Email </div>
                <div className = "email-back">
          <a href="https://twitter.com/jTCode2408"> Jasmine.Terry91@gmail.com
            </a>
         
            </div>
            </div>{/*flipper cont div end */}
            </div> {/*email flip cont div end */}


            
            <div className = "linked-flip-cont">
              <div className="linked-flipper">
                <div className="linked-front">LinkedIn Front</div>
                <div className="linked-back">
            <a
              href="https://www.linkedin.com/in/jasmineterry92"
              title="LinkedIn"> LinkedIn </a>
</div>

</div>{/*flipper cont div end */}


          </div>{/*linkedin flip cont div end */}
          <div className="empty-card"></div>
        <div className = "gh-flip-cont">
          <div className = "gh-flipper">
            <div className="gh-front">Github Front </div>
<div className="gh-back">
          <a href="https://Github.com/jTCode2408"> Github
            </a>
            </div>

            </div>{/*flipper cont div end */}
            </div>{/*gh flip cont div end */}

            <div className="empty-card"></div>

            <div className="twitter-flip-cont">
              <div className="twitter-flipper">
<div className="twitter-front"> Twitter Front</div>
<div className="twitter-back">
            <a href="https://twitter.com/jTCode2408"> Twitter
            </a>

            </div>
            </div>{/* flipper cont div end */}
            </div>{/*twitter flip cont div end */}
        <div className="empty-card"></div>
           
        <div className="empty-card"></div>

      </CardsCont>{/*contact cont div end */}

      <Footer>  <Button> Start </Button>
 </Footer>
        </div>
    )
}



export default Contact