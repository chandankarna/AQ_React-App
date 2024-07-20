import React, { Component } from 'react';
import './Style.scss';
import {
    Container,
    Navbar,
    Nav
} from 'react-bootstrap';
import brand from '../../Icons/brand.png';
import { Link, useLocation } from 'react-router-dom'; // Import Link and useLocation from React Router

export class Navs extends Component {
    render() {
        return (
            <>
                <Navbar text-dark="true" fixed='top' expand="lg" className='nav-bar'>
                    <Container>
                        <Navbar.Brand href="/">
                            <img
                                src={brand}
                                alt='brand'
                                className=''
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbar-nav" />
                        <Navbar.Collapse id="navbar-nav">
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <NavLink to="/" label="Home" />
                                <NavLink to="/profile" label="Profile" />
                                <NavLink to="/invest" label="Investors" />
                                <NavLink to="/contact" label="Contact Us" />
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        );
    }
}

// Custom NavLink component
const NavLink = ({ to, label }) => {
    const location = useLocation();

    // Check if the current route matches the link's "to" prop
    const isActive = location.pathname === to;

    return (
        <Link to={to} className={isActive ? 'nav-link active' : 'nav-link'}>
            {label}
        </Link>
    );
};

export default Navs;
