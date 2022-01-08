import React from "react";
import {Container, Row} from "react-bootstrap";
import BannerComp from "../banner/BannerComp";
import AboutComp from "../about/AboutComp";
import RoadmapComp from "../roadmap/RoadmapComp";
import PreSaleComp from "../preSale/PreSaleComp";

const MainLayout = () => {
  return (
    <Container fluid className="main-layout">
      <Row id="home">
        <BannerComp/>
      </Row>
      <Row id="about">
        <AboutComp/>
      </Row>
      <Row id="roadmap">
        <RoadmapComp/>
      </Row>
      <Row>
        <PreSaleComp/>
      </Row>
    </Container>
  )
}

export default MainLayout;