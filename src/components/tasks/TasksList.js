import React from "react";

// Import Sub-components
import TaskSummary from "./TaskSummary";

const TasksList = () => {
    return (
        <div className="task-list section">
            <TaskSummary />
            <TaskSummary />
            <TaskSummary />
            <TaskSummary />
        </div>
    );
}

export default TasksList;