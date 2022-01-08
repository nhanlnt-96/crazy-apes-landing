import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import './HeaderComp.scss';
import {headerMenu} from "../../configs/headerMenu";

const HeaderComp = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="header-comp">
      <Container className="header-comp-container">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="header-comp-toggle-custom"/>
        <Navbar.Collapse id="responsive-navbar-nav" className="header-comp-menu">
          <Navbar className="me-auto header-comp-menu-items d-flex justify-content-evenly align-items-center">
            {
              headerMenu.map((val, index) => (
                <Nav.Link key={index} href={val.path} className="item">{val.label}</Nav.Link>
              ))
            }
          </Navbar>
          <Nav className="header-comp-button">
            <div className="button-container d-flex justify-content-center align-items-center">
              <button className="button-item d-flex flex-column justify-content-center align-items-center">
                <span className="button-name">connect</span>
                <span className="button-name">wallet</span>
              </button>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderComp;