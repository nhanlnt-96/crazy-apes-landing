import React from "react";
import {Container, Row} from "react-bootstrap";
import BannerComp from "../banner/BannerComp";
import AboutComp from "../about/AboutComp";
import RoadmapComp from "../roadmap/RoadmapComp";
import PreSaleComp from "../preSale/PreSaleComp";
import SpecialApesComp from "../specialApes/SpecialApesComp";
import LegendaryComp from "../legendary/LegendaryComp";
import TeamComp from "../team/TeamComp";

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
      <Row>
        <SpecialApesComp/>
      </Row>
      <Row>
        <LegendaryComp/>
      </Row>
      <Row id="team">
        <TeamComp/>
      </Row>
    </Container>
  )
}

export default MainLayout;