//resume//history page
import React from 'react';
import {Link} from 'react-router-dom';
import { faWindowRestore, faWindowMinimize, faWindowClose, faHdd, faBriefcase, faGraduationCap, faHeartbeat } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {ResumeDiv, ComputerHead, IconsBar, ExitBar, ResumeCont, Modal, CloseButton,ButtonDiv, SchoolCont, WorkCont, LifeCont, ResumeTitles, HistoryTrigger } from '../styles'
import resumeSS2 from '../images/resumeSS2.png';
import Navigation from './nav';
import Popup from 'reactjs-popup';
import {WorkInfo} from './helpers';
import {SchoolInfo} from './helpers';
import {LifeInfo} from './helpers';


//refactor idea: have individual files to click/popup with info: work history, education history, personal history
const History = () => {

    return (
       
           <>
  
        <ExitBar> <span> History  </span>
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
               {/*TODO: replace with PDF ** 
               <img src={resumeSS2} alt="jasmine terry resume"></img> */}
           
<WorkCont>
  <ResumeTitles> Work </ResumeTitles>
 
<Popup trigger = {<HistoryTrigger>  <FontAwesomeIcon icon={faBriefcase} size='6x' /></HistoryTrigger>} position ="top" modal="true" repositionOnResize="true">
{close=>(
<Modal>
 {WorkInfo}
<CloseButton onClick={close}>
    &times;
  </CloseButton>
</Modal>

)}
       </Popup>

</WorkCont>


<LifeCont> 
  
  <ResumeTitles>Life</ResumeTitles>

<Popup trigger = {<HistoryTrigger>  <FontAwesomeIcon icon={faHeartbeat} size='6x' /> </HistoryTrigger>} position ="top" modal="true" repositionOnResize="true">
{close=>(
<Modal>
 {LifeInfo}
<CloseButton onClick={close}>
    &times;
  </CloseButton>
</Modal>

)}
       </Popup>

</LifeCont>

<SchoolCont>
  <ResumeTitles> Education </ResumeTitles>
 
<Popup trigger = {<HistoryTrigger> <FontAwesomeIcon icon={faGraduationCap} size='6x'/> </HistoryTrigger>} position ="top" modal="true" repositionOnResize="true">
{close=>(
<Modal>
 {SchoolInfo}
<CloseButton onClick={close}>
    &times;
  </CloseButton>
</Modal>

)}
       </Popup>
</SchoolCont>

        </ResumeDiv>
        </ResumeCont>
        <Navigation/>
        </>
            
    )
}

export default History;
