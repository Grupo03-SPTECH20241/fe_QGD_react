import React from "react"; 
import imgProposal from "../../utils/assets/images/proposal.png";
import imgMission from "../../utils/assets/images/mission.png";
import logoInicial from "../../utils/assets/images/logoV1.png";
import bannerImg from "../../utils/assets/images/banner.png"
import Banner from "../../components/banner/Banner";
import Proposal from "../../components/proposal/Proposal";
import Header from "../../components/header/Header";
import Team from "../../components/team/Team";
import Contact from "../../components/contact/Contact";
import Footer from "../../components/footer/Footer";

const Home = () => { 
    return ( 
    <> 
        <Header logoInicial={logoInicial}></Header>
        <Banner imagemDoBanner={bannerImg}></Banner>
        <Proposal imgProposal={imgProposal} imgMission={imgMission}></Proposal>
        <Team></Team>
        <Contact></Contact>
        <Footer logoInicial={logoInicial}></Footer>
    </> 
    ); 
}; 

export default Home; 