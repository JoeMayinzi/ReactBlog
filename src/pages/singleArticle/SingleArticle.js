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

function SingleArticle(props) {
    const { id } = useParams()
    const [singleArticle, setSingleArticle] = useState({})
    const [comments, setComments] = useState([]);
    const [scrollYSize, SetScrollYSize] = useState(null);
    const API_URL = useContext(ApiUrlContext)

    useEffect(()=>{
        const fetchSingleArticle = async () => {
            try {
                const response = await fetch(`${API_URL }/${id}`)
                const newSingleArticles = await response.json()
                setSingleArticle(newSingleArticles)

            } catch (e) {
                console.log("une erreir est survenue", e)
            }
        }
        fetchSingleArticle()
    }, [])

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
            <img src={singleArticle.articleImg} alt="pic de l'article" className='mb-2' /> <br />
            <span>
                Publié le : <Moment format='DD/MM/YY'>{singleArticle.createdAt}</Moment>
            </span>
            <p> {singleArticle.articleContent} </p>
            <span>écrit par : {singleArticle.articleAuthor}</span> <br />
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