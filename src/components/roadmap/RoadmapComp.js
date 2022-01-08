import React from 'react';
import './RoadmapComp.scss';
import {Container, Row} from "react-bootstrap";
import SubBgTop from '../../assets/imgs/subRoadmapBgTop.svg';
import SubBgBot from '../../assets/imgs/subRoadmapBgBot.svg';
import FooterImg from '../../assets/gifs/subRoadmapBg1.gif';
import ArrowDown from '../../assets/imgs/arrowDown.png';
import {roadmapData} from "../../configs/roadmapData";

const RoadmapComp = () => {
  return (
    <Container fluid className="roadmap-comp">
      <Container className="roadmap-comp-container">
        <div className="sub-bg">
          <div className="sub-bg-container">
            <div className="bg-middle d-flex flex-column justify-content-center align-items-center">
              <img src={SubBgTop} alt="crazy-apes"/>
              <img src={SubBgBot} alt="crazy-apes"/>
            </div>
            <img src={FooterImg} alt="crazy-apes" className="footer"/>
          </div>
        </div>
        <Row className="roadmap-comp-content comp-bg-blue">
          {
            roadmapData.map((val, index) => (
              <div key={index} className="item d-flex justify-content-center align-items-center">
                <div className="item-container">
                  <div className="left-side d-flex flex-column align-items-center">
                    <div className="roadmap-progress d-flex justify-content-center align-items-center">
                      <div className="progress-detail d-flex justify-content-center align-items-center">
                        <p className="detail">{val.progress}</p>
                      </div>
                    </div>
                    {
                      (!(val.progress === "100%")) && (
                        <div className="roadmap-arrow">
                          <img src={ArrowDown} alt="crazy-apes"/>
                        </div>
                      )
                    }
                  </div>
                  <div className="right-side">
                    <p className="roadmap-title">{val.title}</p>
                    {
                      val.detail.map((detail, key) => (
                        <p key={key} className="detail">{detail}</p>
                      ))
                    }
                  </div>
                </div>
              </div>
            ))
          }
        </Row>
      </Container>
    </Container>
  );
};

export default RoadmapComp;