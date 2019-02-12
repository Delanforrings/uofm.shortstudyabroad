import React, { Component } from 'react';
import { MDBContainer, Footer} from 'mdbreact';
import './UofMFooter.css'

class UofMFooter extends React.Component{
    render () {
        return (
            <Footer id="UofMFooter">
                <div className="UofMFooter FooterPos text-center py-3">
                    <MDBContainer fluid>
                        &copy; {new Date().getFullYear()} Regents of the University of Minnesota. All rights reserved. The University of Minnesota is an equal opportunity educator and employer:{" "}
                        <a href="https://privacy.umn.edu/" className="pStatement"> Privacy Statment </a>
                    </MDBContainer>
                </div>
            </Footer>
        )
    }
}

export default UofMFooter;