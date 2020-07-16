import styled from "styled-components";
import { breakpoints } from './components/helpers';
/////APP styles////
//Breakpoint mobile 470px
//Kindle-800px
//xs max-414
//x/xs-375
//ipad pro-834
//ipad-768
//galaxy S-360

export const AppHeader= styled.header` 
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content: center;
color:#05668d;
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
  background-color:#05668d;
 
`;

export const SocialLinks = styled.a`
display:flex;
justify-content:space-evenly;
align-items:center;
height:50px;
  &:hover{
    color: white;
}
`;

export const SocialList = styled.div`
display:flex;
justify-content:space-evenly;
align-items:center;

 `;

 export const NavSideCont=styled.div`
 display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: flex-start;
	align-items: stretch;
  align-content: stretch;
  background-color:navy;
  width:8%;
 z-index: 9999999;
 writing-mode: vertical-lr;
text-orientation: upright;


 `
 export const NavSide=styled.div`
 font-family: 'Merienda One', cursive;
 background-color:navy;
 height:450px;
z-index: 9999999;
color:white;
display: flex;
justify-content:center;
align-content:center;
  bottom:4%;

  writing-mode: vertical-lr;
text-orientation: upright;
 `
export const NavMenu =styled.nav`
border:2px solid grey;
background-color:grey;
position:fixed;
z-index: 9999999;
bottom:4%;
height:450px;
width:21%;
@media ${breakpoints.ipadPro} { 
  max-width:100%;
  align-content:center;
width:40%;
}

@media ${breakpoints.kindle} { 
  border:2px solid red;
  max-width:100%;
  align-content:center;
width:40%;
}
`

export const NavList =styled.ul`
list-style-type: none;
width:18%;
position:fixed;
z-index: 9999999;
display:flex;
flex-direction:column;
height:400px;
bottom:2%;
justify-content:space-around;
align-content:center;
`

export const NavItem =styled.li`
display:flex;
margin:5%;
justify-content:space-between;
align-content:center;
margin-top:3%;
font-family: 'VT323', monospace;
font-size:1.3rem;
`
/////// MAIN PAGE STYLES /////

export const StyledMain = styled.div`
background-color: #05668d;

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
flex-direction:column;
font-size:2.5rem;
font-family: 'VT323', monospace;

`

export const AboutInfo = styled.div`
margin: 5%;
margin-top:0;
`
export const Background =styled.div`
font-family: 'Special Elite', cursive;
font-size:1.2rem;
`

export const Services =styled.div`
font-family: 'Special Elite', cursive;
font-size:1.2rem;
`

export const Me = styled.img`
  border-radius:15%;
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
  height:25px;
`;

export const Footer =styled.div`
display: flex;
background-color: darkgray;
justify-content:space-between;
height:30px

`
export const Time=styled.div`
color:black;
background-color:#d6d6d4;
border:3px solid darkgrey;
width:8%;
display:flex;
justify-content:center;
align-content:center;

`

export const IconsBar = styled.div`
 color:grey;
 
 display:flex;
 justify-content:space-around;
 margin-top:4px;
margin-right:5px;
width:7%;
`;

export const IconsDiv = styled.div`
  display: flex;
  flex-direction:column;
  justify-content: space-around;
  align-items:center;
  width:40%;
 
`;

export const BrowseIcon = styled.div`
color: rgba(235, 235, 235, 0.774);
width:55%;
font-size: 1.7rem;
font-family: 'VT323', monospace;
`

export const SkillsIcon = styled.div`
color: rgba(235, 235, 235, 0.774);
width:55%;
font-size: 1.7rem;
font-family: 'VT323', monospace;



`

export const ResumeIcon = styled.div`
color: rgba(235, 235, 235, 0.774);
width:55%;
font-size: 1.7rem;
font-family: 'VT323', monospace;

`

export const ContactIcon = styled.div`
color: rgba(235, 235, 235, 0.774);
width:55%;
font-size: 1.7rem;
font-family: 'VT323', monospace;

`

export const Button= styled.button`
    width:5%;
    height:25px;
    color:black;
    font-weight:bold;
    background-color:gray;
    @media ${breakpoints.ipadPro} { 
      width:10%;
    }

    @media ${breakpoints.kindle} { 
      width:10%;
    }
  `
  

///////SKILLS PAGE STYLES////  
export const SkillsPage = styled.div`
background-color:#05668d;
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

  @media ${breakpoints.kindle} { 
    border:2px solid blue;
    max-width:100%;
    align-content:center;
    margin-top:10%;

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
font-family: 'VT323', monospace;
`
export const SkillsDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  list-style-type: none;

  @media ${breakpoints.ipadPro} { 
    border:2px solid red;
    max-width:100%;
    align-content:center;

  }
  @media ${breakpoints.kindle} { 
    border:2px solid red;
    max-width:100%;
    align-content:center;
    padding:none;
    margin:none;

  }

`;

export const SkillsBottom=styled.div`

display:flex;
font-size:4rem;
margin:5%;
margin-top:10%;
justify-content:center;
align-content:center;
font-family: 'VT323', monospace;

`

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

export const ProjectsPage=styled.div`
background-color:#05668d;
border:2px solid red;
max-width:100%;


`
export const PiecesCont = styled.div`
margin:3%;
display:flex;
flex-wrap:wrap;
border 15px solid grey;
background-color:white;
margin-bottom:0;
border:4px solid blue;
@media ${breakpoints.ipadPro} { 
  max-width: 100%;
  flex-direction:column;
  align-content:center;
 
  margin:0;
}

@media ${breakpoints.kindle} { 
  max-width: 100%;
  flex-direction:column;
  align-content:center;
  margin-top:10%;
}
`


export const BrowserHead =styled.div`
display:flex;
justify-content: space-between;
margin-left:2%;
margin-right:2%;
margin-bottom:5%;
height:0px;
font-size:3rem;
border:2px solid green;
max-width:100%;


`
export const ProjectCont = styled.div`
border 4px solid grey;
display:flex;
flex-direction:column;
background-color:white;
width:45%;
margin:2%;
align-items:center
border:2px solid purple;

@media ${breakpoints.mainBreak} { 
  max-width: 100%;
  border:2px solid black;
  margin:0;
  width:100%;
}

@media ${breakpoints.ipadPro} { 
  max-width: 100%;
  border:2px solid red;
  flex-direction:column;
 width:100%;
  margin:0;
  align-items:center
}

@media ${breakpoints.kindle} { 
  max-width: 100%;
  flex-direction:column;
 width:100%;

  align-items:center
}
`

export const ProjectTitle = styled.div`
margin-bottom:5%;
font-size:2rem;
text-decoration: underline;
width:100%;
align-content:center;
display:flex;
justify-content:center;
font-family: 'Press Start 2P', cursive;
text-transform:uppercase;
border:2px solid red;
@media ${breakpoints.mainBreak} { 
  max-width: 100%;
  border:2px solid black;
  margin:0;
}
`

export const ProjectInfo = styled.div`
display:flex;
flex-direction:row;
font-size:1rem;
color:black;
width:100%;
font-family: 'Special Elite', cursive;
margin-bottom:0;
border:2px solid blue;
@media ${breakpoints.mainBreak} { 
  max-width: 100%;
  border:2px solid black;
  margin:0;
}

`

export const TechUsed = styled.div`
font-family: 'VT323', monospace;
font-size:1.3rem;
margin-bottom:2%;
align-content:center;
display:flex;
justify-content:center;
background-color:grey;
text-transform:uppercase;
@media ${breakpoints.mainBreak} { 
  max-width: 100%;
  border:2px solid black;
  margin:0;
}

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
color:#05668d;
font-weight:bolder;
&:hover{
  color:grey;
  background-color: #05668d;
}
`
export const CloseButton = styled.button`
color:grey;
border-radius:50%;
border:3px solid grey;


`
/////CONTACT PAGE STYLES ////

export const ContactCont=styled.div`
background-color:#05668d;
`

export const CardsCont =styled.div`
background: #0e8b44 url('https://bfa.github.io/solitaire-js/img/green_felt.jpg');
   background-size: cover;
   background-position: center;
display:flex;
flex-wrap:wrap;
margin:5%;
margin-top:0;
margin-bottom:0;
`

export const CardHolder=styled.div`

display:flex;
flex-wrap:wrap;
align-items:center;
justify-content:center;

`

export const ContactHead=styled.div`
width:100%;
display:flex;
flex-direction:column;
margin-bottom:3%;

`

export const ContactText=styled.div`
background-color:rgba(0,0,0,.15);
padding: 0.5%;
color:white;
display:flex;
justify-content:space-between;
font-size:1.2rem;
font-family: 'Special Elite', cursive;
`


export const ContactButton=styled.button`
background-color:rgba(0,0,0,.15);
color:white;
font-size:1.3rem;
font-family: 'VT323', monospace;
align-content:center
`

///////RESUME STYLES//////////
export const ResumeCont =styled.div`
background-color:#05668d;
`

export const ResumeDiv = styled.div`
display:flex;
justify-content:center;
align-items:center;
margin:0 auto;

`