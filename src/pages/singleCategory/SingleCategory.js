import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Moment from 'react-moment';
import { useParams } from 'react-router-dom';
import ApiUrlContext from '../../components/context/ApiUrlContext';
import styles from "./SingleCategory.module.scss"

function SingleCategory(props) {
    const params = useParams();
    console.log(params.category)
    const API_URL = ApiUrlContext
    const [article, setArticles] = useState([])
    
    useEffect(()=> {
        const fetchData = async () => {
            try {
                const request = await fetch(`https://restapi.fr/api/mesarticles?articleGategory=${params.category}`);
                const response = await request.json();
                const newArticles = response

                if (request.ok) {
                    setArticles(newArticles)
                }
            } catch (e) {
                console.log('une erreur est survenur', e)
            }
        }
        fetchData()
    }, [])
    return (
        <div className={`${styles.singleCategoryContainer}`}>
            {
                article.map(art => <article style={{width: "18rem"}} className="mr-10 hvr-float p-0 mb-2">
                <img src={art.articleImg} alt="pic de l'article" className='article-img' />
                <div className="text-content p-2">
                    <span> {<Moment format="DD/MM/YY">{art.createdAt}</Moment>} </span> <br />
                    <span> {art.articleGategory}</span>   
                    <h5 className="article-title">{ art.articleTitle }</h5>
                    <p className='card-text article-content'> {art.articleContent} </p>
                </div>
            </article> )
            }
        </div>
    );
}

export default SingleCategory;