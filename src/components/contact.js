import React, {useState} from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { faWindowRestore, faWindowMinimize, faWindowClose, faHdd} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ComputerHead, IconsBar, ExitBar } from '../styles'


const Contact =()=>{


    return(
        <div className='contact'>
        <ComputerHead>
          <Link to= '/'><h2> <FontAwesomeIcon icon={faHdd}/> My Computer </h2> </Link>
          <IconsBar>
          <FontAwesomeIcon icon={faWindowRestore} />
            <FontAwesomeIcon icon={faWindowMinimize} />
            <FontAwesomeIcon icon={faWindowClose} />
            </IconsBar>
            </ComputerHead>
            <div className = "exit-bar">
        <ExitBar> <span> File  Edit  View  Help </span> </ExitBar>
        </div>
        
            <h2>Get In Touch!</h2>

            <form className="contact-form" method="POST" action="/contact">
    <div className="form-field">
      <label htmlFor="name">
        <div className="label-content">Name:</div>
        <input type="text" name="name" required />
      </label>
    </div>

    <div className="form-field">
      <label htmlFor="email">
        <div className="label-content">Email:</div>
        <input type="email" name="email" required />
      </label>
    </div>

    <div className="form-field">
      <label htmlFor="message">
        <div className="label-content">Message:</div>
        <textarea className="stretch" name="message" rows="5" required />
      </label>
    </div>

    <button type="submit">Send</button>

    <div>
      { window.location.hash === '#success' &&
        <div id="success">
          <p>Your message has been sent!</p>
        </div>
      }
      { window.location.hash === '#error' &&
        <div id="error">
          <p>An error occured while submitting the form.</p>
        </div>
      }
    </div>
  </form>







        </div>
    )
}


// project idd: port-contact-282421
// API key: AIzaSyCMMyykPWQH9t13LWbdeeUkB3MJ7lyFGVQ


export default Contact