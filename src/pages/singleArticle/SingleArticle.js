import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import styles from "./SingleArticle.module.scss"
import CommentForm from '../../components/comments/CommentForm';
import Progress from '../../components/progress/Progress';
import { useContext } from 'react';
import ApiUrlContext from '../../components/context/ApiUrlContext';
import { useFetchData } from '../../hooks/useFetchData';

function SingleArticle(props) {
    const API_URL = useContext(ApiUrlContext)
    const { id } = useParams()
    /*const [singleArticle, setSingleArticle] = useState({})*/
    const [articles] = useFetchData(`${API_URL }/${id}`)
    const [comments, setComments] = useState([]);
    const [scrollYSize, SetScrollYSize] = useState(null);

    useEffect(()=> {
        const displayComments = async () => {
            const response = await fetch("https://restapi.fr/api/comments");
            const newComments = await response.json()

            if (response.ok) {
                setComments(newComments)
                console.log("les commentaires ont été recuperé")
            }
        }

        displayComments()
    }, [])

    useEffect(()=>{
        window.addEventListener("scroll", ()=> {
            const scrollSize = window.scrollY
            SetScrollYSize(scrollSize)
        })
    }, [])

    return (
        <div className={`mt-5 ${styles.singleArticle}`}>

            {scrollYSize && <Progress />}
            <Link to={"/"} style={{"textDecoration" : "none"}} className="mb-3">
                Retour à la page d'accueil
            </Link>
            <img src={articles.articleImg} alt="pic de l'article" className='mb-2' /> <br />
            <span>
                Publié le : <Moment format='DD/MM/YY'>{articles.createdAt}</Moment>
            </span>
            <p> {articles.articleContent} </p>
            <span>écrit par : {articles.articleAuthor}</span> <br />
            <CommentForm />

            <ul className='comment'>
                {comments.map(comment => <li>
                    <span>{comment.name}</span>
                    <p>{comment.comment}</p>
                </li> )}
            </ul>
        </div>
    );
}

export default SingleArticle;