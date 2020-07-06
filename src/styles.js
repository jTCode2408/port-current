import styled from "styled-components";



/////APP styles////


export const AppHeader= styled.header` 
  background-color: #282c34;
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content: center;
 font-size: 1.5rem;
  color: white;
  height:45vh
`

//////// SOCIAL STYLES /////

export const StyledSocial = styled.div`
  font-family: "Gothic A1", sans-serif;
  font-size: 1rem;
  font-weight: 700;
  line-height: 3.2px;
  text-transform: uppercase;
  letter-spacing: 0.5px;

`;

export const SocialLinks = styled.a`
  color: black;
text-decoration:none;
  margin:20%;
  &:hover{
    color: orange;
}
`;

export const SocialList = styled.div`

display:flex;
justify-content:space-evenly;
align-items:center;
width:100%;
 
 `;

/////// MAIN PAGE STYLES /////

export const StyledMain = styled.div`
  border: 3px solid blue;
`;

export const Computer = styled.div`
  border: 4px solid pink;
  display: flex;
  justify-content: center;
  background-color: teal;
 
`;

export const About =styled.div`
border:2px solid red;

`
export const ComputerHead = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ExitBar = styled.div`
  display: flex;
  background-color: darkblue;
  justify-content:space-between;
`;
export const Footer =styled.div`
display: flex;
background-color: darkgray;
justify-content:space-between;
height:30px

`

export const IconsBar = styled.div`
 color:grey;

`;

export const IconsDiv = styled.div`
  border: 2px solid black;
  display: flex;
  flex-direction:column;
  justify-content: space-around;
  align-items:center;
  width: 100%;

 
`;

export const BrowseIcon = styled.div`

width:50%;
font-size: 1.2rem;
`

export const SkillsIcon = styled.div`

width:50%;
font-size: 1.2rem;
`

export const ResumeIcon = styled.div`

width:50%;
font-size: 1.2rem;

`

export const ContactIcon = styled.div`

width:50%;
font-size: 1.2rem;

`
export const Me = styled.img`
  border:2px solid blue;
  `
export const Button= styled.button`
    width:10%;
    height:25px;

    color:black;
    font-weight:bold;
    background-color:gray
  `
  
export const Time=styled.div`
  border:2px solid orange;
  width: 50%;
  justify-content:flex-end
  `
  
  export const Start=  styled.div`
    border:2px solid green;
    width: 50%
  `

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


