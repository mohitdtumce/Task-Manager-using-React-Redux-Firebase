import React from "react";
import { NavLink } from "react-router-dom";

const SignedInUser = () => {
    return (
        <ul className="right">
            <li><NavLink to="/create">Create New</NavLink></li>
            <li><NavLink to="/">Log Out</NavLink></li>
            <li><NavLink to="/" className="btn btn-floating orange lighten-1">MS</NavLink></li>
        </ul>
    );
}

export default SignedInUser;