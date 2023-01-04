import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Categories from '../article/categories/Categories';
import ApiUrlContext from '../context/ApiUrlContext';

function CategoryFilter(props) {
    const [articles, setArticles] = useState([]);
    const navigate = useNavigate()


    /*useEffect(()=> {
        const fetchData = async () => {
            try {
                const request = await fetch("https://restapi.fr/api/mesarticles");
                const datas = await request.json()
                const newDatas = datas
                
                if (request.ok) {
                    setArticles(newDatas)
                    console.log(newDatas)
                }
            } catch (e) {
                console.log("error occured", e)
            }
        }

        fetchData()
    }, [])*/

    function handleChangeSelect (e) {
        console.log(e)
    }
    
    return (
        <select onChange={e=> handleChangeSelect(e.target.value)}>
                <option value="" disabled selected>Categories</option>
                    {Categories.map(category => <option value={category.categoryName}>
                        {category.categoryName}
                </option> )}

        </select>
    );
}

export default CategoryFilter;