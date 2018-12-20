import React from "react";
import { Link } from "react-router-dom";
import SignedInUser from "./SignedInUser";
import SignedOutUser from "./SignedOutUser";

const Navbar = () => {
    return (
        <nav>
            <div className="nav-wrapper grey darken-3">
                <div className="container">
                    <Link to="/" className="brand-logo">Task Manager</Link>
                    <ul className="right hide-on-med-and-down">
                        <li><SignedOutUser/></li>
                        <li><SignedInUser/></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;