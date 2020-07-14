//resume//history page
import React, {useState} from 'react';
import {Route, Link} from 'react-router-dom';
import Main from './main';
import { faWindowRestore, faWindowMinimize, faWindowClose, faHdd, faNetworkWired, faArchive, faEnvelopeOpenText, faToolbox } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {ResumeDiv, Computer, ComputerHead, IconsBar, ExitBar, Footer, Button } from '../styles'
import resumeSS from '../images/resumeSS.png';
import Navigation from './nav';

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
               {/*TODO: replace with PDF*/}
               <img src={resumeSS}></img>
           

        </ResumeDiv>
    
        <Navigation/>
        </>
            
    )
}

export default Resume;
