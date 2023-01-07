import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useFetchData } from '../../hooks/useFetchData';

function Test(props) {
    const datas = useFetchData("https://restapi.fr/api/mesarticles");
    const inputRef = useRef();

    useEffect(()=> {
        inputRef.current.focus()
    })
    
    return (
        <div>
            <h1>Testing component</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ipsum similique, ex ad nostrum accusamus voluptatem porro eum culpa distinctio, illum sequi facere! Molestias illum doloremque perspiciatis alias, nemo corporis?
            </p>
            <input type="text" ref={inputRef} />
        </div>
    );
}

export default Test;