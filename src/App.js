import React from 'react';
import { Container, TopWrapper } from './style'
import Logo from './images/logo.png'
import Search from './images/search.png'
import Read from './component/read/'
import Page from './images/page.png'

function App() {
  return (
   <Container>
     <TopWrapper>
       <img src={Logo} alt="" className="logo"/>
       <img src={Search} alt="" className="search"/>
     </TopWrapper>
     <Read />
     <img src={Page} alt="" className="page"/>
   </Container>
  );
}

export default App;
