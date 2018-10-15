import React, {Component} from 'react';
import {
    Nav,
    NavbarBrand,
    Navbar,
    NavLink,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Container
} from 'reactstrap';
import Logo from '../../assets/img/logo.png';



class Header extends Component{
    render(){
        return (
            <React.Fragment>
                <Navbar color="light" light expand="md" className="header">
                    <Container>
                        <NavbarBrand href="/">
                            <img src={Logo} alt="Official Logo" className="header-main-logo"/>
                        </NavbarBrand>
                         <Nav className="ml-auto" navbar>
                          <NavItem>
                            <NavLink href="/dashboard/create">Create Todo</NavLink>
                          </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                  {window.app.user}
                                </DropdownToggle>
                                <DropdownMenu right>
                                  <DropdownItem>
                                     <NavLink href="/dashboard">Dashboard</NavLink>
                                  </DropdownItem>
                                  <DropdownItem divider />
                                  <DropdownItem>
                                    <NavLink href="/logout">Logout</NavLink>
                                  </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                         </Nav>
                    </Container>
                </Navbar>
            </React.Fragment>
        );
    }
}


export default Header;