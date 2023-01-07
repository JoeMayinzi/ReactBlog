import React from 'react';
import { useNavigate } from 'react-router-dom';
import Categories from '../article/categories/Categories';

function CategoryFilter(props) {
    const navigate = useNavigate()

    function handleChangeSelect (e) {
        navigate(`/SingleCategory/${e}`)
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