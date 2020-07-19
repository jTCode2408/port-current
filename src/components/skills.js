//tech skills/people skills page
import React from "react";
import { Link} from 'react-router-dom';
import { faWindowRestore, faWindowMinimize, faWindowClose, faHdd} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  ComputerHead, SkillsDiv, SkillsMain, SkillsTitle , SkillsCont,  IconsBar, ExitBar, SkillsPage, SkillsBottom } from '../styles'
import Navigation from './nav';

const Skills = () => {
  return (
    <SkillsPage>
    
        <ExitBar> <span> Specs </span>
        
        <IconsBar>
            <FontAwesomeIcon icon={faWindowMinimize} />
            <FontAwesomeIcon icon={faWindowRestore} />
            <FontAwesomeIcon icon={faWindowClose} />
            </IconsBar>
         </ExitBar>
   
        <ComputerHead>
          <Link to= '/'><h2> <FontAwesomeIcon icon={faHdd}/> Desktop </h2> </Link>
          <h2> SPECS </h2>  
            </ComputerHead>

        <SkillsCont>
    <SkillsMain> Skills</SkillsMain>

      <SkillsDiv>
      <div class="hole first-hole"></div>
  <div class="hole second-hole"></div>
  <div class="hole third-hole"></div>
        <div className = 'postit'>
        
          <SkillsTitle> Front End: </SkillsTitle>
          <ul>
            <li> HTML </li>
            <li> CSS </li>
            <li> Styled Components </li>
            <li> ReactJS </li>
            <li> JavaScript </li>
            <li> Reactstrap </li>
            <li> Material UI </li>
            <li> Redux </li>  
            <li> TypeScript </li>
       
          
          </ul>
     
        </div>
      
        <div className = 'postit'>

          <SkillsTitle> Back End: </SkillsTitle>
          <ul>
            
            <li> NodeJs </li>
            <li> Knex </li>
            <li> Express </li>
            <li> Python </li>
            <li> SQLite3 </li>
            <li> TypeORM </li>
            <li> SQL </li>
            
          </ul>
        </div>
  
   
        <div className = 'postit'>
          <SkillsTitle> General: </SkillsTitle>
          <ul>
            <li> Github </li>
            <li> Gitbash </li>
            <li> REST APIs </li>
            <li> Slack </li>
            <li> Code review </li>
            <li> Command Line </li>
            <li> Netlify </li>
            <li> Vercel </li>
            <li> Heroku </li>
            <li> Jest </li>
            <li> Docker </li>
            <li> Peer programming </li>
            
          </ul>
        </div>
       
        
      </SkillsDiv>
      <SkillsBottom>

...More in progress!
</SkillsBottom>
      </SkillsCont>
      
      <Navigation/>
      </SkillsPage>
  );
};

export default Skills;
