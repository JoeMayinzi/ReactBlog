import React from 'react';
import aboutImg from "../../assets/images/mbenza.jpg";
import styles from "./About.module.scss";

function About(props) {
    return (
        <div className={`${styles.About}`}>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="about-img">
                            <img src={aboutImg} alt="about img" />
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <h2 className='textUppercase' style={{"textTransform" : "uppercase"}}>A propos de moi</h2>
                        <p className='mb-2'>Je suis <b>Rais Mbenza Lubota</b></p>
                        <p className='mb-2'>
                            Pocesseur d'un diplome d'Etat ou BAC En Pédagigie Génerale et Etudiant en sciences commerciales et financières à l'institut superieur de commerce de Kinshasa ISC/Kin
                        </p>
                        <p className='mb-2'>
                            Tellement passionné par la comptabilité, le monde des affaires, l'entrepreuneuriat et tout ce qui tourne
                            autour de l'investissement, je passe une grande partie de mon temps à apprendre des nouvelles choses et 
                            à consolider mes comptences, après une longue période d'apprentissage et de formation intensive, quoi de
                            plus mieux qu'à mettre mes comptences à la disposition du publique, d'abord la jeunesse congolaise, africaine et 
                            n'importe quel citoyen du monde qui partage les mêmes interets professionnels et éducatifs que moi, car je crois 
                            en l'idée qu'on peut changer la direction et les conditions de nos vies grâce à l'éducation et 
                            l'apprentissage continue. <br />
                        </p>
                        <p>
                        restez brancher sur votre site <b>comptablentrepreuneur.com</b>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;