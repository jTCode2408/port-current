import styled from "styled-components";



/////APP styles////


export const AppHeader= styled.header` 
  background-color: grey;
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content: center;
  color: white;
  height:30vh
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
    color: black;
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
background-color: rgb(1, 109, 109);
`;

export const Computer = styled.div`
  display: flex;
  justify-content: center;
 
`;

export const About =styled.div`
justify-content: center;
align-items:center;


`

export const AboutHead = styled.div`
align-items:center;
width:100%;
display:flex;
flex-direction:column

`

export const AboutInfo = styled.div`
margin: 5%;
`

export const Me = styled.img`
  border-radius:10%;
  `

export const ComputerHead = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left:1%
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
  display: flex;
  flex-direction:column;
  justify-content: space-around;
  align-items:center;
 
`;

export const BrowseIcon = styled.div`
color: rgba(235, 235, 235, 0.774);
width:50%;
font-size: 1.2rem;
`

export const SkillsIcon = styled.div`
color: rgba(235, 235, 235, 0.774);
width:50%;
font-size: 1.2rem;
`

export const ResumeIcon = styled.div`
color: rgba(235, 235, 235, 0.774);
width:50%;
font-size: 1.2rem;

`

export const ContactIcon = styled.div`
color: rgba(235, 235, 235, 0.774);
width:50%;
font-size: 1.2rem;

`

export const Button= styled.button`
    width:5%;
    height:25px;
    color:black;
    font-weight:bold;
    background-color:gray
  `
  

///////SKILLS PAGE STYLES////  ---- post it note styling
export const SkillsPage = styled.div`
border:2px solid green;
`
export const SkillsCont = styled.div`
  display: flex;
  flex-direction:column;
  margin:5%;

`;
export const SkillsHead = styled.div`
  display:flex;
  justify-content:center;
  font-size: 4.5rem;
  
`;
export const SkillsDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;

`;


export const SkillsNames = styled.div`
font-size: 1.7rem;
background-color:yellow;
width:40%;

 
`;

export const SkillsTitle = styled.div`
font-size:3rem;
align-items:center;
`;


////////PIECES PAGE STYLES //////
export const PiecesCont = styled.div`
border: 2px solid red;
display:flex;
flex-wrap:wrap;
background-color: rgb(1, 109, 109);


`

export const PiecesHead = styled.div`
border: 2px solid blue;
`

export const BrowserHead =styled.div`
display:flex;
justify-content:center;

`
export const ProjectCont = styled.div`
border 2px solid black;
display:flex;
flex-direction:column;

width:45%;
margin:2%;
align-items:center

`
export const ProjectTitle = styled.div`
border: 2px solid green;
font-size:1.7rem;
text-decoration: underline;
`

export const ProjectInfo = styled.div`
display:flex;
flex-direction:row;
font-size:1rem;
color:white;
&:hover{
  color:rgb(1, 109, 109);
}
`

export const TechUsed = styled.div`
border: 2px solid yellow;
font-size:1.3rem;
`




/////CONTACT PAGE STYLES ////


///////RESUME STYLES//////////

export const ResumeDiv = styled.div`
display:flex;
justify-content:center;
align-items:center;
margin:0 auto;
`