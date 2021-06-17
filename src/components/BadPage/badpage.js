import React from 'react'
import {useLocation, Link} from "react-router-dom";

function BadPage(){
    let location = useLocation();
        return(
            <div>
                <h3>
                    No Match For <code>{location.pathname}</code>
                </h3>
                <Link to= "/">
                    Return To Home
                </Link>
            </div>
        );
}

export default BadPage