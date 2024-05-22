import React from "react"; 
import styles from "./Home.module.css";
import Header from "../../components/header/Header";
import logoInicial from "../../utils/assets/logoV1.png";
import bannerImg from "../../utils/assets/banner.png"
import Banner from "../../components/banner/Banner";

const Home = () => { 
    return ( 
    <> 
        <Header logoInicial={logoInicial}></Header>
        <Banner imagemDoBanner={bannerImg}></Banner>
    </> 
    ); 
}; 

export default Home; 