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
import Header from './components/header';
import TouchContact from './components/touchContact';

function App() {
  const withClippy = useClippy('Clippy'); 
  function touch_screen() { 
    return ( 'ontouchstart' in window ) ||  
           ( navigator.maxTouchPoints > 0 ) || 
           ( navigator.msMaxTouchPoints > 0 ); 
} 

const detect_touch=()=>{
  if (touch_screen()){
  return <Contact/>
    
  } else {
    return <TouchContact/>
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
      <Resume/>
      </Route>

      <Route path ='/contact'>
    {detect_touch()}
      </Route>


      </div>
      </Switch>
  );
}

export default App;
