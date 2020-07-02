import React from 'react';
import styled from "styled-components";
import {Route, Link} from 'react-router-dom';
import { faWindowRestore, faWindowMinimize, faWindowClose, faHdd, faNetworkWired, faArchive, faEnvelopeOpenText, faToolbox } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StyledMain, StyledSocial, SocialLinks, SocialList, Computer, ComputerHead, IconsBar, ExitBar, IconsDiv } from '../styles'
const Contact =()=>{
    return(
        <div className='contact'>
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
        
            <h2>Get In Touch!</h2>
        </div>
    )
}


export default Contact