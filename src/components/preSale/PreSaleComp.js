import React from 'react';
import {Container, Row} from "react-bootstrap";
import './PreSaleComp.scss';
import AnimateArrow from '../../assets/gifs/leftArrow.gif';
import {preSaleData} from "../../configs/preSaleData";
import Footer1 from "../../assets/imgs/NFTImg.svg";
import Footer2 from "../../assets/imgs/PreSalFooter.svg";

const PreSaleComp = () => {
  return (
    <Container fluid className="pre-sale-comp">
      <Container className="pre-sale-comp-container">
        <Row className="pre-sale-content">
          <h6 className="content">These are <span className="content">the 4 Pre-Sale Ape Winners</span> that won 2 ETH
            each. Please check discord raffle group chat for further instructions on how to claim your prizes!</h6>
        </Row>
        <Row className="animate-arrow">
          <div className="item-arrow">
            <img src={AnimateArrow} alt="crazy-aps" className="item"/>
          </div>
          <div className="item-arrow">
            <img src={AnimateArrow} alt="crazy-aps" className="item"/>
          </div>
          <div className="item-arrow">
            <img src={AnimateArrow} alt="crazy-aps" className="item"/>
          </div>
          <div/>
        </Row>
        <Row className="pre-sale-img">
          {
            preSaleData.map((val, index) => (
              <img src={val} key={index} alt="crazy-apes"/>
            ))
          }
        </Row>
        <Row className="comp-footer-img pre-sale-footer">
          <div className="bg-footer-left">
            <img src={Footer1} alt="crazy-apes"/>
          </div>
          <div className="bg-footer-right d-flex justify-content-end align-items-center">
            <img src={Footer2} alt="crazy-apes"/>
          </div>
        </Row>
      </Container>
    </Container>
  );
};

export default PreSaleComp;