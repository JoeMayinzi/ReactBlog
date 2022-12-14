import styles from "./Article.module.scss";
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

const Article = ({ article, _id, img, title, category, content, author, date, deleteArticle}) => {

    return (
            <div className={`${styles.ArticleContainer}`}>
            <article style={{width: "18rem"}} className="mr-10">
            <img src={img} alt="pic de l'article" className='article-img' />
            <i class="fa fa-times" aria-hidden="true"
             onClick={()=> deleteArticle(article._id)}
            >
            </i>
            <div className="text-content">
             <span> {<Moment format="DD/MM/YY">{date}</Moment>} </span> <br />
             <span> {category}</span>   
            <Link to={`/singleArticle/${article._id}`}>
            <h5 className="article-title">{ title }</h5>
            </Link>
            <p className='card-text article-content'> {content} </p>
            <span> écrit par : { author } </span>
            </div>
            </article>
        </div>
    );
};

export default Article;