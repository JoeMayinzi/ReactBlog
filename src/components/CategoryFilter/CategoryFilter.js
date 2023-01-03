import React from 'react';
import Categories from '../article/categories/Categories';

function CategoryFilter(props) {
    
    return (
        <select>
            <option value="" disabled selected>Categories</option>
            {
               Categories.map(category => <option value={category.categoryName}>
                    { category.categoryName }
               </option> ) 
            }
        </select>
    );
}

export default CategoryFilter;