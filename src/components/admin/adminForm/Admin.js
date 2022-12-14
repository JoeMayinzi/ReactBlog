import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import styles from "./Admin.module.scss";

const schema = yup.object({
    articleImg : yup
                .string()
                .url("Lien lien de l'image doit être une url valide")
                .required("L'image de l'article est obligatoire"),

    articleTitle : yup
                  .string("Le titre de l'article est forcement une chaîne")
                  .min(25, "La taille minimum est de 25")
                  .max(50, "la taille maximale est de 50")
                  .required("le titre de l'article est obligatoire"),
    articleGategory : yup
               .string("text obligatoire")
               .max(25, "Le text ne doit pas être long")
               .required("Champ obligatoire"),

    articleContent : yup
                     .string("contenu de l'article doit être une chaine")
                     .required("Champ obligatoire"),
    articleAuthor : yup
                    .string()
                    .max(20, "la taille maximale est de 20")
                    .required("l'autheur de l'article doit être precisé pour des raison juridiques")

});

const Admin = () => {
    const {register, handleSubmit, reset,  formState: {errors, isValidating}} = useForm({
        resolver : yupResolver(schema)
    });

    const [value, setValue] = useState({
        image : "",
        title : "",
        content : "",
        author : "",
        category : "",
        liked : 0
    })
    
    async function postArticle (data) {
        try {

            const request = await fetch("https://restapi.fr/api/articles", {
                method : "POST",
                headers : {
                    "Content-Type" : "application/json"
                },

                body : JSON.stringify(data)
            })


            if (request.ok) {
                reset(value)
                console.log("requete reusssie")
            }

        } catch (e) {
            return e
        }
    }  

    

    function handleInputImage (e) {
        setValue({
            ...value,
            image : e.target.value
        })
    }

    function handleInputTitle (e) {
        setValue({
            ...value,
            title : e.target.value
        })
    }

    function handleInputGategory (e) {
        setValue({
            ...value,
            category : e.target.value
        })
    }

    function handleInputContent(e) {
        setValue({
            ...value,
            content : e.target.value
        })
    }

    function handleInputAuthor (e) {
        setValue({
            ...value,
            author : e.target.value
        })
    }

    
    
    return (
        <div className='container mt-5'>
            <form 
                className={`${styles.Admin}`}
                onSubmit={ handleSubmit(postArticle ) }
            >
                <div className="mb-3">
                    <label htmlFor="img" className="form-label">Image de l'article</label>
                    <input type="text" 
                        {...register("articleImg")}
                        onChange={handleInputImage}
                     />
                     { errors.articleImg && <span className="error">{
                            errors.articleImg.message}
                    </span> }
                    
                </div>
                <div className="mb-3">
                    <label htmlFor="img" className="form-label">Titre de l'article</label>
                    <input type="text"  id='img'
                        {...register("articleTitle")}
                        onChange={handleInputTitle}
                     />
                     { errors.articleTitle && <span className="error">{
                            errors.articleTitle.message}
                    </span> }
                     
                </div>
                <div className="mb-3">
                    <label htmlFor="categorie" className="form-label">Catégorie de l'article</label>
                    <input type="text"  id='categorie'
                        {...register("articleGategory")}
                        onChange={handleInputGategory}
                     />
                     { errors.articleGategory && <span className="error">{
                            errors.articleGategory.message}
                    </span> }
                     
                </div>
                <div className="mb-3">
                    <label htmlFor="content" className="form-label"> Contenu de l'article</label>
                    <input type="text"  id='content'
                        {...register("articleContent") }
                        onChange={handleInputContent}
                    />
                    
                </div>
                <div className="mb-3">
                    <label htmlFor="author" className="form-label">Autheur de l'article</label>
                    <input type="text" className='form-control' id='author'
                        {...register("articleAuthor")}
                        onChange={handleInputAuthor}
                     />
                     { errors.articleAuthor && <span className="error">{
                            errors.articleAuthor.message}
                    </span> }
                </div>
                <button className="w-100" type='submit'
                    disabled={isValidating}
                >
                    Publier
                </button>
            </form>
        </div>
    );
};

export default Admin;