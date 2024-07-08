import React from 'react';
import styles from './Contact.module.css';
import locationCardImage from '../../utils/assets/images/icon-mapa.png';
import talkCardImage from '../../utils/assets/images/icon-talk.png';

const Contact = () => {
    return (
        <>
            <div className={styles["mainContainer"]}>
                <div className={styles["contactContainer"]}>
                    <h2>Contato</h2>
                    <p>Saiba onde nos encontrar!</p>

                    <div className={styles["locationContainer"]}>
                        <div className={styles["locationMap"]}>
                            <iframe
                                width="100%"
                                height="272"
                                frameborder="0"
                                scrolling="no"
                                marginheight="0"
                                marginwidth="0"
                                title='localizacao'
                                src="https://maps.google.com/maps?width=100%25&amp;height=272&amp;hl=en&amp;q=S%C3%A3o%20Paulo%20Tech%20School+(My%20Business%20Name)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                                <a href="https://www.gps.ie/">gps tracker sport</a>
                            </iframe>
                        </div>

                        <div className={styles["locationInfo"]}>
                            <div className={styles["locationCard"]}>
                                <div className={styles["cardText"]}>
                                    <h2>Localização</h2>
                                    <p> Rua Haddock Lobo, 595 - Cerqueira César, São Paulo - SP
                                        Faculdade São Paulo Tech School
                                    </p>
                                </div>
                                <img src={locationCardImage} alt="imagem do card de informção"/>
                            </div>

                            <div className={styles["talkCard"]}>
                                <div className={styles["cardText"]}>
                                    <h2>Fale Conosco</h2>
                                    <span>quandogeniaissedestacam @qgdconsultoria.com.br</span>
                                </div>
                                <img src={talkCardImage} alt="imagem do card de contato" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;