//tech skills/people skills page
import React from "react";
import { Link} from 'react-router-dom';
import { faWindowRestore, faWindowMinimize, faWindowClose, faHdd} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  SkillsHead,SkillsDiv, SkillsNames, SkillsTitle , SkillsCont, ComputerHead, IconsBar, ExitBar, SkillsPage, Footer, Button } from '../styles'

const Skills = () => {
  return (
    <SkillsPage>
    
        <ExitBar> <span> File </span>
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
     Skills 
  </SkillsHead>
      <SkillsDiv>
        <SkillsNames>
          <SkillsTitle>Front End: </SkillsTitle>
          <ul>
            <li> HTML</li>
            <li>CSS</li>
            <li> ReactJS </li>
            <li> Redux</li>
            <li> Javascript </li>
            <li> Styled Components </li>
            <li> Reactstrap </li>
            <li> Material UI </li>
            <li> Typescript </li>
          </ul>
        </SkillsNames>
        <SkillsNames>
          <SkillsTitle> Back End: </SkillsTitle>
          <ul>
            <li> NodeJs </li>
            <li> Express </li>
            <li> Knex </li>
            <li> SQLite3</li>
            <li> SQL </li>
            <li> TypeORM </li>
            <li> DB Design</li>
          </ul>
        </SkillsNames>
        <SkillsNames>
          <SkillsTitle>General: </SkillsTitle>
          <ul>
            <li> REST APIs </li>
            <li> Git/Version control </li>
            <li> Slack</li>
            <li> Command Line </li>
            <li> Peer programming/review </li>
            <li> Python</li>
            <li> Docker </li>
            <li> Jest </li>
          </ul>
        </SkillsNames>
      </SkillsDiv>
      </SkillsCont>
      
      <Footer>  <Button> Start </Button>
 
 </Footer>
      </SkillsPage>
  );
};

export default Skills;
