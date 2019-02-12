import React from 'react';
import { MDBContainer, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBIcon, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBBadge } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import UofMicon from "./Asset 1@4x.png";
import "./NavBarUofM_Home.css";

class NavbarPage extends React.Component {
    state = {
        isOpen: false
    };

    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }


    render() {
        const bgPink = {backgroundColor: '#862633'}
        return(
            <div id="UofMNav">
                <header>
                    <MDBNavbar style={bgPink} dark expand="md" scrolling fixed="top">
                        <MDBContainer>
                            <MDBNavbarBrand href="/">
                                <strong> <img src={UofMicon} height="45vh" alt="" /></strong>
                            </MDBNavbarBrand>
                            <MDBNavbarToggler onClick={this.toggleCollapse} />
                            <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                                <MDBNavbarNav right>

                                    <MDBNavItem>
                                        <MDBNavLink to="/UofM_Programs" className="UofMtabs">Programs</MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink to="/UofM_Home" className="UofMtabs">Getting Started</MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink to="/UofM_About" className="UofMtabs">About Us</MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink to="/UofM_Contact" className="UofMtabs">Contact</MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBDropdown>
                                            <MDBDropdownToggle nav caret className="UofMtabs_d">
                                                <div className="d-md-inline" >More</div>
                                            </MDBDropdownToggle>
                                            <MDBDropdownMenu right>
                                                <MDBDropdownItem href="/UofM_Policies" className="UofMtabs_dd"><h3>Polices</h3></MDBDropdownItem>
                                                <MDBDropdownItem href="/UofM_Funding" className="UofMtabs_dd">
                                                    <h3>Funding</h3>
                                                </MDBDropdownItem>
                                                <MDBDropdownItem href="/UofM_R&C" className="UofMtabs_dd">
                                                    <h3>Registration & Credit</h3>
                                                </MDBDropdownItem>
                                                <MDBDropdownItem href="/UofM_StuStatus" className="UofMtabs_dd">
                                                    <h3>Student Status</h3>
                                                </MDBDropdownItem>
                                                <MDBDropdownItem href="/UofM_Resources" className="UofMtabs_dd">
                                                    <h3>Resources</h3>
                                                </MDBDropdownItem>
                                                <MDBDropdownItem href="#!" className="UofMtabs_dd">
                                                    <h3>Exit</h3>
                                                </MDBDropdownItem>
                                            </MDBDropdownMenu>
                                        </MDBDropdown>
                                    </MDBNavItem>
                                </MDBNavbarNav>
                            </MDBCollapse>
                        </MDBContainer>

                    </MDBNavbar>
                </header>
            </div>
        );
    }
}

export default NavbarPage;