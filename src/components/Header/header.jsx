import React from 'react';
import styles from './Header.module.css';

const Header = ({ logoInicial }) => {
    return (
        <nav className={styles["header"]}>
            <img src={logoInicial} className={styles["logoinicial"]} alt="Logo Inicial" />
            <ul>
                <li>
                    <a href="Proposta">Proposta</a>
                </li>
                <li>
                    <a href="Quem Somos">Quem Somos</a>
                </li>
                <li>
                    <a href="Contato">Contato</a>
                </li>
            </ul>
        </nav>
    );
};

export default Header;