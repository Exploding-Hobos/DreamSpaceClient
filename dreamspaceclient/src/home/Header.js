import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

const Header = () => {
    return (
        <header>
            <Navbar className="header">
                <NavbarBrand href="/">DReam SPace</NavbarBrand>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="https://github.com/exploding-hobos/react-app">
                                Github
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
        </header>
    );
};

export default Header;