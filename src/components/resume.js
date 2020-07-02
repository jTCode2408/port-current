//resume//history page
import React from 'react';
import {Route, Link} from 'react-router-dom';
import Main from './main';
import { faWindowRestore, faWindowMinimize, faWindowClose, faHdd, faNetworkWired, faArchive, faEnvelopeOpenText, faToolbox } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StyledMain, StyledSocial, SocialLinks, SocialList, Computer, ComputerHead, IconsBar, ExitBar, IconsDiv } from '../styles'
const Resume = () => {
    return (
        <div>
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
        
            
            <h2>Resume</h2>
            <iframe src="https://resume.creddle.io/embed/h5u3cm2twor"
  width="850" height="1100" seamless></iframe>
        </div>
    )
}

export default Resume;
