import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from "./SingleArticle.module.scss"

function SingleArticle(props) {
    const { id } = useParams()
    const [singleArticle, setSingleArticle] = useState({})

    useEffect(()=>{
        const fetchSingleArticle = async () => {
            try {
                const response = await fetch(`https://restapi.fr/api/articles/${id}`)
                const newSingleArticles = await response.json()
                setSingleArticle(newSingleArticles)
                console.log(singleArticle)

            } catch (e) {
                console.log("une erreir est survenue", e)
            }
        }
        fetchSingleArticle()
    }, [])

    return (
        <div className={`${styles.singleArticle}`}>
            <img src={singleArticle.articleImg} alt="pic de l'article" className='mb-2' /> <br />
            <span>écrit par : {singleArticle.articleAuthor}</span> <br />
            <span>{singleArticle.createdAt}</span>
            <p className='mt-3'> {singleArticle.articleContent} </p>
        </div>
    );
}

export default SingleArticle;