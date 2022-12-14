import React, { useEffect, useState } from 'react';
import Article from '../article/Article';
import styles from "./Articles.module.scss";

const Articles = () => {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [search, setSearch] = useState("");

    useEffect(()=>{
        const fetchArticles = async () => {
            
            try {
                const articleRequest = await fetch("https://restapi.fr/api/articles");
                const response = await articleRequest.json()
                const newArticles = response

                if (articleRequest.ok) {
                    setArticles(newArticles) 
                    console.log(articles)
                }

                setIsLoading(false)
            } catch (e) {
                console.log("une erreur s'est produite", e)
            }
        } 

        fetchArticles()
    }, [])

    function deleteArticle(_id) {
        setArticles(articles.filter(article => article._id !== _id))
    }

    function seachArticle (e) {
        const valueToSearch = e.target.value.trim().toLowerCase();
        setSearch(valueToSearch);
    }
    
    return (
        <div className={`container d-flex ${styles.Articles}`}>
            <input type="text" className='search mt-5' placeholder="Search article" required
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


