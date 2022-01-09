import React, {useEffect, useState} from 'react';
import {Container, Row} from "react-bootstrap";
import HeaderComp from "../header/HeaderComp";
import './BannerComp.scss';
import BannerImg from '../../assets/imgs/bannerImg.png';
import TitleFooter from '../../assets/imgs/bannerTitleFooter.svg';
import {useDispatch, useSelector} from "react-redux";
import {fetchData} from "../../redux/data/dataActions";
import * as s from "../../styles/globalStyles";
import {connect} from "../../redux/blockchain/blockchainActions";
import {ResponsiveWrapper, StyledButton, StyledLink, StyledRoundButton, truncate} from "./styleComponent";
import {notification} from 'antd';

const BannerComp = () => {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [claimingNft, setClaimingNft] = useState(false);
  const [feedback, setFeedback] = useState(`Click buy to mint your NFT.`);
  const [mintAmount, setMintAmount] = useState(1);
  const [CONFIG, SET_CONFIG] = useState({
    CONTRACT_ADDRESS: "",
    SCAN_LINK: "",
    NETWORK: {
      NAME: "",
      SYMBOL: "",
      ID: 0,
    },
    NFT_NAME: "",
    SYMBOL: "",
    MAX_SUPPLY: 1,
    WEI_COST: 0,
    DISPLAY_COST: 0,
    GAS_LIMIT: 0,
    MARKETPLACE: "",
    MARKETPLACE_LINK: "",
    SHOW_BACKGROUND: false,
  });
  
  const claimNFTs = () => {
    let cost = CONFIG.WEI_COST;
    let gasLimit = CONFIG.GAS_LIMIT;
    let totalCostWei = String(cost * mintAmount);
    let totalGasLimit = String(gasLimit * mintAmount);
    console.log("Cost: ", totalCostWei);
    console.log("Gas limit: ", totalGasLimit);
    setFeedback(`Minting your ${CONFIG.NFT_NAME}...`);
    setClaimingNft(true);
    blockchain.smartContract.methods
      .mint(mintAmount)
      .send({
        gasLimit: String(totalGasLimit),
        to: CONFIG.CONTRACT_ADDRESS,
        from: blockchain.account,
        value: totalCostWei,
      })
      .once("error", (err) => {
        console.log(err);
        setFeedback("Sorry, something went wrong please try again later.");
        setClaimingNft(false);
      })
      .then((receipt) => {
        console.log(receipt);
        setFeedback(
          `WOW, the ${CONFIG.NFT_NAME} is yours! go visit Opensea.io to view it.`
        );
        setClaimingNft(false);
        dispatch(fetchData(blockchain.account));
      });
  };
  
  const decrementMintAmount = () => {
    let newMintAmount = mintAmount - 1;
    if (newMintAmount < 1) {
      newMintAmount = 1;
    }
    setMintAmount(newMintAmount);
  };
  
  const incrementMintAmount = () => {
    let newMintAmount = mintAmount + 1;
    if (newMintAmount > 10) {
      newMintAmount = 10;
    }
    setMintAmount(newMintAmount);
  };
  
  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };
  
  const getConfig = async () => {
    const configResponse = await fetch("/config/config.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const config = await configResponse.json();
    SET_CONFIG(config);
  };
  
  useEffect(() => {
    getConfig();
  }, []);
  
  useEffect(() => {
    getData();
  }, [blockchain.account]);
  
  const onBtnConnectWalletClick = (e) => {
    e.preventDefault();
    dispatch(connect());
    getData();
  }
  return (
    <Container fluid className="banner-comp">
      <HeaderComp btnConnect={onBtnConnectWalletClick}/>
      <Container className="banner-comp-container d-flex flex-column justify-content-center align-items-center">
        <div className="banner-comp-middle-bg"/>
        {
          blockchain.errorMsg && notification.info({
            message: `Error`,
            description: blockchain.errorMsg,
            placement: 'bottomRight',
          })
        }
        <Row className="banner-comp-mint justify-content-center align-items-center">
          {
            blockchain.account ? (
              <div data-aos="zoom-in" className="banner-mint">
                <ResponsiveWrapper flex={1} style={{padding: 24}} test className="mint-container">
                  <s.Container
                    flex={2}
                    jc={"center"}
                    ai={"center"}
                    style={{
                      padding: 24,
                      borderRadius: 24,
                      border: "4px dashed #1a323d",
                      boxShadow: "0px 5px 11px 2px rgba(0,0,0,0.7)",
                    }}
                  >
                    <s.TextTitle
                      style={{
                        textAlign: "center",
                        fontSize: 50,
                        fontWeight: "bold",
                        color: "var(--accent-text)",
                      }}
                    >
                      {data.totalSupply} / {CONFIG.MAX_SUPPLY}
                    </s.TextTitle>
                    <s.TextDescription
                      style={{
                        textAlign: "center",
                        color: "var(--primary-text)",
                      }}
                    >
                      <StyledLink target={"_blank"} href={CONFIG.SCAN_LINK} style={{color: "#ffd93b"}}>
                        {truncate(CONFIG.CONTRACT_ADDRESS, 15)}
                      </StyledLink>
                    </s.TextDescription>
                    <s.SpacerSmall/>
                    {Number(data.totalSupply) >= CONFIG.MAX_SUPPLY ? (
                      <>
                        <s.TextTitle
                          style={{textAlign: "center", color: "var(--accent-text)"}}
                        >
                          The sale has ended.
                        </s.TextTitle>
                        <s.TextDescription
                          style={{textAlign: "center", color: "var(--accent-text)"}}
                        >
                          You can still find {CONFIG.NFT_NAME} on
                        </s.TextDescription>
                        <s.SpacerSmall/>
                        <StyledLink target={"_blank"} href={CONFIG.MARKETPLACE_LINK}>
                          {CONFIG.MARKETPLACE}
                        </StyledLink>
                      </>
                    ) : (
                      <>
                        <s.TextTitle
                          style={{textAlign: "center", color: "var(--accent-text)"}}
                        >
                          1 {CONFIG.SYMBOL} costs {CONFIG.DISPLAY_COST}{" "}
                          {CONFIG.NETWORK.SYMBOL}.
                        </s.TextTitle>
                        <s.SpacerXSmall/>
                        <s.TextDescription
                          style={{textAlign: "center", color: "var(--accent-text)"}}
                        >
                          Excluding gas fees.
                        </s.TextDescription>
                        <s.SpacerSmall/>
                        {blockchain.account === "" ||
                        blockchain.smartContract === null ? (
                          <s.Container ai={"center"} jc={"center"}>
                            <s.TextDescription
                              style={{
                                textAlign: "center",
                                color: "var(--accent-text)",
                              }}
                            >
                              Connect to the {CONFIG.NETWORK.NAME} network
                            </s.TextDescription>
                            {blockchain.errorMsg !== "" ? (
                              <>
                                <s.SpacerSmall/>
                                <s.TextDescription
                                  style={{
                                    textAlign: "center",
                                    color: "var(--accent-text)",
                                  }}
                                >
                                  {blockchain.errorMsg}
                                </s.TextDescription>
                              </>
                            ) : null}
                          </s.Container>
                        ) : (
                          <>
                            <s.TextDescription
                              style={{
                                textAlign: "center",
                                color: "var(--accent-text)",
                              }}
                            >
                              {feedback}
                            </s.TextDescription>
                            <s.SpacerMedium/>
                            <s.Container ai={"center"} jc={"center"} fd={"row"}>
                              <StyledRoundButton
                                style={{lineHeight: 0.4}}
                                disabled={claimingNft ? 1 : 0}
                                onClick={(e) => {
                                  e.preventDefault();
                                  decrementMintAmount();
                                }}
                              >
                                -
                              </StyledRoundButton>
                              <s.SpacerMedium/>
                              <s.TextDescription
                                style={{
                                  textAlign: "center",
                                  color: "var(--accent-text)",
                                }}
                              >
                                {mintAmount}
                              </s.TextDescription>
                              <s.SpacerMedium/>
                              <StyledRoundButton
                                disabled={claimingNft ? 1 : 0}
                                onClick={(e) => {
                                  e.preventDefault();
                                  incrementMintAmount();
                                }}
                              >
                                +
                              </StyledRoundButton>
                            </s.Container>
                            <s.SpacerSmall/>
                            <s.Container ai={"center"} jc={"center"} fd={"row"}>
                              <StyledButton
                                disabled={claimingNft ? 1 : 0}
                                onClick={(e) => {
                                  e.preventDefault();
                                  claimNFTs();
                                  getData();
                                }}
                              >
                                {claimingNft ? "BUSY" : "BUY"}
                              </StyledButton>
                            </s.Container>
                          </>
                        )}
                      </>
                    )}
                    <s.SpacerMedium/>
                  </s.Container>
                </ResponsiveWrapper>
              </div>
            ) : (
              <div data-aos="zoom-in" className="banner-img">
                <img src={BannerImg} alt="crazy-apes"/>
              </div>
            )
          }
        </Row>
        <Row className="banner-comp-title justify-content-center align-items-center">
          <div className="title-content d-flex flex-column justify-content-center align-items-center">
            <h1 data-aos="fade-up" className="title">Welcome to</h1>
            <h1 data-aos="fade-up" className="title">the crazy apes club</h1>
            <img data-aos="fade-up" src={TitleFooter} alt="crazy-apes"/>
          </div>
        </Row>
        <div className="banner-comp-container-bottom-bg"/>
      </Container>
    </Container>
  );
};

export default BannerComp;