//'browser' projects page
import React from "react";
import {Route, Link} from 'react-router-dom';
import Main from './main';
import { faWindowRestore, faWindowMinimize, faWindowClose, faHdd, faNetworkWired, faArchive, faEnvelopeOpenText, faToolbox } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Pieces = () => {
  return (
    <div className="pieces-cont">
      
        <Link to ='/'><h2> <FontAwesomeIcon icon={faHdd}/> My Computer </h2> </Link>
       
      <div className="pieces-head">
        <h2>Browser</h2>
        <h3>Browse my project selection:</h3>
      </div>
      <div class="story-squad">
          <div class="tech-used">ReactJS/TypeORM/Python</div>
          <h4 class="project-title">StorySquad</h4>
        </div>
        <a href="https://front-end-sss.now.sh/login"
          title="Project Link"
          class="project-link"
        >
          Site Link
        </a>
        <div class="project-info">
          <p>
          Story Squad is a web 'gaming' application to encourage reading, and writing for children grades 3-6
Built using ReactJS, Typescript, TypeORM, and Material UI, and incorporating data science
Collaborated with other Lambda students as part of a team of 5 full stack developers, working with a stakeholder over 7 weeks on ongoing project
Contributed to creating dashboard and match-up pages for child users,  as well as increasing code climate score on both front and back end from a F to an A
          </p>
        </div>{" "}
      <div className="pieces">
      <div className="life">
          <div class="tech-used">RectJS</div>
          <h4 class="project-title">Game Of Life</h4>
        </div>
        <a href="https://game-of-life.jasmineterry.vercel.app/"
          title="Project Link"
          class="project-link"
        >
          Site Link
        </a>
        <div class="project-info">
          <p> Adaptation of John Conway's 'Game Of Life'.
Built using ReactJS , CSS, and Styled Components
Solely responsible for adopting rules based on Conway's original Game Of Life, application styling, and deployment
Utilized React hooks and Immer dependency for state changes of cells, CSS to implement grid feature, and Styled Components for main styling
          </p>
        </div>{" "}
        {/*SSS project end */}
        <div class="spotify-bw2">
          <div class="tech-used">ReactJS</div>
          <h4 class="project-title">Symphinity</h4>
        </div>
        <a href="https://front-end-sss.now.sh/login"
          title="Project Link"
          class="project-link"
        >
          Site Link
        </a>
        <div class="project-info">
          <p>
          Application to mimic a Spotify song suggester add on feature that allows users to visualize song features as well as add songs to their favorites and receive a list of recommendations.
Built using ReactJS/Styled Components/NodeJS
Contributed to cross functional team of front-end, back-end, data science, and machine learning students.
Solely responsible for implementing registration form, dashboard component, recommended songs component, as well as team styling contributions across front-end.
            As a junior React developer, I was tasked with the log-in
            form creation, as well as the dashboard, recommened, and favorite
            songs list components by pulling data from an api created by my backend team member.
          </p>
        </div>{" "}
        {/*SSS project end */}
        <div class="refugee-stories">
          <div class="tech-used">Web UI</div>
          <h4 class="project-title">Refugee Stories</h4>
        </div>
        <a href="https://refugee-stories1119.netlify.com/"
          title="Project Link"
          class="project-link"
        >
          Site Link
        </a>
        <div class="project-info">
          <p>
          Web application project to help bring awareness to the refugee crisis.
Built using HTML/CSS/LESS
Contributed to team of 5 cross-functional full-stack and data science students.
Solely responsible for design and creation of 'landing' page and 'about the team' page.
            Completed and fully responsive, using HTML and CSS(LESS)
          </p>
        </div>
      </div>{" "}
      {/* pieces div holder end --- pieces cont end below*/}
    </div>
  );
};

export default Pieces;
