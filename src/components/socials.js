import React from 'react';
import styled from 'styled-components';
import {StyledSocial, SocialLinks, SocialList} from '../styles';

const Socials =()=>{
return(
    <>
    <StyledSocial>
    <SocialList>
        <SocialLinks
          href="https://www.linkedin.com/in/jasmineterry92"> LinkedIn </SocialLinks>
      
        <SocialLinks href="https://Github.com/jTCode2408"> Github
        </SocialLinks>
      
        <SocialLinks href="mailto:jasmine.terry91@gmail.com" > Email </SocialLinks>

    </SocialList>
  </StyledSocial> {/*socials div end */}
</>

)


}

export default Socials