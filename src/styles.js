import styled from "styled-components";

//////// SOCIAL STYLES /////

export const StyledSocial = styled.div`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-family: "Gothic A1", sans-serif;
  font-size: 1rem;
  font-weight: 700;
  line-height: 3.2px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  // margin-top: 5%;
  // margin-left: 5%;
  margin-bottom: 0;
  position: relative;
`;

export const SocialLinks = styled.a`
  color: black;
  &:hover{
    color: orange;
}
`;

export const SocialList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-left: 5%;
  margin-right: 5%;
  width: 100%;
 `;

/////// MAIN PAGE STYLES /////

export const StyledMain = styled.div`
  border: 3px solid blue;
`;

export const Computer = styled.div`
  border: 4px solid pink;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const ComputerHead = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ExitBar = styled.div`
  display: flex;
  background-color: darkgray;
`;
export const IconsBar = styled.div`
  margin-top: 5px;
`;

export const IconsDiv = styled.div`
  border: 2px solid black;
  display: flex;
  justify-content: space-around;
  width: 80%;
  margin: 10px;
  margin-left: 10%;
`;

///////SKILLS PAGE STYLES//// 

export const SkillsCont = styled.div`
  border: 2px solid green;
  display: flex;
  width: 100%;
`;
export const SkillsHead = styled.div`
  position: relative;
  border: 2px solid blue;
  width: 80%;
  font-size: 35px;
`;
export const SkillsDiv = styled.div`
  border: 5px solid yellow;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  width: 100%;
  margin-top:10px;
`;
export const SkillsNames = styled.div`
font-size: 20px;
border:2px solid red;
width:80%;
`;

export const SkillsTitle = styled.div`
font-size: 15x;
text-align:center;
`;


////////PIECES PAGE STYLES //////

/////CONTACT PAGE STYLES ////


