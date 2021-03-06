import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Footer, Button, NavMenu, NavList, NavItem, NavSide, NavSideCont, Time} from '../styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHdd, faArchive, faFolder,  faToolbox, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const Navigation = ()=>{
const [open, setOpen] = useState(false);


return(
    <>
             {open &&

      <NavMenu>
          <NavSideCont>
<NavSide> Terrys 98 </NavSide>
</NavSideCont>
       <NavList>
           <NavItem><Link to="/"> <FontAwesomeIcon size="2x" icon={faHdd}/> Desktop </Link> </NavItem>
           <NavItem><Link to="/projects"> <FontAwesomeIcon size="2x" icon={faFolder}  />  Documents </Link> </NavItem>
           <NavItem><Link to="/specs"> <FontAwesomeIcon size="2x" icon={faToolbox} />  Specs </Link> </NavItem>
           <NavItem><Link to="/history"> <FontAwesomeIcon size="2x"  icon={faArchive} /> History </Link> </NavItem>
           <NavItem><Link to="/contact"> <FontAwesomeIcon size="2x"  icon={faPaperPlane} /> Contact </Link> </NavItem>
       </NavList>

        </NavMenu>
}

<Footer>  
             <Button onClick={()=>{setOpen(!open)}}> Start </Button>

             <Time> {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} </Time>
             </Footer>

    </>

    

)}


export default Navigation;