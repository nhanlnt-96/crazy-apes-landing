import React from "react";
import {Container, Row} from "react-bootstrap";
import HeaderComp from "../header/HeaderComp";

const MainLayout = () => {
  return (
    <Container className="main-layout">
      <Row>
        <HeaderComp/>
      </Row>
    </Container>
  )
}

export default MainLayout;