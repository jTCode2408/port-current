import React from 'react';
import './App.css';
import Main from './components/main';
import {Route, Switch} from 'react-router-dom';
import {isMobile} from 'react-device-detect';
import {useClippy} from 'use-clippy-now'

import Skills from './components/skills';
import Pieces from './components/pieces';
import Contact from './components/contact';
import History from './components/history';
import Socials from './components/socials';
import Header from './components/header';
import TouchContact from './components/touchContact';

import {AppHeader} from './styles';

function App() {
  const withClippy = useClippy('Clippy'); 
  

const detect_touch=()=>{
  if (isMobile){
  return <TouchContact/>
    
  } else {
    return <Contact/>
  }

}

  return (
    <Switch>
    <div className="App">
      <AppHeader>
      
<Header/>
      </AppHeader>
      <Socials/>

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
      <History/>
      </Route>

      <Route path ='/contact'>
    {detect_touch()} 
    
      </Route>


      </div>
      </Switch>
  );
}

export default App;
