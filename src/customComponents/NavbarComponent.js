import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logo.svg';

function NavbarComponent({ navLinks }) {
    return (
        <Navbar expand="lg" className="bg-body-tertiary py-3 fixed-top w-100">
            <Container>
                <Navbar.Brand className='d-flex justify-content-center align-items-center' href="#home">
                    <img alt="" src={logo} className="d-inline-block align-top navbarLogo me-1"/>{' '}
                    Matteo Migliarese
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    {navLinks.map((link) => (
                        <Nav.Link key={link.id} className='me-2 ms-2 ms-lg-0 my-2 my-lg-0 text-dark' href={link.href}>
                            <span className='me-2'>{link.icon}</span>
                            {link.title}
                        </Nav.Link>
                    ))}
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarComponent;
