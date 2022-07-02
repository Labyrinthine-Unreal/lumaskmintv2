import React, { useEffect, useState, useRef } from "react";
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { connect } from "./redux/blockchain/blockchainActions";
import { fetchData } from "./redux/data/dataActions";
import * as s from "./styles/globalStyles";
import styled from "styled-components";
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';

import About from './pages/about';
import Blogs from './pages/blogs';
import SignUp from './pages/signup';
import Contact from './pages/contact';
  
function App() {
return (
        <s.Container jc={"center"} ai={"center"} style={{ width: "100%" }}>
        {/* <img class="bolt" src="https://labyrinthineunreal.io/assets/images/backgrounds/pspf.jpg" alt="" loading="lazy"></img> */}
          
        <span
              style={{
                textAlign: "center",
              }}
            >
              <br />
              <StyledButton
                style={{
                  margin: "0px",
                }}
                onClick={(e) => {
                  window.open('../App', "_blank");
                }}
              >
                Land
              </StyledButton>
            </span>                
        </s.Container>    
);
}
  
export default App;