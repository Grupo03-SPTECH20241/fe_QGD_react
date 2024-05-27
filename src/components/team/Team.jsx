import React from 'react';
import styles from './Team.module.css';
import GiovannaPfp from '../../utils/assets/images/profiles/foto-giovanna.png';
import GustavoPfp from '../../utils/assets/images/profiles/foto-gustavo.png';
import HenriquePfp from '../../utils/assets/images/profiles/foto-henrique.png';
import KevynPfp from '../../utils/assets/images/profiles/foto-kevyn.png';
import LeandroPfp from '../../utils/assets/images/profiles/foto-leandro.png'
import ViniciusPfp from '../../utils/assets/images/profiles/foto-vinicius.png'


const Team = () => {
    return (
        <>
            <div className={styles["mainContainer"]}>
                <div className={styles["teamContainer"]}>
                    <div className={styles["teamText"]}></div>
                    <h2>Equipe GQD</h2>
                    <p>Conheça a equipe que ajuda você a se destacar!</p>

                    <div className={styles["imagesContainer"]}>
                        <div className={styles["profilesRow1"]}>
                            <div className={styles["profileContainer"]}>
                                <img src={GiovannaPfp} alt="Giovana" />
                                <h3>Giovanna Rodrigues</h3>
                                <p>Product Designer</p>
                            </div>
                            <div className={styles["profileContainer"]}>
                                <img src={GustavoPfp} alt="Gustavo" />
                                <h3>Gustavo Dessunte</h3>
                                <p>Dev. Full Stack</p>
                            </div>
                            <div className={styles["profileContainer"]}>
                                <img src={HenriquePfp} alt="Henrique" />
                                <h3>Henrique Bechis</h3>
                                <p>Product Owner</p>
                            </div>
                        </div>

                        <div className={styles["profilesRow2"]}>
                            <div className={styles["profileContainer"]}>
                                <img src={KevynPfp} alt="Kevyn" />
                                <h3>Kevyn Rocha</h3>
                                <p>Dev. Front-End</p>
                            </div>
                            <div className={styles["profileContainer"]}>
                                <img src={LeandroPfp} alt="Leandro" />
                                <h3>Leandro Akio</h3>
                                <p>Dev. Back-End</p>
                            </div>
                            <div className={styles["profileContainer"]}>
                                <img src={ViniciusPfp} alt="Vinicius" />
                                <h3>Vinicis Bazan</h3>
                                <p>Dev. Front-End</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Team;