//'browser' projects page
import React from "react";
import {Link} from 'react-router-dom';
import { faWindowRestore, faWindowMinimize, faWindowClose, faHdd} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ComputerHead, IconsBar, ExitBar } from '../styles';
import GOL_opt from '../images/GOL_opt.png';
import spotifyOg from '../images/spotifyOg.png';
import refugees_opt from '../images/refugees_opt.png';
import news from '../images/news.png';
import todo from '../images/todo.png';
import SSDash from '../images/SSDash.png';


const Pieces = () => {
  return (
    <div className="pieces-cont">
       <ComputerHead>
          <Link to= '/'><h2> <FontAwesomeIcon icon={faHdd}/> My Computer </h2> </Link>
          
            </ComputerHead>
            <div className = "exit-bar">
        <ExitBar> <span> File  </span>
          <IconsBar>
          <FontAwesomeIcon icon={faWindowRestore} />
            <FontAwesomeIcon icon={faWindowMinimize} />
            <FontAwesomeIcon icon={faWindowClose} />
            </IconsBar> 
            </ExitBar>
        </div>
       
      <div className="pieces-head">
        <h2>Browser</h2>
        <h3>Browse my project selection:</h3>
      </div>
      <div class="story-squad">
      <a href="https://front-end-sss.now.sh/login"
          class="project-link" >
         <h4 class="project-title">StorySquad</h4>
        </a>
          <div class="tech-used">ReactJS/TypeScript/TypeORM/DS  </div>
        </div>
        <a href="https://github.com/Lambda-School-Labs/story-squad-fe"
          class="github-link">
          <img src={SSDash} alt='spotify song suggestory screenshot'></img>
        </a>
        <div class="project-info">
          <ul>
          <li> Story Squad is a web 'gaming' application to encourage reading, and writing for children grades 3-6 </li>
          <li> Collaborated with other Lambda students as part of a team of 5 full stack developers, working with a stakeholder over 7 weeks on ongoing project </li>
          <li> Contributed to creating dashboard and match-up pages for child users,  as well as increasing code climate score on both front and back end from a F to an A </li>
          <li> Solely responsible for front-end code cleanup by extracting repeated code from multiple files to create reusable components, as well as maintaining clear documentation </li>
          </ul>
        </div>{" "}
      <div className="pieces">
      <div className="life">
      <a href="https://game-of-life.jasmineterry.vercel.app/"
          class="project-link" >
          <h4 class="project-title">Game Of Life</h4>
        </a>
          <div class="tech-used">ReactJS/Styled Components</div>
        </div>
        <a class='gh-link' href = 'https://github.com/jTCode2408/game-of-life'>
      <img src ={GOL_opt} alt='game of life screenshot'></img> </a>
        <div class="project-info">
          <ul> 
          <li> Adaptation of John Conway's 'Game Of Life'.</li>
          <li> Built using ReactJS, CSS, and Styled Components. </li>
          <li> Solely responsible for adopting rules based on Conway's original Game Of Life, application styling, and deployment </li>
          <li> Utilized React hooks and Immer dependency for state changes of cells, CSS to implement grid feature, and Styled Components for main styling </li>
          </ul>
        </div>{" "}
        {/*game of life project end */}

        <div class="spotify-bw2">
        <a href="https://front-end-sss.now.sh/login"
          class="project-link" >
         <h4 class="project-title">Symphinity</h4>
        </a>
          <div class="tech-used">ReactJS/Styled Components/NodeJS/DS </div>
        </div>
        <a class='gh-link' href="https://github.com/Spotify-Song-Suggester/Front-End-SSS">
         <img src={spotifyOg} alt='spotify song suggestory screenshot'></img>
        </a>
        <div class="project-info">
<ul> 
   <li> Application to mimic a Spotify song suggester feature that allows users to visualize song features, add songs to their favorites and receive a list of recommendations.</li>
   <li> Contributed to cross functional team of front-end, back-end, data science, and machine learning students. </li>
   <li> Solely responsible for log-in, dashboard, recommened, and favorite songs list components by pulling data from an API created by my backend team member.</li>
   <li> Styling contributions across front-end. </li>
</ul>
        </div>{" "}
        {/*SSS project end */}

        <div class="refugee-stories">
        <a href="https://refugee-stories1119.netlify.com/"
          class="project-link" >
           <h4 class="project-title">Refugee Stories</h4>
        </a>
          <div class="tech-used">HTML/CSS/LESS</div>
        </div>
        <a class = 'gh-link' href="https://github.com/Buid-Week-Refugee-Stories/Marketing-page">
        <img src={refugees_opt} alt='refugee stories website screenshot'></img>
        </a>
        <div class="project-info">
          <ul>
            <li> Web application to help bring awareness to the refugee crisis. </li>
            <li> Contributed to team of 5 cross-functional full-stack and data science students. </li>
            <li> Solely responsible for design and creation of fully responsive 'landing' and 'about the team' pages. </li>
          </ul>
        </div> {/*refugees end */}

        <div class="todo-app">
        <a href="https://reducer-todo-alpha.vercel.app/"
          class="project-link" >
        <h4 class="project-title">To-Do App</h4>
        </a>
          <div class="tech-used">ReactJS/Redux/CSS</div>
        </div>
        <a href="https://github.com/jTCode2408/reducer-todo"
          class="github-link" >
          <img src={todo} alt='todo app screenshot'></img>{/*TODO: add image link to gh */}
        </a>
        <div class="project-info">
          
          <ul>
            <li> A straight forward to-do application for web. </li>
            <li> Solely responsible for creation of Todo app functionality such as adding and clearing tasks and styling. </li>
            <li> Implementation of Redux used for state handling </li>
          
          </ul>
        </div>{" "}
        {/*todo project end */}

        <div class="adventure">
        <a href="#"
          class="project-link"
        >
          <h4 class="project-title">Adventure Game</h4> {/*TODO: HOST/GET LIVE LINK/UPDATE*/}
        </a>
          <div class="tech-used">Python</div>
        </div>
        <a href="https://github.com/jTCode2408/Intro-Python-II"
          class="github-link" >
          Repo {/*TODO: add image link to gh */}
        </a>
        <div class="project-info">
          
          <ul>
            <li> An in terminal 'Adventure Game' that allows users to enter commands and travel to various rooms. </li>
            <li> Built with Python. </li>
            <li> Solely responsible for implementation of game by creating mini programs using classes, lists, and algorithms. </li>
            </ul>
        
        </div>{" "}
        {/*Adv game project end */}

        <p> SEE MORE</p>
{/*TODO: add slider/carosel/next page to view more project */}

        <div class="newsfeed">
        <a href="https://jt-news.netlify.app/"
          class="project-link" >
          <h4 class="project-title">NewsFeed</h4>
        </a>
          <div class="tech-used">JS/CSS/LESS</div>
        </div>
        <a href="https://github.com/jTCode2408/Newsfeed-Components"
          class="github-link" >
          <img src={news} alt='newsfeed site screenshot'></img>{/*TODO: add image link to gh */}
        </a>
        <div class="project-info">
          <ul>
            <li> Sample newspaper website </li>
            <li> Built with JS/LESS. </li>
            <li> Solely responsible for DOM manipulation for articles components, click events, and styling with LESS. </li>
          </ul>
          
        </div>{" "}
        {/*NEWSFEED project end */}

        <div class="gh-cards">
        <a href="https://react-github-user-card.jasmineterry.vercel.app/"
          class="project-link" >
            <h4 class="project-title">Github Usercards</h4> {/*TODO: UPDATE STYLES*/}
        </a>
          <div class="tech-used">ReatJS/CSS</div>
        </div>
        <a href="https://github.com/jTCode2408/React-Github-User-Card"
          class="github-link" >
         Repo {/*TODO: add image link to gh */}
        </a>
        <div class="project-info">
          
          <p>Single page application to display Github followers.
            Built using ReactJS and styled with CSS.
            Solely responsible for implementation by calling and displaying data from github API. 

          </p>
        </div>{" "}
        {/*GH CARDS project end */}
      </div>{" "}
      {/* pieces div holder end --- pieces cont end below*/}
    </div>
  );
};

export default Pieces;
