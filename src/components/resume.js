//resume//history page
import React from 'react';
import {Link} from 'react-router-dom';
import { faWindowRestore, faWindowMinimize, faWindowClose, faHdd } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {ResumeDiv, ComputerHead, IconsBar, ExitBar, ResumeCont } from '../styles'
import resumeSS from '../images/resumeSS.png';
import Navigation from './nav';

const Resume = () => {

    return (
       
           <>
  
        <ExitBar> <span> Resume  </span>
        <IconsBar>
          <FontAwesomeIcon icon={faWindowRestore} />
            <FontAwesomeIcon icon={faWindowMinimize} />
            <FontAwesomeIcon icon={faWindowClose} />
            </IconsBar>
             </ExitBar>
      

        <ResumeCont>
        <ComputerHead>
          <Link to= '/'><h2> <FontAwesomeIcon icon={faHdd}/> Desktop </h2> </Link>
          <h2> RESUME </h2>  
            </ComputerHead>

             <ResumeDiv>
               {/*TODO: replace with PDF*/}
               <img src={resumeSS} alt="jasmine terry resume"></img>
           

        </ResumeDiv>
        </ResumeCont>
        <Navigation/>
        </>
            
    )
}

export default Resume;
