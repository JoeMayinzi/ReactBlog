/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { useEffect, useState } from 'react';
import { useRef } from 'react';

function PubModal(props) {
    const [isModalOpen, setIsModalOpen] = useState(true);
    const inputEmailRef = useRef();

    /*useEffect(()=> {
        console.log("render app")
        console.log(inputEmailRef.current.value)
    }, [inputEmailRef])*/
    function getUserEmail () {
        console.log(inputEmailRef.current.value);
        setIsModalOpen(false)
    }
    

    return (
        <dialog open={isModalOpen}>
            <article>
                <h3>Surprise !</h3>
                <p>
                J'ai écrit un livre complet sur comment apprendre à apprendre dans le but vous aider
                à avoir l'etat d'esprit nécessaire et les techniques pour maîtriser n'importe quelle 
                competences si vous êtes interessé entrez votre adresse mail, je vous envoie le livre
                en un rien de temps
                </p>
                <footer>
                    <label for="email">Email address</label>
                    <input type="email" id="email" name="email" placeholder="joemayinzi@gmail.com" required
                        ref={inputEmailRef}
                    >

                    </input>
                    <button role="button" 
                        onClick={()=> getUserEmail () }
                        >
                            Confirm
                    </button>
                </footer>
            </article>
        </dialog>
    );
}

export default PubModal;