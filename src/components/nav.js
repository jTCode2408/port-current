import React, {useState} from 'react';
import {Route, Link, Switch} from 'react-router-dom';
import {Footer, Button, NavMenu, NavList} from '../styles'
import { Dropdown } from 'semantic-ui-react'

const Navigation = ()=>{
const [open, setOpen] = useState(false);


return(
    <div className = "nav-cont">

             {open &&
      <NavMenu>

       <NavList>
           <li><Link to="/"> Desktop </Link> </li>
           <li><Link to="/projects"> Documents </Link> </li>
           <li><Link to="/specs"> Specs </Link> </li>
           <li><Link to="/history"> History </Link> </li>
           <li><Link to="/contact"> Contact </Link> </li>
       </NavList>

        </NavMenu>
}

<Footer>  
             <Button onClick={()=>{setOpen(!open)}}> Start </Button>
             </Footer>


    </div>


   
    
    

)}


export default Navigation;