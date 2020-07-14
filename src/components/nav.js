import React, {useState} from 'react';
import {Route, Link, Switch} from 'react-router-dom';
import {Footer, Button, NavMenu, NavList, NavItem, NavSide, NavSideCont} from '../styles'
import { Dropdown } from 'semantic-ui-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowRestore, faWindowMinimize, faWindowClose, faHdd, faArchive, faFolder,  faToolbox, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

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
           <NavItem><Link to="/"> <FontAwesomeIcon size="2x" icon={faHdd}/> Desktop </Link> </NavItem>
           <NavItem><Link to="/projects"> <FontAwesomeIcon size="2x" icon={faFolder}  /> Documents </Link> </NavItem>
           <NavItem><Link to="/specs"> <FontAwesomeIcon size="2x" icon={faToolbox} /> Specs </Link> </NavItem>
           <NavItem><Link to="/history"> <FontAwesomeIcon size="2x"  icon={faArchive} /> History </Link> </NavItem>
           <NavItem><Link to="/contact"> <FontAwesomeIcon size="2x"  icon={faPaperPlane} /> Contact </Link> </NavItem>
       </NavList>

        </NavMenu>
}

<Footer>  
             <Button onClick={()=>{setOpen(!open)}}> Start </Button>
             <div>Time</div>
             </Footer>


    </div>


   
    
    

)}


export default Navigation;