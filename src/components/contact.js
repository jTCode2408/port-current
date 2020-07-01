import React from 'react';
import styled from "styled-components";
import {Route, Link} from 'react-router-dom';
import { faHdd} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Contact =()=>{
    return(
        <div className='contact'>
        <Link to ='/'><h2> <FontAwesomeIcon icon={faHdd}/> My Computer </h2> </Link>
            <h2>Get In Touch!</h2>
        </div>
    )
}


export default Contact