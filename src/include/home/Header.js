import React, {Component} from 'react';
import {
    NavbarToggler,
    NavbarBrand,
    Nav,
    Navbar,
    Collapse,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';
import uuid from 'uuid';
import Logo from '../../assets/img/logo.png';



const headerIsLoggedIn = [
    {id:uuid(),href:'/','link':"How it Works"},
    {id:uuid(),href:'/dashboard','link':localStorage.getItem('name')},
];

const headerIsNotLoggedIn = [
    {id:uuid(),href:'/','link':"How it Works"},
    {id:uuid(),href:'/login','link':"Login"},
    {id:uuid(),href:'/register','link':"Register"},
]

class Header extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
          isOpen: false,
          isLoggedin:[]
        };
      }
      componentDidMount(){
          if(window.token){
              this.setState({
                isLoggedin:headerIsLoggedIn
              })
          }
          else{
            this.setState({
                isLoggedin:headerIsNotLoggedIn
            })
          }
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }


    render(){
        return (
            <React.Fragment>
                <Navbar color="light" light expand="md" className="header">
                    <Container>
                        <NavbarBrand href="/">
                            <img src={Logo} alt="Official Logo" className="header-main-logo"/>
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggle.bind(this)} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                               {
                                   this.state.isLoggedin.map(data => 
                                    <NavItem key={data.id}>
                                        <NavLink href={data.href} className="header-links">{data.link}</NavLink>
                                    </NavItem>

                                    
                                   )
                               }
                                
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </React.Fragment>
        );
    }
}


export default Header;