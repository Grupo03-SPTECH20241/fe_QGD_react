import React from "react"; 
import styles from "./Home.module.css"; 
import NavBar from "../../components/navbar/NavBar";
import logoInicial from "../../utils/assets/logoV1.png";

const Home = () => { 
    return ( 
    <> 
        <NavBar logoInicial={logoInicial}></NavBar>
        <div className={styles["background-image"]}></div> 
    </> 
    ); 
}; 

export default Home; 