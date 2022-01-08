import React from 'react';
import {Container, Row} from "react-bootstrap";
import './LegendaryComp.scss';
import MainImg from '../../assets/imgs/legendaryImg.png';
import ImgFooter from '../../assets/imgs/legendaryImgFooter.svg';

const LegendaryComp = () => {
  return (
    <Container fluid className="legendary-comp">
      <Container className="legendary-comp-container">
        <Row className="legendary-comp-content">
          <div className="sub-bg"/>
          <h6 className="content">This is the legendary ape and number that officially won $100,000 in ETH! He will lead
            all The Crazy Apes to victory! Please check discord raffle group chat for instructions on how to claim your
            prize!</h6>
        </Row>
        <Row className="legendary-comp-img d-flex justify-content-center align-items-center">
          <img src={MainImg} alt="crazy-apes"/>
        </Row>
        <Row className="comp-footer-img legendary-comp-footer">
          <div className="bg-footer-left">
            <img src={ImgFooter} alt="crazy-apes"/>
          </div>
          <div className="bg-footer-right d-flex justify-content-end align-items-center">
            <img src={ImgFooter} alt="crazy-apes"/>
          </div>
        </Row>
      </Container>
    </Container>
  );
};

export default LegendaryComp;