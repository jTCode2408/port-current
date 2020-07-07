//resume//history page
import React from 'react';
import {Route, Link} from 'react-router-dom';
import Main from './main';
import { faWindowRestore, faWindowMinimize, faWindowClose, faHdd, faNetworkWired, faArchive, faEnvelopeOpenText, faToolbox } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {ResumeDiv, Computer, ComputerHead, IconsBar, ExitBar, Footer, Button } from '../styles'
const Resume = () => {
    return (
       
           <>
            <div className = "exit-bar">
        <ExitBar> <span> Resume  </span>
    
        <IconsBar>
          <FontAwesomeIcon icon={faWindowRestore} />
            <FontAwesomeIcon icon={faWindowMinimize} />
            <FontAwesomeIcon icon={faWindowClose} />
            </IconsBar>
             </ExitBar>
        </div>
        <ComputerHead>
          <Link to= '/'><h2> <FontAwesomeIcon icon={faHdd}/> My Computer </h2> </Link>
  
            </ComputerHead>
             <ResumeDiv>
            <iframe src="https://resume.creddle.io/embed/h5u3cm2twor"
  width="850" height="1100" seamless title='resume'></iframe>

  

        </ResumeDiv>
    
        </>
            
    )
}

export default Resume;
