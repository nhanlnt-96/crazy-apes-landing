import React from 'react';
import {Container, Row} from "react-bootstrap";
import './SpecialApesComp.scss';
import {specialApesData} from "../../configs/specialApesData";
import LeftFooter from '../../assets/gifs/specialFooter.gif';
import MiddleFooter from '../../assets/imgs/specialFooter.svg';

const SpecialApesComp = () => {
  return (
    <Container fluid className="special-apes-comp">
      <Container className="special-apes-comp-container">
        <Row className="special-apes-content">
          <div className="sub-bg"/>
          <h6 className="content">These are the <span className="content">5 special apes and numbers</span> that will be
            able to claim their prize of $10,000 in ETH! Please check discord raffle group chat for instructions on how
            to claim your prizes!</h6>
        </Row>
        <Row className="special-apes-img">
          {
            specialApesData.map((val, index) => (
              <img src={val} key={index} alt="crazy-apes"/>
            ))
          }
        </Row>
        <Row className="comp-footer-img special-apes-footer">
          <div className="bg-footer-left">
            <img src={LeftFooter} alt="crazy-apes"/>
          </div>
          <div className="bg-footer-right d-flex justify-content-end align-items-center">
            <img src={MiddleFooter} alt="crazy-apes"/>
          </div>
        </Row>
      </Container>
    </Container>
  );
};

export default SpecialApesComp;