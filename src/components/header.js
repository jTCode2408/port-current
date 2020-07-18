import React from 'react';
import Typical from 'react-typical';
import {Typing} from '../styles';

const Header = ()=>{
    
return (
    <>
    <h1>Jasmine Terry</h1>

        <Typing>
<Typical steps={['Web Dev', 1000, 
'Tech Writer', 1000,
'Dog Mom', 1000,
'Music Lover',1000,
'Full Stack Dev', 1000,]}
loop={1}
wrapper="H1"
/>
 
</Typing>
</>
)
}
export default Header;