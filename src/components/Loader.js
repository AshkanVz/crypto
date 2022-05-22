import React from 'react';

//gifs
import spinner from '../gifs/spinner.gif';
const Loader = () => {
    return (
        <div>
            <img src={spinner} alt="loader" />
        </div>
    );
};

export default Loader;