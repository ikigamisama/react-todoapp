import React, {Component} from 'react';
import {
    NavbarBrand,
    Nav,
    Navbar,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';
import LogoWhite from '../../assets/img/logo-white.png';

class Footer extends Component{

    render(){
        return (
            <React.Fragment>
                <Navbar color="light" light expand="md" className="footer">
                    <Container>
                        <NavbarBrand href="/">
                            <img src={LogoWhite} alt="Official Logo" className="header-main-logo"/>
                        </NavbarBrand>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="" className="footer-links">
                                    <i className="fa fa-facebook"></i>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/user/login" className="footer-links">
                                    <i className="fa fa-instagram"></i>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/user/register" className="footer-links">
                                    <i className="fa fa-github"></i>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/user/register" className="footer-links">
                                    <i className="fa fa-pinterest"></i>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/user/register" className="footer-links">
                                    <i className="fa fa-twitter"></i>
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Container>
                </Navbar>
            </React.Fragment>
        );
    }
}


export default Footer;