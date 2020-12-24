import React from 'react';
import Typical from 'react-typical';
import {Typing} from '../styles';

const Header = ()=>{
    
return (
    <>
    <h1>Jasmine Terry</h1>

        <Typing>
<Typical steps={['Web Dev', 1500, 
'Networking Student', 1500,
'Dog Mom', 1500,
'Music Lover',1500,
'Constant Learner', 1500]}
loop={1}
wrapper="H1"
/>
 
</Typing>
</>
)
}
export default Header;