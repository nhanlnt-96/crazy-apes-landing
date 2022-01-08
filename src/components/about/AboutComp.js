import React from 'react';
import {Container, Row} from "react-bootstrap";
import './AboutComp.scss';
import Footer1 from '../../assets/imgs/aboutFooterBg1.svg';
import Footer2 from '../../assets/imgs/aboutFooterBg2.svg';

const AboutComp = () => {
  return (
    <Container flud className="about-comp">
      <Container className="about-comp-container">
        <Row className="about-comp-content">
          <div data-aos="fade-down" className="about-title">
            <h6 className="title">what is crazy apes club?</h6>
          </div>
          <div className="about-content">
            <p data-aos="fade-up" className="content">The Crazy Apes Club is an exclusive collection of 5,000 NFTs,
              stored as ERC-721
              Tokens on the Ethereum Blockchain and hosted on IPFS.</p>
            <p data-aos="fade-up" className="content">Each NFT is unique and comes with a membership to exclusive
              raffles and
              giveaways.</p>
          </div>
        </Row>
        <Row className="comp-footer-img">
          <div data-aos="zoom-out" className="bg-footer-left">
            <img src={Footer1} alt="crazy-apes"/>
          </div>
          <div data-aos="zoom-in" className="bg-footer-right d-flex justify-content-end align-items-center">
            <img src={Footer2} alt="crazy-apes"/>
          </div>
        </Row>
      </Container>
    </Container>
  );
};

export default AboutComp;