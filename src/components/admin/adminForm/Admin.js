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
    
    async function postArticle (data) {
        try {

            const request = await fetch("https://restapi.fr/api/mesarticles", {
                method : "POST",
                headers : {
                    "Content-Type" : "application/json"
                },

                body : JSON.stringify(data)
            })

            if (request.ok) {
                console.log("requete reusssie")
            }

        } catch (e) {
            return e
        }
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
                     />
                     { errors.articleImg && <span className="errors">{
                            errors.articleImg.message}
                    </span> }
                    
                </div>
                <div className="mb-3">
                    <label htmlFor="img" className="form-label">Titre de l'article</label>
                    <input type="text"  id='img'
                        {...register("articleTitle")}
                     />
                     { errors.articleTitle && <span className="error">{
                            errors.articleTitle.message}
                    </span> }
                     
                </div>
                <div className="mb-3">
                    <label htmlFor="categorie" className="form-label">Catégorie de l'article</label>
                    <input type="text"  id='categorie'
                        {...register("articleGategory")}
                     />
                     { errors.articleGategory && <span className="errors">{
                            errors.articleGategory.message}
                    </span> }
                     
                </div>
                <div className="mb-3">
                    <label htmlFor="content" className="form-label"> Contenu de l'article</label>
                    <input type="text"  id='content'
                        {...register("articleContent") }
                    />
                    
                </div>
                <div className="mb-3">
                    <label htmlFor="author" className="form-label">Autheur de l'article</label>
                    <input type="text" className='form-control' id='author'
                        {...register("articleAuthor")}
                     />
                     { errors.articleAuthor && <span className="errors">{
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