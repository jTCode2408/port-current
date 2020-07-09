import React from 'react';
import './App.css';
import Main from './components/main';
import {Route, Switch} from 'react-router-dom';
import Skills from './components/skills';
import Pieces from './components/pieces';
import Contact from './components/contact';
import Resume from './components/resume';
import {AppHeader, StyledSocial, SocialList, SocialLinks} from './styles';
import {useClippy} from 'use-clippy-now'
import Socials from './components/socials';


function App() {
  const withClippy = useClippy('Clippy') 
  
  return (
    <div className="App">
      <AppHeader>
        <h1>Jasmine Terry</h1>
        <h1>Full Stack Developer</h1>
       

      </AppHeader>
      <Socials/>
<Switch>
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


      </Switch>
      </div>
   
  );
}

export default App;
