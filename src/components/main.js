//main computer screen page containing pages routes, and background display for desktop screen
import React, {useState} from "react";
import { Link } from 'react-router-dom';
import { StyledMain, StyledSocial, SocialLinks, SocialList, Computer, ComputerHead, IconsBar, ExitBar,Footer,  IconsDiv, About, AboutInfo, AboutHead, BrowseIcon, SkillsIcon, ResumeIcon, ContactIcon, Me, Start, Button, Time } from '../styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowRestore, faWindowMinimize, faWindowClose, faHdd, faArchive, faFolder, faEnvelopeOpenText, faToolbox } from '@fortawesome/free-solid-svg-icons';
import meCardOther from '../images/meCard-other.jpg';


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
           <Me src={meCardOther} alt='jasmine terry'></Me>
           </AboutHead>
             <AboutInfo>
               <div className = 'background'>
               <h5>Background: </h5>
               <p> Technology has always been a point of intrigue for me. After high school, I attended SAE Insititute in NYC for Audio Engineering. Soon after interning in a NYC studio, my thirst for the technical side of things increased and I began self-learning via "W3Schools". I then decided to fully submerge myself into this journey to change not only mine, but the lives of others through code. </p>
               </div>
               <div className = 'services'>
        <h5>Services: </h5>
        <p>I specialize in crafting fully functional and user friendly websites. From static sites, to full stack applications, I can help to create the website of your dreams! </p>
        </div>
        </AboutInfo>
         </About>
        
        
          </Computer> { /*computer div end */}

        <Footer>  <Button> Start </Button>  {/*TODO: ADD HAMBURGER MENU FOR OTHER PAGES */}
 
         </Footer>
        
</StyledMain>
    
  )};


export default Main;