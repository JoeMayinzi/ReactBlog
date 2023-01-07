import React from 'react';
import Moment from 'react-moment';
import { useParams } from 'react-router-dom';
import { useFetchData } from '../../hooks/useFetchData';
import styles from "./SingleCategory.module.scss";

function SingleCategory(props) {
    const params = useParams();
    console.log(params.category)
    const [articles, isLoading] = useFetchData(`https://restapi.fr/api/mesarticles?articleGategory=${params.category}`);
    console.log(articles)
    
    
    
    return (
        <div className={`${styles.singleCategoryContainer}`}>
            {

                isLoading === true ? <i class="fa fa-spinner" aria-hidden="true"></i> :
                articles.map(art => <article style={{width: "18rem"}} className="mr-10 hvr-float p-0 mb-2">
                <img src={art.articleImg} alt="pic de l'article" className='article-img' />
                <div className="text-content p-2">
                    <span> {<Moment format="DD/MM/YY">{art.createdAt}</Moment>} </span> <br />
                    <span> {art.articleGategory}</span>   
                    <h5 className="article-title">{ art.articleTitle }</h5>
                    <p className='card-text article-content'> {art.articleContent.slice(0, 200)}... </p>
                </div>
            </article> )
            }
        </div>
    );
}

export default SingleCategory;