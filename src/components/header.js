import React from 'react';
import Typical from 'react-typical';


const Header = ()=>{
    
return (
    <>
    <h1>Jasmine Terry</h1>
    <div>
        
<Typical steps={['Developer', 1000, 
'Technical Writer', 1000,
'Dog mom', 1000,
'Music lover',1000,
'Lifelong learner', 1000,]}
loop={1}
wrapper="H1"
/>
 
</div>
</>
)
}
export default Header;