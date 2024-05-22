import React from "react";
import styles from './Banner.module.css';

const Banner = ({imagemDoBanner}) => {
    return(
        <div className={styles["BannerContainer"]}>
            <div className={styles["BannerText"]}>
                <h2>Se torne um Genial</h2>
                <p>Com a Quando Geniais se destacam, você cresce seu negócio!</p>
            </div>
        </div>
    )
}

export default Banner;