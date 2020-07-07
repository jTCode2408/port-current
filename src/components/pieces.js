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

const Pieces = () => {
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
          <ul>
          <li> Story Squad is a web 'gaming' application to encourage reading, and writing for children grades 3-6 </li>
          <li> Collaborated with other Lambda students as part of a team of 5 full stack developers, working with a stakeholder over 7 weeks on ongoing project </li>
          <li> Contributed to creating dashboard and match-up pages for child users,  as well as increasing code climate score on both front and back end from a F to an A </li>
          <li> Solely responsible for front-end code cleanup by extracting repeated code from multiple files to create reusable components, as well as maintaining clear documentation </li>
          </ul>
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
          <ul> 
          <li> Adaptation of John Conway's 'Game Of Life'.</li>
          <li> Built using ReactJS, CSS, and Styled Components. </li>
          <li> Solely responsible for adopting rules based on Conway's original Game Of Life, application styling, and deployment </li>
          <li> Utilized React hooks and Immer dependency for state changes of cells, CSS to implement grid feature, and Styled Components for main styling </li>
          </ul>
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
<ul> 
   <li> Application to mimic a Spotify song suggester feature that allows users to visualize song features, add songs to their favorites and receive a list of recommendations.</li>
   <li> Contributed to cross functional team of front-end, back-end, data science, and machine learning students. </li>
   <li> Solely responsible for log-in, dashboard, recommened, and favorite songs list components by pulling data from an API created by my backend team member.</li>
   <li> Styling contributions across front-end. </li>
</ul>
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
          <ul>
            <li> Web application to help bring awareness to the refugee crisis. </li>
            <li> Contributed to team of 5 cross-functional full-stack and data science students. </li>
            <li> Solely responsible for design and creation of fully responsive 'landing' and 'about the team' pages. </li>
          </ul>
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
          <img src={todo} alt='todo app screenshot'></img>{/*TODO: add image link to gh */}
        </a>
        <ProjectInfo>
    
          <ul>
            <li> A straight forward to-do application for web. </li>
            <li> Solely responsible for creation of Todo app functionality such as adding and clearing tasks and styling. </li>
            <li> Implementation of Redux used for state handling </li>
          
          </ul>
        </ProjectInfo>
        </ProjectCont> {/*todo project end */}

        <ProjectCont>
        <a href="#"
          class="project-link"
        >
          <ProjectTitle> Adventure Game </ProjectTitle> {/*TODO: HOST/GET LIVE LINK/UPDATE*/}
        </a>
          <TechUsed> Python </TechUsed>
      
        <a href="https://github.com/jTCode2408/Intro-Python-II"
          class="github-link" >
          Repo {/*TODO: add image link to gh */}
        </a>
        <ProjectInfo>
          
          <ul>
            <li> An in terminal 'Adventure Game' that allows users to enter commands and travel to various rooms. </li>
            <li> Built with Python. </li>
            <li> Solely responsible for implementation of game by creating mini programs using classes, lists, and algorithms. </li>
            </ul>
        
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
          <ul>
            <li> Sample newspaper website </li>
            <li> Built with JS/LESS. </li>
            <li> Solely responsible for DOM manipulation for articles components, click events, and styling with LESS. </li>
          </ul>
          
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
          <ul>
          <li>Single page application to display Github followers. </li>
          <li> Built using ReactJS and styled with CSS. </li>  
           <li>Solely responsible for implementation by calling and displaying data from github API. </li> 

          </ul>
        </ProjectInfo>
        </ProjectCont> {/*GH CARDS project end */}
      
      {/* pieces div holder end --- pieces cont end below*/}
      </PiecesCont>
      
      <Footer> <Button> Start </Button> </Footer>
  
    </> //placement fragment end
  );
};

export default Pieces;
