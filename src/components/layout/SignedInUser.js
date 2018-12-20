import React from "react";
import { NavLink } from "react-router-dom";

const SignedInUser = () => {
    return (
        <ul className="right">
            <li><NavLink to="/">Create New</NavLink></li>
            <li><NavLink to="/">Sign Out</NavLink></li>
            <li><NavLink to="/" className="btn btn-floating green lighten-1">MS</NavLink></li>
        </ul>
    );
}

export default SignedInUser;