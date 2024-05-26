import React from 'react';
import styles from './Proposal.module.css';

const Proposal = ({ imgProposal, imgMission }) => {
    return (
        <div className={styles["mainContainer"]}>

            <div className={styles["proposalContainer"]}>
                <div className={styles["proposalText"]}>
                    <h2>Nossa Proposta</h2>
                    <p>
                        Com a Quando Geniais se Destacam você vai além! Oferecemos um serviço personalizado para cada cliente, conforme sua necessidade. Entendemos o seu negócio e te auxiliamos a crescer seu negócio exponencialmente!
                        Somos uma startup focada em soluções tecnológicas que desenvolve plataformas personalizadas para impulsionar o sucesso de pequenos negćicios. Te ajudando a aumentar suas vendas e lucros, fortalecer sua marca no mercado e a realizar a gestão do seu negócio.
                    </p>
                </div>
                <img src={imgProposal} className={styles["imgProposal"]} alt="Imagem da Proposta" />
            </div>

            <div className={styles["missionContainer"]}>
                <img src={imgMission} className={styles["imgMission"]} alt="Imagem da Proposta" />
                <div className={styles["missionText"]}>
                    <h2>Nossa missão</h2>
                    <p>
                        Em parceria com a Organização das Nações Unidas, somos uma empresa compromissada com o Objetivo de Desenvolvimento Sustentável 8 - Trabalho decente e crescimento economômico.
                        A ODS 8 promove o trabalho adequadamente remunerado, exercido em condições de liberdade, equidade e segurança, capaz de garantir uma vida digna.
                        Com isso nós garantimos promover o desenvolvimento da geração de trabalhos dignos, com o crescimento das micro, pequenas e médias empresas com inovações tecnológicas.
                    </p>
                </div>
            </div>

        </div>
    );
};

export default Proposal;