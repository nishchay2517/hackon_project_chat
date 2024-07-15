import React from 'react';

import Style from "./Loader.module.css"
const Loader = () => {
    return (
        <div className={Style.Loader}> 
            <div className={Style.Loader_Box}>
                <img src='' alt='loader' width={100} height={100}></img>

            </div>
        </div>
    );
}

export default Loader;
