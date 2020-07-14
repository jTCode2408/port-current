//'browser' projects page
import React, {useState} from "react";
import {Link} from 'react-router-dom';
import { faWindowRestore, faWindowMinimize, faWindowClose, faHdd} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ComputerHead, IconsBar, ExitBar, Footer, Button, PiecesCont, PiecesHead, ProjectInfo, ProjectTitle, TechUsed, ProjectCont, BrowserHead, Modal, CloseButton, AboutButton,ButtonDiv, GHOverlay } from '../styles';
import GOL_opt from '../images/GOL_opt.png';
import spotify from '../images/spotify.jpg';
import refugees_opt from '../images/refugees_opt.png';
import news_opt from '../images/news_opt.jpg';
import todo from '../images/todo.png';
import SSDash from '../images/SSDash.png';
import GHCards from '../images/GHCards.jpg';
import advGame_opt from '../images/advGame_opt.jpg';
import {SSInfo, GOLInfo, AdvInfo, GHCardsInfo, NewsInfo, TodoInfo, SpotifyInfo, RefugeeInfo} from './helpers'
import Popup from 'reactjs-popup';

const Pieces = () => {

 

  return (
<>

    <ExitBar> <span> Documents  </span>
      <IconsBar>
      
        <FontAwesomeIcon icon={faWindowMinimize} />
        <FontAwesomeIcon icon={faWindowRestore} />
        <FontAwesomeIcon icon={faWindowClose} />
        </IconsBar> 
        </ExitBar>
        <BrowserHead>
      <Link to= '/'><h2> <FontAwesomeIcon icon={faHdd}/> My Computer </h2> </Link>
    
     
      <h2> PROJECTS</h2>
        </BrowserHead>
      
      <PiecesCont>
     
      <ProjectCont>

      <a href="https://front-end-sss.now.sh/login" title="visit project">
         <ProjectTitle>StorySquad</ProjectTitle>
         
        </a>
          <TechUsed> ReactJS/TypeScript/TypeORM/DS  </TechUsed>
  
        <a href="https://github.com/Lambda-School-Labs/story-squad-fe" title="github repo">
          <img src={SSDash} alt='spotify song suggestory screenshot' className ="images"/>
        </a>
     
        <ProjectInfo>
       <Popup trigger = {<ButtonDiv><AboutButton   > What's This? </AboutButton> </ButtonDiv>} position ="top" modal="true" repositionOnResize="true">
{close=>(
<Modal>
 {SSInfo}
<CloseButton>
  <a onClick={close}>
    &times;
  </a>
  </CloseButton>
</Modal>

)}
       </Popup>
        
        </ProjectInfo>
        </ProjectCont>

      
      <ProjectCont>
      <a href="https://game-of-life.jasmineterry.vercel.app/" title="visit project">
       <ProjectTitle>Game Of Life</ProjectTitle>
      
        </a>
          <TechUsed> ReactJS/Styled Components </TechUsed>
       
        <a href = 'https://github.com/jTCode2408/game-of-life' title="github repo" >
      <img src ={GOL_opt} alt='game of life screenshot'></img> </a>


        <ProjectInfo>
        <Popup trigger = {<ButtonDiv> <AboutButton> What's This? </AboutButton> </ButtonDiv> } position ="top"  closeOnDocumentClick modal="true" repositionOnResize="true">
{close=>(
<Modal>
 {GOLInfo}
<CloseButton>
  <a onClick={close}>
    &times;
  </a>
  </CloseButton>
</Modal>

)}
       </Popup>
       
          </ProjectInfo>
        </ProjectCont>
        {/*game of life project end */}

        <ProjectCont>
        <a href="https://front-end-sss.now.sh/login" title="visit project">
   <ProjectTitle>Symphinity</ProjectTitle>
   
        </a>
          <TechUsed>ReactJS/Styled Components/NodeJS/DS </TechUsed>
        
        <a href="https://github.com/Spotify-Song-Suggester/Front-End-SSS" title="github repo">
         <img src={spotify} alt='spotify song suggestory screenshot'></img>
        </a>
        <ProjectInfo>
        <Popup trigger = {<ButtonDiv> <AboutButton> What's This? </AboutButton> </ButtonDiv>} position ="top" modal="true" repositionOnResize="true">
{close=>(
<Modal>
 {SpotifyInfo}
<CloseButton>
  <a onClick={close}>
    &times;
  </a>
  </CloseButton>
</Modal>

)}
       </Popup>
    </ProjectInfo>
        </ProjectCont>
        {/*SSS project end */}

        <ProjectCont>
        <a href="https://refugee-stories1119.netlify.com/"
         title="visit project">
           <ProjectTitle>Refugee Stories</ProjectTitle>
           
        </a>
          <TechUsed> HTML/CSS/LESS </TechUsed>
       
        <a href="https://github.com/Buid-Week-Refugee-Stories/Marketing-page" title="github repo">
       
        
        <img src={refugees_opt} alt='refugee stories website screenshot'></img>
        </a>
        <ProjectInfo>
        <Popup trigger = {<ButtonDiv> <AboutButton> What's This? </AboutButton> </ButtonDiv>} position ="top" modal="true" repositionOnResize="true">
{close=>(
<Modal>
 {RefugeeInfo}
<CloseButton>
  <a onClick={close}>
    &times;
  </a>
  </CloseButton>
</Modal>

)}
       </Popup>
        </ProjectInfo> 
        </ProjectCont> {/*refugees end */}

        <ProjectCont>
        <a href="https://reducer-todo-alpha.vercel.app/"
        title="visit project">
         <ProjectTitle>ToDo App</ProjectTitle>
  
        </a>
          <TechUsed> ReactJS/Redux/CSS </TechUsed>
    
        <a href="https://github.com/jTCode2408/reducer-todo" title="github repo">
          <img src={todo} alt='todo app screenshot'></img>
        </a>
        <ProjectInfo>
        <Popup trigger = {<ButtonDiv> <AboutButton> What's This? </AboutButton> </ButtonDiv>} position ="top" modal="true" repositionOnResize="true">
{close=>(
<Modal>
 {TodoInfo}
<CloseButton>
  <a onClick={close}>
    &times;
  </a>
  </CloseButton>
</Modal>

)}
       </Popup>
          
        </ProjectInfo>
        </ProjectCont> {/*todo project end */}

        <ProjectCont>
        <a href="https://github.com/jTCode2408/Intro-Python-II"
        title="visit project">
         <ProjectTitle>Adventure Game</ProjectTitle>
        </a>
          <TechUsed> Python </TechUsed>
      
        <a href="https://github.com/jTCode2408/Intro-Python-II" title="github repo">
         <img src={advGame_opt} alt='adventure game terminal screenshot'></img>
        </a>
        <ProjectInfo>
        <Popup trigger = {<ButtonDiv> <AboutButton> What's This? </AboutButton> </ButtonDiv>} position ="top" modal="true" repositionOnResize="true">
{close=>(
<Modal>
 {AdvInfo}
<CloseButton>
  <a onClick={close}>
    &times;
  </a>
  </CloseButton>
</Modal>

)}
       </Popup>
          
        </ProjectInfo>
        </ProjectCont>{/*Adv game project end */}

{/*TODO IDEA: add slider/carosel/next page to view more project */}

        <ProjectCont>
        <a href="https://jt-news.netlify.app/"
          class="project-link" 
          title="visit project">
         <ProjectTitle>Newfeed</ProjectTitle>
        
        </a>
          <TechUsed> JS/CSS/LESS </TechUsed>
        
        <a href="https://github.com/jTCode2408/Newsfeed-Components"
          class="github-link" title="github repo" >
          <img src={news_opt} alt='newsfeed site screenshot'></img>
        </a>
        <ProjectInfo>
        <Popup trigger = {<ButtonDiv> <AboutButton> What's This? </AboutButton> </ButtonDiv>} position ="top" modal="true" repositionOnResize="true">
{close=>(
<Modal>
 {NewsInfo}
<CloseButton>
  <a onClick={close}>
    &times;
  </a>
  </CloseButton>
</Modal>

)}
       </Popup>
        </ProjectInfo>
        </ProjectCont>{/*NEWSFEED project end */}

        <ProjectCont>
        <a href="https://react-github-user-card.jasmineterry.vercel.app/" 
        title="visit project">
         <ProjectTitle>Github Usercards</ProjectTitle>
        </a>
          <TechUsed> ReatJS/CSS </TechUsed>
        
        <a href="https://github.com/jTCode2408/React-Github-User-Card" title="github repo">
           <img src={GHCards} alt='newsfeed site screenshot'></img>
        </a>
        <ProjectInfo>
        <Popup trigger = {<ButtonDiv><AboutButton> What's This? </AboutButton></ButtonDiv>} position ="top" modal="true" repositionOnResize="true">
{close=>(
<Modal>
 {GHCardsInfo}
 <CloseButton
 onClick={() => {

   close();
 }}
>
<a onClick={close}>
    &times;
  </a>
</CloseButton>
 
</Modal>

)}
 
       </Popup>
      
        </ProjectInfo>
        </ProjectCont> {/*GH CARDS project end */}
      
      {/* pieces div holder end --- pieces cont end below*/}
      
      </PiecesCont> 
      <Footer> <Button> Start </Button> </Footer>
  
    </> //placement fragment end
  );
};

export default Pieces;



/////TODO: extract projects to own files, reduce file length