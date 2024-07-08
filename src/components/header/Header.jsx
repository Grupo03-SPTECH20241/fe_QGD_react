import React from 'react';
import styles from './Header.module.css';
import headerDropdown from '../../utils/assets/images/header_dropdown_button.jpg'

const Header = ({ logoInicial }) => {
    return (
        <nav className={styles["header"]}>
            <img src={logoInicial} className={styles["logoinicial"]} alt="Logo Inicial" />
            <ul className={styles["headerElements"]}>
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
            <img src={headerDropdown} className={styles["headerDropdown"]} alt="Botão de dropdown" />
        </nav>
    );
};

export default Header;