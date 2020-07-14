//main computer screen page containing pages routes, and background display for desktop screen
import React, {useState} from "react";
import { Link } from 'react-router-dom';
import { StyledMain, StyledSocial, SocialLinks, SocialList, Computer, ComputerHead, IconsBar, ExitBar,Footer,  IconsDiv, About, AboutInfo, AboutHead, BrowseIcon, SkillsIcon, ResumeIcon, ContactIcon, Me, Start, Button, Time, Services, Background } from '../styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowRestore, faWindowMinimize, faWindowClose, faHdd, faArchive, faFolder,  faToolbox, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
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
            Sepcs </Link>
            
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
           <h3> Welcome! </h3>
           <Me src={meCardOther} alt='jasmine terry'></Me>
           </AboutHead>
             <AboutInfo>
               <Background>
               <h5> About Me: </h5>
               <p> Technology has always been a point of intrigue for me. After high school, I attended SAE Insititute in NYC for Audio Engineering. Soon after interning in a NYC studio, my thirst for the technical side of things increased and I began self-learning and attending a coding bootcamp. With interests in technical writing, teaching, and overall service driven work, my goal is to be able to enrich as many lives as possible through technology. </p>
               </Background>
               <Services>
        <h5>Services: </h5>
        <p>I specialize in crafting fully functional and user friendly websites. From static sites, frontend applications,  to full stack applications, I can help to create the website of your dreams! </p>
        </Services>
        </AboutInfo>
         </About>
        
        
          </Computer> { /*computer div end */}
    <Navigation/>


   {/*
        <Footer>  <Button> Start </Button>  {/*TODO: ADD HAMBURGER MENU FOR OTHER PAGES */}
 {/*}
         </Footer> */}
        
</StyledMain>
    
  )};


export default Main;