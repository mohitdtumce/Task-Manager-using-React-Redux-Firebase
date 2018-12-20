import React from 'react'
import * as priority from "../constants";

export default function TaskDetails(props) {
    const id = props.match.params.id;
    console.log(id)
    return (
        <div className="container section task-details">
            <div className="card z-depth-1">
                <div className="card-content">
                    <span className="card-title">Task Title - {id}</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="card-action grey lighten-4">
                    <p className="grey-text">Priority: <strong>{priority.PRIORITY_HIGH}</strong></p>
                    <p className="grey-text">Posted on: <i>Dec 20, 2018</i></p>
                </div>
            </div>
        </div>
    )
}
