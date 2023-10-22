import './App.css';
import { lazy, Suspense, useEffect, useState } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";

import Mainpage from './layout/Mainpage.js';
import Nowplaying from './layout/Nowplaying';
import Popular from './layout/PopularMovie';
import img from './img/titleRogo.jpg'

function App() {
    
      useEffect(() => {
          
      }, []);

      const navigate = useNavigate();

    return (
      /*
       * 사이드 메뉴바
       */

      <div className="App">
        <Navbar bg="#101322" data-bs-theme="light">
          <Container>
            <Navbar.Brand href="/">
              <h1>Movie Rec</h1>
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link
                onClick={() => {
                  navigate("/now");
                }}
              >
                NowPlaying
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  navigate("/popular");
                }}
              >
                Popular
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <Suspense fallback={<div>Loaidng....</div>}>
          <Routes>
            <Route path="/" element={<Mainpage />} />
            <Route path="/now" element={<Nowplaying />} />
            <Route path="/popular" element={<Popular />} />
          </Routes>
        </Suspense>
      </div>
    );
}

export default App;
