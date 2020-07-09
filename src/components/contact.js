import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { faWindowRestore, faWindowMinimize, faWindowClose, faHdd} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ComputerHead, IconsBar, ExitBar, Footer, Button } from '../styles'


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
            <div className = "contact-cont">
              <div className = " flip-cont">
              <div className = "email-flipper">
                <div className = "email-front">
                  Email
                </div>
              <div className = "email-back">
          <a href="mailto:jasmine.terry91@gmail.com"> Contact Me </a>
          </div>
          </div>

          <div className = "email card">
          <a href="https://twitter.com/jTCode2408"> Jasmine.Terry91@gmail.com
            </a>
            </div>

            <div className = "linked-card">
            <a
              href="https://www.linkedin.com/in/jasmineterry92"
              title="LinkedIn"> LinkedIn </a>
          </div>
        <div className = "gh-card">
          <a href="https://Github.com/jTCode2408"> Github
            </a>
            </div>

            <div className="twitter-card">
            <a href="https://twitter.com/jTCode2408"> Twitter
            </a>
            </div>
        
            </div>{/*cards cont div end */}
    
      </div> {/*contact cont div end */}


      <Footer>  <Button> Start </Button>
 </Footer>
        </div>
    )
}



export default Contact