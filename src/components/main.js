//main computer screen page containing pages routes, and background display for desktop screen
import React from "react";
import { Route, Switch, Link } from 'react-router-dom';
import styled from 'styled-components';
import Pieces from './pieces';
import Resume from './resume';
import Skills from './skills';
import { StyledMain, StyledSocial, SocialLinks, SocialList, Computer, ComputerHead, IconsBar, ExitBar, IconsDiv } from '../styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowRestore, faWindowMinimize, faWindowClose, faHdd, faNetworkWired, faArchive, faEnvelopeOpenText, faToolbox } from '@fortawesome/free-solid-svg-icons';

const Main=()=> {
  return (
    <StyledMain>
      <StyledSocial>
        <SocialList>
          <p>
            <SocialLinks
              href="https://www.linkedin.com/in/jasmineterry92"
              title="LinkedIn"> LinkedIn </SocialLinks>
          </p>
          <p>
            <SocialLinks href="https://Github.com/jTCode2408"> Github
            </SocialLinks>
          </p>
          <p>
            <SocialLinks href="mailto:jasmine.terry91@gmail.com" title="email"> Email </SocialLinks>
          </p>
        </SocialList>
      </StyledSocial> {/*socials div end */}

      <Computer>
        <ComputerHead>
          
        <Link to= '/'><h2> <FontAwesomeIcon icon={faHdd}/> My Computer </h2> </Link>
    

        <IconsBar>
        <FontAwesomeIcon icon={faWindowRestore} />
          <FontAwesomeIcon icon={faWindowMinimize} />
          <FontAwesomeIcon icon={faWindowClose} />
          </IconsBar>

          </ComputerHead>

        <div className = "exit-bar">
        <ExitBar> <span> File  Edit  View  Help </span> </ExitBar>
        </div>
        <IconsDiv>
          <div className="browse-div">
        {/* <Link to='/'></Link>  */}
            <Link to ='/projects'><FontAwesomeIcon icon={faNetworkWired} /> 
            <h4> Browser</h4> </Link>
            
      </div> {/*browser div end */}
      <div className="specs-div">
          <Link to = '/specs'>  <FontAwesomeIcon icon={faToolbox} /> 
            <h4>Sepcs</h4> </Link>
            
      </div> {/*skills div end */}
      <div className="history-div">
            <Link to='/history'>
            <FontAwesomeIcon icon={faArchive} />
            <h4>History</h4> </Link>
        </div> {/*resume div end */}
      <div className="contact-div">
            <Link to='/contact'> <FontAwesomeIcon icon={faEnvelopeOpenText} /> 
            <h4>Contact</h4> </Link>
          </div> {/*contact div end */}
            </IconsDiv> {/*icons div end */}
         <div className='about'>
             <p>Full stack developer specializing in creating user friendly beautifully crafted websites.
        After high school, I attended SAE Insititute in NYC for Audio Engineering. Soon after interning in a NYC studio, my thirst for the technical side of things increased and I began to 'Google-up' on the world of code. After teaching myself SQL online through "W3Schools", I then began to research bootcamp's to fully submerged myself into this journey to change not only mine, but the lives of others. Since making that wonderful decision I have learned how many ways I can positively affect the world as a developer. My drive to learn has never been higher and I look forward to my continued journey of knowledge.</p>
         </div>
        
          </Computer> { /*computer div end */}
</StyledMain>
    
  )};


export default Main;