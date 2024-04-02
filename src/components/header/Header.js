import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function Header() {
    const navigate = useNavigate();
    return (
        <>
            <Navbar bg="light" expand="lg">
            <Navbar.Brand onClick={() => {navigate("/")}}>React SPA</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link onClick={() => {navigate("/")}}>Character List</Nav.Link>
                <Nav.Link onClick={() => {navigate("/character-location")}}>Location</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default Header