import React from 'react';
import styles from './NavBar.module.css';
import logo from '../../utils/assets/logoV1.png';

const NavBar = ({ logoInicial }) => {
    return (
        <nav className={styles["navbar"]}>
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

export default NavBar;