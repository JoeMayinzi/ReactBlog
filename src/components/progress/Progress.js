import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

function Progress(props) {
    const [progress, setProgress] = useState(0);
    const lastScroll = document.body.offsetHeight-window.innerHeight;

    useEffect(()=> {
        document.addEventListener("scroll", ()=> {
            const scrollValue = window.scrollY;
            setProgress(scrollValue)
        })

    }, [lastScroll])
    return (
        <div>
            <progress className='fixed-top' id="file" value={progress} max={lastScroll}>
            </progress>
        </div>
    );
}

export default Progress;