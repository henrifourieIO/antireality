import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link';

export default function NavBar(props) {
    return (
        <Navbar bg="var(--secondary)" expand="lg" sticky="top" className="navbar">
            <Navbar.Brand style={{ textAlign: "left" }}>
                <Link href="/"><img src={props.logo} style={{ maxHeight: "55px" }} /></Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" style={{border: "0", padding: "0.2em 0.5em"}}>
                <FontAwesomeIcon icon={faBars} style={{ color: "var(--primary)", width: "20px"}} />
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                    <Nav.Item>
                        <Link href="/virtual-reality">Virtual reality</Link>
                    </Nav.Item>
                    
                    <Nav.Item>
                        <Link href="/augmented-reality">Augmented reality</Link>
                    </Nav.Item>
                    
                    <Nav.Item>
                    <Link href="/mixed-reality">Mixed reality</Link>
                    </Nav.Item>
                    
                    <Nav.Item>
                    <Link href="/mobile-games">Game dev</Link>
                    </Nav.Item>
                    
                    <Nav.Item>
                    <Link href="/about">About</Link>
                    </Nav.Item>
                    
                    
                        <Nav.Item><Link href="/contact">
                            <button className="btn">Let’s get talking</button>
                            </Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}