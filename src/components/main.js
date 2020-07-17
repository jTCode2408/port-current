//main computer screen page containing pages routes, and background display for desktop screen
import React, {useState} from "react";
import { Link } from 'react-router-dom';
import { StyledMain, StyledSocial, SocialLinks, SocialList, Computer, ComputerHead, IconsBar, ExitBar,Footer,  IconsDiv, About, AboutInfo, AboutHead, BrowseIcon, SkillsIcon, ResumeIcon, ContactIcon, Me, Start, Button, Time, Services, Background } from '../styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArchive, faFolder,  faToolbox, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import meCardOther from '../images/meCard-other.jpg';
import Navigation from './nav';

const Main=()=> {


  return (
    <StyledMain>
       

      <Computer>
        <IconsDiv>
          <BrowseIcon>
            <Link to ='/projects'><FontAwesomeIcon icon={faFolder} size="2x" /> 
            Documents </Link>
            

            
      </BrowseIcon> {/*browser div end */}
      <SkillsIcon>
          <Link to = '/specs'>  <FontAwesomeIcon size="2x" icon={faToolbox} /> 
            Sepcs  </Link>
            
      </SkillsIcon> {/*skills div end */}
      <ResumeIcon>
            <Link to='/history'>
            <FontAwesomeIcon size="2x"  icon={faArchive} />
            History </Link>
        </ResumeIcon> {/*resume div end */}
      <ContactIcon>
            <Link to='/contact'> <FontAwesomeIcon size="2x"  icon={faPaperPlane} /> 
           Contact </Link>
          </ContactIcon> {/*contact div end */}
            </IconsDiv> {/*icons div end */}
         <About>
           <AboutHead>
            
           <Me src={meCardOther} alt='jasmine terry'></Me>
           </AboutHead>
             <AboutInfo>
               <Background>
               <h3> About Me: </h3>
               <p> Technology has always been a point of intrigue for me. After high school, I attended SAE Insititute in NYC for Audio Engineering. Soon after interning in a NYC studio, my thirst for the technical side of things increased and I began self-learning and attended a coding bootcamp to learn Full-Stack development techniques. 
                 When not fixing (or creating, I can be honset) a bug in code; I'm with my dog at the park or hiking, watching basketball or The Office, listening to music, or eating. </p>
               </Background>
               <Services>
        <h3>Services: </h3>
        <p>I specialize in crafting fully functional and user friendly websites and technical writing for user and developer documentation. From static sites, frontend applications,  to full stack applications, I can help to create the website of your dreams.</p> 
          <p> With interests in technical writing, teaching, and overall service driven work, my goal is to be able to enrich as many lives as possible through technology. </p>
        </Services>
        </AboutInfo>
         </About>
        
          </Computer> { /*computer div end */}
    <Navigation/>


</StyledMain>
    
  )};


export default Main;