import React from 'react';
import './App.css';
import Main from './components/main';
import {Route, Link} from 'react-router-dom';
import Skills from './components/skills';
import Pieces from './components/pieces';
import Contact from './components/contact';
import Resume from './components/resume';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Jasmine Terry</h1>
        <h1>Full Stack Developer</h1>
      </header>

        <Route exact path ='/'>
        <Main/>
        </Route>

      <Route path ='/projects'>
      <Pieces/>
      </Route>

      <Route path ='/specs'>
      <Skills/>
      </Route>
      <Route path ='/history'>
      <Resume/>
      </Route>
      <Route path ='/contact'>
      <Contact/>
      </Route>



      </div>
   
  );
}

export default App;
