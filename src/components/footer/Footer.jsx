import React from 'react';
import styles from './Footer.module.css';

const Footer = ({logoInicial}) => {
    return (
        <>
            <div className={styles["mainContainer"]}>
                <div className={styles["footerLogo"]}>
                    <img src={logoInicial} className={styles["logoinicial"]} alt="Logo Inicial" />
                </div>
                <div className={styles["footerInfo"]}>
                    <p>© 2024 QGD. Todos direitos reservados.</p>
                    <div className={styles["footerTerms"]}>
                        <span>TERMOS E CONDIÇÕES DE USO</span>
                        <span>POLÍTICA DE PRIVACIDADE</span>
                        <span>GERENCIAR COOKIES</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;