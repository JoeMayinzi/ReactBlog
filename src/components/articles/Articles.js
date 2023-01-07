import React, { useState } from 'react';
import { useContext } from 'react';
import { useFetchData } from '../../hooks/useFetchData';
import Article from '../article/Article';
import ApiUrlContext from '../context/ApiUrlContext';
import styles from "./Articles.module.scss";

const Articles = () => {
    const API_URL = useContext(ApiUrlContext);
    const [articles, setArticles, isLoading] = useFetchData(API_URL);
    const [search, setSearch] = useState("");

    function deleteArticle(_id) {
        setArticles(articles.filter(article => article._id !== _id))
    }

    function seachArticle (e) {
        const valueToSearch = e.target.value.trim().toLowerCase();
        setSearch(valueToSearch);
    }
    
    return (
        <div className={`container d-flex ${styles.Articles}`}>
            <input type="text" className='search mt-2' placeholder="Search article" required
                style={{"border" : "2px solid #000"}}
                onChange={(e)=> seachArticle(e)}
            >
            </input>
            {
                isLoading === true ? <i class="fa fa-spinner" aria-hidden="true"></i> :
                articles
                    .filter(article => article.articleTitle.toLowerCase().startsWith(search))
                    .map((article) => (
                    <Article 
                        key={article._id}
                        id={article._id}
                        img={article.articleImg}
                        title={article.articleTitle}
                        category={article.articleGategory}
                        content={article.articleContent}
                        author={article.articleAuthor}
                        date={article.createdAt}
                        liked={article.liked}
                        articles={articles}
                        deleteArticle={deleteArticle}
                        article={article}
                    >
                    </Article>
                ) )
            }
        </div>
    );
};

export default Articles;



