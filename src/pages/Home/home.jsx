import React from "react"; 
import styles from "./Home.module.css";
import imgProposal from "../../utils/assets/proposal.png";
import imgMission from "../../utils/assets/mission.png";
import logoInicial from "../../utils/assets/logoV1.png";
import bannerImg from "../../utils/assets/banner.png"
import Banner from "../../components/banner/Banner";
import Proposal from "../../components/proposal/Proposal";
import Header from "../../components/header/Header";

const Home = () => { 
    return ( 
    <> 
        <Header logoInicial={logoInicial}></Header>
        <Banner imagemDoBanner={bannerImg}></Banner>
        <Proposal imgProposal={imgProposal} imgMission={imgMission}></Proposal>
    </> 
    ); 
}; 

export default Home; 