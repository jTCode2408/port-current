//resume//history page
import React from 'react';
import {Route, Link} from 'react-router-dom';
import Main from './main';
import { faWindowRestore, faWindowMinimize, faWindowClose, faHdd, faNetworkWired, faArchive, faEnvelopeOpenText, faToolbox } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Resume = () => {
    return (
        <div>
           <Link to ='/'><h2> <FontAwesomeIcon icon={faHdd}/> My Computer </h2> </Link>
            
            <h2>Resume</h2>
        </div>
    )
}

export default Resume;
