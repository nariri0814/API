import React from 'react';
import { Link } from 'react-router-dom'

function Navigation() {
    return (
        <div className="nav">
            <Link to="/">Home</Link>
            <Link to={{
                pathname: "/about",
                // state: {
                //     navi: true
                // }
            }}>About</Link>
            {/* <Link to="/album">Album</Link> */}
        </div>

    );
}

export default Navigation;