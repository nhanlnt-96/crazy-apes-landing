import React from "react";
import {Container, Row} from "react-bootstrap";
import BannerComp from "../banner/BannerComp";

const MainLayout = () => {
  return (
    <Container fluid className="main-layout" style={{overflow: "hidden"}}>
      <Row id="home">
        <BannerComp/>
      </Row>
    </Container>
  )
}

export default MainLayout;