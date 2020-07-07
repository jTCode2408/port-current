//main computer screen page containing pages routes, and background display for desktop screen
import React, {useState} from "react";
import { Link } from 'react-router-dom';
import { StyledMain, StyledSocial, SocialLinks, SocialList, Computer, ComputerHead, IconsBar, ExitBar,Footer,  IconsDiv, About, AboutInfo, AboutHead, BrowseIcon, SkillsIcon, ResumeIcon, ContactIcon, Me, Start, Button, Time } from '../styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowRestore, faWindowMinimize, faWindowClose, faHdd, faArchive, faFolder, faEnvelopeOpenText, faToolbox } from '@fortawesome/free-solid-svg-icons';
import meCard from '../images/meCard-other.jpg';
import Moment from 'react-moment';
import 'moment-timezone'

const Main=()=> {


  return (
    <StyledMain>
       

      <Computer>
        <IconsDiv>
          <BrowseIcon>
            <Link to ='/projects'><FontAwesomeIcon icon={faFolder} size="2x" /> 
            <h4> Browser</h4> </Link>
            
      </BrowseIcon> {/*browser div end */}
      <SkillsIcon>
          <Link to = '/specs'>  <FontAwesomeIcon size="2x" icon={faToolbox} /> 
            <h4>Sepcs</h4> </Link>
            
      </SkillsIcon> {/*skills div end */}
      <ResumeIcon>
            <Link to='/history'>
            <FontAwesomeIcon size="2x"  icon={faArchive} />
            <h4> History</h4> </Link>
        </ResumeIcon> {/*resume div end */}
      <ContactIcon>
            <Link to='/contact'> <FontAwesomeIcon size="2x"  icon={faEnvelopeOpenText} /> 
            <h4> Contact</h4> </Link>
          </ContactIcon> {/*contact div end */}
            </IconsDiv> {/*icons div end */}
         <About>
           <AboutHead>
           <h3> Meet The Dev:</h3>
           <Me src={meCard} alt='jasmine terry'></Me>
           </AboutHead>
             <AboutInfo>
               <p>Full stack developer specializing in creating user friendly beautifully crafted websites.
        After high school, I attended SAE Insititute in NYC for Audio Engineering. Soon after interning in a NYC studio, my thirst for the technical side of things increased and I began to 'Google-up' on the world of code. After teaching myself SQL online through "W3Schools", I then began to research bootcamp's to fully submerged myself into this journey to change not only mine, but the lives of others. Since making that wonderful decision I have learned how many ways I can positively affect the world as a developer. My drive to learn has never been higher and I look forward to my continued journey of knowledge.</p>
        </AboutInfo>
         </About>
        
        
          </Computer> { /*computer div end */}

        <Footer>  <Button> Start </Button>  {/*TODO: ADD HAMBURGER MENU FOR OTHER PAGES */}
 
         </Footer>
        
</StyledMain>
    
  )};


export default Main;