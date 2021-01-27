import React from 'react';
import {Link} from 'react-router-dom';

function Nav() {
    

    return (
        <div className = "nav-bar">
            <h2 id="sitename">HealthMe</h2>
            <ul className="nav-links">

                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to ="/viewrecipes">
                    <li>View Recipes</li>
                </Link>
                <Link to="/signin">
                    <li>Sign in</li>
                </Link>

                <Link to="/signup">
                    <li>Sign up</li>
                </Link>

            </ul>
        </div>
    )
}

export default Nav;