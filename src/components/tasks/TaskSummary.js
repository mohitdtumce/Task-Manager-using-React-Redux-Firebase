import React from "react";
import * as priority from "../../constants";
const TaskSummary = ({task}) => {
    return (
        <div className="card z-depth-1 task-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{task.title}</span>
                <p className="grey-text">Priority: <strong>{priority.PRIORITY_HIGH}</strong></p>
                <p className="grey-text">Posted on: <i>Dec 20, 2018</i></p>
            </div>
        </div>
    );
}

export default TaskSummary;