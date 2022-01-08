import React from 'react';
import {Container, Row} from "react-bootstrap";
import './AboutComp.scss';
import Footer1 from '../../assets/imgs/aboutFooterBg1.svg';
import Footer2 from '../../assets/imgs/aboutFooterBg2.svg';

const AboutComp = () => {
  return (
    <Container className="about-comp">
      <Container className="about-comp-container">
        <Row className="about-comp-content">
          <div className="about-title">
            <h6 className="title">what is crazy apes club?</h6>
          </div>
          <div className="about-content">
            <p className="content">The Crazy Apes Club is an exclusive collection of 5,000 NFTs, stored as ERC-721
              Tokens on the Ethereum Blockchain and hosted on IPFS.</p>
            <p className="content">Each NFT is unique and comes with a membership to exclusive raffles and
              giveaways.</p>
          </div>
        </Row>
        <Row className="about-comp-footer-img">
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

export default AboutComp;