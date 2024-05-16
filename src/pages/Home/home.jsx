import React from "react"; 
import styles from "./Home.module.css"; 
const Home = () => { 
return ( 
<> 
<div className={styles["background-image"]}> 
<div className={styles["titulo"]}> 
<h1> Deixe a música <span> sair da caixa</span></h1> 
<button>Começar</button> 
</div> 
</div> 
</> 
); 
}; 

export default Home; 