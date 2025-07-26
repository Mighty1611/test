import logo from './logo.svg';
import styled from 'styled-components';
import React, { useState } from 'react';

import { GlobalStyle } from './GlobalStyle';
import Header from './components/Header';
import Home from './components/Home'
// Style Component for Room Componenet
// styled.div makes it a div
function App() {
  return (
    <div className="App">
      <Header>      
      </Header>
      <Home/>
      <GlobalStyle/>
    </div>
  );
}



export default App;
