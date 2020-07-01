//main computer screen page containing pages routes, and background display for desktop screen
import React from "react";
//import { Route, Switch, Link } from 'react-router-dom';
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
          <a to = '/' component = {Main}>
        <h2> <FontAwesomeIcon icon={faHdd}/> My Computer </h2> </a>
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
            <a to='/browser' component = {Pieces}> 
            <FontAwesomeIcon icon={faNetworkWired} /> </a>
            <h4>Browser</h4>
      </div> {/*browser div end */}
      <div className="specs-div">
            <a href='/specs' component = {Skills}>
            <FontAwesomeIcon icon={faToolbox} /> </a>
            <h4>Sepcs</h4>
      </div> {/*skills div end */}
      <div className="history-div">
            <a to='/history' component = {Resume}>
            <FontAwesomeIcon icon={faArchive} /> </a>
            <h4>History</h4>
        </div> {/*resume div end */}
      <div className="contact-div">
            <a href='contact' component = {''}> <FontAwesomeIcon icon={faEnvelopeOpenText} /> </a>
            <h4>Contact</h4>
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