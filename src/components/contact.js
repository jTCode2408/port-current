import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { faWindowRestore, faWindowMinimize, faWindowClose, faHdd} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ComputerHead, IconsBar, ExitBar, StyledSocial, SocialLinks, SocialList, Footer, Button } from '../styles'


const Contact =()=>{


    return(
        <div className='contact'>
        <ComputerHead>
          <Link to= '/'><h2> <FontAwesomeIcon icon={faHdd}/> My Computer </h2> </Link>
        
            </ComputerHead>
            <div className = "exit-bar">
        <ExitBar> <span> Contact </span>
        <IconsBar>
          <FontAwesomeIcon icon={faWindowRestore} />
            <FontAwesomeIcon icon={faWindowMinimize} />
            <FontAwesomeIcon icon={faWindowClose} />
            </IconsBar>
        
         </ExitBar>
        </div>
        
            <h2>Get In Touch!</h2>
            <StyledSocial>
        <SocialList>
          <p>
            <SocialLinks
              href="https://www.linkedin.com/in/jasmineterry92"
              title="LinkedIn"> LinkedIn </SocialLinks>
          </p>
          <p>
            <SocialLinks href="mailto:jasmine.terry91@gmail.com" title="email"> Email </SocialLinks>
          </p>
        </SocialList>
      </StyledSocial> {/*socials div end */}


      <Footer>  <Button> Start </Button>
 </Footer>
        </div>
    )
}


// project idd: port-contact-282421
// API key: AIzaSyCMMyykPWQH9t13LWbdeeUkB3MJ7lyFGVQ


export default Contact