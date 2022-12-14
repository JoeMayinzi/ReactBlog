import React from 'react';
import Articles from '../articles/Articles';
import Search from '../Search/Search';


const HomePage = () => {
    return (
        <div>
            <Search></Search>
            <Articles />
        </div>
    );
};



export default HomePage;