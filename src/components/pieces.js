//'browser' projects page
import React from "react";
import {Link} from 'react-router-dom';
import { faWindowRestore, faWindowMinimize, faWindowClose, faHdd} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ComputerHead, IconsBar, ExitBar, Footer, Button, PiecesCont, PiecesHead, ProjectInfo, ProjectTitle, TechUsed, ProjectCont, BrowserHead } from '../styles';
import GOL_opt from '../images/GOL_opt.png';
import spotifyOg from '../images/spotifyOg.png';
import refugees_opt from '../images/refugees_opt.png';
import news_opt from '../images/news_opt.jpg';
import todo from '../images/todo.png';
import SSDash from '../images/SSDash.png';
import GHCards from '../images/GHCards.jpg';
import advGame_opt from '../images/advGame_opt.jpg';
import {useClippy} from 'use-clippy-now'
import {SSInfo, GOLInfo, AdvInfo, GHCardsInfo, NewsInfo, TodoInfo, SpotifyInfo, RefugeeInfo} from './helpers'

const Pieces = () => {
  const withClippy = useClippy('Clippy')
 

  return (
<>

    <ExitBar> <span> Browser  </span>
      <IconsBar>
      <FontAwesomeIcon icon={faWindowRestore} />
        <FontAwesomeIcon icon={faWindowMinimize} />
        <FontAwesomeIcon icon={faWindowClose} />
        </IconsBar> 
        </ExitBar>
    <ComputerHead>
      <Link to= '/'><h2> <FontAwesomeIcon icon={faHdd}/> My Computer </h2> </Link>
      
        </ComputerHead>

      <PiecesHead>
        <BrowserHead>
     
        <h3>BROWSE PROJECTS:</h3>
        </BrowserHead>
      </PiecesHead >

      <PiecesCont>
     
      <ProjectCont>
      <a href="https://front-end-sss.now.sh/login"
          class="project-link" >
         <ProjectTitle>StorySquad</ProjectTitle>
        </a>
          <TechUsed>ReactJS/TypeScript/TypeORM/DS  </TechUsed>
    
        <a href="https://github.com/Lambda-School-Labs/story-squad-fe"
          class="github-link">
          <img src={SSDash} alt='spotify song suggestory screenshot'></img>
        </a>
        <ProjectInfo>
        <button onClick={() => withClippy(clippy => clippy.speak(SSInfo))}>
        What's This?
      </button>
          
        </ProjectInfo>
        </ProjectCont>

      
      <ProjectCont>
      <a href="https://game-of-life.jasmineterry.vercel.app/"
          class="project-link" >
          <ProjectTitle> Game Of Life </ProjectTitle>
        </a>
          <TechUsed> ReactJS/Styled Components </TechUsed>
       
        <a class='gh-link' href = 'https://github.com/jTCode2408/game-of-life'>
      <img src ={GOL_opt} alt='game of life screenshot'></img> </a>
        <ProjectInfo>
        <button onClick={() => withClippy(clippy => clippy.speak(GOLInfo))}>
        What's This?
      </button>
          </ProjectInfo>
        </ProjectCont>
        {/*game of life project end */}

        <ProjectCont>
        <a href="https://front-end-sss.now.sh/login"
          class="project-link" >
         <ProjectTitle> Symphinity </ProjectTitle>
        </a>
          <TechUsed>ReactJS/Styled Components/NodeJS/DS </TechUsed>
        
        <a class='gh-link' href="https://github.com/Spotify-Song-Suggester/Front-End-SSS">
         <img src={spotifyOg} alt='spotify song suggestory screenshot'></img>
        </a>
        <ProjectInfo>
        <button onClick={() => withClippy(clippy => clippy.speak(SpotifyInfo))}>
        What's This?
      </button>
    </ProjectInfo>
        </ProjectCont>
        {/*SSS project end */}

        <ProjectCont>
        <a href="https://refugee-stories1119.netlify.com/"
          class="project-link" >
           <ProjectTitle> Refugee Stories </ProjectTitle>
        </a>
          <TechUsed> HTML/CSS/LESS </TechUsed>
       
        <a class = 'gh-link' href="https://github.com/Buid-Week-Refugee-Stories/Marketing-page">
        <img src={refugees_opt} alt='refugee stories website screenshot'></img>
        </a>
        <ProjectInfo>
        <button onClick={() => withClippy(clippy => clippy.speak(RefugeeInfo))}>
        What's This?
      </button>
        </ProjectInfo> 
        </ProjectCont> {/*refugees end */}

        <ProjectCont>
        <a href="https://reducer-todo-alpha.vercel.app/"
          class="project-link" >
        <ProjectTitle> To-Do App </ProjectTitle>
        </a>
          <TechUsed> ReactJS/Redux/CSS </TechUsed>
    
        <a href="https://github.com/jTCode2408/reducer-todo"
          class="github-link" >
          <img src={todo} alt='todo app screenshot'></img>
        </a>
        <ProjectInfo>
        <button onClick={() => withClippy(clippy => clippy.speak(TodoInfo))}>
        What's This?
      </button>
          
        </ProjectInfo>
        </ProjectCont> {/*todo project end */}

        <ProjectCont>
        <a href="https://github.com/jTCode2408/Intro-Python-II"
          class="project-link"
        >
          <ProjectTitle> Adventure Game </ProjectTitle> 
        </a>
          <TechUsed> Python </TechUsed>
      
        <a href="https://github.com/jTCode2408/Intro-Python-II"
          class="github-link" >
         <img src={advGame_opt} alt='adventure game terminal screenshot'></img>
        </a>
        <ProjectInfo>
        <button onClick={() => withClippy(clippy => clippy.speak(AdvInfo))}>
        What's This?
      </button>
          
        </ProjectInfo>
        </ProjectCont>{/*Adv game project end */}

{/*TODO IDEA: add slider/carosel/next page to view more project */}

        <ProjectCont>
        <a href="https://jt-news.netlify.app/"
          class="project-link" >
          <ProjectTitle> NewsFeed </ProjectTitle>
        </a>
          <TechUsed> JS/CSS/LESS </TechUsed>
        
        <a href="https://github.com/jTCode2408/Newsfeed-Components"
          class="github-link" >
          <img src={news_opt} alt='newsfeed site screenshot'></img>
        </a>
        <ProjectInfo>
        <button onClick={() => withClippy(clippy => clippy.speak(NewsInfo))}>
        What's This?
      </button>
          
        </ProjectInfo>
        </ProjectCont>{/*NEWSFEED project end */}

        <ProjectCont>
        <a href="https://react-github-user-card.jasmineterry.vercel.app/"
          class="project-link" >
            <ProjectTitle> Github Usercards </ProjectTitle>
        </a>
          <TechUsed> ReatJS/CSS </TechUsed>
        
        <a href="https://github.com/jTCode2408/React-Github-User-Card"
          class="github-link" >
           <img src={GHCards} alt='newsfeed site screenshot'></img>
        </a>
        <ProjectInfo>
        <button onClick={() => withClippy(clippy => clippy.speak(GHCardsInfo))}>
        What's This?
      </button>
        </ProjectInfo>
        </ProjectCont> {/*GH CARDS project end */}
      
      {/* pieces div holder end --- pieces cont end below*/}
      </PiecesCont>
      
      <Footer> <Button> Start </Button> </Footer>
  
    </> //placement fragment end
  );
};

export default Pieces;
