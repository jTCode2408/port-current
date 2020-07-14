import React, {useState} from 'react';
import {Route, Link, Switch} from 'react-router-dom';
import {Footer, Button, NavMenu, NavList, NavItem, NavSide, NavSideCont} from '../styles'
import { Dropdown } from 'semantic-ui-react'

const Navigation = ()=>{
const [open, setOpen] = useState(false);


return(
    <div className = "nav-cont">

             {open &&

      <NavMenu>
          <NavSideCont>
<NavSide> Terrys 98 </NavSide>
</NavSideCont>
       <NavList>
           <NavItem><Link to="/"> Desktop </Link> </NavItem>
           <NavItem><Link to="/projects"> Documents </Link> </NavItem>
           <NavItem><Link to="/specs"> Specs </Link> </NavItem>
           <NavItem><Link to="/history"> History </Link> </NavItem>
           <NavItem><Link to="/contact"> Contact </Link> </NavItem>
       </NavList>

        </NavMenu>
}

<Footer>  
             <Button onClick={()=>{setOpen(!open)}}> Start </Button>
             </Footer>


    </div>


   
    
    

)}


export default Navigation;