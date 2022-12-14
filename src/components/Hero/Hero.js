import React from 'react';
import styles from "./Hero.module.scss";

const Hero = () => {
    return (
        <div className={styles.Hero} style={{ 
            backgroundImage : `url(https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNvbXBhbnl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60)`,
            backgroundSize : "cover",
            backgroundPosition : "center",
            height : "400px"
        }}>
        </div>
    );
};

export default Hero;