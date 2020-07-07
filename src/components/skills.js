//tech skills/people skills page
import React from "react";
import { Link} from 'react-router-dom';
import { faWindowRestore, faWindowMinimize, faWindowClose, faHdd} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  SkillsHead,SkillsDiv, SkillsNames, SkillsMain, SkillsTitle , SkillsCont, ComputerHead, IconsBar, ExitBar, SkillsPage, Footer, Button } from '../styles'

const Skills = () => {
  return (
    <SkillsPage>
    
        <ExitBar> <span> Specs </span>
        <IconsBar>
          <FontAwesomeIcon icon={faWindowRestore} />
            <FontAwesomeIcon icon={faWindowMinimize} />
            <FontAwesomeIcon icon={faWindowClose} />
            </IconsBar>
         </ExitBar>
   
        <ComputerHead>
          <Link to= '/'><h2> <FontAwesomeIcon icon={faHdd}/> My Computer </h2> </Link>
          
            </ComputerHead>

        <SkillsCont>
    <SkillsHead>
     <SkillsMain>Skills </SkillsMain>
  </SkillsHead>
      <SkillsDiv>
        <div className = 'postit'>
          <SkillsTitle>Front End: </SkillsTitle>
          <ul>
            <li> CSS </li>
            <li> HTML </li>
            <li> Redux </li>
            <li> ReactJS </li>
            <li> Javascript </li>
            <li> Typescript </li>
            <li> Reactstrap </li>
            <li> Material UI </li>
            <li> Styled Components </li>
          </ul>
        </div>
        <div className = 'postit'>
          <SkillsTitle> Back End: </SkillsTitle>
          <ul>
            <li> SQL </li>
            <li> Knex </li>
            <li> NodeJs </li>
            <li> Express </li>
            <li> SQLite3 </li>
            <li> TypeORM </li>
            <li> DB Design </li>
          </ul>
        </div>
        <div className = 'postit'>
          <SkillsTitle>General: </SkillsTitle>
          <ul>
            <li> Git </li>
            <li> Jest </li>
            <li> Slack </li>
            <li> Python </li>
            <li> Docker </li>
            <li> REST APIs </li>
            <li> Code review </li>
            <li> Command Line </li>
            <li> Peer programming </li>
            
            
          </ul>
        </div>
      </SkillsDiv>
      </SkillsCont>
      
      <Footer>  <Button> Start </Button>
 
 </Footer>
      </SkillsPage>
  );
};

export default Skills;
