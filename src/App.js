import logo from './logo.svg';
import styled from 'styled-components';
import React, { useState } from 'react';
import { BrowserRouter , Routes, Route} from 'react-router-dom';


import { GlobalStyle } from './GlobalStyle';
import Header from './components/Header';
import Home from './components/Home';
import Movie from './components/Movie';
import NotFound from './components/NotFound';


// Style Component for Room Componenet
// styled.div makes it a div
const App = () => (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:movieId" element={<Movie/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      <GlobalStyle/>
    </BrowserRouter>
);



export default App;