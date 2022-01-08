import React from 'react';
import {Container, Row} from "react-bootstrap";
import './TeamComp.scss';
import TitleFooter from '../../assets/imgs/teamTitleFooter.svg';
import {teamData} from "../../configs/teamData";
import Footer from '../../assets/imgs/teamFooterBg.svg';
import Discord from '../../assets/icons/discord.svg';

const TeamComp = () => {
  return (
    <Container fluid className="team-comp">
      <div className="section-decor"/>
      <Container className="team-comp-container">
        <Row className="team-comp-title  d-flex flex-column justify-content-center align-items-center">
          <div className="title-container d-flex flex-column justify-content-center align-items-center">
            <h6 className="title">The team</h6>
            <img src={TitleFooter} alt="crazy-apes"/>
          </div>
        </Row>
        <Row className="team-member">
          {
            teamData.map((val, index) => (
              <div className="item">
                <div className="avatar">
                  <img src={val.ava} alt={val.name}/>
                </div>
                <div className="detail d-flex flex-column justify-content-center align-items-center">
                  <p className="name">{val.name}</p>
                  <div className="position d-flex justify-content-center align-items-center">
                    <p className="desc">{val.title}</p>
                  </div>
                </div>
              </div>
            ))
          }
        </Row>
        <Row className="team-comp-footer">
          <img className="bg-footer" src={Footer} alt="crazy-apes"/>
          <div className="social d-flex align-items-end">
            <div className="social-container d-flex flex-column justify-content-center align-items-center">
              <p className="title">join our discord now</p>
              <a className="social-url" href="#"><img className="social-icon" src={Discord}
                                                      alt="crazy-apes-discord"/></a>
            </div>
          </div>
        </Row>
      </Container>
    </Container>
  );
};

export default TeamComp;