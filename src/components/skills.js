//tech skills/people skills page
import React from "react";
import styled from "styled-components";
import {Route, Link} from 'react-router-dom';

import { faHdd} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const SkillsCont = styled.div`
  border: 2px solid green;
  display: flex;
  width: 100%;
`;
const SkillsHead = styled.div`
  position: relative;
  border: 2px solid blue;
  width: 80%;
  font-size: 35px;
`;
const SkillsDiv = styled.div`
  border: 5px solid yellow;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  width: 100%;
  margin-top:10px;
`;
const SkillsNames = styled.div`
font-size: 20px;
border:2px solid red;
width:80%;
`
const SkillsTitle = styled.div`
font-size: 15x;
text-align:center;
`
const Skills = () => {
  return (
    <div>
        <Link to ='/'><h2> <FontAwesomeIcon icon={faHdd}/> My Computer </h2> </Link>
    <SkillsHead>
    <h3> Skills </h3>
  </SkillsHead>
      <SkillsDiv>
        <SkillsNames>
          <SkillsTitle>Front End: </SkillsTitle>
          <ul>
            <li> HTML/CSS </li>
            <li> ReactJS </li>
            <li> Redux</li>
            <li> Javascript </li>
            <li> Styled Components </li>
            <li> Bootstrp </li>
            <li> Material UI </li>
            <li> Typescript </li>
          </ul>
        </SkillsNames>
        <SkillsNames>
          <SkillsTitle>Back End: </SkillsTitle>
          <ul>
            <li> NodeJs </li>
            <li> Express </li>
            <li> SQLite3 </li>
            <li> Knex</li>
            <li> TypeORM </li>
          </ul>
        </SkillsNames>
        <SkillsNames>
          <SkillsTitle>General: </SkillsTitle>
          <ul>
            <li> APIs </li>
            <li> Git/Version control </li>
            <li> Command Line </li>
            <li> Peer programming/review </li>
            <li> Python</li>
            <li> Docker </li>
            <li> SQL </li>
          </ul>
        </SkillsNames>
      </SkillsDiv>
      </div>
  );
};

export default Skills;
