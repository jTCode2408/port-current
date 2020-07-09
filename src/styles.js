import styled from "styled-components";



/////APP styles////


export const AppHeader= styled.header` 
  background-color: grey;
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content: center;

  height:33vh
`

//////// SOCIAL STYLES /////


export const StyledSocial = styled.div`
  font-family: "Gothic A1", sans-serif;
  font-size: 1rem;
  font-weight: 700;
  line-height: 3.2px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  background-color: grey;
  
`;

export const SocialLinks = styled.a`

  &:hover{
    color: white;
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
  

///////SKILLS PAGE STYLES////  
export const SkillsPage = styled.div`

`
export const SkillsCont = styled.div`
  display: flex;
  flex-direction:column;
  margin-left:5%;
  margin-right:5%;
  margin-bottom:5%;
  background-color:white;
  height: 900px;
  background-image: repeating-linear-gradient(white 0px, white 24px, black 25px);
  position: relative;
  padding-bottom: 10%;
  box-shadow: 0px 0px 5px 0px #888;
  
  &:after{
    content: '';
    width: 2px;
    height: 100%;
    position: absolute;
    top: 0;
    left: 25px;
    background-color: rgba(255,0,0,0.6);
  }


`;
export const SkillsHead = styled.div`
width:100%;
`;

export const SkillsMain = styled.p`
font-size: 5rem;
width:100%;
display:flex;
border-bottom:2px solid black;
background-color:white;
color:Black;
justify-content:center;
align-content:center;
margin:0 auto;
`
export const SkillsDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  list-style-type: none;


`;

//list styling//
export const SkillsNames = styled.div` 
list-style-type: none;
 
`;

export const SkillsTitle = styled.div`
font-size:4rem;
align-items:center;
text-decoration:underline;
`;


////////PIECES PAGE STYLES //////
export const PiecesCont = styled.div`
margin:0 auto;
display:flex;
flex-wrap:wrap;
border 15px solid grey;
`


export const BrowserHead =styled.div`
display:flex;
justify-content: space-between;
margin-left:2%;
margin-right:2%;
margin-bottom:5%;
height:0px;
font-size:3rem;

`
export const ProjectCont = styled.div`
border 4px solid grey;
display:flex;
flex-direction:column;
background-color:white;
width:45%;
margin:2%;
align-items:center

`

export const ProjectTitle = styled.div`
margin-bottom:5%;
font-size:2rem;
text-decoration: underline;
width:100%;
align-content:center;
display:flex;
justify-content:center;
`

export const ProjectInfo = styled.div`
display:flex;
flex-direction:row;
font-size:1rem;
color:black;
width:100%;


`



export const TechUsed = styled.div`

font-size:1.3rem;
width:100%;
align-content:center;
display:flex;
justify-content:center;
`


export const Modal = styled.div`
width:100%;
&:hover{
  color:rgb(1, 109, 109);
}
`
export const ButtonDiv = styled.div`

display:flex;
align-items:center;
justify-content:center;
width:100%

`
export const AboutButton = styled.button`
margin-bottom:2%;
margin-top:2%;
display:flex;
align-items:center;
justify-content:center;
width: 25%;
border-radius:5%;
background-color:grey;
height:40px;
color:rgb(1, 109, 109);
&:hover{
  color:grey;
  background-color: rgb(1, 109, 109);
}
`
export const CloseButton = styled.button`
color:grey;
border-radius:50%;
border:3px solid grey;


`
/////CONTACT PAGE STYLES ////
//STYLE LIKE OLD SCHOOL SOLITARE> CARDS FOR EACH THINGS< EXTRA CARDS FOR MISC.
//CARDS WITH INFO FLIP/HAVE TITLE

export const CardsCont =styled.div`
border:2px solid green;
display:flex;
flex-wrap:wrap;
`

///////RESUME STYLES//////////

export const ResumeDiv = styled.div`
display:flex;
justify-content:center;
align-items:center;
margin:0 auto;
`