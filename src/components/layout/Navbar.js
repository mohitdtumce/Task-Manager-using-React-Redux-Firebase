import React from "react";
import { Link } from "react-router-dom";
import SignedInUser from "./SignedInUser";
import SignOutUser from "./SignedOutUser";

const Navbar = () => {
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to="/" className="brand-logo">Task Manager</Link>
                <SignedInUser />
                <SignOutUser />
            </div>
        </nav>
    );
}

export default Navbar;