import React from 'react';
import {Container, Row} from "react-bootstrap";
import './FAQComp.scss';
import SubBgTop from "../../assets/imgs/subRoadmapBgTop.svg";
import SubBgMiddle from "../../assets/imgs/faqBg1.svg";
import SubBgMiddle1 from "../../assets/imgs/faqBg2.svg";
import SubBgMiddle2 from "../../assets/imgs/faqBg3.svg";
import SubBgMiddle3 from "../../assets/imgs/faqBg4.svg";
import {faqData} from "../../configs/faqData";
import ImgFooter from '../../assets/imgs/faqFooter.svg';
import ImgFollow from '../../assets/gifs/followShape.gif';
import InstagramIcon from '../../assets/icons/instagram.svg';
import TwitterIcon from '../../assets/icons/twitter.svg';

const FaqComp = () => {
  return (
    <Container fluid className="faq-comp">
      <Container className="faq-comp-container">
        <Row className="faq-comp-title">
          <h6 className="title">FAQ</h6>
        </Row>
        <Row className="faq-comp-content">
          <div className="sub-bg">
            <div className="sub-bg-container">
              <div className="bg-middle d-flex flex-column justify-content-center align-items-center">
                <img src={SubBgTop} alt="crazy-apes"/>
                <img src={SubBgMiddle} alt="crazy-apes"/>
                <img src={SubBgMiddle1} alt="crazy-apes"/>
                <img src={SubBgMiddle2} alt="crazy-apes"/>
                <img src={SubBgMiddle3} alt="crazy-apes"/>
              </div>
            </div>
          </div>
          {
            faqData.map((val, index) => (
              <div data-aos="zoom-in" key={index} className="item d-flex justify-content-center align-items-center">
                <div className="item-container">
                  <p className="question">{val.question}</p>
                  <p className="answer">{val.answer}</p>
                </div>
              </div>
            ))
          }
        </Row>
        <Row data-aos="zoom-in" className="faq-comp-social-contact">
          <img src={ImgFooter} alt="crazy-ape-faq" className="img-footer"/>
          <div className="social-container d-flex justify-content-center align-items-end">
            <div className="social-item d-flex flex-column justify-content-center align-items-center">
              <img className="animate-shape" src={ImgFollow} alt="crazy-apes"/>
              <div className="social d-flex justify-content-around align-items-center">
                <a href="#" className="item">
                  <img src={InstagramIcon} className="icon" alt="crazy-apes-instagram"/>
                  @crazyapenft
                </a>
                <a href="#" className="item">
                  <img src={TwitterIcon} className="icon" alt="crazy-apes-twitter"/>
                  @crazyapenft
                </a>
              </div>
              <p className="copyright">THE CRAZY APES CLUB</p>
            </div>
          </div>
        </Row>
      </Container>
    </Container>
  );
};

export default FaqComp;