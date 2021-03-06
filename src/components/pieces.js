//'browser' projects page
import React from "react";
import {Link} from 'react-router-dom';
import { faWindowRestore, faWindowMinimize, faWindowClose, faHdd} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {ComputerHead, IconsBar, ExitBar, PiecesCont, ProjectInfo, ProjectTitle, TechUsed, ProjectCont,  Modal, CloseButton, AboutButton,ButtonDiv, ProjectsPage } from '../styles';
import GOL_opt from '../images/GOL_opt.png';
import spotify from '../images/spotify.jpg';
import refugees_opt from '../images/refugees_opt.png';
import news_opt from '../images/news_opt.jpg';
import SSDash from '../images/SSDash.png';
import advGame_opt from '../images/advGame_opt.jpg';
import portSS from '../images/portSS.jpg';
import dmQuiz from '../images/dmQuiz.jpg';
import audioPlayer from '../images/js-audio.jpg';
import NNLSS1 from '../images/NNL-SS1.jpg';
import {SSInfo, GOLInfo, AdvInfo, PortInfo, NewsInfo, SpotifyInfo, RefugeeInfo, QuizInfo, audioPlayerInfo, NNLInfo} from './helpers';
import Popup from 'reactjs-popup';
import Navigation from './nav';

const Pieces = () => {

  return (
<>
<ProjectsPage>
    <ExitBar> <span> Documents  </span>
      <IconsBar>
      
        <FontAwesomeIcon icon={faWindowMinimize} />
        <FontAwesomeIcon icon={faWindowRestore} />
        <FontAwesomeIcon icon={faWindowClose} />
        </IconsBar> 
        </ExitBar>
        
        <ComputerHead>
      <Link to= '/'><h2> <FontAwesomeIcon icon={faHdd}/> Desktop </h2> </Link>
      <h2> PROJECTS</h2>
        </ComputerHead>
      
      <PiecesCont>
     
      <ProjectCont>

      <a href="https://github.com/Lambda-School-Labs/story-squad-fe" title="github repo">
         <ProjectTitle>StorySquad</ProjectTitle>
         
        </a>
          <TechUsed> ReactJS/TypeScript/TypeORM  </TechUsed>
  
        <a href="https://master.d37ier1k83jxk6.amplifyapp.com" title="visit project">
          <img src={SSDash} alt='story squad dashboard' className ="images"/>
        </a>
     
        <ProjectInfo>
       <Popup trigger = {<ButtonDiv><AboutButton > What's This? </AboutButton> </ButtonDiv>} position ="top" modal="true" repositionOnResize="true">
{close=>(
<Modal>
 {SSInfo}
<CloseButton onClick={close}>
    &times;
  </CloseButton>
</Modal>

)}
       </Popup>
        
        </ProjectInfo>
        </ProjectCont> {/*story squad project end */}


        <ProjectCont>
        <a href="https://github.com/jTCode2408/lets-argue-NBA" title="github repo">
         <ProjectTitle> Numbers Never Lie</ProjectTitle>
  
        </a>
          <TechUsed> ReactJS/Reactstrap/Styled Components </TechUsed>

        <a href="https://lets-argue-nba.vercel.app/"
        title="visit project">
          <img src={NNLSS1} alt='numbers never lie app' className ="images"></img>
        </a>
        <ProjectInfo>
        <Popup trigger = {<ButtonDiv> <AboutButton> What's This? </AboutButton> </ButtonDiv>} position ="top" modal="true" repositionOnResize="true">
{close=>(
<Modal>
 {NNLInfo}
<CloseButton onClick={close}>
    &times;

  </CloseButton>
</Modal>

)}
       </Popup>
          
        </ProjectInfo>
        </ProjectCont> {/*NNL project end */}



      
      <ProjectCont>
      <a href = 'https://github.com/jTCode2408/game-of-life' title="github repo">
       <ProjectTitle>Game Of Life</ProjectTitle>
      
        </a>
          <TechUsed> ReactJS/Styled Components </TechUsed>
       
        <a href="https://game-of-life.jasmineterry.vercel.app/" title="visit project"> 
      <img src ={GOL_opt} alt='game of life app' className ="images"></img> </a>


        <ProjectInfo>
        <Popup trigger = {<ButtonDiv> <AboutButton> What's This? </AboutButton> </ButtonDiv> } position ="top"  closeOnDocumentClick modal="true" repositionOnResize="true">
{close=>(
<Modal>
 {GOLInfo}
<CloseButton onClick={close}>
    &times;
  </CloseButton>
</Modal>

)}
       </Popup>
       
          </ProjectInfo>
        </ProjectCont>
        {/*game of life project end */}

        <ProjectCont>
        <a href="https://github.com/Spotify-Song-Suggester/Front-End-SSS" title="github repo">
   <ProjectTitle> Symphinity </ProjectTitle>
   
        </a>
          <TechUsed>ReactJS/Redux/Styled Components </TechUsed>
        
        <a href="https://front-end-sss.now.sh/login" title="visit project">
         <img src={spotify} alt='spotify song suggester app' className ="images"></img>
        </a>
        <ProjectInfo>
        <Popup trigger = {<ButtonDiv> <AboutButton> What's This? </AboutButton> </ButtonDiv>} position ="top" modal="true" repositionOnResize="true">
{close=>(
<Modal>
 {SpotifyInfo}
<CloseButton onClick={close}>
    &times;
  </CloseButton>
</Modal>

)}
       </Popup>
    </ProjectInfo>
        </ProjectCont>
        {/*SSS project end */}


        <ProjectCont> 
        <a href="https://github.com/jTCode2408/dunder-mifflinQuiz" title="github repo">
         <ProjectTitle> 'The Office' Quiz </ProjectTitle>
        </a>
          <TechUsed> ReactJS/Styled Components </TechUsed>

        <a href="https://dunder-mifflin-quiz.vercel.app" 
        title="visit project">
           <img src={dmQuiz} alt='quiz app screenshot' className ="images"></img>
        </a>
        <ProjectInfo>
        <Popup trigger = {<ButtonDiv><AboutButton> What's This? </AboutButton></ButtonDiv>} position ="top" modal="true" repositionOnResize="true">
{close=>(
<Modal>
 {QuizInfo}
 <CloseButton onClick={close}>
    &times;
</CloseButton>
 
</Modal>

)}
       </Popup>
        </ProjectInfo>
        </ProjectCont> {/*Quiz project end */}



        
        <ProjectCont> 
        <a href="https://github.com/jTCode2408/port-current" title="github repo">
         <ProjectTitle> Audio Player </ProjectTitle>
        </a>
          <TechUsed> JavaScript/CSS </TechUsed>
        
        <a href="https://js-music-app.netlify.app" 
        title="visit project">
           <img src={audioPlayer} alt='newsfeed site screenshot' className ="images"></img>
        </a>
        <ProjectInfo>
        <Popup trigger = {<ButtonDiv><AboutButton> What's This? </AboutButton></ButtonDiv>} position ="top" modal="true" repositionOnResize="true">
{close=>(
<Modal>
 {audioPlayerInfo}
 <CloseButton onClick={close}>
    &times;
</CloseButton>
 
</Modal>

)}
       </Popup>
        </ProjectInfo>
        </ProjectCont> {/*audio player project end */}

        <ProjectCont>
        <a href="https://github.com/Buid-Week-Refugee-Stories/Marketing-page" title="github repo">
           <ProjectTitle>Refugee Stories</ProjectTitle>
           
        </a>
          <TechUsed> HTML/CSS/LESS </TechUsed>
       
        <a href="https://refugee-stories1119.netlify.com/"
         title="visit project">
        <img src={refugees_opt} alt='refugee stories website screenshot' className ="images"></img>
        </a>
        <ProjectInfo>
        <Popup trigger = {<ButtonDiv> <AboutButton> What's This? </AboutButton> </ButtonDiv>} position ="top" modal="true" repositionOnResize="true">
{close=>(
<Modal>
 {RefugeeInfo}
<CloseButton onClick={close}>
    &times;

  </CloseButton>
</Modal>

)}
       </Popup>
        </ProjectInfo> 
        </ProjectCont> {/*refugees end */}

        <ProjectCont>
        
        <a href="https://github.com/jTCode2408/Intro-Python-II" title="github repo">
         <ProjectTitle> Adventure Game</ProjectTitle>
        </a>
          <TechUsed> Python </TechUsed>
      
        <a href="https://github.com/jTCode2408/Intro-Python-II"
        title="visit project">
         <img src={advGame_opt} alt='adventure game terminal screenshot' className ="images"></img>
        </a>
        <ProjectInfo>
        <Popup trigger = {<ButtonDiv> <AboutButton> What's This? </AboutButton> </ButtonDiv>} position ="top" modal="true" repositionOnResize="true">
{close=>(
<Modal>
 {AdvInfo}
<CloseButton onClick={close}>
    &times;
  </CloseButton>
</Modal>

)}
       </Popup>
          
        </ProjectInfo>
        </ProjectCont>{/*Adv game project end */}
        


        <ProjectCont> 
        <a href="https://github.com/jTCode2408/port-current" title="github repo">
         <ProjectTitle> Portfolio </ProjectTitle>
        </a>
          <TechUsed> ReactJS/Styled Components </TechUsed>
        
        <a href="https://jasmineterry92.com" 
        title="visit project">
           <img src={portSS} alt='portfolio screenshot' className ="images"></img>
        </a>
        <ProjectInfo>
        <Popup trigger = {<ButtonDiv><AboutButton> What's This? </AboutButton></ButtonDiv>} position ="top" modal="true" repositionOnResize="true">
{close=>(
<Modal>
 {PortInfo}
 <CloseButton onClick={close}>
    &times;
</CloseButton>
 
</Modal>

)}
       </Popup>
        </ProjectInfo>
        </ProjectCont> {/*portfolio project end */}


        <ProjectCont>
        <a href="https://github.com/jTCode2408/Newsfeed-Components"
          title="github repo" >
         <ProjectTitle>Newsfeed</ProjectTitle>
        
        </a>
          <TechUsed> JS/CSS/LESS </TechUsed>
        
      
      <a href="https://jt-news.netlify.app/"
          title="visit project">
          <img src={news_opt} alt='newsfeed site screenshot' className ="images"></img>
        </a>
        <ProjectInfo>
        <Popup trigger = {<ButtonDiv> <AboutButton> What's This? </AboutButton> </ButtonDiv>} position ="top" modal="true" repositionOnResize="true">
{close=>(
<Modal>
 {NewsInfo}
<CloseButton onClick={close}>
    &times;

  </CloseButton>
</Modal>

)}
       </Popup>
        </ProjectInfo>
        </ProjectCont>{/*NEWSFEED project end */}

      {/* pieces div holder end --- pieces cont end below*/}
      
      </PiecesCont> 
      </ProjectsPage>
      
{/*TODO IDEA: add slider/carosel/next page to view more project */}
   <Navigation/>
  
    </> 
  );
};

export default Pieces;



/////TODO: extract projects to own files, reduce file length
/*
        <ProjectCont>
        <a href="https://reducer-todo-alpha.vercel.app/"
        title="visit project">
         <ProjectTitle> To-Do App</ProjectTitle>
  
        </a>
          <TechUsed> ReactJS/Redux/CSS </TechUsed>
    
        <a href="https://github.com/jTCode2408/reducer-todo" title="github repo">
          <img src={todo} alt='todo app screenshot' className ="images"></img>
        </a>
        <ProjectInfo>
        <Popup trigger = {<ButtonDiv> <AboutButton> What's This? </AboutButton> </ButtonDiv>} position ="top" modal="true" repositionOnResize="true">
{close=>(
<Modal>
 {TodoInfo}
<CloseButton onClick={close}>
    &times;

  </CloseButton>
</Modal>

)}
       </Popup>
          
        </ProjectInfo>
        </ProjectCont> {/*todo project end NOT USING RN(8/18) */