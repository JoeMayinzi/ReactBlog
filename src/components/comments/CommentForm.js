import React from 'react';
import { useForm } from 'react-hook-form';
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from 'react';

function CommentForm(props) {
    const [comment, setComment] = useState([])

    const defaultValues = {
        name : "",
        email : "",
        comment : "",
    }

    const schema = yup.object({
        name : yup
                .string()
                .required("Veillez entrer un nom"),
        email : yup
                .string()
                .email("Veillez entrer un email valide"),
        comment : yup.string().required("Le champ commentaire est obligatoire")
    })

    const {register, reset, handleSubmit, formState : { errors, isSubmitting} } = useForm({
        defaultValues,
        resolver : yupResolver(schema)
    });

    const postComment = async (datas) => {
        const request = await fetch("https://restapi.fr/api/comments", {
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(datas)
        })

        if (request.ok) {
            console.log('Commentaire posté');
            reset(defaultValues)
        }
    }
    

    return (
        <div>
            <form className='mt-3 mt-5'
                onSubmit={handleSubmit(postComment) }
            >
                <h3>Laissez un commentaire</h3>
                <div class="grid">
                <label for="firstname">
                    Nom
                    <input type="text" {...register("name")} />
                     {
                        errors.name && <span className='errors'>{errors.name.message}</span>
                     }
                </label>

                <label for="lastname">
                    Email
                    <input type="email" {...register("email")} />
                    {
                        errors.email && <span className='errors'>{errors.email.message}</span>
                     }
                </label>

                </div>
                <label for="text">Votre commentaire</label>
                <textarea  {...register("comment")}></textarea>
                {
                    errors.comment && <span className='errors'>{errors.comment.message}</span>
                }
                <button type="submit" disabled={isSubmitting} className='mt-3'>Envoyer</button>

            </form>
        </div>
    );
}

export default CommentForm;