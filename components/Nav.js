import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';

export default function NavBar(props) {
    return (
        <Navbar bg="var(--secondary)" expand="lg" sticky="top" className="navbar">
            <Navbar.Brand href="/" style={{textAlign: "left"}}>
                <img src={props.logo} style={{maxHeight: "55px"}}/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
                <i className="fas fa-bars" style={{color: "#fff"}}></i>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                    <Fade top><Nav.Item><Nav.Link href="/virtual-reality">Virtual reality</Nav.Link></Nav.Item></Fade>
                    <Fade top delay={100}><Nav.Item><Nav.Link href="/augmented-reality">Augmented reality</Nav.Link></Nav.Item></Fade>
                    <Fade top delay={150}><Nav.Item><Nav.Link href="/mixed-reality">Mixed reality</Nav.Link></Nav.Item></Fade>
                    <Fade top delay={200}><Nav.Item><Nav.Link href="/mobile-games">Game dev</Nav.Link></Nav.Item></Fade>
                    <Fade top delay={250}><Nav.Item><Nav.Link href="/about"><button className="btn">Let’s get talking</button></Nav.Link></Nav.Item></Fade>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}