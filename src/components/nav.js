import React from 'react';
import {Route, Link, Switch} from 'react-router-dom';
import {Footer, Button} from '../styles'

const Navigation = ()=>{
return(
    <div className = "nav-cont">

         <Footer>  
             <Button> Start
        <div className="nav">
            <div> <Link to="/"> Desktop </Link> </div>
            <div> <Link to ="/projects"> Browser </Link> </div>
            <div>  <Link to ="/specs"> Specs </Link></div>
            <div> <Link to="/history"> History </Link> </div>
            <div> <Link to="/contact"> Contact </Link> </div>
        </div>
        </Button>
 </Footer>


    </div>
    

)}


export default Navigation;